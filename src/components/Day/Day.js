import React from "react";
import Ticket from "../Ticket/Ticket";
import { StyledDay, Title, Container } from "./style";
import { Droppable } from "react-beautiful-dnd";

const Day = props => {
  const { name, dayIndex, tickets, deleteTicket, updateDescription } = props;

  const isActiveDay = new Date().getDay() === dayIndex;

  return (
    <StyledDay>
      <Title active={isActiveDay}>{name}</Title>
      <Droppable droppableId={dayIndex}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isOver={snapshot.isDraggingOver}
          >
            {tickets.map((ticket, index) => (
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
    </StyledDay>
  );
};

export default Day;
