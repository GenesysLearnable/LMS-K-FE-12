import { Button, BtnFull } from "../../components/Button/Button";
import Cancel from "../../assets/x.svg";
import "./ForgotPassword.css";
import { useGlobalContext } from "../../context/appContext";

const ForgotPassword = () => {
  const { forgotPassActive, setForgotPassActive } = useGlobalContext();

  const toggleForgotPassword = () => {
    setForgotPassActive(false);
    console.log("clc forgot pass = false");
  };

  return (
    <>
      <div className={`${forgotPassActive === false ? "modal-hide" : ""}`}>
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

              <BtnFull content="Recover Password" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
