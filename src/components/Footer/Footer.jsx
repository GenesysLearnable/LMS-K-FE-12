import styles from './Footer.module.css'
import kideraLogo from '../../assets/logo.png'
import facebookIcon from '../../assets/facebook.png'
import xIcon from '../../assets/x.png'
import instaIcon from '../../assets/Insta.png'
import linkedinIcon from '../../assets/linkedin.png'
import appStoreIcon from '../../assets/appstore.png'
import googlePlayIcon from '../../assets/googleplay.png'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.kideraSection}>
        <img src={kideraLogo} alt="Kidera logo" />

        <div className={styles.icons}>
          <img src={facebookIcon} alt="Facebook" />
          <img src={xIcon} alt="X" />
          <img src={instaIcon} alt="Instagram" />
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </section>

      <section className={styles.appstore}>
        <img className={styles.app} src={appStoreIcon} alt="App Store" />
        <img className={styles.google} src={googlePlayIcon} alt="Google Play" />
      </section>


        <section className={styles['right-section']}>
            <section className={styles.link}>
                <div className={styles.usefulLinks}>
                <h5 className={styles.smallheader}>Useful links</h5>
                <ul>
                    <li>Our Projects</li>
                    <li>FAQs</li>
                    <li>News and updates</li>
                </ul>
                </div>

                <div className={styles.company}>
                <h5 className={styles.smallheader}>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
                
                </div>

                <div className={styles.contact}>
                <h5 className={styles.smallheader}>Contact</h5>
                <p>Hello@Kidera</p>
                </div>
            </section>

            <section className={styles.terms}>
                <p className={styles.termsOfService}>Terms of Service</p>
                <p className={styles.privacyPolicy}>Privacy Policy</p>
            </section>
      </section>
    </footer>
  )
}
