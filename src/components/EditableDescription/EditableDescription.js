import React from "react";
import { Input, Description } from "./style";

function EditableDescription(props) {
  const { description, onChange, onSubmit, isEditMode, theme } = props;

  if (isEditMode) {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <Input
          theme={theme}
          type="text"
          value={description}
          onChange={onChange}
        />
      </form>
    );
  }

  return <Description>{description}</Description>;
}

export default EditableDescription;
