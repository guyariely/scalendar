import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 18px;
  border: none;
  background-color: var(--color-background-secondary);
  height: 50px;
  border-radius: 20px;
  width: 400px;
  padding: 0 20px;
  font-weight: bold;
  color: var(--color-text);

  &::placeholder {
    color: var(--color-light-text);
  }
`;
