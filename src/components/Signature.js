import React, { Component } from 'react';

import Panel from './Panel';
import SignatureSteps from './SignatureSteps';

export default class Signature extends Component {

  render() {
    const { data, shifted, showSignature, handleClick, showSteps, returnClick } = this.props;

    return(
      <div className={ showSignature ? 'panel' : 'panel hide'}>
        <div className="signature panel-holder" onClick={handleClick}>
          <Panel 
            data={data}
            shifted={shifted}
            handleClick={handleClick}
          />
        </div>

        <SignatureSteps 
          showSteps={showSteps}
          returnClick={returnClick}
        />

      </div>
    );
  }
}