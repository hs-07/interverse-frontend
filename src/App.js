import React from "react";
import "./App.css";
import Login from "./Pages/Login";
import LandingPage from "./Pages/New-LandingPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/navbar/navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
