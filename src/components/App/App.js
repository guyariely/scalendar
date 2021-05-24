import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calender from "../Calender/Calender";
import ToolBar from "../ToolBar/ToolBar";
import { useTickets } from "../../hooks/hooks";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StyledApp, Container, Main } from "./style";

const App = () => {
  const {
    tickets,
    changeTicketTag,
    deleteTicket,
    addNewTicket,
    clearTickets,
    updateDescription,
  } = useTickets();

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledApp>
        <Container>
          <Sidebar
            tickets={tickets}
            changeTicketTag={changeTicketTag}
            deleteTicket={deleteTicket}
            updateDescription={updateDescription}
          />
          <Main>
            <ToolBar addNewTicket={addNewTicket} clearTickets={clearTickets} />
            <Calender
              tickets={tickets}
              changeTicketTag={changeTicketTag}
              deleteTicket={deleteTicket}
              updateDescription={updateDescription}
            />
          </Main>
        </Container>
      </StyledApp>
    </DndProvider>
  );
};

export default App;
