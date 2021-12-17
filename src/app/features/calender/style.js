import styled from "styled-components";

export const StyledCalendar = styled.div`
  display: grid;
  // calender's right padding hides the .day element,
  // so ghost-element-padding acts as a 8th invisible element.
  // 7 days (270px in width) and the ghost-element-padding (25px in width)
  grid-template-columns: repeat(7, 270px) 15px;
  overflow: auto;
`;
