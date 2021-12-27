import React from 'react';
import './LandingPage.scss';
import freelancing from '../../Assets/freelancing.svg';
import Arrow from '../../components/Arrow/Arrow';



class LandingPage extends React.Component {
//     constructor() {
//       super()
//       this.vantaRef = React.createRef()
//     }
//     componentDidMount() {
//       this.vantaEffect = RINGS({
//         el: this.vantaRef.current,
//         mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0xe317e3
//       })
//     }
//     componentWillUnmount() {
//       if (this.vantaEffect) this.vantaEffect.destroy()
//     }

    render(props) {
    
      return(
       <div className="LandingPage section" >
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
