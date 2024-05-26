import styles from './PopUp.module.css';
import popup from '../../../assets/popup.png'
import { Link } from 'react-router-dom';

const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_inner}>
        <section className={styles['popup-card']}>

            <div className={styles['popup-txt-section']}>
                <p className={styles['popup-title']}>Well done!!!</p>
                <img src={popup} alt="Smiley" />
                <p className={styles['popup-msg']}>You successfully Completed Module 1</p>
            </div>
            <div className={styles['popup-btn']}>
                <Link to='/dashboard/Assessments'>
                    <button className={styles['close-btn']}>Take Assessment</button>
                </Link>
                <Link to='/englishhero'>
                    <button className={styles['proceed-btn']}>Proceed to Module 2</button>
                </Link>
            </div>

        </section>    
      </div>
    </div>
  );
};

export default Popup;
