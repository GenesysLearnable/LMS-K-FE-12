import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import SignUp from "./pages/signup/Signup";
import SignIn from "./pages/Signin/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/siginIn" element={<SignIn/>}/>
    </Routes>
  );
};

export default App;
