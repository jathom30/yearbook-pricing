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
      wrongPassword,
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
      resetInputs,
    } = this.props;
    
    let stepsOrPassword = null;
    if (password) {
      stepsOrPassword = <div className={showSteps ? "steps" : "steps hide"}>
                          <Password 
                            passwordValue={passwordValue} 
                            wrongPassword={wrongPassword}
                            passwordInput={passwordInput} 
                            passwordButton={passwordButton}
                            submitPassword={submitPassword} />
                          <ResetReturn returnClick={returnClick} resetInputs={resetInputs} signatureProfit={signatureProfit}/>
                        </div>
    } else {
      stepsOrPassword = <div className={showSteps ? "steps" : "steps hide"}>
                          <StepOne 
                            quantitySignature={quantitySignature} 
                            quantitySignatureChange={quantitySignatureChange} 
                            printerQuote={printerQuote} 
                            printerQuoteChange={printerQuoteChange}
                            signatureQuoteInfo={signatureQuoteInfo}
                            preferredProfit={preferredProfit}
                            preferredProfitChange={preferredProfitChange} />

                          <StepTwo 
                            profitValue={profitValue}
                            profitValueChange={profitValueChange}
                            signatureProfit={signatureProfit}
                            resetInputs={resetInputs} />

                          <ResetReturn returnClick={returnClick} resetInputs={resetInputs} signatureProfit={signatureProfit}/>
                        </div>
    }

    return(
      <div>

        { stepsOrPassword }  

        {/* <ResetReturn returnClick={returnClick} resetInputs={resetInputs} signatureProfit={signatureProfit}/> */}
      </div>
    );
  }
}