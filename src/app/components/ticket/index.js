import React, { useState } from "react";
import ClickOutsideWrapper from "react-click-outside-wrapper";
import EditableDescription from "./editable-description";
import Tags from "./tags";
import { StyledTicket, Container, MainContainer, DeleteButton } from "./style";
import { Draggable } from "react-beautiful-dnd";
import { useDeleteTicket, useUpdateTicket } from "../../api/calendar";

function Ticket({ ticket, ticketIndex, column }) {
  const { id, theme, tags } = ticket;

  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(ticket.description);

  const updateTicket = useUpdateTicket();
  const deleteTicket = useDeleteTicket();

  function onSubmitEditableDescription() {
    setIsEditMode(false);

    updateTicket.mutate({
      ticketId: id,
      updates: {
        description,
      },
    });
  }

  function handleDeleteTicket() {
    deleteTicket.mutate({
      ticketId: id,
      columnId: column,
    });
  }

  return (
    <ClickOutsideWrapper
      onClickOutside={() => isEditMode && onSubmitEditableDescription()}
    >
      <Draggable draggableId={id} index={ticketIndex}>
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
                <DeleteButton onClick={handleDeleteTicket} theme={theme}>
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
