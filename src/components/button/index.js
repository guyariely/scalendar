import React from "react";
import { BUTTON_TYPE } from "./consts";
import { StyledButton } from "./style";

function Button({ type = BUTTON_TYPE.PRIMARY, ...restProps }) {
  return <StyledButton type={type} {...restProps} />;
}

export default Button;
