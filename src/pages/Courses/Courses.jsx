import styles from "./Courses.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import arrowleft from "../../assets/arrow-left.svg";
import courses from "../../assets/courses.png";
import Popup from "./PopUp/PopUp";

const Courses = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

  return (
    <>
      <div className={styles.container}>
        <section className={styles.header}>
          <div className={styles["left-header"]}>
            <Link to="/dashboard/subjects">
              <img
                src={arrowleft}
                alt="Go Back Arrow"
                className={styles.gobackarrow}
              />
            </Link>
            <p className={styles["left-header-text"]}>English Hero</p>
          </div>
        </section>
        <section className={styles["course-section"]}>
          <img
            src={courses}
            alt="course content"
            className={styles.course_img}
          />
          <button className={styles.englishbutton} onClick={togglePopup}>
            Done
          </button>
          {isOpen && <Popup handleClose={togglePopup} />}
        </section>
      </div>
    </>
  );
};

export default Courses;
