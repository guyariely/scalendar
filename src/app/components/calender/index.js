import React, { useContext } from "react";
import CalendarContext from "../../../context/CalendarContext";
import Day from "../day";
import { StyledCalendar } from "./style";

function Calender() {
  const { tickets, columns } = useContext(CalendarContext);

  const days = new Array(7).fill(0).map((_, index) => index + 1);

  return (
    <StyledCalendar>
      {days.map(columnId => {
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
