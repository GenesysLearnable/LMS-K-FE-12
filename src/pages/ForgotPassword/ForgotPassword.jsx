import { BtnFull } from "../../components/Button/Button";
import Cancel from "../../assets/x.svg";
import Checkmark from "../../assets/checkmark.svg";
import "./ForgotPassword.css";
import { useGlobalContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const { forgotPassActive, setForgotPassActive } = useGlobalContext();
  const { currentScreen, setCurrentScreen } = useGlobalContext();
  const [email, setEmail] = useState("");
  const [recoveryDetails, setRecoveryDetails] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const toggleForgotPassword = () => {
    setForgotPassActive(!forgotPassActive);
    setRecoveryDetails({
      otp: "",
      newPassword: "",
      confirmPassword: "",
    });

    setEmail("");
    // console.log("clc forgot pass = false");
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
        email={email}
        setEmail={setEmail}
      />

      <RecoveryCode
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
        recoveryDetails={recoveryDetails}
        setRecoveryDetails={setRecoveryDetails}
      />

      <ResetPassword
        forgotPassActive={forgotPassActive}
        toggleForgotPassword={toggleForgotPassword}
        toggleModal={toggleModal}
        currentScreen={currentScreen}
        recoveryDetails={recoveryDetails}
        setRecoveryDetails={setRecoveryDetails}
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
  email,
  setEmail,
}) => {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const forgotPassword = async (e) => {
    e.preventDefault();
    console.log("clicked");

    try {
      const response = await fetch(
        "https://lms-k-be-12.onrender.com/api/user/forget-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Recovery code was sent to your mail");
        setTimeout(() => {
          toggleModal(2);
        }, [3000]);
        console.log(response.status);
      }
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

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
                  value={email}
                  placeholder="example@gmail.com"
                  onChange={handleEmailChange}
                />
              </div>

              <BtnFull content="Recover Password" onClick={forgotPassword} />
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
  recoveryDetails,
  setRecoveryDetails,
}) => {
  const handleRecoveryCode = (e) => {
    setRecoveryDetails({
      ...recoveryDetails,
      otp: e.target.value,
    });

    console.log(recoveryDetails);
  };

  const nextModal = () => {
    toggleModal(3);
  };

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
                  value={recoveryDetails.otp}
                  placeholder="XXX-XXX"
                  onChange={handleRecoveryCode}
                />
              </div>

              <BtnFull content="Activate" onClick={nextModal} />
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
  recoveryDetails,
  setRecoveryDetails,
}) => {
  const handleResetPassword = (e) => {
    setRecoveryDetails({
      ...recoveryDetails,
      newPassword: e.target.value,
    });

    console.log(recoveryDetails);
  };

  const handleConfirmResetPassword = (e) => {
    setRecoveryDetails({
      ...recoveryDetails,
      confirmPassword: e.target.value,
    });
  };

  const passwordReset = async (e) => {
    e.preventDefault();
    console.log("clicked");

    try {
      const response = await fetch(
        "https://lms-k-be-12.onrender.com/api/user/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recoveryDetails),
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Password reset successfully");
        setTimeout(() => {
          toggleModal(4);
        }, [4000]);
        console.log(response.status);
      }
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

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
                  value={recoveryDetails.newPassword}
                  placeholder="********"
                  onChange={handleResetPassword}
                />
                <p className="match--error">Passwords don't match!</p>
              </div>
              <div className="forgot-input--container">
                <label htmlFor="">Confirm your new password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={recoveryDetails.confirmPassword}
                  placeholder="********"
                  onChange={handleConfirmResetPassword}
                />
                <p className="match--error">Passwords don't match!</p>
              </div>

              <BtnFull content="Reset Password" onClick={passwordReset} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Success = ({ forgotPassActive, toggleForgotPassword, currentScreen }) => {
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
              <BtnFull
                link="/signin"
                content="Sign in"
                onClick={toggleForgotPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
