import styles from "./Personalization.module.css";
import Rubiks from "../../assets/rubiks.svg";
import KanbanBoard from "../../assets/kanban.svg";
import Checklist from "../../assets/checklist.svg";
import Openbook from "../../assets/lampoverbook.svg";
import Button from "../Button/Button";

export default function Personalization() {
  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <div className={styles["head-section"]}>
          <p className={styles["title"]}>Personalization Made Easy</p>
          <p className={styles["sub-title"]}>
            You tell us a little about your child, and we’ll come up with a
            learning journey made just for them!{" "}
          </p>
        </div>

        <div className={styles["body-section"]}>
          <div className={styles.block}>
            <div className="personal--img-container">
              <img src={Rubiks} alt="rubiks cube" />
            </div>
            <p>We combine your child’s unique interests</p>
          </div>

          <div className={styles.block}>
            <div className="personal--img-container">
              <img src={Checklist} alt="Completed Checklist" />
            </div>
            <p>With their age and current learning level</p>
          </div>

          <div className={styles.block}>
            <div className="personal--img-container">
              <img src={KanbanBoard} alt="Kanban Board" />
            </div>
            <p>To create a personalized learning journey they love</p>
          </div>

          <div className={styles.block}>
            <div className="personal--img-container">
              <img src={Openbook} alt="Lamp over open book" />
            </div>
            <p>That builds essential skills for school and life!</p>
          </div>
        </div>
      </section>

      <Button link="/signup" content="Get Started Now" />
    </div>
  );
}
