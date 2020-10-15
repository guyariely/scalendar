import React from 'react';
import Day from './Day';

const Calender = ({tickets, changeTicketTag, deleteTicket}) => {

  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <div className="calender">
      {dayNames.map((name, index) => {
        return (
          <Day 
            key={name}
            name={name} 
            dayIndex={index}  
            tickets={tickets.filter(ticket => ticket.tag === name)}
            changeTicketTag={changeTicketTag}
            deleteTicket={deleteTicket}
          />
        );
      })}
    </div>
  );
};

export default Calender;