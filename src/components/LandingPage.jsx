import React from 'react';
import './LandingPage.scss';
import RINGS from 'vanta/dist/vanta.rings.min';
import { IoIosArrowDown } from 'react-icons/io';
import PageGuide from './PageGuide/PageGuide';
import Arrow from './Arrow/Arrow';


class LandingPage extends React.Component {
    constructor() {
      super()
      this.vantaRef = React.createRef()
    }
    componentDidMount() {
      this.vantaEffect = RINGS({
        el: this.vantaRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xe317e3
      })
    }
    componentWillUnmount() {
      if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
      return(
       <div className="LandingPage" ref={this.vantaRef}>
           <PageGuide />
          <h1> Hi! I'm Nathan Benson. <br />
                A Front-end Developer.
            </h1>
            <Arrow />
        
      </div>)
    }
  }

export default LandingPage
