import './App.scss';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav/Nav';
import ScrollableContainer from "react-full-page-scroll";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';





function App() {
  return (
    <div className="App">
      <Nav />
      <ScrollableContainer animationTime={100}>
      <LandingPage />
      <About />
      <Projects />
      <Contact />
      </ScrollableContainer>
        
    </div>
  );
}

export default App;
