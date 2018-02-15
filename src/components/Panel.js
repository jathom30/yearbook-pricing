import React, { Component } from 'react';
import { TimelineMax, Sine } from 'gsap';

import PanelIcon from '../assets/PanelIcon';
// import { SCHOOL, SIGNATURE } from '../iconData';


export default class Panel extends Component {

  shiftTitleIcon() {
    const tl = new TimelineMax();
    tl
      .to(".panel h1", 1, {y: '-210%', color: 'white', scale: 2, textShadow: '1px 1px 5px black', ease: Sine.easeInOut})
  }

  returnTitleIcon() {
    const tl = new TimelineMax();
    tl 
      .to(".panel h1", 1, {x:'0%', y:'0%', color: '#373b5d', scale: 1, textShadow: 'none', ease:Sine.easeInOut})
      .to("#main-icon", 1, {x:'0%', scale: 1, ease:Sine.easeInOut}, 0)
  }


  render() {
    const {data} = this.props;

    //if shifted is true, run animation
    if (this.props.shifted) {
      this.shiftTitleIcon();
    }

    //return to original position if shifted is false
    if (!this.props.shifted) {
      this.returnTitleIcon();
    }

    return(
      <div className="panel-detail">
          <PanelIcon data={data}/>
          <h1>{data.title}</h1>
      </div>
    );
  }
}