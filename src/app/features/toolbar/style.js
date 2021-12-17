import styled from "styled-components";

export const StyledToolbar = styled.div`
  display: flex;
  padding: 15px;
`;

export const Button = styled.button`
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 20px;
  font-size: 30px;
  background: none;

  &:hover {
    opacity: 0.5;
  }
`;

export const ToggleThemeButton = styled(Button)`
  margin-left: auto;
`;
