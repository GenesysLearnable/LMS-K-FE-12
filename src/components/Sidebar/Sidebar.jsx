// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashAvatar from "../../assets/dash_Avatar.png";
import Award from "../../assets/award.svg";
import Game from "../../assets/game.svg";
import Graduation from "../../assets/graduation.svg";
import LogoutIcon from "../../assets/logout.svg";
import People from "../../assets/people.svg";
import Profile from "../../assets/profile.svg";
import Setting from "../../assets/setting.svg";
import Status from "../../assets/status.svg";
import { useGlobalContext } from "../../context/appContext";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const { setActiveNavItem } = useGlobalContext();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
  };

  return (
    <div className="sidebar--container">
      <div className="dash--avatar">
        <div className="dash--image-container">
          <img src={DashAvatar} alt="User Avatar" />
        </div>
        <p className="dash--user-name">Chujac Kingsley</p>
      </div>

      <ul className="dash--link-container">
        <Link to="/dashboard">
          <li
            className={`dash--links ${
              location.pathname === "/dashboard" ? "sidenav--active" : ""
            }`}
          >
            <img src={Status} alt="Dashboard" />
            Dashboard
          </li>
        </Link>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/profile" ? "sidenav--active" : ""
          }`}
        >
          <Link to="/dashboard/profile">
            <img src={Profile} alt="Profile" />
            My Profile
          </Link>
        </li>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/subjects" ? "sidenav--active" : ""
          }`}
        >
          <Link to="/dashboard/subjects">
            <img src={Graduation} alt="Subjects" />
            Subjects
          </Link>
        </li>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/assessments"
              ? "sidenav--active"
              : ""
          }`}
        >
          <Link to="/dashboard/assessments">
            <img src={People} alt="Assessments" />
            Assessments
          </Link>
        </li>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/rewards" ? "sidenav--active" : ""
          }`}
        >
          <Link to="/dashboard/rewards">
            <img src={Award} alt="Rewards" />
            Rewards
          </Link>
        </li>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/games" ? "sidenav--active" : ""
          }`}
        >
          <Link to="/dashboard/games">
            <img src={Game} alt="Games" />
            Games
          </Link>
        </li>
        <li
          className={`dash--links ${
            location.pathname === "/dashboard/settings" ? "sidenav--active" : ""
          }`}
        >
          <Link to="/dashboard/settings">
            <img src={Setting} alt="Settings" />
            Settings
          </Link>
        </li>
        <li className="dash--links" onClick={handleLogout}>
          <img src={LogoutIcon} alt="Logout" />
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
