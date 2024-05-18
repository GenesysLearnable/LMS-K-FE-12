import { Button, BtnFull } from "../../components/Button/Button";
import Cancel from "../../assets/x.svg";
import Checkmark from "../../assets/checkmark.svg";
import "./ForgotPassword.css";
import { useGlobalContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
  const { forgotPassActive, setForgotPassActive } = useGlobalContext();
  const { currentScreen, setCurrentScreen } = useGlobalContext();

  const toggleForgotPassword = () => {
    setForgotPassActive(!forgotPassActive);
    console.log("clc forgot pass = false");
  };

  const toggleModal = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <>
      <EnterMailModal
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
      />

      <RecoveryCode
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
      />

      <ResetPassword
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
      />

      <Success
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
      />
    </>
  );
};

const EnterMailModal = ({
  forgotPassActive,
  toggleForgotPassword,
  toggleModal,
  currentScreen,
}) => {
  return (
    <>
      <div
        className={`${
          forgotPassActive === true && currentScreen === 1
            ? "modal-display"
            : ""
        } modal-container`}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="cancel--btn">
              <img onClick={toggleForgotPassword} src={Cancel} alt="" />
            </div>
            <h3 className="pass--header">Forgot Password?</h3>
            <form action="">
              <div className="forgot-input--container">
                <label htmlFor="">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <BtnFull
                content="Recover Password"
                onClick={() => toggleModal(2)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const RecoveryCode = ({
  forgotPassActive,
  toggleForgotPassword,
  toggleModal,
  currentScreen,
}) => {
  return (
    <>
      <div
        className={`${
          forgotPassActive === true && currentScreen === 2
            ? "modal-display"
            : ""
        } modal-container`}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="cancel--btn">
              <img onClick={toggleForgotPassword} src={Cancel} alt="" />
            </div>
            <h3 className="pass--header">Forgot Password?</h3>
            <form action="">
              <div className="forgot-input--container">
                <label htmlFor="">
                  Enter the recovery code sent to your email.
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="XXXX-XXXX"
                />
              </div>

              <BtnFull content="Activate" onClick={() => toggleModal(3)} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const ResetPassword = ({
  forgotPassActive,
  toggleForgotPassword,
  toggleModal,
  currentScreen,
}) => {
  return (
    <>
      <div
        className={`${
          forgotPassActive === true && currentScreen === 3
            ? "modal-display"
            : ""
        } modal-container`}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="cancel--btn">
              <img onClick={toggleForgotPassword} src={Cancel} alt="" />
            </div>
            <h3 className="pass--header">Reset Password?</h3>
            <form action="">
              <div className="forgot-input--container">
                <label htmlFor="">Enter your new password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                />
              </div>
              <div className="forgot-input--container">
                <label htmlFor="">Confirm your new password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="********"
                />
              </div>

              <BtnFull
                content="Reset Password"
                onClick={() => toggleModal(4)}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Success = ({
  forgotPassActive,
  toggleForgotPassword,
  toggleModal,
  currentScreen,
}) => {
  return (
    <>
      <div
        className={`${
          forgotPassActive === true && currentScreen === 4
            ? "modal-display"
            : ""
        } modal-container`}
      >
        <div className="modal-overlay">
          <div className="modal">
            <div className="reset--success">
              <div className="success--message">
                <img src={Checkmark} alt="" />
                <p>Password Reset Successful</p>
              </div>
              <Link to="/signin" onClick={toggleForgotPassword}>
                <BtnFull content="Sign in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
