import to from "await-to-js";
import { auth } from ".firebase";
import userApi from "../user";

const authApi = {
  async signIn(email, password) {
    return await auth.signInWithEmailAndPassword(email, password);
  },
  async signUp(email, password) {
    const [error, userCredential] = await to(
      auth.createUserWithEmailAndPassword(email, password)
    );

    if (error) throw new Error(error);

    return await userApi.createUser(userCredential.user.uid);
  },
  signOut() {
    auth.signOut();
  },
  onAuthStateChanged() {
    return auth.onAuthStateChanged;
  },
};

export default authApi;
