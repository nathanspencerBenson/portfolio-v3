import React from 'react';
import './LandingPage.scss';
import freelancing from '../../Assets/freelancing.svg';
import Arrow from '../../components/Arrow/Arrow';



class LandingPage extends React.Component {


    render(props) {
      
    
      return(
       <div className={`LandingPage section`}>
         <div className="LandingPage__content">
              <h1> Hi! I'm Nathan Benson. <br />
                  A Front-end Developer.
              </h1>
              <div className="image__container">
              <img src={freelancing}></img>
              <div className="colorBlock"></div>
              </div>
          </div>
           
            <Arrow />
           
            
         
            

        
      </div>)
    }
  }

export default LandingPage
