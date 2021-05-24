import React from "react";
import { useTheme } from "../../hooks/hooks";
import NewTicketForm from "../NewTicketForm/NewTicketForm";
import { StyledToolbar, ToggleThemeButton, ClearTicketsButton } from "./style";

const ToolBar = ({ addNewTicket, clearTickets }) => {
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
};

export default ToolBar;
