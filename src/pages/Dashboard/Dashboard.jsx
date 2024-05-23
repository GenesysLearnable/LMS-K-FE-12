import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import DashAvatar from "../../assets/dash_Avatar.png";
import { useGlobalContext } from "../../context/appContext";
import Award from "../../assets/award.svg";
import Game from "../../assets/game.svg";
import Graduation from "../../assets/graduation.svg";
import LogoutIcon from "../../assets/logout.svg";
import People from "../../assets/people.svg";
import Profile from "../../assets/profile.svg";
import Setting from "../../assets/setting.svg";
import Status from "../../assets/status.svg";
import "./Dashboard.css";
import Assessments from "../DashPages/Assessments/Assessments";
import SideDash from "../DashPages/SideDash/SideDash";
import Games from "../DashPages/Games/Games";
import UserProfile from "../DashPages/Profile/Profile";
import Rewards from "../DashPages/Rewards/Rewards";
import Settings from "../Settings/Settings";
import Subjects from "../DashPages/Subjects/Subjects";

const Dashboard = () => {
  const { isLoggedIn, setIsLoggedIn } = useGlobalContext();
  const [selectedContent, setSelectedContent] = useState("dashboard");

  const RenderContent = (content) => {
    setSelectedContent(content);
  };

  return (
    <>
      <section>
        <Navbar />

        <div className="dash--main">
          <Sidebar
            RenderContent={RenderContent}
            selectedContent={selectedContent}
          />
          <MainContent selectedContent={selectedContent} />
        </div>
      </section>
    </>
  );
};

const Sidebar = ({ RenderContent, selectedContent }) => {
  const Logout = () => {
    // setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "false");
    console.log(localStorage);
  };

  return (
    <>
      <div className="sidebar--container">
        {/* <div className="dash--avatar">
          <div className="dash--image-container">
            <img src={DashAvatar} alt="" />
          </div>
          <p className="dash--user-name">Chujac Kingsley</p>
        </div> */}

        <ul className="dash--link-container">
          <li
            className={`dash--links ${
              selectedContent === "dashboard" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("dashboard")}
          >
            <img src={Status} alt="" />
            Dashboard
          </li>

          <li
            className={`dash--links ${
              selectedContent === "profile" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("profile")}
          >
            <img src={Profile} alt="" />
            My Profile
          </li>

          <li
            className={`dash--links ${
              selectedContent === "subjects" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("subjects")}
          >
            <img src={Graduation} alt="" />
            Subjects
          </li>

          <li
            className={`dash--links ${
              selectedContent === "assessments" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("assessments")}
          >
            <img src={People} alt="" />
            Assessments
          </li>

          <li
            className={`dash--links ${
              selectedContent === "rewards" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("rewards")}
          >
            <img src={Award} alt="" />
            Rewards
          </li>

          <li
            className={`dash--links ${
              selectedContent === "games" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("games")}
          >
            <img src={Game} alt="" />
            Games
          </li>

          <li
            className={`dash--links ${
              selectedContent === "settings" ? "sidenav--active" : ""
            }`}
            onClick={() => RenderContent("settings")}
          >
            <img src={Setting} alt="" />
            Settings
          </li>

          <li className="dash--links logout" onClick={Logout}>
            <img src={LogoutIcon} alt="" />
            Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

const MainContent = ({ selectedContent }) => {
  return (
    <>
      <div className="main-content">
        {selectedContent === "dashboard" && <SideDash />}
        {selectedContent === "assessments" && <Assessments />}
        {selectedContent === "games" && <Games />}
        {selectedContent === "profile" && <UserProfile />}
        {selectedContent === "rewards" && <Rewards />}
        {selectedContent === "settings" && <Settings />}
        {selectedContent === "subjects" && <Subjects />}
      </div>
    </>
  );
};

export default Dashboard;
