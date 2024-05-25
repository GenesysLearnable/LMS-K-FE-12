import styles from './EnglishHero.module.css'
import arrowleft from '../../../../assets/arrow-left.svg'
import { Link } from 'react-router-dom'
import heroteacher from '../../../../assets/englishheroteacher.svg'
import module1 from '../../../../assets/module1.svg'
import module2 from '../../../../assets/module2.svg'
import module3 from '../../../../assets/module3.svg'
import module4 from '../../../../assets/module4.svg'
import arroww from '../../../../assets/arroww.png'
import ben10 from '../../../../assets/ben10.png'
import ben11 from '../../../../assets/ben11.png'
import CircularProgressBar from '../../../../utils/CircularProgressBar'

export default function EnglishHero() {
  return (
    <div className={styles.container}>
        <section className={styles.left_section}>
            <div className={styles['left-header']}>
                <Link to='/dashboard/subjects'>
                    <img src={arrowleft} alt="Go Back Arrow" className={styles.gobackarrow}/>
                </Link>
                <p className={styles['left-header-text']}>English Hero</p>
            </div>
            <main>
                <div className={styles['hero-section']}>
                    <img src={heroteacher} alt="hero teacher" className={styles['hero-teacher']}/>
                    <div className={styles['hero-text']}>
                        <p className={styles.partsofspeech}>Parts of Speech</p>
                        <p className={styles.start}>Start the basics of English <br />
                        by learning the 9 parts of speech </p>
                    </div>
                </div>
                <div className={styles['modules']}>
                    <div className={styles['module-items']}>
                        <div className={styles['module-hero']}>
                            <img src={module1} alt="Learn English" />
                            <p className={styles['module-text']}>Module 1- Introduction to Parts of Speech</p>
                        </div>
                        <button className={styles['module-btn']}>Start</button>
                    </div>
                    <div className={styles['module-items']}>
                        <div className={styles['module-hero']}>
                            <img src={module2} alt="Learn English" />
                            <p className={styles['module-text']}>Module 2- What is a Sentence?</p>
                        </div>
                        <button className={styles['module-btn']}>Start</button>
                    </div>
                    <div className={styles['module-items']}>
                        <div className={styles['module-hero']}>
                            <img src={module3} alt="Learn English" />
                            <p className={styles['module-text']}>Module 3- Types of Sentences</p>
                        </div>
                        <button className={styles['module-btn']}>Start</button>
                    </div>
                    <div className={styles['module-items']}>
                        <div className={styles['module-hero']}>
                            <img src={module4} alt="Learn English" />
                            <p className={styles['module-text']}>Module 4- What is a Noun?</p>
                        </div>
                        <button className={styles['module-btn']}>Start</button>
                    </div>

                    <div className={styles['view-more-cont']}>
                        <div className={styles['view-more']}>
                            <p>View more</p>
                            <img src={arroww} alt="Click to View More" />
                        </div>
                    </div>
                </div>
            </main>
        </section>

        <section className={styles.right_section}>
            <div className={styles['right-header']}>
                <p className={styles['right-header-txt']}>Achievements</p>
                <div className={styles['view-all']}>
                    <p className={styles['view-all-text']}>View all</p>
                    <img src={arroww} alt=" Click to view all" />
                </div>
            </div>
            <div className={styles['achievements']}>
                <div className={styles.progress}>
                    <CircularProgressBar 
                        value="100"
                        color="rgba(86, 195, 60, 1)"
                        valueColor="black"
                    />
                    <div className={styles['progress-props']}>
                        <p className={styles['progress-text']}>English Hero </p>
                        <p className={styles['progress-rating']}>16/16 completed </p>
                    </div>       
                </div>
                <div className={styles.progress}>
                    <CircularProgressBar 
                        value="65"
                        color="rgba(151, 71, 255, 1)"
                        valueColor="black"
                    />
                    <p className={styles['progress-text']}>Assignment </p>
                </div>
            </div>
            <div className={styles['rewards']}>
                <div className={styles['reward-card']}>
                    <img src={ben10} alt="Ben 10" />
                    <p className={styles['movie-title']}>Ben 10 - Ep1</p>
                    <p className={styles['movie-key']}>Unlock with: 5 Diamonds💎</p>
                </div>
                <div className={styles['reward-card']}>
                    <img src={ben11} alt="Ben 10" />
                    <p className={styles['movie-title']}>Alien Force</p>
                    <p className={styles['movie-key']}>Unlock with: 5 Diamonds💎</p>
                </div>
            </div>
        </section>
    
    
    
    </div>
  )
}
