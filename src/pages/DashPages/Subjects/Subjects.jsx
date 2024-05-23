import "./Subjects.css";
import { English, Math, BasicScience, General } from "../../../utils/Subjects";

const Subjects = () => {
  return (
    <>
      <section className="subject--main">
        <div className="subject-header--container">
          <p className="subject--header">Subjects</p>
          <p className="subject--desc">
            Earn coins after completing each lesson
          </p>
        </div>

        <div className="course--container">
          <div>
            <h2 className="course--title">English Hero</h2>
            <div className="course-card--container">
              {English.map((items, index) => {
                const { id, subjectTitle, subjectDescription, imgURL, rating } =
                  items;

                return (
                  <>
                    <div className="course--card" key={index}>
                      <img className="course--banner" src={imgURL} alt="" />
                      <div className="course--item">
                        <p>{subjectTitle}</p>
                        <button>Start</button>
                      </div>
                      <div className="course--description">
                        <p>{subjectDescription}</p>
                        <div className="stars--container">
                          <img src={rating} alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="course--container">
          <div>
            <h2 className="course--title">Maths Mania</h2>
            <div className="course-card--container">
              {Math.map((items, index) => {
                const { id, subjectTitle, subjectDescription, imgURL, rating } =
                  items;

                return (
                  <>
                    <div className="course--card" key={index}>
                      <img className="course--banner" src={imgURL} alt="" />
                      <div className="course--item">
                        <p>{subjectTitle}</p>
                        <button>Start</button>
                      </div>
                      <div className="course--description">
                        <p>{subjectDescription}</p>
                        <div className="stars--container">
                          <img src={rating} alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="course--container">
          <div>
            <h2 className="course--title">Maths Mania</h2>
            <div className="course-card--container">
              {BasicScience.map((items, index) => {
                const { id, subjectTitle, subjectDescription, imgURL, rating } =
                  items;

                return (
                  <>
                    <div className="course--card" key={index}>
                      <img className="course--banner" src={imgURL} alt="" />
                      <div className="course--item">
                        <p>{subjectTitle}</p>
                        <button>Start</button>
                      </div>
                      <div className="course--description">
                        <p>{subjectDescription}</p>
                        <div className="stars--container">
                          <img src={rating} alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="course--container">
          <div>
            <h2 className="course--title">General Knowledge</h2>
            <div className="course-card--container">
              {General.map((items, index) => {
                const { id, subjectTitle, subjectDescription, imgURL, rating } =
                  items;

                return (
                  <>
                    <div className="course--card" key={index}>
                      <img className="course--banner" src={imgURL} alt="" />
                      <div className="course--item">
                        <p>{subjectTitle}</p>
                        <button>Start</button>
                      </div>
                      <div className="course--description">
                        <p>{subjectDescription}</p>
                        <div className="stars--container">
                          <img src={rating} alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subjects;
