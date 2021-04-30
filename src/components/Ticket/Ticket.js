import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Utils/items";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import EditableDescription from "../EditableDescription/EditableDescription";
import "./Ticket.scss";

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

  const ticketStyle = {
    backgroundColor: `var(--color-${theme}-background)`,
    color: `var(--color-${theme}-text)`,
  };

  const deleteButtonStyle = {
    color: `var(--color-${theme}-text)`,
  };

  const inputStyle = {
    color: `var(--color-${theme}-text)`,
    border: `2px solid var(--color-${theme}-text)`,
  };

  function updateDescription() {
    setIsEditMode(false);
    props.updateDescription(id, description);
  }

  return (
    <ClickOutsideWrapper
      onClickOutside={() => isEditMode && updateDescription()}
    >
      <div
        onDoubleClick={() => {
          setIsEditMode(true);
        }}
        className={"ticket " + theme + (isDragging ? " selected" : "")}
        style={ticketStyle}
        ref={drag}
      >
        <EditableDescription
          description={description}
          onChange={e => setDescription(e.target.value)}
          style={inputStyle}
          onSubmit={updateDescription}
          isEditMode={isEditMode}
        />
        <button
          className="delete-button"
          onClick={() => props.deleteTicket(id)}
          style={deleteButtonStyle}
        >
          ✕
        </button>
      </div>
    </ClickOutsideWrapper>
  );
};

export default Ticket;
