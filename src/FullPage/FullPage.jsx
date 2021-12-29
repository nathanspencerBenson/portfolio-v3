import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import LandingPage from '../Pages/LandingPage/LandingPage';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Work from '../Pages/Work/Work';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';

const Fullpage = (props) => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
        console.log('fullPage', props);
       
      return (
          
        <ReactFullpage.Wrapper>
            <LandingPage/>
            <Work toggleProjects={props.toggleProjects} />
            <Skills />
            <About />
            <Contact />
            <Projects toggleProjects={props.toggleProjects} displayProjects={props.displayProjects}/>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;