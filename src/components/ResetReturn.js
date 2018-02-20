import React, { Component } from 'react';

export default class ResetReturn extends Component {
  render() {
    const { returnClick, resetInputs, signatureProfit, averages } = this.props;
    return(
      <div className="reset-return">
        <div className={signatureProfit || averages ? 'button' : 'hide'}>
          <button className="reset-button" type="button" onClick={resetInputs}>reset</button>
        </div>
        <div className="button">
          <button className="return-button" onClick={returnClick}>Back</button>
        </div>
      </div>
    );
  }
}