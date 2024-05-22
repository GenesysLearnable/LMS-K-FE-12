import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { SignUp } from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useGlobalContext } from "./context/appContext";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";

const App = () => {
  const location = useLocation();
  const { activeNavItem, setActiveNavItem } = useGlobalContext();

  useEffect(() => {
    // Manipulates Nav ActiveState
    location.pathname === "/" && setActiveNavItem("home");
    location.pathname === "/dashboard" && setActiveNavItem("dashboard");
    location.pathname === "/about" && setActiveNavItem("about");
    location.pathname === "/courses" && setActiveNavItem("courses");
    // Ends..
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
