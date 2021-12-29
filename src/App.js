import {React, useState }from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import LandingPage from './Pages/LandingPage/LandingPage';
import Nav from './components/Nav/Nav';
import FullPage from './FullPage/FullPage';
import './App.css'
import Projects from './Pages/Projects/Projects';


function App() {

  
  const [displayProjects, setDisplayProjects] = useState(false);

  const toggleProjects = () => {
      setDisplayProjects(!displayProjects)
      console.log(displayProjects)
  }
  return (
  <div class="App">
    <Nav displayProjects={displayProjects} toggleProjects={toggleProjects} />
    <FullPage toggleProjects={toggleProjects} displayProjects={displayProjects}/>
    {/* <Projects showProjects={toggleProjects} displayProjects={displayProjects}/> */}
   
    
    
</div>
  )
  };

export default App;
