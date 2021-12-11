import { CLEARED_COLUMNS } from "../consts/initial-data";
import { FieldValue } from "../firebase";
import * as userApi from "../services/user-api";

export async function getCalendar(userId) {
  const user = await userApi.getUser(userId);
  return user.calendar;
}

export function addTicket(userId, ticket, column) {
  console.log({ userId, ticket, column });
  const updates = {
    [`calendar.tickets.${ticket.id}`]: ticket,
    [`calendar.columns.${column}.ticketIds`]: FieldValue.arrayUnion(ticket.id),
  };

  return userApi.updateUser(userId, updates);
}

export function removeTicket(userId, ticketId, columnId) {
  const updates = {
    [`calendar.tickets.${ticketId}`]: FieldValue.delete(),
    [`calendar.columns.${columnId}.ticketIds`]:
      FieldValue.arrayRemove(ticketId),
  };

  return userApi.updateUser(userId, updates);
}

export function updateColumns(userId, columnsUpdates) {
  const updates = {
    calendar: {
      columns: columnsUpdates,
    },
  };

  return userApi.setUser(userId, updates, { merge: true });
}

export function updateTicket(userId, ticketId, ticketUpdates) {
  const updates = {
    calendar: {
      tickets: {
        [ticketId]: ticketUpdates,
      },
    },
  };

  return userApi.setUser(userId, updates, { merge: true });
}

export function clearTickets(userId) {
  const updates = {
    "calendar.tickets": FieldValue.delete(),
    "calendar.columns": CLEARED_COLUMNS,
  };

  return userApi.updateUser(userId, updates);
}
