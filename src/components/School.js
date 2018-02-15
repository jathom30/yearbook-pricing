import React, { Component } from 'react';

import Panel from './Panel';
import SchoolSteps from './SchoolSteps';

export default class School extends Component {
  
  render() {
    const { data, shifted, showSchool, handleClick, showSteps, returnClick } = this.props;


    return(
      <div className={ showSchool ? 'panel' : 'panel hide'}>
        <div className="school panel-holder" onClick={handleClick}>
          <Panel 
            data={data} 
            shifted={shifted} 
            handleClick={handleClick}
          />
        </div>

        <SchoolSteps
          showSteps={showSteps}
          returnClick={returnClick}
        />
        
      </div>
    );
  }
}