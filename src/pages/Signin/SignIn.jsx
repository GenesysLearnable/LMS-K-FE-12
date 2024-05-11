import { Link } from "react-router-dom";
import FormBg from "../../assets/SignupBg.png";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import Logo from "../../assets/Kidera.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import "../Signin/Signin.css";
import "../Signup/Signup.css";
import { FormInput } from "../Signup/Signup";
import { FormButton } from "../Signup/Signup";
import SigninBg from "../../assets/SigninBg.png";

const SignIn = () => {
  return (
    <>
      <section className="signin">
        <div className="left">
          <img className="signin-bg" src={SigninBg} alt="" />
          <Link to="/signup">
            <img className="arrow-left" src={ArrowLeft} alt="left arrow" />
          </Link>
          <div className="logo-container">
            {/* <img className="logo" src={Logo} alt="kidera logo" /> */}
          </div>
        </div>
        <div className="right">
          <div className="signup--form-title">
            <h3>Sign In</h3>
            <div>
              <p>Unlock exciting adventures!</p>
              <p>Sign in today</p>
            </div>
          </div>

          <div className="form--container">
            <form action="">
              <FormInput
                for="email"
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                title="Email Address"
              />

              <FormInput
                for="password"
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                title="Password"
              />

              <FormButton text="Sign In" />
            </form>

            <div>
              <div className="signup--extras">
                <div className="terms--container">
                  <input type="checkbox" name="" id="" />
                  <p className="terms">Remember Me</p>
                </div>
                <p className="forgot-pass">Forgot Password?</p>
              </div>
              <div className="form-footer">
                <h3 style={{ color: "#6C6B6B" }}>
                  Don't have an account?{" "}
                  <Link to="/signup">
                    <span className="signin-text">Sign up</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
