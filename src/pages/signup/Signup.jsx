// import FormBg from "../../assets/SignupBg.png";
import GoogleIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import Logo from "../../assets/Kidera.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import styles from "./Signup.module.css";

const SignUp = () => {
  return (
    <>
      <section className={styles.signup}>
        <div className={styles['left']}>
          <img className={styles['arrow-left']} src={ArrowLeft} alt="left arrow" />
          <div className={styles['logo-container']}>
            <img className={styles['logo']} src={Logo} alt="kidera logo" />
          </div>
        </div>
        <div className={styles['right']}>
          <div className={styles['signup--form-title']}>
            <h3>Sign Up</h3>
            <div>
              <p>Unlock exciting adventures!</p>
              <p>Sign up today</p>
            </div>
          </div>

          <div className={styles['form--container']}>
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
              <div className={styles['terms--container']}>
                <input type="checkbox" name="" id="" />
                <p className={styles['terms']}>
                  By signing up you agree with our{" "}
                  <span className={styles['terms-text']}>terms and conditions</span>
                </p>
              </div>
              <div className={styles['form-footer']}>
                <h3 style={{ color: "#6C6B6B" }}>
                  Already have an account?{" "}
                  <span className={styles['signin-text']}>Sign in</span>
                </h3>
                <p className={styles['alt-signup']}>Or sign up with</p>
                <div className={styles['social-signin']}>
                  <div className={styles['google']}>
                    <img src={GoogleIcon} alt="google icon" />
                    <p>Google</p>
                  </div>
                  <div className={styles['facebook']}>
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
      <div className={styles['signup--form-input']}>
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
      <div className={styles['signup-btn--container']}>
        <button className={styles['signup-btn']}>{props.text}</button>
      </div>
    </>
  );
};

export default SignUp;
