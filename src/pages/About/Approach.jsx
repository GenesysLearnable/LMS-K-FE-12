import styles from './About.module.css'
import approach1 from '../../assets/approach1.png'
import approach2 from '../../assets/approach2.png'
import approach3 from '../../assets/approach3.png'
import approach4 from '../../assets/approach4.png'

export default function Approach() {
  return (
    <div className={styles.ma_container}>
      
      <div className={styles.ma_content}>      
        
        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={approach1} alt="Mission Image 1" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.card_title}>Our Teaching Approach</p>
            <p className={styles.card_info}>Our interactive lessons make learning a breeze. But it&apos;s not just fun and games - our methodology
             is backed by research and aligned with international standards. Our bite-sized lessons are designed to keep kids 
             engaged and motivated, fostering long-term retention and a lifelong love of  learning.
             </p>
          </div>
        </section>

        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={approach2} alt="balanced approach" />
          </div>
          <div className={styles.text_container}>
            <p className={styles.card_title}>A balanced approach</p>
            <p className={styles.card_info}> Our balanced approach combines interactive exploration with helpful explanations, 
              so kids can develop a strong foundation in various subjects. Engaging lessons encourage self-discovery, 
              while supportive Tips provide clear guidance on key concepts. The perfect blend for a lifelong love of learning!
            </p>
          </div>
        </section>

        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
            <img src={approach3} alt="learning culture" />
          </div>
          <div className={styles.text_container}>
              <p className={styles.card_title}>Many ways to Learn</p>
              <p className={styles.card_info}>Our diverse interactive experiences - like engaging stories, and more, 
              help kids develop essential skills across subjects. From interaction and conversation to reading and  
              comprehension, our varied formats prepare young minds for real-world success!
              </p>
          </div>
        </section>

        <hr className={styles.line} />

        <section className={styles.cards}>
          <div className={styles.image_container}>
              <img src={approach4} alt="Non stop reader" />
          </div>
          <div className={styles.text_container}>
              <p className={styles.card_title}>Continuous Improvement</p>
              <p className={styles.card_info}>At Kidera we&apos;re always improving. 
              Assessments throughout our interactive lessons help us measure progress and identify areas for growth. Your 
              child&apos;s learning journey informs our development of new tools, updated materials, and enhanced 
              experiences. We evolve with your child&apos;s needs, ensuring the best possible education across all subjects.
              </p>
          </div>
        </section>

        <div></div>
        <hr className={styles.line} />

      </div>

    </div>
  )
}
