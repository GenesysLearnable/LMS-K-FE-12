import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { SignUp } from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import { useGlobalContext } from "./context/appContext";

const App = () => {
  const location = useLocation();
  const { setActiveNavItem } = useGlobalContext();

  useEffect(() => {
    if (location.pathname === "/") setActiveNavItem("home");
    else if (location.pathname.startsWith("/dashboard"))
      setActiveNavItem("dashboard");
    else if (location.pathname === "/about") setActiveNavItem("about");
  }, [location, setActiveNavItem]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
