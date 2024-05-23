import styles from './Sidedash.module.css'
import arr from '../../../assets/arr.png'
import dashboardhero from '../../../assets/dashboardhero.svg'
import{ Button } from '../../../components/Button/Button'
import heroarrowright from '../../../assets/heroarrowright.svg'
import videoicon from '../../../assets/videoicon.svg'
import { Link } from 'react-router-dom'

const SideDash = () => {

    const getCurrentGreeting = () => {
    const now = new Date();
    const hours = now.getHours();

    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  }

  const Greeting = getCurrentGreeting();

  return (

    <>
      <div className={styles.container}>

        <p className={styles.greeting}>{Greeting}, Chujac 👋😁</p>

        <section className={styles.hero_section}>
            <div className={styles.hero_left}>            
              <div className={styles['dashboard-hero-txt']}>
                <div className={styles['dashboard-hero-first-text']}>
                  <p>Today’s Subject <img src={arr} alt="arrow"/> English Hero</p>
                  <p className={styles.lesson}>Lesson- Phonics Module 1-6</p>
                </div>
                <p>Start the basics of English by learning the 9 parts of speech </p>

                <Button className={styles.hero_btn} content="Get Started" link="/Subjects" />               
              </div>

              <div className={styles['dashboard-hero-img']}>
                <img src={dashboardhero} alt="Dash Board Hero Image" />
              </div>
            </div>

            <div className={styles.hero_right}>
              <section className={styles.recent_txt}>
                <p className={styles.recently}>Recently</p>
                <Link>
                  <p className={styles.recent_txt_right}>View more <img src={heroarrowright} alt="" /></p>
                </Link>
              </section>

              <section className={styles.recent_cards}>
                <div className={styles.recent_card}>
                  <img src={videoicon} alt="Video Icon" />
                  <div>
                    <p className={styles.phonics}>Phonics Lesson 2</p>
                    <p className={styles.phonics_desc}>English Hero</p>
                  </div>
                </div>

                <div className={styles.recent_card}>
                <img src={videoicon} alt="Video Icon" />
                  <div>
                    <p className={styles.phonics}>Draw a triangle</p>
                    <p className={styles.phonics_desc}>Challenges</p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          <main className={styles.main_section}>

            <section className={styles.main_left_section}>
              
            </section>


            <section className={styles.main_right_section}></section>

          </main>
 
      </div>
    </>
  );
};

export default SideDash;
