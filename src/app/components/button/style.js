import styled from "styled-components";
import { BUTTON_TYPE } from "./consts";

export const StyledButton = styled.button`
  ${({ type }) => {
    switch (type) {
      case BUTTON_TYPE.PRIMARY:
        return `
          background: var(--color-blue-background);
          color: var(--color-background);
          border: none;
        `;
      case BUTTON_TYPE.SECONDARY:
        return `
          background: var(--color-background);
          color: var(--color-blue-background);
          border: 3px solid var(--color-blue-background);
        `;
      default:
        return "";
    }
  }};
  font-family: var(--font-family);
  padding: 10px 36px;
  font-weight: 600;
  border-radius: 16px;
  font-size: 18px;

  transition: transform 0.2s cubic-bezier(0, 0, 0.71, 1.84);
  &:active {
    transform: scale(0.9);
  }

  &:disabled {
    opacity: 0.4;
  }
`;
