import React from 'react';
import './About.scss';
import {HiLocationMarker} from 'react-icons/hi';
import Arrow from '../../components/Arrow/Arrow';


function About() {
    return (
        <div className="About section" id="About">
            <div>
                <h1>ABOUT</h1>
                <h2><HiLocationMarker size={30} /> Munich, Germany</h2>
                <p>My name is Nathan, I'm a front-end developer deeply invested in the life-long learning mentality, I'm a developer who carries a keen eye for design in a user-first approach. My focus is in creating eye-catching designs on the JavaScript stack of React. When I'm not coding, you'll find me cooking, reading or eating. </p>
            </div>
            <Arrow />
            
            
        </div>
    )
}

export default About
