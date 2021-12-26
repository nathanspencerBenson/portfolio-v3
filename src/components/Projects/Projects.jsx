import React from 'react';
import './Projects.scss';
import launchProject from '../../assets/launch-project.svg';
import PageGuide from '../PageGuide/PageGuide';
import Arrow from '../Arrow/Arrow';

function Projects() {
    return (
        <div className="Projects">
            <div className="projects__landingPage">
                <PageGuide />
                <img src={launchProject} />
                <div>
                <h1>WORK</h1>
                <h2>Welcome To My World</h2>
                <p>Scroll right to see my featured projects</p>
                </div>
            </div>  
            <Arrow />
        </div>
    )
}

export default Projects
