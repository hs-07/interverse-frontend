import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  let tok = localStorage.getItem("token");

  useEffect(() => {
    setToken(tok);
  }, []);

  if (tok == null) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
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
