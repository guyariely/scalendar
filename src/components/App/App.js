import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calender from "../Calender/Calender";
import ToolBar from "../ToolBar/ToolBar";
import { useTickets } from "../../hooks/hooks";
import { DragDropContext } from "react-beautiful-dnd";
import { StyledApp, Container, Main } from "./style";

const App = () => {
  const {
    tickets,
    columns,
    deleteTicket,
    addNewTicket,
    clearTickets,
    updateDescription,
  } = useTickets();

  return (
    <StyledApp>
      <DragDropContext onDragEnd={() => console.log("drag end")}>
        <Container>
          <Sidebar
            tickets={tickets}
            columns={columns}
            deleteTicket={deleteTicket}
            updateDescription={updateDescription}
          />
          <Main>
            <ToolBar addNewTicket={addNewTicket} clearTickets={clearTickets} />
            <Calender
              tickets={tickets}
              columns={columns}
              deleteTicket={deleteTicket}
              updateDescription={updateDescription}
            />
          </Main>
        </Container>
      </DragDropContext>
    </StyledApp>
  );
};

export default App;
