import { useEffect, useState } from "react";
import { randomColor } from "../Utils/randomColor";
import uniqid from "uniqid";

function useTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = localStorage.getItem("tickets");
    if (storedTickets) setTickets(JSON.parse(storedTickets));
  }, []);

  useEffect(() => {
    persistTicketsToStorage(tickets);
  }, [tickets]);

  const changeTicketTag = (id, newTag) => {
    const ticket = tickets.find(ticket => ticket.id === id);
    ticket.tag = newTag;
    setTickets(tickets.filter(ticket => ticket.id !== id).concat(ticket));
  };

  const deleteTicket = id => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const addNewTicket = newTicketInput => {
    setTickets(
      tickets.concat({
        id: uniqid(),
        tag: "QUE",
        description: newTicketInput,
        theme: randomColor(),
      })
    );
  };

  const updateDescription = (id, description) => {
    const updatedTickets = tickets.map(ticket =>
      ticket.id === id ? { ...ticket, description } : ticket
    );
    setTickets(updatedTickets);
  };

  const clearTickets = () => {
    setTickets([]);
  };

  const persistTicketsToStorage = tickets => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  };

  return {
    tickets,
    changeTicketTag,
    deleteTicket,
    addNewTicket,
    clearTickets,
    updateDescription,
  };
}

export { useTickets };
