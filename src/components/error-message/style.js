import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 30px;
  box-sizing: border-box;
  padding: 16px;
`;

export const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  border-radius: 30px;

  color: var(--color-error-text);
  background-color: var(--color-error-background);
`;

export const StyledMessage = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const Icon = styled.span`
  font-size: 55px;
  filter: hue-rotate(304deg);
`;
