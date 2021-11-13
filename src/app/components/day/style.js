import styled from "styled-components";

export const StyledDay = styled.div`
  margin: 0 15px;
  display: grid;
  grid-template-rows: 40px auto;
`;

export const Title = styled.h1`
  color: ${({ active }) =>
    active ? "var(--color-text)" : "var(--color-light-text)"};
`;

export const Container = styled.div`
  padding-top: 33px;
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    ${({ isOver }) =>
        isOver
          ? "var(--color-background-secondary)"
          : "var(--color-background)"}
      96%,
    var(--color-stripes) 5%
  );
  background-size: 100% 35px;
`;
