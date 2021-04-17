import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calender from "../Calender/Calender";
import ToolBar from "../ToolBar/ToolBar";
import { useTickets } from "../../hooks/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.scss";

const App = () => {
  const {
    tickets,
    changeTicketTag,
    deleteTicket,
    addNewTicket,
    clearTickets,
  } = useTickets();

  return (
    <DndProvider backend={HTML5Backend}>
      <div id="app">
        <div className="app-container">
          <Sidebar
            tickets={tickets}
            changeTicketTag={changeTicketTag}
            deleteTicket={deleteTicket}
          />
          <main className="calender-toolbar-wrapper">
            <ToolBar addNewTicket={addNewTicket} clearTickets={clearTickets} />
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
};

export default App;
