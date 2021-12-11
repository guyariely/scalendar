import { useMutation, useQuery, useQueryClient } from "react-query";
import { CLEARED_COLUMNS } from "../../consts/initial-data";
import { useUser } from "../../context/user";
import * as calendarApi from "../../services/calendar-api";
import { filterKeys } from "../../utils/objects";

// TODO:
// 2. better objects utils

const calendarKeys = {
  all: "calendar",
};

export function useCalendar() {
  const user = useUser();

  const { data: calendar = {}, ...queryResult } = useQuery(
    calendarKeys.all,
    () => calendarApi.getCalendar(user.uid)
  );

  const { tickets, columns } = calendar;

  return { tickets, columns, ...queryResult };
}

function useOptimisticUpdate(config) {
  const queryClient = useQueryClient();

  const { key } = typeof config === "function" ? config({}) : config;

  return useMutation(
    mutationArgs => {
      const _mutationArgs =
        typeof config === "function" ? config(mutationArgs) : config;
      _mutationArgs.mutation();
    },
    {
      onMutate: async mutationArgs => {
        await queryClient.cancelQueries(key);
        const previousValue = queryClient.getQueryData(key);

        const _mutationArgs =
          typeof config === "function" ? config(mutationArgs) : config;

        queryClient.setQueryData(key, currentValue =>
          _mutationArgs.optimisticUpdate(currentValue)
        );

        return previousValue;
      },
      onError: (err, _, previousValue) => {
        console.error(err);
        queryClient.setQueryData(key, previousValue);
      },
      onSettled: () => {
        queryClient.invalidateQueries(key);
      },
    }
  );
}

export const useAddTicket = () => {
  const user = useUser();

  return useOptimisticUpdate(({ ticket, column }) => ({
    key: calendarKeys.all,
    mutation: () => calendarApi.addTicket(user.uid, ticket, column),
    optimisticUpdate: ({ tickets, columns }) => ({
      tickets: {
        ...tickets,
        [ticket.id]: ticket,
      },
      columns: {
        ...columns,
        [column]: {
          ...columns[column],
          ticketIds: [...columns[column].ticketIds, ticket.id],
        },
      },
    }),
  }));
};

export const useClearTickets = () => {
  const user = useUser();

  return useOptimisticUpdate({
    key: calendarKeys.all,
    mutation: () => calendarApi.clearTickets(user.uid),
    optimisticUpdate: () => ({
      tickets: {},
      columns: CLEARED_COLUMNS,
    }),
  });
};

export const useUpdateTicket = () => {
  const user = useUser();

  return useOptimisticUpdate(({ ticketId, updates }) => ({
    key: calendarKeys.all,
    mutation: () => calendarApi.updateTicket(user.uid, ticketId, updates),
    optimisticUpdate: ({ tickets, columns }) => ({
      tickets: {
        ...tickets,
        [ticketId]: {
          ...tickets[ticketId],
          ...updates,
        },
      },
      columns,
    }),
  }));
};

export const useDeleteTicket = () => {
  const user = useUser();

  return useOptimisticUpdate(({ ticketId, columnId }) => ({
    key: calendarKeys.all,
    mutation: () => calendarApi.removeTicket(user.uid, ticketId, columnId),
    optimisticUpdate: ({ tickets, columns }) => ({
      tickets: filterKeys(tickets, ticketId),
      columns: {
        ...columns,
        [columnId]: {
          ...columns[columnId],
          ticketIds: columns[columnId].ticketIds.filter(id => id !== ticketId),
        },
      },
    }),
  }));
};

export const useUpdateColumns = () => {
  const user = useUser();

  return useOptimisticUpdate(({ updates }) => ({
    key: calendarKeys.all,
    mutation: () => calendarApi.updateColumns(user.uid, updates),
    optimisticUpdate: ({ tickets, columns }) => ({
      tickets,
      columns: {
        ...columns,
        ...updates,
      },
    }),
  }));
};
