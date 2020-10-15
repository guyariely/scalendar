import React, { useState } from 'react';

const ToolBar = ({addNewTicket, clearTickets}) => {

  const [newTicketInput, setNewTicketInput] = useState("");

  const sendInput = newTicketInput => {
    if (newTicketInput) {
      setNewTicketInput("");
    addNewTicket(newTicketInput);
    }
  }

  return (
    <div className="toolbar">
      <div className="newTicketBox">
        <input 
          type="text" 
          value={newTicketInput} 
          onChange={e => setNewTicketInput(e.target.value)} 
          placeholder="Add new ticket ..."
        />
        <button 
          className="newTicketButton"
          onClick={() => sendInput(newTicketInput)}
        >
          +
        </button>
      </div>
      <button 
        className="clearTicketsButton"
        onClick={() => clearTickets()}
      >
        🗑
      </button>
    </div>
  );
};

export default ToolBar;