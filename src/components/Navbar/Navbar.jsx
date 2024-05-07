import './Navbar.css'
import kidera from '../../assets/Kidera.png'

import React from 'react'

export default function Navbar() {
  return (
    <header>
        <nav>
            <div className='left-section'>
                <img src={kidera} alt="" />
            </div>
            <div className="right-section">
                <ul>
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>About</li>
                    <li>Courses</li>
                </ul>

                <button className="nav-button">Login</button>
            </div>
        </nav>
    </header>
  )
}
