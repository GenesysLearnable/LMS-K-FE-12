import styles from './About.module.css'

export default function AboutNav() {
  return (
        <nav className={styles.container}>
            <ul>
                <li>Mission</li>
                <li>Approach</li>
                <li>Contact Us</li>
            </ul>
        </nav>
  )
}
