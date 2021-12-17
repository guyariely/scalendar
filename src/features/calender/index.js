import React from "react";
import Day from "./day";
import { StyledCalendar } from "./style";
import { DAYS } from "./consts";

function Calender({ tickets, columns }) {
  return (
    <StyledCalendar>
      {DAYS.map(columnId => {
        const { id, name, ticketIds } = columns[columnId];
        const columnTickets = ticketIds.map(id => tickets[id]);

        return (
          <Day key={id} name={name} dayIndex={id} tickets={columnTickets} />
        );
      })}
      <div></div>
    </StyledCalendar>
  );
}

export default Calender;
