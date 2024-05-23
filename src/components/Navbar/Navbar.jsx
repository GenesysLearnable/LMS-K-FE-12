import { useState, useEffect } from "react";
import kidera from "../../assets/Kidera.svg";
import Avatar from "../../assets/avatar.png";
import Bell from "../../assets/bell.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useGlobalContext } from "../../context/appContext";

export default function Navbar() {
  const { activeNavItem, setActiveNavItem } = useGlobalContext();
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();

  const toggleActiveLink = (link) => {
    setActiveNavItem(link);
  };

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn === "true"); // Convert the string to a boolean
    } else {
      setIsLoggedIn(storedIsLoggedIn === "false");
    }
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <div className="left-section">
            <img src={kidera} alt="" />
          </div>
        </Link>
        <div className="right-section">
          <ul className="nav-list">
            <Link to="/">
              <li
                className={`nav-list-item ${
                  activeNavItem === "home" ? "nav-active" : ""
                }`}
                onClick={() => toggleActiveLink("home")}
              >
                Home
              </li>
            </Link>
            {/* <Link to="/dashboard">
              <li
                className={`nav-list-item ${
                  activeNavItem === "dashboard" ? "nav-active" : ""
                }`}
                onClick={() => toggleActiveLink("dashboard")}
              >
                Dashboard
              </li>
            </Link> */}
            <Link to="/about">
              <li
                className={`nav-list-item ${
                  activeNavItem === "about" ? "nav-active" : ""
                }`}
                onClick={() => toggleActiveLink("about")}
              >
                About
              </li>
            </Link>
            {/* <Link to="/courses">
              <li
                className={`nav-list-item ${
                  activeNavItem === "courses" ? "nav-active" : ""
                }`}
                onClick={() => toggleActiveLink("courses")}
              >
                Courses
              </li>
            </Link> */}
          </ul>
          <Link to="/signUp">
            <button
              className={`nav-button ${
                isLoggedIn === true ? "nav--button-display" : ""
              }`}
            >
              Sign Up
            </button>
          </Link>

          <div
            className={`user--logged-in ${
              isLoggedIn === false ? "user--notify-hidden" : ""
            }`}
          >
            <div className="nav--notify">
              <img src={Bell} alt="" />
              <p>2</p>
            </div>
            <div className="nav--user">
              <div className="nav--user-container">
                <img src={Avatar} alt="" />
              </div>
              <p className="user--name">Chujac</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
