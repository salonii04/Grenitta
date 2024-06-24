import React from 'react';
import './Vision.css';
import mission_img from '../../assets/mission.png';
import vision_img from '../../assets/vision.webp';

const Vision = () => {
  return (
    <div className="vision">
        <div className="quote">
           
            <div className="text">
                <blockquote>To be the leading innovator in transformative medicines, empowering patients to live healthier, fuller lives with minimal side effects and therapy gaps.</blockquote>
                <cite>Grenitta Pharmaceuticals</cite>
            </div>
            <img src={mission_img} alt="" />
        </div>
        {/* <div className='gallery'>
            <img src={vision_img} alt="" />
        </div> */}
    </div>
  );
};

export default Vision;
