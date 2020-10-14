import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Calender from './Calender';
import ToolBar from './ToolBar';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {

  const [tickets, setTickets] = useState([
    {
      description: "Free Day - Youtube, Games, Movies, Articles, Books",
      id: 122453,
      tag: 'QUE',
      theme: 'green'
    },
    {
      description: "Architecture - Wikipedia, Articles, Videos",
      id: 232352,
      tag: 'QUE',
      theme: 'orange'
    },
    {
      description: "Free Day - Youtube, Games, Movies, Articles, Books",
      id: 98439,
      tag: 'TUE',
      theme: 'red'
    },
    {
      description: "Architecture - Wikipedia, Articles, Videos",
      id: 345895722,
      tag: 'WED',
      theme: 'blue'
    }
  ]);

  const changeTicketTag = (id, newTag) => {
    const ticket = tickets.find(ticket => ticket.id == id);
    ticket.tag = newTag;
    setTickets(tickets.filter(ticket => ticket.id != id).concat(ticket));
  };

  const deleteTicket = id => {
    setTickets(tickets.filter(ticket => ticket.id != id));
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
            <ToolBar />
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