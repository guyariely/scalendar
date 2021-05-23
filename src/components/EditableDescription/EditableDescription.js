import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-weight: bold;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  width: 150px;
  color: ${({ theme }) => `var(--color-${theme}-text)`};
  border: ${({ theme }) => `2px solid var(--color-${theme}-text)`};
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

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
