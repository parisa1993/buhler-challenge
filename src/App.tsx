import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import { User } from "./models/User";

function App() {
  const user: User = {
    userId: 10,
    username: "operator",
  };

  return (
    <AuthContext.Provider value={{ user }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
