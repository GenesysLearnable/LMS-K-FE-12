import styles from './About.module.css'
import { Link } from 'react-router-dom'

export default function AboutNav() {
  return (
        <nav className={styles.container}>
            <ul className={styles.navlist}>
                <li className={styles.navlistitem}><Link to="/about">Mission</Link></li>
                <li className={styles.navlistitem}><Link to="/Approach">Approach</Link></li>
                <li className={styles.navlistitem}><Link to="/Contact">Contact Us</Link></li>
            </ul>
        </nav>
  )
}
