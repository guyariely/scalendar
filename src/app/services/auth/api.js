import to from "await-to-js";
import * as firebase from "../../firebase";
import * as userApi from "../user-api";

const authApi = {
  async signIn(email, password) {
    return await firebase.auth.signInWithEmailAndPassword(email, password);
  },
  async signUp(email, password) {
    const [error, userCredential] = await to(
      firebase.auth.createUserWithEmailAndPassword(email, password)
    );

    if (error) throw new Error(error);

    return await userApi.createUser(userCredential.user.uid);
  },
  signOut() {
    firebase.auth.signOut();
  },
  onAuthStateChanged() {
    return firebase.auth.onAuthStateChanged;
  },
};

export default authApi;
