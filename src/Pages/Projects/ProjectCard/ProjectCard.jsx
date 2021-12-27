import{ React, useState, useEffect }from 'react';
import './ProjectCard.scss';
import { FiGithub } from 'react-icons/fi';
import { RiLiveLine } from 'react-icons/ri';
import coinmoon from '../../../Assets/coinmoon.png';


function ProjectCard(props) {
    
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
       if(props.reverse == 'yes'){
           setReverse(true)
       }
    }, [])
    
    
    return (
        <div className={`ProjectCard ${reverse ? 'reverse' : ''}`}>
            <button onClick={props.toggleProjects}>&#10006;</button>
            <a href="#">
                <img src={coinmoon}></img>
            </a>
            <div className="projectCard__text">
                <h2>Featured Project</h2>
                <h1>Coin Moon</h1>
                <p className={`${reverse ? 'margin-right' : 'margin-left'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum laborum dolore ad cupiditate eius molestiae, eos, animi beatae recusandae soluta hic fuga dolores id ullam maiores sequi dignissimos temporibus!</p>
                <ul>
                    <li>Vs Code</li>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <ul>
                    <li><a href='#'><FiGithub size={30} style={{marginRight: '5px'}} />Repo</a></li>
                    <li><a href='#'><RiLiveLine size={30} style={{marginRight: '5px'}}/>Demo</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default ProjectCard
