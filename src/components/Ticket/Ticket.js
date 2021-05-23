import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import EditableDescription from "../EditableDescription/EditableDescription";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  transform: translate(0, 0);
  word-break: break-word;
  opacity: ${({ isDragging }) => (isDragging ? "0" : "1")};
  background-color: ${({ theme }) => `var(--color-${theme}-background)`};
  color: ${({ theme }) => `var(--color-${theme}-text)`};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-top: 5px;
  padding-left: 10px;
  color: ${({ theme }) => `var(--color-${theme}-text)`};
`;

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
      <Container
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
      </Container>
    </ClickOutsideWrapper>
  );
};

export default Ticket;
