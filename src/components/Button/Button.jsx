import styles from "./Button.module.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.link}>
      <button className={styles["herobtn"]}>{props.content}</button>
    </Link>
  );
}
