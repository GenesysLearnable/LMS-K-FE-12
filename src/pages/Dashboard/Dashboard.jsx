import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SideDash from "../DashPages/SideDash/SideDash";
import Assessments from "../DashPages/Assessments/Assessments";
import Games from "../DashPages/Games/Games";
import UserProfile from "../DashPages/Profile/Profile";
import Rewards from "../DashPages/Rewards/Rewards";
import Settings from "../DashPages/Settings/Settings.jsx";
import Subjects from "../DashPages/Subjects/Subjects";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dash--main">
        <Sidebar />
        <div className="ml-64 p-6 flex-1 test-main">
          <Routes>
            <Route path="/" element={<SideDash />} />
            <Route path="assessments" element={<Assessments />} />
            <Route path="games" element={<Games />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="rewards" element={<Rewards />} />
            <Route path="settings" element={<Settings />} />
            <Route path="subjects" element={<Subjects />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
