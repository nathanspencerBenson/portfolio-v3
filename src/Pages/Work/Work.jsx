import { React }from 'react';
import './Work.scss';
import launchProject from '../../Assets/launch-project.svg';
import Arrow from '../../components/Arrow/Arrow';





function Work(props) {

        console.log('work', props)
    return (
        <div className="Work section" id="Work">
            <div className="Work__landingPage">
                <img src={launchProject} />
                <div>
                    <h1>WORK</h1>
                    <img src={launchProject} />
                    <h2>Welcome To My World</h2>
                    <p>A collection of some of the Apps and websites I've built</p>
                    <button onClick={props.toggleProjects}>EXPLORE</button>
                    
                </div>
                <Arrow />
                
            </div>  
            
        </div>
    )
}

export default Work;
