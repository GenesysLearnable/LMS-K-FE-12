import { useState, useEffect } from "react";
import FormBg from "../../assets/SignupBg.png";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import Logo from "../../assets/Kidera.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import "./Signup.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rings } from "react-loader-spinner";

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const anyEmptyField = Object.values(userData).some((field) => field === "");
    setIsDisabled(anyEmptyField);
  }, [userData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    if (
      userData.email !== "" &&
      userData.password !== "" &&
      userData.confirmPassword !== ""
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (userData.password !== userData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
      console.log("Password doesn't match");
    } else {
      setErrorMessage("");
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://lms-k-be-12.onrender.com/api/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          toast.success("Account created successfully!");
          setTimeout(() => {
            window.location.href = "/signin";
          }, 5000);
        } else {
          toast.error(data.message + " Sign in instead");
        }
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        theme="light"
      />
      {isLoading && (
        <div className="overlay">
          <Rings
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            secondaryColor="#4fa94d"
            strokeWidth={3}
            strokeWidthSecondary={2}
          />
        </div>
      )}
      <section className="signup">
        <div className="left">
          <Link to="/">
            <img className="arrow-left" src={ArrowLeft} alt="left arrow" />
          </Link>
          <div className="logo-container">
            <img className="logo" src={Logo} alt="kidera logo" />
          </div>
        </div>
        <div className="right">
          <div className="signup--form-title">
            <h3>Sign Up</h3>
            <div>
              <p>Unlock exciting adventures!</p>
              <p>Sign up today</p>
            </div>
          </div>

          <div className="form--container">
            <form onSubmit={signUp}>
              <FormInput
                for="email"
                type="email"
                value={userData.email}
                name="email"
                id="email"
                placeholder="example@gmail.com"
                title="Email Address"
                onChange={handleChange}
              />

              <FormInput
                for="password"
                type="password"
                value={userData.password}
                name="password"
                id="password"
                placeholder="***********"
                title="Password"
                onChange={handleChange}
                error={errorMessage}
              />

              <FormInput
                for="confirmPassword"
                type="password"
                value={userData.confirmPassword}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="***********"
                title="Confirm Password"
                onChange={handleChange}
                error={errorMessage}
              />

              <FormButton text="Sign Up" disabled={isDisabled} />
            </form>

            <div>
              <div className="signup--extras">
                <div id="inputPreview" className="terms--container">
                  <input type="checkbox" name="" id="" />
                  <p className="terms">
                    By signing up you agree with our{" "}
                    <span className="terms-text">terms and conditions</span>
                  </p>
                </div>
              </div>
              <div className="form-footer">
                <h3 style={{ color: "#6C6B6B" }}>
                  Already have an account?{" "}
                  <Link to="/signin">
                    <span className="signin-text">Sign in</span>
                  </Link>
                </h3>
                <p className="alt-signup">Or sign up with</p>
                <div className="social-signin">
                  <div className="google">
                    <img src={GoogleIcon} alt="google icon" />
                    <p>Google</p>
                  </div>
                  <div className="facebook">
                    <img src={FacebookIcon} alt="google icon" />
                    <p>Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FormInput = (props) => {
  return (
    <>
      <div className="signup--form-input">
        <label htmlFor={props.for}>{props.title}</label>
        <input
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required
        />
        <p className="signup-error">{props.error}</p>
      </div>
    </>
  );
};

const FormButton = (props) => {
  return (
    <>
      <div className="signup-btn--container">
        <button
          disabled={props.disabled}
          className={`signup-btn ${!props.disabled ? "active" : ""}`}
          type="submit"
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export { SignUp, FormInput, FormButton };
