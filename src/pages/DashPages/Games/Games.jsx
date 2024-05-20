import styles from "./Games.module.css";

const Games = () => {
  return (
    <>
      <div className={styles.container} style={{ fontSize: "3rem" }}>
        Games
      </div>

      <body>
        <div className="container">
          <div className="upper-section">
            <p>Hi, Kingsley, &#128075; &#128522;</p>
            <p>
              You have <span className="purple">25 Diamond (s) </span> &#128142
            </p>
          </div>

          <div className="second-section">
            <button className="btn-1">Play a game</button>
            <button className="btn-2">Watch a movie</button>
          </div>

          <div className="cards">
            <div className="first-row">
              <div className="first-card">
                <img src="src/assets/tictac.png" />
                <h4>Tic-tac-toe</h4>
                <p>Unlock with 5 Diamonds</p>
                <button className="Playbutton1">Play</button>
              </div>

              <div className="second-card">
                <img src="src/assets/snake.png" />
                <h4>Snake</h4>
                <p>Unlock with 10 Diamonds</p>
                <button className="Playbutton1">Play</button>
              </div>

              <div className="third-card">
                <img src="src/assets/rivercross.png" />
                <h4>River cross</h4>
                <p>Unlock with 15 Diamonds</p>
                <button className="Playbutton">Play</button>
              </div>
            </div>

            <div className="second-row">
              <div className="card-one">
                <img src="src/assets/bubble.png" />
                <h4>Bubbles</h4>
                <p>Unlock with 20 Diamonds</p>
                <button className="Playbutton">Play</button>
              </div>

              <div className="card-two">
                <img src="src/assets/hangman.png" />
                <h4>Hangman</h4>
                <p>Unlock with 30 Diamonds</p>
                <button className="Playbutton">Play</button>
              </div>

              <div className="card-three">
                <img src="src/assets/candy.png" />
                <h4>Candy</h4>
                <p>Unlock with 40 Diamonds</p>
                <button className="Playbutton">Play</button>
              </div>
            </div>
          </div>
          <div className="flex-center">
            <p className="last-text">Load more games</p>
          </div>
        </div>
      </body>
    </>
  );
};

export default Games;
