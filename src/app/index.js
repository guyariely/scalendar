import React, { useContext, useEffect } from "react";
import Dock from "./components/dock";
import Calender from "./components/calender";
import ToolBar from "./components/toolbar";
import { DragDropContext } from "react-beautiful-dnd";
import { StyledApp, Container, Main } from "./style";
import CalendarContext, { CalendarProvider } from "../context/CalendarContext";
import { useUser } from "../context/user";
import UnauthenticatedApp from "./unauthenticated-app";
import { Routes, Route } from "react-router-dom";

function Layout() {
  const { moveTicket } = useContext(CalendarContext);

  function handleDragEnd({ destination, source, draggableId }) {
    moveTicket(draggableId, source, destination);
  }

  return (
    <StyledApp>
      <DragDropContext onDragEnd={e => handleDragEnd(e)}>
        <Container>
          <Dock />
          <Main>
            <ToolBar />
            <Calender />
          </Main>
        </Container>
      </DragDropContext>
    </StyledApp>
  );
}

function AuthenticatedApp() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <CalendarProvider>
            <Layout />
          </CalendarProvider>
        }
      />
    </Routes>
  );
}

function App() {
  const user = useUser();

  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, [user]);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
