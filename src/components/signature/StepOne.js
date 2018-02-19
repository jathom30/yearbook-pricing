import React, { Component } from 'react';

import OneIcon from '../../assets/OneIcon';

export default class StepOne extends Component {
  render() {

    const { quantitySignature, quantitySignatureChange, printerQuote, printerQuoteChange, signatureQuoteInfo, preferredProfit, preferredProfitChange } = this.props;

    return(
      <div className="step-one">
        <div className="step-title">
          <OneIcon />
          <h2>Section One</h2>
        </div>
        <div className="step-info">
          <p>Quantity of books requested:</p>
          <input id="quantity-signature" type="number" value={quantitySignature} onChange={quantitySignatureChange} placeholder="100" />
          <p>Printer's quoted price:</p>
          <span>$</span><input id="quote-signature" type="number" value={printerQuote} onChange={printerQuoteChange} placeholder="1000" />
          <p>Preferred Profit:</p>
          <span>$</span><input type="number" value={preferredProfit} onChange={preferredProfitChange} placeholder="1000" />

          { signatureQuoteInfo }
        </div>
      </div>
    );
  }
}