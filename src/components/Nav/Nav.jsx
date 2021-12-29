import React, { useState } from 'react';
import './Nav.scss';
import {FiGithub} from 'react-icons/fi';
import Hamburger from './Hamburger/Hamburger';

const Nav = ( {displayProjects, toggleProjects } ) => {
   
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const toggle = () => {
        if(displayProjects) {
            toggleProjects()
        }
    }

   
    return (
        <nav>
            <ul className="menu">
                <li><a className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='/'>Home</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a onClick={toggle} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Work'>Projects</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
                <li><a onClick={toggle} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Skills'>Skills</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a onClick={toggle} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#About'>About</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
                <li><a onClick={toggle} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Contact'>Contact</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
            </ul>
            <div className="logo"></div>
            <div>
                <a className={`${displayProjects ? ' github__logo displayProjectsTrue' : 'github__logo'}`} href='https://github.com/nathanspencerBenson'><FiGithub size={25} />Github </a>
            </div>
            <Hamburger hamburgerOpen={hamburgerOpen} toggleHamburger={toggleHamburger} />
            <div className={`side-menu ${!hamburgerOpen ? 'hidden' : ''}`}>
            <ul>
                <li><a className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='/'>Home</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a onClick={toggle, toggleHamburger} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Work'>Projects</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
                <li><a onClick={toggle, toggleHamburger} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Skills'>Skills</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
                <li><a onClick={toggle, toggleHamburger} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#About'>About</a><div className="border" style={{transform: 'rotate(-3deg)'}}></div></li>
                <li><a onClick={toggle, toggleHamburger} className={`${displayProjects ? 'displayProjectsTrue' : ''}`} href='#Contact'>Contact</a><div className="border" style={{transform: 'rotate(3deg)'}}></div></li>
            </ul>

            </div>
            
        </nav>
    )
}

export default Nav
