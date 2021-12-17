import React from "react";
import { StyledInput } from "./style";

function Input({ value, onChange, onChangeText, ...restProps }) {
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={e => {
        onChange && onChange(e);
        onChangeText && onChangeText(e.target.value);
      }}
      {...restProps}
    />
  );
}

export default Input;
