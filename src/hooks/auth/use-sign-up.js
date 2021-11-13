import { useLoadingValue } from "..";
import * as authApi from "../../services/auth-api";

export function useSignUp(email, password) {
  const [signUp, { loading, error, value }] = useLoadingValue(() =>
    authApi.signUp(email, password)
  );

  return {
    signUp,
    loading,
    error,
    data: value,
  };
}
