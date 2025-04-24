import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../page/HomePage";
import Login from "../auth/Login";
import Signup from "../auth/SignUp";

const AppRoutes = () => {
  const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
