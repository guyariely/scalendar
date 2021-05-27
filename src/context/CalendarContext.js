import React, { createContext } from "react";
import { useCalendar } from "../hooks/hooks";

const CalendarContext = createContext();

export function CalendarProvider({ children }) {
  const calendar = useCalendar();

  return (
    <CalendarContext.Provider value={calendar}>
      {children}
    </CalendarContext.Provider>
  );
}

export default CalendarContext;
