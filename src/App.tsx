import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context/Auth";
import { User } from "./models/User";
import "./styles/style.sass";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userMock: User = {
      userId: 10,
      username: "operator",
    };
    setUser(userMock);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
