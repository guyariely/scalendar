import { firestore } from "../../firebase";
import { TICKETS, COLUMNS } from "../../consts/initial-data";

const userApi = {
  async getUser(userId) {
    const user = await firestore.collection("users").doc(userId).get();
    return user.data();
  },
  createUser(userId) {
    const newUser = {
      calendar: {
        tickets: TICKETS,
        columns: COLUMNS,
      },
    };

    return firestore.collection("users").doc(userId).set(newUser);
  },
  updateUser(userId, updates) {
    return firestore.collection("users").doc(userId).update(updates);
  },
  setUser(userId, updates, config = {}) {
    return firestore.collection("users").doc(userId).set(updates, config);
  },
  deleteUser(userId) {
    return firestore.collection("users").doc(userId).delete();
  },
};

export default userApi;
