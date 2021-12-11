import React, { useEffect } from "react";
import { useUser } from "./context/user";
import { Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage, HomePage } from "./pages";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

function AuthenticatedApp() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

function App() {
  const user = useUser();

  useEffect(() => {
    window.history.replaceState(null, null, "/");
  }, [user]);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
