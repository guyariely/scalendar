import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import Ticket from "../Ticket/Ticket";
import "./Day.scss";

const Day = ({ name, dayIndex, tickets, changeTicketTag, deleteTicket }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: (item, monitor) => changeTicketTag(item.id, name),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const isActiveDay = () => {
    return new Date().getDay() === dayIndex;
  };

  return (
    <div className="day" ref={drop}>
      <h1 className={isActiveDay() ? "day-name-active" : "day-name"}>{name}</h1>
      <div className={isOver ? "day-background selected" : "day-background"}>
        {tickets.map(ticket => (
          <Ticket
            ticket={ticket}
            deleteTicket={deleteTicket}
            key={ticket.key}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
