import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  font-size: 18px;
  justify-content: center;
  color: var(--color-light-text);
`;

export const Bar = styled.div`
  background: var(--color-light-text);
  height: 8px;
  width: 300px;
  overflow: hidden;
  margin: 6px 0;
  border-radius: 10px;
`;

const fill = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const Progress = styled.div`
  height: 100%;
  background-color: var(--color-turquoise-text);
  animation: 180s ${fill} cubic-bezier(0.1, 0.66, 0.34, 1);
  border-radius: 10px;
`;
