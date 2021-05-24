import React from "react";
import Day from "../Day/Day";
import { StyledCalendar } from "./style";

const Calender = props => {
  const { tickets, columns, deleteTicket, updateDescription } = props;
  const days = new Array(7).fill(0).map((_, index) => index + 1);

  return (
    <StyledCalendar>
      {days.map(columnId => {
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
