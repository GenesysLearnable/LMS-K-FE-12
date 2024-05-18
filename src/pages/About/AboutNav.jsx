import styles from './About.module.css'
import PropTypes from 'prop-types'

export default function AboutNav({ setActiveSection }) {

  const handleLinkClick = (event, section) => {
    event.preventDefault();
    setActiveSection(section);
  };

  AboutNav.propTypes = {
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
  };

  return (
        <nav className={styles.container}>
            <ul className={styles.navlist}>
                <li className={`${styles.navlistitem} ${activeSection === 'mission' ? styles.active : ''}`}>
                  <a href="/" onClick={(event) => handleLinkClick(event, 'mission')}>Mission</a>
                </li>
                <li className={`${styles.navlistitem} ${activeSection === 'approach' ? styles.active : ''}`}>
                  <a href="/approach" onClick={(event) => handleLinkClick(event, 'approach')}>Approach</a>
                </li>
                <li className={`${styles.navlistitem} ${activeSection === 'aboutcontact' ? styles.active : ''}`}>
                  <a href="/aboutcontact" onClick={(event) => handleLinkClick(event, 'aboutcontact')}>Contact Us</a>
                </li>
            </ul>
        </nav>
  )
}
