import React, { useContext } from "react";
import { Route, Routes as RouterRoutes } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Production from "../pages/Production";

export default function Routes() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/production"
        element={<>{user ? <Production /> : <Login />}</>}
      />
    </RouterRoutes>
  );
}
