import styled from "styled-components";

export const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  padding: 0 10px;
`;

export const StyledTag = styled.div`
  background: ${({ theme }) => `var(--color-${theme}-text)`};
  color: ${({ theme }) => `var(--color-${theme}-background)`};
  padding: 5px 10px;
  border-radius: 15px;
  margin: 2px;
  font-size: 11px;
  font-weight: bold;
`;

export const TagContent = styled.p``;
