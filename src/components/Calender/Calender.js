import React from "react";
import Day from "../Day/Day";
import { StyledCalendar } from "./style";

const Calender = props => {
  const { tickets, columns, deleteTicket, updateDescription } = props;

  return (
    <StyledCalendar>
      {["1", "2", "3"].map(columnId => {
        const { id, name, ticketIds } = columns[columnId];
        const columnTickets = ticketIds.map(id => tickets[id]);

        return (
          <Day
            key={id}
            name={name}
            dayIndex={id}
            tickets={columnTickets}
            deleteTicket={deleteTicket}
            updateDescription={updateDescription}
          />
        );
      })}
      <div></div>
    </StyledCalendar>
  );
};

export default Calender;
