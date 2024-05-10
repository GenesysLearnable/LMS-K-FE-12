import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/signup/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
