import styles from "./GamesIII.module.css";
import Tictac from "../../../assets/tictac.png";
import Snake from "../../../assets/snake.png";
import Rivercross from "../../../assets/rivercross.png";
import Bubble from "../../../assets/bubble.png";
import Hangman from "../../../assets/hangman.png";
import Candy from "../../../assets/candy.png";

export default function GamesIII() {
  return (
    <div className={styles.container}>
      <div className={styles.upper_section}>
        <p>Hi, Kingsley, &#128075; &#128522;</p>
        <p>
          You have <span className={styles.purple}>25 Diamond (s) </span>{" "}
          &#128142
        </p>
      </div>

      <div className={styles.second_section}>
        <button className={styles.btn_1}>Play a game</button>
        <button className={styles.btn_2}>Watch a movie</button>
      </div>

      <div className={styles.cards}>
        <div className={styles.first_row}>
          <div className={styles.first_card}>
            <img src={Tictac} alt="tictac" />
            <h4>Tic-tac-toe</h4>
            <p>Unlock with 5 Diamonds</p>
            <button className={styles.Playbutton1}>Play</button>
          </div>

          <div className={styles.second_card}>
            <img src={Snake} alt="snake" />
            <h4>Snake</h4>
            <p>Unlock with 10 Diamonds</p>
            <button className={styles.Playbutton1}>Play</button>
          </div>

          <div className={styles.third_card}>
            <img src={Rivercross} alt="rivercross" />
            <h4>River cross</h4>
            <p>Unlock with 15 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>
        </div>

        <div className={styles.second_row}>
          <div className={styles.card_one}>
            <img src={Bubble} alt="bubble" />
            <h4>Bubbles</h4>
            <p>Unlock with 20 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>

          <div className={styles.card_two}>
            <img src={Hangman} alt="hangman" />
            <h4>Hangman</h4>
            <p>Unlock with 30 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>

          <div className={styles.card_three}>
            <img src={Candy} alt="candy" />
            <h4>Candy</h4>
            <p>Unlock with 40 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>
        </div>
      </div>
      <div className={styles.flex_center}>
        <p className={styles.last_text}>Load more games</p>
      </div>
    </div>
  );
}
