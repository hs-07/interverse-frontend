import React from "react";
import "../styles/sidenav.css";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo1.png";
function Sidenav() {
  return (
    <div>
      <div className="container-div">
        {/* Head Text in sideNav Starts */}
        <div className="app-logo-div">
          <div className="app-logo-inner-div">
            <img className="fixed-image" alt="" src={logo} />
          </div>
        </div>
        {/* Head Text in sideNav Ends */}

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxtwotonepeople.svg" />
          <p> Leaderboards</p>
        </NavLink>

        <NavLink
          to="/Summaries"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxtwotonefirstline.svg" />
          <p>Summaries</p>
        </NavLink>
        <NavLink
          to="/Predictions"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxboldarrow3.svg" />

          <p>Predictions</p>
        </NavLink>
        <NavLink
          to="/Markets"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxtwotoneactivity.svg" />

          <p>Markets</p>
        </NavLink>
        <NavLink
          to="/Profiles"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxtwotoneprofile.svg" />
          <p>Profiles</p>
        </NavLink>
        <NavLink
          to="/MyChannels"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          <img alt="" src="/vuesaxtwotonenotificationcircle.svg" />

          <p> My Channels</p>
        </NavLink>
        <div className="divider-div" />
        <div className="setting-div">
          <img
            className="setting-photo"
            alt=""
            src="/vuesaxtwotonesetting2.svg"
          />
          <p className="setting-text">Settings</p>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
