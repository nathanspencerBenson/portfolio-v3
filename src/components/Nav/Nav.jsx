import React from 'react';
import './Nav.scss';
import {FiGithub} from 'react-icons/fi';

const Nav = ( {displayProjects, toggleProjects } ) => {
    const toggle = () => {
        if(displayProjects) {
            toggleProjects()
        }
    }

   
    return (
        <nav>
            <ul>
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
            
        </nav>
    )
}

export default Nav
