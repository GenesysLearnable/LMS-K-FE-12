import styles from "./Gamecard.module.css";
import kidera from "../../assets/Kidera.svg";
import { Link } from "react-router-dom";

export default function Gamecardr() {
  return (
    <div>
      <div className="first-card">
        <img src="images/tictac.png" />
        <h4>Tic-tac-toe</h4>
        <p>Unlock with 5 Diamonds</p>
        <button className="Playbutton1">Play</button>
      </div>
    </div>
  );
}
