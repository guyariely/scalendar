import React from "react";
import Dock from "../../components/dock";
import Calender from "../../components/calender";
import ToolBar from "../../components/toolbar";
import { DragDropContext } from "react-beautiful-dnd";
import { StyledApp, Container, Main } from "./style";
import { useCalendar, useUpdateColumns } from "../../hooks/api";
import { moveElement } from "../../utils";

function HomePage() {
  const { tickets, columns, isLoading, error } = useCalendar();
  const updateColumns = useUpdateColumns();

  function handleDragEnd({ destination, source, draggableId: ticketId }) {
    if (!destination) return;

    const fromColumnId = source.droppableId;
    const toColumnId = destination.droppableId;
    const fromIndex = source.index;
    const toIndex = destination.index;

    if (fromColumnId === toColumnId && fromIndex === toIndex) {
      return;
    }

    const fromColumn = columns[fromColumnId];
    const toColumn = columns[toColumnId];

    if (fromColumnId === toColumnId) {
      const updatedTicketIds = moveElement(
        fromColumn.ticketIds,
        fromIndex,
        toIndex
      );

      updateColumns.mutate({
        updates: {
          [toColumnId]: {
            ...toColumn,
            ticketIds: updatedTicketIds,
          },
        },
      });

      return;
    }

    const fromColumnsTicketIds = Array.from(fromColumn.ticketIds);
    fromColumnsTicketIds.splice(fromIndex, 1);
    const toColumnsTicketIds = Array.from(toColumn.ticketIds);
    toColumnsTicketIds.splice(toIndex, 0, ticketId);

    updateColumns.mutate({
      updates: {
        [fromColumnId]: {
          ...fromColumn,
          ticketIds: fromColumnsTicketIds,
        },
        [toColumnId]: {
          ...toColumn,
          ticketIds: toColumnsTicketIds,
        },
      },
    });
  }

  if (isLoading) {
    return <p>loading calendar...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  return (
    <StyledApp>
      <DragDropContext onDragEnd={e => handleDragEnd(e)}>
        <Container>
          <Dock tickets={tickets} columns={columns} />
          <Main>
            <ToolBar />
            <Calender tickets={tickets} columns={columns} />
          </Main>
        </Container>
      </DragDropContext>
    </StyledApp>
  );
}

export default HomePage;
