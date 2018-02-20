import React, { Component } from 'react';

import TwoIcon from '../../assets/TwoIcon';

export default class StepTwo extends Component {
  render() {
    const { profitValue, profitValueChange, signatureProfit } = this.props;
    return(
      <div className="step-two">
        <div className="step-title">
          <TwoIcon />
          <h2>Section Two</h2>
        </div>
        <div className="step-info">
        <p>Set Price Per Book:</p>
          <span>$</span><input id="price-set" className="inputs" type="number" placeholder="10" value={profitValue} onChange={profitValueChange} />
          
          {signatureProfit}

        </div>
      </div>
    );
  }
}