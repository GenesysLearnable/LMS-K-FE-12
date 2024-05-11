import styles from "./Navbar.module.css";
import kidera from "../../assets/Kidera.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className={styles["header"]}>
      <nav className={styles.nav}>
        <div className={styles["left-section"]}>
          <img src={kidera} alt="" />
        </div>
        <div className={styles["right-section"]}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-list-item"]}>Home</li>
            <li className={styles["nav-list-item"]}>Dashboard</li>
            <li className={styles["nav-list-item"]}>About</li>
            <li className={styles["nav-list-item"]}>Courses</li>
          </ul>
          <Link to="/signUp">
            <button className={styles["nav-button"]}>Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
