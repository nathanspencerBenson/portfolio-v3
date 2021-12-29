import{ React, useState, useEffect }from 'react';
import './ProjectCard.scss';
import { FiGithub } from 'react-icons/fi';
import { RiLiveLine } from 'react-icons/ri';



function ProjectCard(props) {
    console.log(props)
    
    return (
        <div className={`ProjectCard section`}>
            <button onClick={props.toggleProjects}>&#10006;</button>
            <div className="ProjectCard__container"  >
                <img src={props.image} ></img>
                <div className="text" >
                    <h1>{props.title}</h1>
                    <h2>{props.subTitle}</h2>
                    <img className="queryImage" src={props.image} ></img>
                    <p>{props.description}</p>
                    <ul>
                        {props.tech.map(item => <li>{item}</li>)}
                    </ul>
                    <div className="links">
                        <a href={props.github} target="_blank"><FiGithub size={30} style={{marginRight: '5px'}} />Repo</a>
                        <a href={props.demo} target="_blank"><RiLiveLine size={30} style={{marginRight: '5px'}}/>Demo</a>
                    </div>

                </div>
                
            </div>
            
        </div>
            
       
    )
}

export default ProjectCard
