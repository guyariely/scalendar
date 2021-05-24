import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import Ticket from "../Ticket/Ticket";
import { StyledDay, Title, Container } from "./style";

const Day = props => {
  const {
    name,
    dayIndex,
    tickets,
    changeTicketTag,
    deleteTicket,
    updateDescription,
  } = props;

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TICKET,
    drop: item => changeTicketTag(item.id, name),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const isActiveDay = new Date().getDay() === dayIndex;

  return (
    <StyledDay ref={drop}>
      <Title active={isActiveDay}>{name}</Title>
      <Container isOver={isOver}>
        {tickets.map(ticket => (
          <Ticket
            ticket={ticket}
            deleteTicket={deleteTicket}
            updateDescription={updateDescription}
            key={ticket.id}
          />
        ))}
      </Container>
    </StyledDay>
  );
};

export default Day;
