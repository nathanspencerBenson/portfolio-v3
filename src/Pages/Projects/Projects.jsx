import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import ReactFullpage from '@fullpage/react-fullpage';


const Projects = (props) => (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
        console.log('Projects', props);
       
      return (
        <ReactFullpage.Wrapper>
            <div className={`Projects ${!props.displayProjects ? '' : 'displayProjects'}`}>
            <ProjectCard toggleProjects={props.showProjects}/>
            <ProjectCard toggleProjects={props.showProjects}/>
            <ProjectCard toggleProjects={props.showProjects}/>
            </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
    // return (
    //     <div className={`Projects ${props.showProjects ? 'displayProjects' : ''}`}>
    //         <ProjectCard toggleProjects={props.toggleProjects}/>
    //         <ProjectCard reverse={'yes'} toggleProjects={props.toggleProjects}/> 
    //         <ProjectCard reverse={'yes'} toggleProjects={props.toggleProjects}/> 
    //         <ProjectCard reverse={'yes'} toggleProjects={props.toggleProjects}/> 
    //         <ProjectCard reverse={'yes'} toggleProjects={props.toggleProjects}/> 
    //     </div>
    // )
);

export default Projects;
