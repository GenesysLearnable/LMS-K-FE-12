import React from 'react'
import './Hero.css'
import LeftHeroImage from '../../assets/LeftHeroImage.png'
import RightHeroImage from '../../assets/RightHeroImage.png'

export default function Hero() {
  return (
    <div className="hero-section">

       <section className="left-section">
        <p className="header-text">Embrace The Joy of Learning</p>
        <p>At <span>Kidera</span> learn, we make learning fun and exciting for our students. Crush those hard subjects with us!</p>
        <button>Get Started Now</button>
       </section>

       <section className="right-section">
        <img className="left-img" src={LeftHeroImage} alt="School Child Avatar" />
        <img className="right-img" src={RightHeroImage} alt="School Child Avatar" />
       </section>
    </div>
  )
}
