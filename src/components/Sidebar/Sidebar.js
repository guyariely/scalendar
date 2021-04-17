import React from "react";
import Ticket from "../Ticket/Ticket";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import "./Sidebar.scss";

const Sidebar = ({ tickets, changeTicketTag, deleteTicket }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: (item, monitor) => changeTicketTag(item.id, "QUE"),
  });

  return (
    <aside className="sidebar" ref={drop}>
      <h1 className="logo">Scalendar</h1>
      {tickets.map(ticket => {
        return ticket.tag === "QUE" ? (
          <Ticket ticket={ticket} deleteTicket={deleteTicket} key={ticket.id} />
        ) : null;
      })}
    </aside>
  );
};

export default Sidebar;
