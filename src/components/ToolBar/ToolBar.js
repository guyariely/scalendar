import React, { useState } from "react";
import { useTheme } from "../../hooks/hooks";
import "./ToolBar.scss";

const ToolBar = ({ addNewTicket, clearTickets }) => {
  const [newTicketInput, setNewTicketInput] = useState("");
  const toggleTheme = useTheme("light");

  const sendInput = newTicketInput => {
    if (newTicketInput) {
      setNewTicketInput("");
      addNewTicket(newTicketInput);
    }
  };

  return (
    <div className="toolbar">
      <div className="new-ticket-wrapper">
        <input
          type="text"
          value={newTicketInput}
          onChange={e => setNewTicketInput(e.target.value)}
          placeholder="Add new ticket ..."
          className="new-ticket-input"
        />
        <button
          className="new-ticket-button"
          onClick={() => sendInput(newTicketInput)}
        >
          +
        </button>
      </div>
      <button className="toggle-theme-button" onClick={() => toggleTheme()}>
        🌓
      </button>
      <button className="clear-tickets-button" onClick={() => clearTickets()}>
        🗑
      </button>
    </div>
  );
};

export default ToolBar;
