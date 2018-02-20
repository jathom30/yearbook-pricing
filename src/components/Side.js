import React, { Component } from 'react';

import SchoolSteps from './SchoolSteps';
import SignatureSteps from './SignatureSteps';

import Panel from './Panel';

export default class Side extends Component {
  render() {
    const { 
      data, 
      shifted, 
      handleClick, 
      showSteps, 
      returnClick, 
      showSchool, 
      showSignature, 
      pageCount, 
      onChange, 
      handlePageCount, 
      bookQuantity, 
      handleBookQuantity, 
      averageButton, 
      pageCountError,
      bookQuantityError,
      averages, 
      resetInputs,
      password,
      passwordValue,
      passwordInput,
      passwordButton,
      submitPassword,
      quantitySignature,
      quantitySignatureChange,
      printerQuote,
      printerQuoteChange,
      signatureQuoteInfo,
      preferredProfit,
      preferredProfitChange,
      profitValue,
      profitValueChange,
      signatureProfit,
    } = this.props;

    //step creation
    let steps = null;
    let panelHolderClass = 'panel-holder';
    let panelClass = "panel";
    let panelStyle = {display: 'flex'};

    //steps fill for school data
    if (data.title === "School") {
      steps = <SchoolSteps
                showSteps={showSteps}
                returnClick={returnClick}
                pageCount={pageCount}
                onChange={onChange}
                handlePageCount={handlePageCount}
                bookQuantity={bookQuantity}
                handleBookQuantity={handleBookQuantity}
                averageButton={averageButton}
                pageCountError={pageCountError}
                bookQuantityError={bookQuantityError}
                averages={averages}
                resetInputs={resetInputs}
              />
      panelHolderClass += ' school';
      panelClass += ' school';
      //hide signature if school is clicked
      if (!showSchool) {
        panelClass += ' hide';
        panelStyle = {display: 'none'};
      }
    }

    //steps fill for signature data
    // if you click on Signature
    if (data.title === "Signature") {
        steps = <SignatureSteps 
                  showSteps={showSteps}
                  returnClick={returnClick}

                  password={password}
                  passwordValue={passwordValue}
                  passwordInput={passwordInput}
                  passwordButton={passwordButton}
                  submitPassword={submitPassword}

                  quantitySignature={quantitySignature}
                  quantitySignatureChange={quantitySignatureChange}
                  printerQuote={printerQuote}
                  printerQuoteChange={printerQuoteChange}
                  preferredProfit={preferredProfit}
                  preferredProfitChange={preferredProfitChange}
                  signatureQuoteInfo={signatureQuoteInfo}
                  profitValue={profitValue}
                  profitValueChange={profitValueChange}
                  signatureProfit={signatureProfit}

                  resetInputs={resetInputs}
                />
        panelHolderClass += ' signature';
        panelClass += ' signature';
      //hide school if school is clicked
      if (!showSignature) {
        panelClass += ' hide';
        panelStyle = {display: 'none'};
      }
    }



    return(
      <div className={panelClass} style={panelStyle}>
        <div className={panelHolderClass} onClick={handleClick} style={shifted ? {pointerEvents: 'none'} : {} }>
          <Panel 
            data={data} 
            shifted={shifted} 
            handleClick={handleClick}
          />
        </div>

        {steps}
        
      </div>
    );
  }
}