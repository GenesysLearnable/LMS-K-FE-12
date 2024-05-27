import styles from "./GamesIII.module.css";

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
            <img src="images/tictac.png" />
            <h4>Tic-tac-toe</h4>
            <p>Unlock with 5 Diamonds</p>
            <button className={styles.Playbutton1}>Play</button>
          </div>

          <div className={styles.second_card}>
            <img src="images/snake.png" />
            <h4>Snake</h4>
            <p>Unlock with 10 Diamonds</p>
            <button className={styles.Playbutton1}>Play</button>
          </div>

          <div className={styles.third_card}>
            <img src="images/rivercross.png" />
            <h4>River cross</h4>
            <p>Unlock with 15 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>
        </div>

        <div className={styles.second_row}>
          <div className={styles.card_one}>
            <img src="images/bubble.png" />
            <h4>Bubbles</h4>
            <p>Unlock with 20 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>

          <div className={styles.card_two}>
            <img src="images/hangman.png" />
            <h4>Hangman</h4>
            <p>Unlock with 30 Diamonds</p>
            <button className={styles.Playbutton}>Play</button>
          </div>

          <div className={styles.card_three}>
            <img src="images/candy.png" />
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
