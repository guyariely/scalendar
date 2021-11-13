import React, { useState, useContext } from "react";
import ClickOutsideWrapper from "react-click-outside-wrapper";
import EditableDescription from "../editable-description";
import { StyledTicket, Container, MainContainer, DeleteButton } from "./style";
import { Draggable } from "react-beautiful-dnd";
import CalendarContext from "../../../context/CalendarContext";
import Tags from "../tags";

function Ticket(props) {
  const { id, theme, tags } = props.ticket;

  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(props.ticket.description);

  const { updateDescription, deleteTicket } = useContext(CalendarContext);

  function onSubmitEditableDescription() {
    setIsEditMode(false);
    updateDescription(id, description);
  }

  return (
    <ClickOutsideWrapper
      onClickOutside={() => isEditMode && onSubmitEditableDescription()}
    >
      <Draggable draggableId={id} index={props.ticketIndex}>
        {(provided, snapshot) => (
          <StyledTicket
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditMode(true)}
          >
            <Container isDragging={snapshot.isDragging} theme={theme}>
              <MainContainer>
                <EditableDescription
                  description={description}
                  onChange={e => setDescription(e.target.value)}
                  onSubmit={onSubmitEditableDescription}
                  isEditMode={isEditMode}
                  theme={theme}
                />
                <DeleteButton
                  onClick={() => deleteTicket(props.column, id)}
                  theme={theme}
                >
                  ✕
                </DeleteButton>
              </MainContainer>
              {Object.keys(tags).length > 0 && (
                <Tags theme={theme} tags={tags} />
              )}
            </Container>
            {provided.placeholder}
          </StyledTicket>
        )}
      </Draggable>
    </ClickOutsideWrapper>
  );
}

export default Ticket;
