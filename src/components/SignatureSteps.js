import React, { Component } from 'react';

import Password from './Password';
import StepOne from './signature/StepOne';
import StepTwo from './signature/StepTwo';
import ResetReturn from './ResetReturn';

export default class SignatureSteps extends Component {
  render() {
    const { 
      showSteps, 
      returnClick, 
      password, 
      passwordValue, 
      passwordInput, 
      passwordButton, 
      quantitySignature, 
      quantitySignatureChange, 
      printerQuote, 
      printerQuoteChange,
      signatureQuoteInfo,
      preferredProfit,
      preferredProfitChange,
    } = this.props;
    
    let stepsOrPassword = null;
    if (password) {
      stepsOrPassword = <Password 
                          passwordValue={passwordValue} 
                          passwordInput={passwordInput} 
                          passwordButton={passwordButton} />
    } else {
      stepsOrPassword = <div>
                          <StepOne 
                            quantitySignature={quantitySignature} 
                            quantitySignatureChange={quantitySignatureChange} 
                            printerQuote={printerQuote} 
                            printerQuoteChange={printerQuoteChange}
                            signatureQuoteInfo={signatureQuoteInfo}
                            preferredProfit={preferredProfit}
                            preferredProfitChange={preferredProfitChange} />
                          <StepTwo />
                        </div>
    }

    return(
      <div className={showSteps ? "steps" : "steps hide"}>

        { stepsOrPassword }  

        <ResetReturn returnClick={returnClick}/>
      </div>
    );
  }
}