import styled from "styled-components";

export const StyledTicket = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  transform: translate(0, 0);
  word-break: break-word;
  opacity: ${({ isDragging }) => (isDragging ? "0" : "1")};
  background-color: ${({ theme }) => `var(--color-${theme}-background)`};
  color: ${({ theme }) => `var(--color-${theme}-text)`};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  margin-top: 5px;
  padding-left: 10px;
  color: ${({ theme }) => `var(--color-${theme}-text)`};
`;
