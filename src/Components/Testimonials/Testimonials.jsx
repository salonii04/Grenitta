import React, { useRef } from 'react'
import './Testimonials.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'
// import user_1 from '../../assets/'
// import user_2 from '../../assets/'
// import user_3 from '../../assets/'
// import user_4 from '../../assets/'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transfrom = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transfrom = `translateX(${tx}%)`;
    }

  return (
    <div classname='testimonials' id="testimonials">
        <img src={next_icon} alt="" classname='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" classname='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            {/* <img src={user_1} alt="" /> */}
                            <div>
                                <h3>Doctor 1</h3>
                                <span>ortho</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolores laudantium provident quam delectus quisquam eos facilis debitis est nesciunt earum repellendus obcaecati recusandae dolorum deleniti iusto nam, sint quibusdam.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            {/* <img src={user_2} alt="" /> */}
                            <div>
                                <h3>Doctor 2</h3>
                                <span>ortho</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolores laudantium provident quam delectus quisquam eos facilis debitis est nesciunt earum repellendus obcaecati recusandae dolorum deleniti iusto nam, sint quibusdam.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            {/* <img src={user_3} alt="" /> */}
                            <div>
                                <h3>Doctor 3</h3>
                                <span>ortho</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolores laudantium provident quam delectus quisquam eos facilis debitis est nesciunt earum repellendus obcaecati recusandae dolorum deleniti iusto nam, sint quibusdam.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            {/* <img src={user_4} alt="" /> */}
                            <div>
                                <h3>Doctor 4</h3>
                                <span>ortho</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolores laudantium provident quam delectus quisquam eos facilis debitis est nesciunt earum repellendus obcaecati recusandae dolorum deleniti iusto nam, sint quibusdam.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials