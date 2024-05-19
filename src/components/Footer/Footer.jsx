import styles from "./Footer.module.css";
import kideraLogo from "../../assets/logo.png";
import facebookIcon from "../../assets/facebook.png";
import xIcon from "../../assets/x.png";
import instaIcon from "../../assets/Insta.png";
import linkedinIcon from "../../assets/linkedin.png";
import appStoreIcon from "../../assets/appstore.png";
import googlePlayIcon from "../../assets/googleplay.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.kideraSection}>
        <Link to="/">
          <img src={kideraLogo} alt="Kidera logo" />
        </Link>

        <div className={styles.icons}>
          <a href="">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="">
            <img src={xIcon} alt="X" />
          </a>
          <a href="">
            <img src={instaIcon} alt="Instagram" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </section>

      <section className={styles.appstore}>
        <a href="">
          <img className={styles.app} src={appStoreIcon} alt="App Store" />
        </a>
        <a href="">
          <img
            className={styles.google}
            src={googlePlayIcon}
            alt="Google Play"
          />
        </a>
      </section>

      <section className={styles["right-section"]}>
        <section className={styles.link}>
          <div className={styles.usefulLinks}>
            <h5 className={styles.smallheader}>Useful links</h5>
            <ul>
              <li>Our Projects</li>
              <li>FAQs</li>
              <li>News and updates</li>
            </ul>
          </div>

          <div className={styles.company}>
            <h5 className={styles.smallheader}>Company</h5>
            <ul>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <li>Blog</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h5 className={styles.smallheader}>Contact</h5>
            <p>Hello@Kidera</p>
          </div>
        </section>

        <section className={styles.terms}>
          <p className={styles.termsOfService}>Terms of Service</p>
          <p className={styles.privacyPolicy}>Privacy Policy</p>
        </section>
      </section>
    </footer>
  );
}
