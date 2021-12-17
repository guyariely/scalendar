import * as React from "react";
import * as firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoadingIndicator } from "../components";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, loading, error] = useAuthState(firebase.auth);

  if (error) {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  return (
    <LoadingIndicator loading={loading} text="loading your account">
      <AuthContext.Provider value={{ data: { user } }} {...props} />
    </LoadingIndicator>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
