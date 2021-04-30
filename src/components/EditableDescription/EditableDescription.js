import React from "react";
import "./EditableDescription.scss";

function EditableDescription(props) {
  const { description, onChange, onSubmit, isEditMode, style } = props;

  if (isEditMode) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          className="editable-description-input"
          type="text"
          value={description}
          onChange={onChange}
          style={style}
        />
      </form>
    );
  }

  return <p className="description">{description}</p>;
}

export default EditableDescription;
