import React, { useState } from "react";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import EditableDescription from "../EditableDescription/EditableDescription";
import { StyledTicket, DeleteButton } from "./style";
import { Draggable } from "react-beautiful-dnd";

const Ticket = props => {
  const { id, theme } = props.ticket;

  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(props.ticket.description);

  function updateDescription() {
    setIsEditMode(false);
    props.updateDescription(id, description);
  }

  return (
    <ClickOutsideWrapper
      onClickOutside={() => isEditMode && updateDescription()}
    >
      <Draggable draggableId={id} index={props.ticketIndex}>
        {(provided, snapshot) => (
          <StyledTicket
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            onDoubleClick={() => setIsEditMode(true)}
            theme={theme}
          >
            <EditableDescription
              description={description}
              onChange={e => setDescription(e.target.value)}
              onSubmit={updateDescription}
              isEditMode={isEditMode}
              theme={theme}
            />
            <DeleteButton onClick={() => props.deleteTicket(id)} theme={theme}>
              ✕
            </DeleteButton>
            {provided.placeholder}
          </StyledTicket>
        )}
      </Draggable>
    </ClickOutsideWrapper>
  );
};

export default Ticket;
