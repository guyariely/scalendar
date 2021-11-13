import React, { useContext } from "react";
import CalendarContext from "../../../context/CalendarContext";
import { useTheme } from "../../../hooks";
import NewTicketForm from "../new-ticket-form";
import { StyledToolbar, ToggleThemeButton, Button } from "./style";
import { signOut } from "../../../services/auth-api";

function ToolBar() {
  const { addNewTicket, clearTickets } = useContext(CalendarContext);
  const toggleTheme = useTheme();

  return (
    <StyledToolbar>
      <NewTicketForm addNewTicket={addNewTicket} />
      <ToggleThemeButton onClick={toggleTheme}>
        <span role="img" aria-label="toggle-theme">
          🌓
        </span>
      </ToggleThemeButton>
      <Button onClick={clearTickets}>
        <span role="img" aria-label="toggle-theme">
          🗑
        </span>
      </Button>
      <Button onClick={signOut}>
        <span role="img" aria-label="sign-out">
          🚪
        </span>
      </Button>
    </StyledToolbar>
  );
}

export default ToolBar;
