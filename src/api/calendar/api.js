import { CLEARED_COLUMNS } from "consts/initial-data";
import { FieldValue } from ".firebase";
import userApi from "../user";

const calenarApi = {
  async getCalendar(userId) {
    const user = await userApi.getUser(userId);
    return user.calendar;
  },
  addTicket(userId, ticket, column) {
    const updates = {
      [`calendar.tickets.${ticket.id}`]: ticket,
      [`calendar.columns.${column}.ticketIds`]: FieldValue.arrayUnion(
        ticket.id
      ),
    };

    return userApi.updateUser(userId, updates);
  },
  removeTicket(userId, ticketId, columnId) {
    const updates = {
      [`calendar.tickets.${ticketId}`]: FieldValue.delete(),
      [`calendar.columns.${columnId}.ticketIds`]:
        FieldValue.arrayRemove(ticketId),
    };

    return userApi.updateUser(userId, updates);
  },
  updateColumns(userId, columnsUpdates) {
    const updates = {
      calendar: {
        columns: columnsUpdates,
      },
    };

    return userApi.setUser(userId, updates, { merge: true });
  },
  updateTicket(userId, ticketId, ticketUpdates) {
    const updates = {
      calendar: {
        tickets: {
          [ticketId]: ticketUpdates,
        },
      },
    };

    return userApi.setUser(userId, updates, { merge: true });
  },
  clearTickets(userId) {
    const updates = {
      "calendar.tickets": FieldValue.delete(),
      "calendar.columns": CLEARED_COLUMNS,
    };

    return userApi.updateUser(userId, updates);
  },
};

export default calenarApi;
