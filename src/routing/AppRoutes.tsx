import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import HomePage from "../page/HomePage";
import Login from "../auth/Login";
import Signup from "../auth/SignUp";
import MasterLayout from "../components/layouts/MasterLayout";
import Contact from "../page/contact";

const AppRoutes = () => {
  const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<MasterLayout />}>
            <Route path="/dashboard" element={<HomePage />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
