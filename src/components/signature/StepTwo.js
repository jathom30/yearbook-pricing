import React, { Component } from 'react';

import TwoIcon from '../../assets/TwoIcon';

export default class StepTwo extends Component {
  render() {
    return(
      <div className="step-two">
        <div className="step-title">
          <TwoIcon />
          <h2>Section Two</h2>
        </div>
        <div className="step-info">
        <p>Set Price Per Book:</p>
          <span>$</span><input id="price-set" type="number" placeholder="10" />
          <button id="signature-price" type="button">Submit</button>
          <p id="signature-profit">Profit:</p>
        </div>
      </div>
    );
  }
}