import React, { Component } from 'react';

import StepOne from './school/StepOne';
import StepTwo from './school/StepTwo';
import ResetReturn from './ResetReturn';

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

        <ResetReturn returnClick={returnClick}/>
      </div>
    );
  }
}