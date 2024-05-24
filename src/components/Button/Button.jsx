import styles from "./Button.module.css";
import { Link } from "react-router-dom";
import classNames from 'classnames';

const Button = ({ link, content, className }) => {
  return (
    <Link to={link}>
      <button className={classNames(styles.herobtn, className)}>{content}</button>
    </Link>
  );
};

const BtnFull = ({ link, content, onClick, className }) => {
  return (
    <Link to={link}>
      <button onClick={onClick} className={classNames(styles["container--btn"], className)}>
        {content}
      </button>
    </Link>
  );
};

export { Button, BtnFull };
