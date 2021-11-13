import * as React from "react";
import * as firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, loading, error] = useAuthState(firebase.auth);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error.message}</p>;
  }

  return <AuthContext.Provider value={{ data: { user } }} {...props} />;
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
