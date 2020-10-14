import React, { useState } from 'react';
import Ticket from './Ticket';

import { useDrop } from 'react-dnd';
import { ItemTypes } from '../Utils/items';

const Sidebar = ({tickets, changeTicketTag, deleteTicket}) => {

  const [{isOver}, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: (item, monitor) => changeTicketTag(item.id, "QUE"),
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });


  return (
    <aside ref={drop}>
      { 
        tickets.map(ticket => {
          return (
            ticket.tag == 'QUE' ? 
            <Ticket ticket={ticket} deleteTicket={deleteTicket} /> : 
            null
        )})
      }
    </aside>
  );
};

export default Sidebar;