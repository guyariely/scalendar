import React from "react";
import { useTheme, useInput } from "../../hooks/hooks";
import "./ToolBar.scss";

const ToolBar = ({ addNewTicket, clearTickets }) => {
  const { input, onChangeInput, onSubmitInput } = useInput("");
  const toggleTheme = useTheme("light");

  return (
    <div className="toolbar">
      <div className="new-ticket-wrapper">
        <input
          type="text"
          value={input}
          onChange={onChangeInput}
          placeholder="Add new ticket ..."
          className="new-ticket-input"
        />
        <button
          className="new-ticket-button"
          onClick={() => onSubmitInput(addNewTicket)}
          disabled={!input}
        >
          +
        </button>
      </div>
      <button className="toggle-theme-button" onClick={() => toggleTheme()}>
        <span role="img" aria-label="toggle-theme">
          🌓
        </span>
      </button>
      <button className="clear-tickets-button" onClick={() => clearTickets()}>
        <span role="img" aria-label="toggle-theme">
          🗑
        </span>
      </button>
    </div>
  );
};

export default ToolBar;
