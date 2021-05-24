import { useEffect, useState } from "react";
import initialData from "../initalData";
import { randomColor } from "../Utils/randomColor";
import uniqid from "uniqid";

function useTickets() {
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
      newId: {
        id: newId,
        description: newTicketInput,
        theme: randomColor(),
      },
    }));
    setColumns(columns => {
      columns.dock.tasksIds.push(newId);
      return columns;
    });
  };

  const deleteTicket = (columnId, ticketId) => {
    setTickets(tickets => {
      delete tickets[ticketId];
      return tickets;
    });

    setColumns(columns => {
      const column = columns[columnId];

      return {
        ...columns,
        columnId: {
          ...column,
          ticketId: column.ticketIds.filter(id => id !== ticketId),
        },
      };
    });
  };

  const updateDescription = (id, description) => {
    setTickets(tickets => ({
      ...tickets,
      id: {
        ...tickets[id],
        description,
      },
    }));
  };

  const clearTickets = () => {
    setTickets({});
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
    clearTickets,
    updateDescription,
  };
}

export { useTickets };
