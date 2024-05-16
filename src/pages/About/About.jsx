import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import styles from './About.module.css'
import AboutNav from "./AboutNav";
import { Routes, Route } from "react-router-dom";
import Mission from "./Mission";
import Approach from "../About/Approach"
import Contact from "./Contact"

const About = () => {
  return (
    <>
        <div>
        <Navbar />
        <h2 className={styles.title}>About us!</h2>
        <AboutNav />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Mission />} />
              <Route path="/Approach" element={<Approach />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </div>
        <Footer />
        </div>
    </>
  );
};

export default About;
