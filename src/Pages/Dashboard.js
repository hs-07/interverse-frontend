import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RouterData from "../Routes";
import Sidenav from "../components/SideNav";
import "../styles/dashboard.css";
function Dashboard() {
  return (
    <div className="main-div">
      <Sidenav />
      <Header />
      <RouterData />
    </div>
  );
}

export default Dashboard;
