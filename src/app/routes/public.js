import React from "react";
import { Routes, Route } from "react-router-dom";
import { SignInPage, SignUpPage } from "../pages";

function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default PublicRouter;
