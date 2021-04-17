import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import "./Ticket.scss";

const Ticket = ({ ticket, deleteTicket }) => {
  const { id, tag, description, theme } = ticket;

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TICKET,
      id: id,
      description: description,
      tag: tag,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const ticketStyle = {
    backgroundColor: `var(--color-${theme}-background)`,
    color: `var(--color-${theme}-text)`,
  };

  const deleteButtonStyle = {
    color: `var(--color-${theme}-text)`,
  };

  return (
    <div
      className={"ticket " + theme + (isDragging ? " selected" : "")}
      style={ticketStyle}
      ref={drag}
    >
      <p className="description">{description}</p>
      <button
        className="delete-button"
        onClick={() => deleteTicket(id)}
        style={deleteButtonStyle}
      >
        ✕
      </button>
    </div>
  );
};

export default Ticket;
