import React from 'react';
import './Projects.scss';
import ProjectCard from './ProjectCard/ProjectCard';
import ReactFullpage from '@fullpage/react-fullpage';
import ProjectsData from './ProjectsData';
import coinmoon from '../../Assets/coinmoon.png';
import Nav from '../../components/Nav/Nav';


const Projects = (props) => (
    <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

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
            
            {/* /* <ProjectCard toggleProjects={props.toggleProjects} background={'#4d1ca8'} image={coinmoon}/>
            <ProjectCard toggleProjects={props.toggleProjects} background={'orange'} textBackground={'#C27E00'}/>
            <ProjectCard toggleProjects={props.toggleProjects} background={'orange'}/>
            <ProjectCard toggleProjects={props.toggleProjects}/>
            <ProjectCard toggleProjects={props.toggleProjects}/> */}
           
        </ReactFullpage.Wrapper>
        </div>
      );
    }}
  />
   
);

export default Projects;
