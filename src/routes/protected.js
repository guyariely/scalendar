import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages";

function ProtectedRouter() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default ProtectedRouter;
