import React, { Component } from 'react';

import OneIcon from '../assets/OneIcon';
import TwoIcon from '../assets/TwoIcon';
import ResetReturn from './ResetReturn';

export default class SignatureSteps extends Component {
  render() {
    const { showSteps, returnClick } = this.props;

    return(
      <div className={showSteps ? "steps" : "steps hide"}>
        <div className="step-one">
          <div className="step-title">
            <OneIcon />
            <h2>Section One</h2>
          </div>
          <div className="step-info">
            <p>Quantity of books requested:</p>
            <input id="quantity-signature" type="number" placeholder="100" />
            <p>Printer's quoted price:</p>
            <span>$</span><input id="quote-signature" type="number" placeholder="1000" />
            <button id="signature-submit" type="button">Submit</button>
            <p id="signature-minimum">Minimum:</p>
            <p id="signature-recommended">Recommended:</p>
          </div>
        </div>

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

        <ResetReturn returnClick={returnClick}/>
      </div>
    );
  }
}