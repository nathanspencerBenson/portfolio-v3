import React from 'react';
import './Nav.scss';
import {FiGithub} from 'react-icons/fi';

function Nav(props) {
    return (
        <nav className={props.classname}>
            <ul>
                <li><a href='#'>Home</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a href='#'>Projects</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
                <li><a href='#'>About</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a href='#'>Contact</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
            </ul>
            <div className="logo"></div>
            <div>
                <a href='https://github.com/nathanspencerBenson'><FiGithub size={25} />Github </a>
            </div>
            
        </nav>
    )
}

export default Nav
