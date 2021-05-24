import React from "react";
import Ticket from "../Ticket/Ticket";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import { StyledSidebar, Logo } from "./style";

const Sidebar = props => {
  const { tickets, changeTicketTag, deleteTicket, updateDescription } = props;
  const [, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: item => changeTicketTag(item.id, "QUE"),
  });

  return (
    <StyledSidebar ref={drop}>
      <Logo>Scalendar</Logo>
      {tickets.map(ticket => {
        return ticket.tag === "QUE" ? (
          <Ticket
            ticket={ticket}
            deleteTicket={deleteTicket}
            updateDescription={updateDescription}
            key={ticket.id}
          />
        ) : null;
      })}
    </StyledSidebar>
  );
};

export default Sidebar;
