import React from "react";
import Day from "../Day/Day";
import { StyledCalendar } from "./style";

const Calender = props => {
  const { tickets, changeTicketTag, deleteTicket, updateDescription } = props;
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <StyledCalendar>
      {dayNames.map((name, index) => {
        return (
          <Day
            key={name}
            name={name}
            dayIndex={index}
            tickets={tickets.filter(ticket => ticket.tag === name)}
            changeTicketTag={changeTicketTag}
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
