import styled from "styled-components";

export const Input = styled.input`
  font-weight: bold;
  border-radius: 5px;
  font-family: inherit;
  font-size: 16px;
  width: 150px;
  color: ${({ theme }) => `var(--color-${theme}-text)`};
  border: ${({ theme }) => `2px solid var(--color-${theme}-text)`};
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
