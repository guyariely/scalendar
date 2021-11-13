import * as firebase from "../firebase";

export async function signIn(email, password) {
  return await firebase.auth.signInWithEmailAndPassword(email, password);
}

export async function signUp(email, password) {
  return await firebase.auth.createUserWithEmailAndPassword(email, password);
}

export function signOut() {
  firebase.auth.signOut();
}

export function onAuthStateChanged() {
  return firebase.auth.onAuthStateChanged;
}
