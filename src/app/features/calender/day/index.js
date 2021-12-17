import React from "react";
import Ticket from "../../../components/ticket";
import { StyledDay, Title, Container } from "./style";
import { Droppable } from "react-beautiful-dnd";

function Day(props) {
  const { name, dayIndex, tickets } = props;

  const isActiveDay = new Date().getDay() === Number(dayIndex - 1);

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
                column={dayIndex}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </StyledDay>
  );
}

export default Day;
