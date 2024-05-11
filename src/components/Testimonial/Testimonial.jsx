import styles from './Testimonial.module.css'
import leftarrow from '../../assets/arrow-left-circle.png'
import rightarrow from '../../assets/arrow-right-circle.png'
import testimony from '../../assets/testimony.png'
import testifier from '../../assets/testifier.png'

export default function Testimonial() {
  return (
    <div className={styles['container']}>
        <section className={styles['left-section']}>
            <p className={styles['title-text']}>Testimonial from kidera members</p>
            <p className={styles['sub-title']}>We are very happy because we have lots of happy families</p>
            <div className={styles['icons']}>
                <img src={leftarrow} alt="left arrow" />
                <img src={rightarrow} alt="right-arrow" />
            </div>
        </section>
        
        <section className={styles['middle-section']}>
            <img src={testimony} alt="testimony" />
        </section>

        <section className={styles['right-section']}>
            <img src={testifier} alt="testifier" />
        </section>
    </div>
  )
}
