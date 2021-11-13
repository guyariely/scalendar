import { useLoadingValue } from "..";
import * as authApi from "../../services/auth-api";

export function useSignIn(email, password) {
  const [signIn, { loading, error, value }] = useLoadingValue(() =>
    authApi.signIn(email, password)
  );

  return {
    signIn,
    loading,
    error,
    data: value,
  };
}
