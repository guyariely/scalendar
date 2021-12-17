import { useQuery } from "react-query";
import { CLEARED_COLUMNS } from "../../consts/initial-data";
import { useUser } from "../../context/user";
import calendarApi from "./api";
import { filterKeys } from "../../utils/objects";
import { useOptimisticUpdate } from "../../hooks";

// TODO: better objects utils (specifically deep updates)

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
