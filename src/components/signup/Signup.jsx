import FormBg from "../../assets/signupBg.png";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import Logo from "../../assets/Kidera.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import "./Signup.css";

const SignUp = () => {
  return (
    <>
      <section className="signup">
        <div className="left">
          <img className="arrow-left" src={ArrowLeft} alt="left arrow" />
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

              <FormInput
                for="confirmPassword"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="***********"
                title="Confirm Password"
              />

              <FormButton text="Sign Up" />
            </form>

            <div>
              <div className="terms--container">
                <input type="checkbox" name="" id="" />
                <p className="terms">
                  By signing up you agree with our{" "}
                  <span className="terms-text">terms and conditions</span>
                </p>
              </div>
              <div className="form-footer">
                <h3 style={{ color: "#6C6B6B" }}>
                  Already have an account?{" "}
                  <span className="signin-text">Sign in</span>
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
        />
      </div>
    </>
  );
};

const FormButton = (props) => {
  return (
    <>
      <div className="signup-btn--container">
        <button className="signup-btn">{props.text}</button>
      </div>
    </>
  );
};

export default SignUp;
