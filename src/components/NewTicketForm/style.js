import styled from "styled-components";

export const Form = styled.form`
  display: flex;
`;

export const Input = styled.input`
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
