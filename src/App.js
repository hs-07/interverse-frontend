import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [token, setToken] = useState("");
  let tok = localStorage.getItem("token");

  useEffect(() => {
    setToken(tok);
  }, []);

  if (tok == null) {
    return (
      <div>
        <Login />
      </div>
    );
  }
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
