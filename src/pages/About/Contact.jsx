import styles from './About.module.css'
import x from '../../assets/x.png'
import linkedin from '../../assets/linkedin.png'
import Insta from '../../assets/Insta.png'
import facebook1 from '../../assets/facebook.png'

export default function Contact() {
  return (
    <div>

      <div className={styles.ma_container}>
      
          <div className={styles.ca_content}>  

          <hr className={styles.line} />

            <p className={styles.faq}>Are you having a challenge? <a href="">Find help here</a></p>
            <p className={styles.faq}>Looking to partner with us? <span>findus@kidera.com</span></p>
            <p className={styles.enquiries}>For enquiries, call +234 81 333 4440</p>

            <section className={styles.iconify}>
             
                <div className={styles.icon}><img src={linkedin} alt="Linkedin Handle"/><p>kidera.com</p></div>
                <div className={styles.icon}><img src={Insta} alt="Instagram Handle"/><p>kidera.com</p></div>
                <div className={styles.icon}><img src={x} alt="Twitter Handle"/><p>kidera.com</p></div>
                <div className={styles.icon}><img src={facebook1} alt="Facebook Handle"/><p>kidera.com</p></div>
              
            </section>

          <hr className={styles.line} />

          </div>

      </div>
    </div>
  )
}
