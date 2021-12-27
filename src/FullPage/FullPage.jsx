import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import LandingPage from '../Pages/LandingPage/LandingPage';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Work from '../Pages/Work/Work';
import Skills from '../Pages/Skills/Skills';

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
            <Work showProjects={props.showProjects} />
            <Skills />
            <About />
            <Contact />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;