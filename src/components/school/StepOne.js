import React, { Component } from 'react';

import OneIcon from '../../assets/OneIcon';

export default class StepOne extends Component {
  render() {
    const { 
      pageCount, 
      handlePageCount, 
      bookQuantity, 
      handleBookQuantity, 
      pageCountError, 
      bookQuantityError,
      averages,
      resetInputs,
    } = this.props;

    return(
      <div className="step-one">
        <div className="step-title">
          <OneIcon />
          <h2>Section One</h2>
        </div>
        <div className="step-info">
          <h3>Page Count</h3>
          <span>(must be a multiple of four):</span>
          <div className="input-and-error">
            <input id="page-count" className="inputs" type="number" value={pageCount} onChange={handlePageCount} placeholder="44"/>
            {pageCountError}
          </div>
          <h3>Quantity requested:</h3>
          <div className="school-quantity-form">
            <div className="input-and-error">
              <input id="school-quantity" className="inputs" type="number" min="100" value={bookQuantity} onChange={handleBookQuantity} placeholder="200" />
              {bookQuantityError}
            </div>
          </div>

            {/* output averages once input is received */}
            {averages}

          <div className={averages ? '' : 'hide'}>
            <button type="button" onClick={resetInputs}>reset</button>
          </div>

        </div>
      </div>
    );
  }
}