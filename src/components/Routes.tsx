import React, { useContext, useEffect } from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Production from "../pages/Production";
import Profile from "../pages/Profile";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/user"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/production"
        element={user ? <Production /> : <Navigate to="/login" />}
      />
    </RouterRoutes>
  );
}
