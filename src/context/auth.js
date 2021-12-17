import * as React from "react";
import { auth } from ".firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ErrorMessage, LoadingIndicator } from "components";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <ErrorMessage error={error}>
      <LoadingIndicator loading={loading} text="loading your account">
        <AuthContext.Provider value={{ data: { user } }} {...props} />
      </LoadingIndicator>
    </ErrorMessage>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
