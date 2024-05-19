import styles from './About.module.css'
import missionimage1 from '../../assets/missionimage1.png'
import missionimage2 from '../../assets/missionimage2.png'
import missionimage3 from '../../assets/missionimage3.png'

export default function Mission() {
  return (
    <div className={styles.ma_container}>
      
      <div className={styles.ma_content}>      
        
        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={missionimage1} alt="Mission Image 1" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.card_title}>Empowering Young Minds</p>
            <p className={styles.card_info}>Catch &apos;em young!<br />
              Kidera is the perfect way to equip your little ones for a bright future. 
              Our personalized and inclusive learning platform offers a wide range of fun and interactive games, 
              activities, and creative tools that will ignite their curiosity, creativity, and confidence.
            </p>
          </div>
        </section>

        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={missionimage2} alt="Learners" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.card_title}>Making Learning Fun</p>
            <p className={styles.card_info}>We turn education into a delightful discovery with interactive adventures, 
            creative quests, and playful challenges. Igniting curiosity, creativity, and confidence in kids, one joyful 
            experience at a time!
            </p>
          </div>
        </section>

        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={missionimage3} alt="Safe Browsing" />
          </div>
          <div className={styles.text_container}>
              <p className={styles.card_title}>Universally Accessible</p>
              <p className={styles.card_info}>We created Kidera so that everyone could have a chance. 
                  Our app is designed to be inclusive and accessible, providing a personalized experience for every child, 
                  regardless of ability or learning style. Because every mind is unique and deserves to shine!
                  We believe true equality is when every kid has access better education.
              </p>
          </div>
        </section>

        <hr className={styles.line} />

      </div>

    </div>
  )
}
