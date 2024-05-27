import styles from "./Rewards.module.css";
import classNames from "classnames";
import tictac from "../../../assets/titac.png";
import ben from "../../../assets/ben.png";
import ben10 from "../../../assets/ben10.png";

const Rewards = () => {
  return (
    <>
      <div className={styles.activity}>
        <p>Activity</p>
        <p className={styles.reward}>Reward</p>
      </div>
      <div className={classNames(styles.mid_container, styles.white)}>
        <div className={styles.lesson}>
          <div className={styles.lesson_top}>
            <p className={styles.span}>You Purchased </p>
            <p className={styles.span}>Parts of Speech full lesson </p>
          </div>
          <div className={styles.lesson_bottom}>
            <p className={styles.span}>You Scored 7/7 in </p>
            <p className={styles.span}>Parts of Speech lesson </p>
          </div>
        </div>
        <div className={`${styles.stars} ${styles.white}`}>
          <p className={styles.space_top}>You Won 25 diamonds </p>
          <p className={styles.space_top}>You ranked #2 on the Leaderboard </p>
          <p className={styles.space_top}>You Won 5 diamonds </p>
        </div>
      </div>

      <p className={styles.lonep}>Take More Lesson to Unlock more Fun</p>

      <div className={styles.cardrow}>
        <div className={styles.ticcard}>
          <img src={tictac} alt="tictac" />
          <p>Tic-tac-toe</p>
          <p> Unlock with: 5 Diamonds &#128142</p>
        </div>

        <div className={styles.bencard}>
          <img src={ben} alt="ben 10" />
          <p>Ben 10 Ep. 1</p>
          <p> Unlockk with : 5 Diamonds &#128142</p>
        </div>
        <div className={styles.bentencard}>
          <img src={ben10} alt="ben-image" />
          <p>Ben 10 Ep. 2</p>
          <p>Unlock with: 5 Diamonds &#128142</p>
        </div>
      </div>
    </>
  );
};

export default Rewards;
