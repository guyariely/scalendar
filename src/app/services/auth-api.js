import to from "await-to-js";
import * as firebase from "../firebase";
import * as userApi from "./user-api";

export async function signIn(email, password) {
  return await firebase.auth.signInWithEmailAndPassword(email, password);
}

export async function signUp(email, password) {
  const [error, userCredential] = await to(
    firebase.auth.createUserWithEmailAndPassword(email, password)
  );

  if (error) throw new Error(error);

  return await userApi.createUser(userCredential.user.uid);
}

export function signOut() {
  firebase.auth.signOut();
}

export function onAuthStateChanged() {
  return firebase.auth.onAuthStateChanged;
}
