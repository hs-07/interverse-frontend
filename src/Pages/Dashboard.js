import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RouterData from "../Routes";
import Sidenav from "../components/SideNav";
import "../styles/dashboard.css";
function Dashboard() {
  return (
    <div className="main-div ">
      <div className="Container">
        <div
          className=""
          style={{
            width: "15%",
            height: "100vh",
          }}
        >
          <Sidenav />
        </div>
        <div
          className=""
          style={{
            width: "85%",
            height: "100vh",
          }}
        >
          <Header />
          <RouterData />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
