import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
