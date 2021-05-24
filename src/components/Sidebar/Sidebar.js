import React from "react";
import Ticket from "../Ticket/Ticket";
import { StyledSidebar, Logo, Container } from "./style";
import { Droppable } from "react-beautiful-dnd";

const Sidebar = props => {
  const { columns, tickets, deleteTicket, updateDescription } = props;
  const columnTickets = columns["0"].ticketIds.map(id => tickets[id]);

  return (
    <StyledSidebar>
      <Logo>Scalendar</Logo>
      <Droppable droppableId={"0"}>
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {columnTickets.map((ticket, index) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                ticketIndex={index}
                deleteTicket={deleteTicket}
                updateDescription={updateDescription}
              />
            ))}
          </Container>
        )}
      </Droppable>
    </StyledSidebar>
  );
};

export default Sidebar;
