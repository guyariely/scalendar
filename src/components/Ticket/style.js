import styled from "styled-components";

export const StyledTicket = styled.div`
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 20px;
  word-break: break-word;
  background-color: ${({ theme }) => `var(--color-${theme}-background)`};
  color: ${({ theme }) => `var(--color-${theme}-text)`};
  transform: ${({ isDragging }) => (isDragging ? "scale(0.9)" : "")};
  transition: transform 60ms ease-in-out;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  margin-top: 2px;
  padding-left: 10px;
  color: ${({ theme }) => `var(--color-${theme}-text)`};
`;
