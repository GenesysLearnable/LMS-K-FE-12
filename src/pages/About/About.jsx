import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import styles from './About.module.css'
import AboutNav from "./AboutNav";
import { useState } from "react";
import Mission from './Mission'
import Approach from './Approach'
import Contact from './Contact'

const About = () => {

  const [activeSection, setActiveSection] = useState('mission');

  const renderContent = () => {
    switch (activeSection) {
      case 'mission':
        return <Mission />;
      case 'approach':
        return <Approach />;
      case 'aboutcontact':
        return <Contact />;
      default:
        return <Mission />;
    }
  };

  return (
    <>
        <div>
        <Navbar />
        <h2 className={styles.title}>About us!</h2>
        <AboutNav setActiveSection={setActiveSection} />
        <div className={styles.content}>
          {renderContent()}
        </div>
        <Footer />
        </div>
    </>
  );
};

export default About;
