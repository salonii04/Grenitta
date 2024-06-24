import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/playButton.png'

const About = ({setPlayState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT GRENITTA</h3>
            <h2>A Promise Making Patient's Life Better</h2>
            <p>Dear Doctor Your diagnosis with quality drugs results in healing of patients</p>
            <p>But you will agree that side effects & therapy gaps diminish the Nobel cause often...</p>
            <p>You would like to Rx drugs with high efficiency, negligible therapy gaps & side effects</p>
        </div>
    </div>
  )
}

export default About