import React, { useContext } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Calender from "../Calender/Calender";
import ToolBar from "../ToolBar/ToolBar";
import { DragDropContext } from "react-beautiful-dnd";
import { StyledApp, Container, Main } from "./style";
import CalendarContext, {
  CalendarProvider,
} from "../../context/CalendarContext";

const AppContainer = () => {
  const { moveTicket } = useContext(CalendarContext);

  function handleDragEnd({ destination, source, draggableId }) {
    moveTicket(draggableId, source, destination);
  }

  return (
    <StyledApp>
      <DragDropContext onDragEnd={e => handleDragEnd(e)}>
        <Container>
          <Sidebar />
          <Main>
            <ToolBar />
            <Calender />
          </Main>
        </Container>
      </DragDropContext>
    </StyledApp>
  );
};

const App = () => {
  return (
    <CalendarProvider>
      <AppContainer />
    </CalendarProvider>
  );
};

export default App;
