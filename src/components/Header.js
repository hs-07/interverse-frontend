import React, { useState, useEffect } from "react";
import "../styles/header.css";
import { useLocation } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

function Header() {
  const { pathname } = useLocation();
  const [userData, setUserData] = useState();
  useEffect(() => {
    let data = localStorage.getItem("userdata");
    console.log("data:::::::", JSON.parse(data));
    setUserData(JSON.parse(data));
  }, []);

  return (
    <div>
      <div className="header">
        <b className="page-name">
          {pathname == "/"
            ? "Leaderboards"
            : pathname.slice(1).toLocaleUpperCase()}
        </b>
        {/* SearchBar Starts */}
        <div>
          <input className="search-bar " placeholder="Search" />
          <img className="search-icon" alt="" src="/vector.svg" />
        </div>
        {/* SearchBar Ends */}
        <div className="profile-info">
          <h4 className="user-name">{userData?.given_name}</h4>
          <img
            className="user-photo"
            alt="user-photo"
            src={userData?.picture}
          />
          <img
            onClick={async () => {
              await localStorage.clear();
              googleLogout();
              window.location.reload();
              console.log("clear");
            }}
            className="notification-icon"
            alt=""
            src="/logouticon.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
