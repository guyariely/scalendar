import React from "react";
import { useTheme } from "../../hooks";
import NewTicketForm from "../new-ticket-form";
import { StyledToolbar, ToggleThemeButton, Button } from "./style";
import { signOut } from "../../services/auth-api";
import { extractParams, getColumnFromParam, randomColor } from "../../utils";
import uniqid from "uniqid";
import { useAddTicket, useClearTickets } from "../../hooks/api";

function ToolBar() {
  const clearTickets = useClearTickets();
  const addTicket = useAddTicket();

  function addNewTicket(newTicketInput) {
    const [parsedInput, params] = extractParams(newTicketInput);

    const newTicket = {
      id: uniqid(),
      description: parsedInput,
      theme: randomColor(),
      tags: params,
    };

    const column = getColumnFromParam(params["day"]);

    addTicket.mutate({ ticket: newTicket, column });
  }

  const toggleTheme = useTheme();

  return (
    <StyledToolbar>
      <NewTicketForm addNewTicket={addNewTicket} />
      <ToggleThemeButton onClick={toggleTheme}>
        <span role="img" aria-label="toggle-theme">
          🌓
        </span>
      </ToggleThemeButton>
      <Button onClick={() => clearTickets.mutate()}>
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
