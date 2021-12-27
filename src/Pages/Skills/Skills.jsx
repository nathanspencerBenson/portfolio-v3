import React from 'react';
import './Skills.scss';
import { GiCompass } from 'react-icons/gi';
import { FaHtml5, FaCss3Alt, FaSass, FaReact } from 'react-icons/fa';
import {  SiJavascript } from 'react-icons/si';
import Arrow from '../../components/Arrow/Arrow';



function About() {
    return (
        <div className="Skills section" id="Skills">
            
                <h1>SKILLS</h1>

                <div className="skills__container">
                    <div><FaHtml5 style={{color: '#FD5723', background: 'white'}}  />HTML</div>
                    <div><FaCss3Alt style={{color: '#2197F3', background: 'white'}}/>CSS</div>
                    <div><SiJavascript style={{color: '#E3BB41'}} />JAVASCRIPT</div>
                    <div><FaSass style={{color: '#D0679A'}}  />SCSS</div>
                    <div><FaReact style={{color: '#5CBDD7'}} />REACT</div>
                    
                </div>
            
            <Arrow />
            
            
        </div>
    )
}

export default About
