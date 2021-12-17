import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;

export const SubmitButton = styled.button`
  background: var(--color-background-secondary);
  border: none;
  margin: 0 10px;
  height: 50px;
  width: 50px;
  border-radius: 20px;
  font-size: 30px;
  color: var(--color-light-text);

  &:hover {
    color: var(--color-text);
  }

  &:disabled {
    color: var(--color-light-text);
  }
`;
