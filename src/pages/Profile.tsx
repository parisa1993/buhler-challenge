import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h2>welcome {user?.username}</h2>
    </div>
  );
}
