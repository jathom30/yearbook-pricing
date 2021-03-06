import React, { Component } from 'react';

import StepOne from './school/StepOne';
import StepTwo from './school/StepTwo';
// import ResetReturn from './ResetReturn';

export default class SchoolSteps extends Component {
  render() {
    const { 
      showSteps, 
      returnClick, 
      pageCount, 
      handlePageCount, 
      bookQuantity, 
      handleBookQuantity, 
      averageButton, 
      pageCountError, 
      bookQuantityError,
      averages,
      resetInputs,
    } = this.props;

    return(
      <div className={showSteps ? "steps" : "steps hide"}>

        <StepOne 
          pageCount={pageCount}
          handlePageCount={handlePageCount}
          bookQuantity={bookQuantity}
          handleBookQuantity={handleBookQuantity}
          averageButton={averageButton}
          pageCountError={pageCountError}
          bookQuantityError={bookQuantityError}
          averages={averages}
          resetInputs={resetInputs}
        />

        <StepTwo />

        <div className="reset-return">
          <div className="button">
            <button className="return-button" onClick={returnClick}>Back</button>
          </div>
        </div>

        {/* <ResetReturn returnClick={returnClick} resetInputs={resetInputs} averages={averages} /> */}
      </div>
    );
  }
}