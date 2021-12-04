import { firestore } from "../firebase";
import { TICKETS, COLUMNS } from "../consts/initial-data";

export async function getUser(userId) {
  const user = await firestore.collection("users").doc(userId).get();
  return user.data();
}

export function createUser(userId) {
  const newUser = {
    calendar: {
      tickets: TICKETS,
      columns: COLUMNS,
    },
  };

  return firestore.collection("users").doc(userId).set(newUser);
}

export function updateUser(userId, updates) {
  return firestore.collection("users").doc(userId).update(updates);
}

export function setUser(userId, updates, config = {}) {
  return firestore.collection("users").doc(userId).set(updates, config);
}

export function deleteUser(userId) {
  return firestore.collection("users").doc(userId).delete();
}
