import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.link}>
      <button className={styles["herobtn"]}>{props.content}</button>
    </Link>
  );
};

const BtnFull = (props) => {
  return (
    <Link to={props.link}>
      <button className={styles["container--btn"]}>{props.content}</button>
    </Link>
  );
};

export { Button, BtnFull };
