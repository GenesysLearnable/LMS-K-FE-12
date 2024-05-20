import "../Gamecenter-a/Gamecenter";
export default function Game() {
  return (
    <body>
      <p className="hello"> Hello &#128075; &#128522;,</p>
      <div className="flexsection">
        <div className="KidsinBalloon">
          <img src="src/assets/KidsinBalloon.png" />
        </div>
        <div className="textsection">
          <h1 className="purple">Welcome to</h1>
          <h1 className="orange">Game Center</h1>
          <p className="text">You have 0 Diamond(s)</p>
          <p className="text">Unlock more coins to access</p>
          <p>these amazing games</p>
          <button>Take a course</button>
        </div>
      </div>
    </body>
  );
}
