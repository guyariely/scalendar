import styled from "styled-components";

export const StyledApp = styled.div`
  overflow: hidden;
  height: 100vh;
  background: var(--color-background);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  height: 100%;
  overflow: hidden;
`;

export const Main = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
`;
