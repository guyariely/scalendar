import React from "react";
import Ticket from "../ticket";
import { StyledDock, Logo, Container } from "./style";
import { Droppable } from "react-beautiful-dnd";

function Dock({ columns, tickets }) {
  const dockTickets = columns["0"].ticketIds.map(id => tickets[id]);

  return (
    <StyledDock>
      <Logo>Scalendar</Logo>
      <Droppable droppableId={"0"}>
        {provided => (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {dockTickets.map((ticket, index) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                ticketIndex={index}
                column={0}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </StyledDock>
  );
}

export default Dock;
