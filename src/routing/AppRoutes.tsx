import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../page/HomePage";
import Login from "../auth/Login";
import Signup from "../auth/SignUp";
import MasterLayout from "../components/layouts/MasterLayout";
import Contact from "../page/contact";

const AppRoutes = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            token ? (
              <Navigate to="/contacts" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<MasterLayout />}>
            <Route path="/contacts" element={<Contact />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
