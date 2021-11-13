import * as React from "react";
import { useQuery } from "react-query";

const AuthContext = React.createContext();

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const getUser = () =>
  sleep(1000).then(() => ({
    user: "elmo",
  }));

function AuthProvider(props) {
  /* check if user is already logged in */

  const { isLoading, error, data } = useQuery("authData", getUser);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  const login = () => {}; // make a login request
  const register = () => {}; // register the user
  const logout = () => {}; // clear the token in localStorage and the user data

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
