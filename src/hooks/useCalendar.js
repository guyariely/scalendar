import { useEffect, useState } from "react";
import initialData from "../initalData";
import { randomColor, moveElement } from "../Utils/utils";
import uniqid from "uniqid";

function useCalendar() {
  const [tickets, setTickets] = useState(initialData.tickets);
  const [columns, setColumns] = useState(initialData.columns);

  useEffect(() => {
    const storedTickets = localStorage.getItem("tickets");
    const storedColumns = localStorage.getItem("columns");

    if (storedTickets && storedColumns) {
      setTickets(JSON.parse(storedTickets));
      setColumns(JSON.parse(storedColumns));
    } else {
      localStorage.setItem("tickets", JSON.stringify(initialData.tickets));
      localStorage.setItem("columns", JSON.stringify(initialData.columns));
    }
  }, []);

  useEffect(() => {
    persistTicketsToStorage(tickets);
  }, [tickets]);

  useEffect(() => {
    persistColumnsToStorage(columns);
  }, [columns]);

  const addNewTicket = newTicketInput => {
    const newId = uniqid();

    setTickets(tickets => ({
      ...tickets,
      [newId]: {
        id: newId,
        description: newTicketInput,
        theme: randomColor(),
      },
    }));
    setColumns(columns => {
      columns[0].ticketIds.push(newId);
      return columns;
    });
  };

  const deleteTicket = (columnId, ticketId) => {
    setTickets(tickets => {
      const newTickets = Object.assign({}, tickets);
      delete newTickets[ticketId];
      return newTickets;
    });

    setColumns(columns => {
      const column = columns[columnId];
      return {
        ...columns,
        [columnId]: {
          ...column,
          ticketIds: column.ticketIds.filter(id => id !== ticketId),
        },
      };
    });
  };

  const moveTicket = (ticketId, source, destination) => {
    if (!destination) return;

    const fromColumnId = source.droppableId;
    const toColumnId = destination.droppableId;
    const fromIndex = source.index;
    const toIndex = destination.index;

    if (fromColumnId === toColumnId && fromIndex === toIndex) {
      return;
    }

    setColumns(columns => {
      const fromColumn = columns[fromColumnId];
      const toColumn = columns[toColumnId];

      if (fromColumnId === toColumnId) {
        const updatedTicketIds = moveElement(
          fromColumn.ticketIds,
          fromIndex,
          toIndex
        );

        return {
          ...columns,
          [toColumnId]: {
            ...toColumn,
            ticketIds: updatedTicketIds,
          },
        };
      }

      const fromColumnsTicketIds = Array.from(fromColumn.ticketIds);
      fromColumnsTicketIds.splice(fromIndex, 1);
      const toColumnsTicketIds = Array.from(toColumn.ticketIds);
      toColumnsTicketIds.splice(toIndex, 0, ticketId);

      return {
        ...columns,
        [fromColumnId]: {
          ...fromColumn,
          ticketIds: fromColumnsTicketIds,
        },
        [toColumnId]: {
          ...toColumn,
          ticketIds: toColumnsTicketIds,
        },
      };
    });
  };

  const updateDescription = (id, description) => {
    setTickets(tickets => ({
      ...tickets,
      [id]: {
        ...tickets[id],
        description,
      },
    }));
  };

  const clearTickets = () => {
    setTickets({});
    setColumns(columns => {
      const clearedColumns = {};
      Object.entries(columns).forEach(([columnId, column]) => {
        clearedColumns[columnId] = {
          ...column,
          ticketIds: [],
        };
      });
      return clearedColumns;
    });
  };

  const persistTicketsToStorage = tickets => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  };

  const persistColumnsToStorage = columns => {
    localStorage.setItem("columns", JSON.stringify(columns));
  };

  return {
    tickets,
    columns,
    deleteTicket,
    addNewTicket,
    moveTicket,
    clearTickets,
    updateDescription,
  };
}

export { useCalendar };
