import styles from "./Games.module.css";
import Kidsinballoon from "../../../assets/KidsinBalloon.png";
import { Link } from "react-router-dom";

export default function Game() {
  return (
    <div>
      <p className={styles.hello}> Hello &#128075; &#128522;,</p>
      <div className={styles.flexsection}>
        <div className={styles.KidsinBalloon}>
          <img src={Kidsinballoon} alt="Kids in Balloon" />
        </div>
        <div className={styles.textsection}>
          <h1 className={styles.purple}>Welcome to</h1>
          <h1 className={styles.orange}>Game Center</h1>
          <p className={styles.text}>You have 0 Diamond(s)</p>
          <p className={styles.text}>Unlock more coins to access</p>
          <p>these amazing games</p>
          <Link to="/gamesII">
            <button className={styles.gameButton}>
              <span>Take a course</span>
              <span>
                <svg
                  width="25"
                  height="9"
                  viewBox="0 0 32 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2821 0.395352C23.7341 -0.0565888 24.4668 -0.0565888 24.9187 0.395352L30.7051 6.18169C31.157 6.63363 31.157 7.36637 30.7051 7.81831L24.9187 13.6047C24.4668 14.0566 23.7341 14.0566 23.2821 13.6047C22.8302 13.1527 22.8302 12.42 23.2821 11.968L27.0929 8.15727H2.11235C1.4732 8.15727 0.955078 7.63914 0.955078 7C0.955078 6.36086 1.4732 5.84273 2.11235 5.84273H27.0929L23.2821 2.03198C22.8302 1.58003 22.8302 0.847293 23.2821 0.395352Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
