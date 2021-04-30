import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import Ticket from "../Ticket/Ticket";
import "./Day.scss";

const Day = props => {
  const {
    name,
    dayIndex,
    tickets,
    changeTicketTag,
    deleteTicket,
    updateDescription,
  } = props;

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: item => changeTicketTag(item.id, name),
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
            updateDescription={updateDescription}
            key={ticket.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
