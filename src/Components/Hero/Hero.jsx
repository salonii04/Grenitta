import React from 'react'
import './Hero.css'
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container" id="hero">
        <div className="hero-text">
            <h1>Good health is our Mission</h1>
            <p>Building enduring trust through science-driven solutions. 
                We deliver life-changing medicines that empower patients to manage their health and achieve their full potential</p>
                {/* <button className='btn'>Explore More <img src={dark_arrow} */}
                 {/* alt=""  /></button> */}
        </div>

    </div>
  )
}

export default Hero