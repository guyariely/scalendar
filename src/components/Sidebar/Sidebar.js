import React, { useContext } from "react";
import Ticket from "../Ticket/Ticket";
import { StyledSidebar, Logo, Container } from "./style";
import { Droppable } from "react-beautiful-dnd";
import CalendarContext from "../../context/CalendarContext";

const Sidebar = props => {
  const { columns, tickets } = useContext(CalendarContext);
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
                column={0}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </StyledSidebar>
  );
};

export default Sidebar;
