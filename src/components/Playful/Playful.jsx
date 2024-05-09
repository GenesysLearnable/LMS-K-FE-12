import styles from './Playful.module.css'
import math from '../../assets/math.png'
import reading from '../../assets/reading.png'
import thinking from '../../assets/thinking.png'
import rewards from '../../assets/rewards.png'

export default function Playful() {
  return (
    <div className={styles.container}>
        <section className={styles.content}>
            <p className={styles['top-text']}>They’ll Enjoy Playful Learning</p>
            <div>
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={reading} alt="Open Book" />
                    </div>
                    <p>Reading</p>
                </div>

                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={math} alt="calculus" />
                    </div>
                    <p>Maths</p>
                </div>

                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={thinking} alt="Thinking skills" />
                    </div>
                    <p>Thinking Skills</p>    
                </div>
                
                <div className={styles.block}>
                    <div className={styles.circle}>
                        <img src={rewards} alt="Rewards" />
                    </div>
                    <p>Rewards</p>
                </div>
            </div>
        </section>
    </div>
  )
}
