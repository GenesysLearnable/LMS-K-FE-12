import styles from './Hero.module.css'
import LeftHeroImage from '../../assets/LeftHeroImage.png'
import RightHeroImage from '../../assets/RightHeroImage.png'

export default function Hero() {
  return (
    <div className={styles['hero-section']}>

       <section className={styles['left-section']}>
        <p className={styles['header-text']}>Embrace The Joy of Learning</p>
        <p className={styles['body-text']}>At <span>Kidera</span> learn, we make learning fun and exciting for our students. Crush those hard subjects with us!</p>
        <button className={styles['herobtn']}>Get Started Now</button>
       </section>

       <section className={styles['right-section']}>
        <img className={styles['left-img']} src={LeftHeroImage} alt="School Child Avatar" />
        <img className={styles['right-img']} src={RightHeroImage} alt="School Child Avatar" />
       </section>
    </div>
  )
}
