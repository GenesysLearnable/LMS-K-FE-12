import styles from './Hero.module.css'
import heroimage from '../../assets/heroimage.png'
import Button from './Button/Button'
import { Link } from 'react-router-dom'



export default function Hero() {
  return (
    <div className={styles['hero-section']}>

       <section className={styles['left-section']}>
        <p className={styles['header-text']}>Embrace The Joy of Learning</p>
        <p className={styles['body-text']}>At <span>Kidera</span> learn, we make learning fun and exciting for our students. Crush those hard subjects with us!</p>
        
        <Link to="/SignUp">
          <Button />
        </Link>
       </section>

       <section className={styles['right-section']}>
        <img className={styles.image} src={heroimage} alt="hero image" />
       </section>
    </div>
  )
}
