import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import EditableDescription from "../EditableDescription/EditableDescription";
import { StyledTicket, DeleteButton } from "./style";

const Ticket = props => {
  const { id, tag, theme } = props.ticket;

  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState(props.ticket.description);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TICKET,
      id: id,
      description: props.ticket.description,
      tag: tag,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: () => !isEditMode,
  });

  function updateDescription() {
    setIsEditMode(false);
    props.updateDescription(id, description);
  }

  return (
    <ClickOutsideWrapper
      onClickOutside={() => isEditMode && updateDescription()}
    >
      <StyledTicket
        onDoubleClick={() => setIsEditMode(true)}
        isDragging={isDragging}
        theme={theme}
        ref={drag}
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
      </StyledTicket>
    </ClickOutsideWrapper>
  );
};

export default Ticket;
