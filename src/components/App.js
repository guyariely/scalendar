import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar';
import Calender from './Calender';
import ToolBar from './ToolBar';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { randomColor } from '../Utils/randomColor';
import uniqid from 'uniqid';

const App = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets)
      setTickets(JSON.parse(storedTickets));
  }, []);

  useEffect(() => {
    persistTicketsToStorage(tickets);
  }, [tickets]);

  const changeTicketTag = (id, newTag) => {
    const ticket = tickets.find(ticket => ticket.id === id);
    ticket.tag = newTag;
    setTickets(tickets.filter(ticket => ticket.id !== id).concat(ticket));
  };

  const deleteTicket = id => {
    setTickets(tickets.filter(ticket => ticket.id !== id));
  };

  const addNewTicket = newTicketInput => {
    setTickets(tickets.concat({
      id: uniqid(),
      tag: 'QUE',
      description: newTicketInput,
      theme: randomColor()
    }));
  };

  const clearTickets = () => {
    setTickets([]);
  }

  const persistTicketsToStorage = tickets => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="app">
        <div className="app-container">
          <Sidebar 
            tickets={tickets} 
            changeTicketTag={changeTicketTag} 
            deleteTicket={deleteTicket}
          />
          <main>
            <ToolBar 
              addNewTicket={addNewTicket} 
              clearTickets={clearTickets}
            />
            <Calender 
              tickets={tickets} 
              changeTicketTag={changeTicketTag}
              deleteTicket={deleteTicket}
            />
          </main>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;