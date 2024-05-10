import styles from './Personalization.module.css'
import Button from '../Hero/Button/Button'
import rubiks from '../../assets/rubiks.png'
import kanbanBoard from '../../assets/kanban.png'
import checklist from '../../assets/checklist.png'
import openbook from '../../assets/lampoverbook.png'

export default function Personalization() {
  return (
    <div className={styles.container}>

        <section className={styles.main}>
            <div className={styles['head-section']}>
                <p className={styles['title']}>Personalization Made Easy</p>
                <p className={styles['sub-title']}>You tell us a little about your child, and we’ll come up with a learning 
                journey made just for them! </p>
            </div>

            <div className={styles['body-section']}>
                <div className={styles.block}>
                    <img src={rubiks} alt="rubiks cube" />
                    <p>We combine your child’s
                        unique interests</p>
                </div>

                <div className={styles.block}>
                    <img src={checklist} alt="Completed Checklist" />
                    <p>with their age and current
                        learning level</p>
                </div>

                <div className={styles.block}>
                    <img src={kanbanBoard} alt="Kanban Board" />
                    <p>to create a personalized
                        learning journey they love</p>
                </div>

                <div className={styles.block}>
                    <img src={openbook} alt="Lamp over open book" />
                    <p>that builds essential skills for
                        school and life!</p>
                </div>
            </div>

            <div>
                <Button />
            </div>
        </section>

    </div>
  )
}
