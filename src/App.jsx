import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import { SignUp } from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import Game from "./pages/Game/Game";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
