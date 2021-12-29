import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import ReactFullpage from '@fullpage/react-fullpage';
import ProjectsData from './ProjectsData';



const Projects = (props) => (
    <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} 

    render={({ state, fullpageApi }) => {
        


       
      return (
        <div className={`Projects ${!props.displayProjects ? '' : 'displayProjects'}`}>
        <ReactFullpage.Wrapper>

        {ProjectsData.map(((item,index) => {
            return(
              <ProjectCard 
                  toggleProjects={props.toggleProjects} 
                  title={item.title} image={item.image}
                  subTitle={item.subTitle} 
                  description={item.description} 
                  github={item.github} 
                  demo={item.demo} 
                  tech={item.tech}
              />)
              }
            )
          )
        }
            
  
           
        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
   
);

export default Projects;
