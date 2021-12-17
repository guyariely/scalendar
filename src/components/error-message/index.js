/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { StyledError, StyledMessage, Container, Icon } from "./style";

function ErrorMessage({ error = null, children }) {
  return error ? (
    <Container>
      <StyledError>
        <Icon>⚠️</Icon>
        <StyledMessage>{error.message}</StyledMessage>
      </StyledError>
    </Container>
  ) : (
    children
  );
}

export default ErrorMessage;
