import { useRunQuery } from "hooks";
import authApi from "./api";

export function useSignUp(email, password) {
  const { run, ...queryResult } = useRunQuery("sign-up", () =>
    authApi.signUp(email, password)
  );

  return {
    signUp: run,
    ...queryResult,
  };
}

export function useSignIn(email, password) {
  const { run, ...queryResult } = useRunQuery("sign-in", () =>
    authApi.signIn(email, password)
  );

  return {
    signIn: run,
    ...queryResult,
  };
}
