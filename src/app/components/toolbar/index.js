import React, { useContext } from "react";
import CalendarContext from "../../../context/CalendarContext";
import { useTheme } from "../../../hooks";
import NewTicketForm from "../new-ticket-form";
import { StyledToolbar, ToggleThemeButton, ClearTicketsButton } from "./style";

function ToolBar() {
  const { addNewTicket, clearTickets } = useContext(CalendarContext);
  const toggleTheme = useTheme();

  return (
    <StyledToolbar>
      <NewTicketForm addNewTicket={addNewTicket} />
      <ToggleThemeButton onClick={() => toggleTheme()}>
        <span role="img" aria-label="toggle-theme">
          🌓
        </span>
      </ToggleThemeButton>
      <ClearTicketsButton onClick={() => clearTickets()}>
        <span role="img" aria-label="toggle-theme">
          🗑
        </span>
      </ClearTicketsButton>
    </StyledToolbar>
  );
}

export default ToolBar;
