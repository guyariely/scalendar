import React from "react";
import { useUser } from "./context/user";
import { useResetBrowserHistory } from "./hooks";
import { ProtectedRouter, PublicRouter } from "./routes";

function App() {
  const user = useUser();

  useResetBrowserHistory([user]);

  return user ? <ProtectedRouter /> : <PublicRouter />;
}

export default App;
