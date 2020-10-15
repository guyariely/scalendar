import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../Utils/items';

const Ticket = ({ ticket, deleteTicket }) => {

  const { id, tag, description, theme } = ticket;

  const [{isDragging}, drag] = useDrag({
    item: {
      type: ItemTypes.TICKET,
      id: id,
      description: description,
      tag: tag
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div 
      className={"ticket " + theme + (isDragging ? " selected" : "")}
      ref={drag}
    >
    <p className="description">{description}</p>
    <button 
      className="deleteButton"
      onClick={() => deleteTicket(id)}
    >
      ✕
    </button>
    </div>
  );
};

export default Ticket;