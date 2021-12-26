import React from 'react';
import PageGuide from '../PageGuide/PageGuide';
import './About.scss';
import Typist from "react-typist";
import { GiCompass } from 'react-icons/gi'
import Arrow from '../Arrow/Arrow';

function About() {
    return (
        <div className="About">
            <PageGuide selected={[{}, {selected: true}, {}, {}]} />
            <div>
                <h1>ABOUT <div><GiCompass size={100} color={'gold'}/></div></h1>
                
                <h2>Explorer</h2>
                
                <p>My name is Nathan, I'm a front-end developer deeply invested in the life-long learning mentality, I'm a developer who carries a keen eye for design in a user-first approach. My focus is in creating eye-catching designs on the JavaScript stack of React. When I'm not coding, you'll find me cooking, reading or eating. </p>
            </div>
            <Arrow color={'white'} />
            
            
        </div>
    )
}

export default About
