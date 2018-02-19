import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Side from './components/Side';

import { SCHOOL, SIGNATURE } from "./iconData";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      school: SCHOOL,
      signature: SIGNATURE,
      shifted: false,
      showSchool: true,
      showSignature: true,
      showSchoolSteps: false,
      showSignatureSteps: false,
      password: true,
      pageCount: '',
      bookQuantity: '',
      preferredProfit: '',
      printerQuote: '',
      quantitySignature: '',
      passwordValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.returnClick = this.returnClick.bind(this);
    this.handlePageCount = this.handlePageCount.bind(this);
    this.handleBookQuantity = this.handleBookQuantity.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.passwordButton = this.passwordButton.bind(this);
    this.quantitySignatureChange = this.quantitySignatureChange.bind(this);
    this.printerQuoteChange = this.printerQuoteChange.bind(this);
    this.preferredProfitChange = this.preferredProfitChange.bind(this);
  }

  handleClick(e) {
    this.setState({
      shifted: true,
    });
    if (e.target.className === 'panel-holder school') {
      this.setState({
        showSchool: true,
        showSignature: false,
        showSchoolSteps: true,
        showSignatureSteps: false,
      });
    } 
    if (e.target.className === 'panel-holder signature') {
      this.setState({
        showSignature: true,
        showSchool: false,
        showSignatureSteps: true,
        showSchoolSteps: false,
      });
    } 
  }

  returnClick(e) {
    this.setState({
      shifted: false,
      showSchool: true,
      showSignature: true,
      showSchoolSteps: false,
      showSignatureSteps: false,
    });
  }

  // School Side - section one 
  handlePageCount(e) {
    this.setState({
      pageCount: e.target.value
    });
  }
  handleBookQuantity(e) {
    this.setState({
      bookQuantity: e.target.value
    });
  }

  //check for 100 min on bookCount
  bookQuantityCheck() {
    let bookQuantityError = null;
    //if bookQuantity is zero
    if (this.state.bookQuantity === '') {
      bookQuantityError = null;
      //if bookQuantity is less than 100
    } else if (this.state.bookQuantity < 100) {
      bookQuantityError=<div className="error-warning"><p>Quantity must be at least 100</p></div>;
    }
    return bookQuantityError
  }
  //check page count for multiple of four
  pageCountCheck(){
    let pageCountError = null;
    //if pageCount is zero
    if (this.state.pageCount === '') {
      pageCountError = null;
      //if bookQuantity is not divisible by four
    } else if (this.state.pageCount % 4 !== 0) {
      pageCountError =<div className="error-warning"><p>Must be a multiple of four</p></div>;
    }
    return pageCountError
  }

  //create average div 
  createAverage() {
    const pageCount = this.state.pageCount;
    const bookCount = this.state.bookQuantity;
    const pageAverageCost = 0.208058822510823;
    const pageMinCost = 0.1195;
    const pageMaxCost = 0.3775;

    //Math.round to two decimals on averages
    const schoolAverage = Math.round(((pageCount * bookCount * pageAverageCost + 1000) / bookCount) * 100) / 100;
    const schoolMin = Math.round(((pageCount * bookCount * pageMinCost + 1000) / bookCount) * 100) / 100;
    const schoolMax = Math.round(((pageCount * bookCount * pageMaxCost + 1000) / bookCount) * 100) / 100;

    //render school price quote section as needed
    let averages = null;
    let pageCountError = this.pageCountCheck();
    let pageQuantityError = this.bookQuantityCheck();
    // if schoolAverage is Infinity(0/0) or pageCount is not empty or pageQuantity is not empty
    if (schoolAverage === Infinity || pageCountError !== null || pageQuantityError !== null) {
      averages = null;
    } else {
      averages= <div className="quote-range">
                  <h3>Price Quotes (per book)</h3>
                  <p>Average cost per book: <strong>${schoolAverage}</strong></p>
                  <div className="school-quote-high-low">
                    <p>Minimum cost per book: <strong>${schoolMin}</strong></p>
                    <p>Maximum cost per book: <strong>${schoolMax}</strong></p>
                    <p className="details">Average costs are built off available data. Print prices have fluctuated somewhat in the past and the above values represent the likely range the quote can move between.</p>
                  </div>
                </div>;

    }
    return averages
  }

  // Reset button to inputs
  resetInputs(e) {
    this.setState({
      pageCount: '',
      bookQuantity: '',
    });
  }

  // Signature Step One Input Form
  quantitySignatureChange(e) {
    this.setState({
      quantitySignature: e.target.value,
    });
  }
  printerQuoteChange(e) {
    this.setState({
      printerQuote: e.target.value,
    });
  }
  preferredProfitChange(e) {
    this.setState({
      preferredProfit: e.target.value,
    });
  }

  createSignatureQuotes() {
    const { printerQuote, quantitySignature, preferredProfit } = this.state;
    let minimum = Math.round((printerQuote / quantitySignature) * 100) / 100;
    let recommended = Math.round(((parseInt(printerQuote, 10) + parseInt(preferredProfit, 10)) / quantitySignature) * 100 ) / 100;
    let signatureQuoteInfo =<div className="quote-range">
                              <h3>Price Per Book</h3>
                              <p>Minimum to break even: <strong>${minimum}</strong></p>
                              <p>Recommended for desired profit: <strong>${recommended}</strong></p>
                            </div>
    return signatureQuoteInfo
  }

  //password input and button on Signature Side
  passwordInput(e) {
    this.setState({
      passwordValue: e.target.value,
    });
  }
  passwordButton(e) {
    // if password is correct show signature steps
    if (this.state.passwordValue === 'arnold4121') {
      this.setState({
        password: false,
      });
    }
    // console.log(this.state.passwordValue);
  }

  render() {
    const { 
      school, 
      signature, 
      shifted, 
      showSchool, 
      showSignature, 
      showSignatureSteps, 
      showSchoolSteps, 
      pageCount, 
      bookQuantity,
      password,
      passwordValue,
      printerQuote,
      quantitySignature,
      preferredProfit,
    } = this.state;

    // check for multiple of four pageCount
    let pageCountError = this.pageCountCheck();

    //check for 100 min on bookCount
    let bookQuantityError = this.bookQuantityCheck();
    
    //add averages to school page
    let averages = this.createAverage();

    let signatureQuoteInfo = this.createSignatureQuotes();
    

    return (
      <div className="App" >
        <Header />

        <div className="panels">
          {/* School Side */}
          <Side 
            data={school} 
            shifted={shifted}
            showSchool={showSchool}
            showSignature={showSignature}
            handleClick={this.handleClick} 
            showSteps={showSchoolSteps}
            returnClick={this.returnClick}
            pageCount={pageCount}
            bookQuantity={bookQuantity}
            pageCountError={pageCountError}
            bookQuantityError={bookQuantityError}
            averages={averages}

            handlePageCount={this.handlePageCount}
            handleBookQuantity={this.handleBookQuantity}
            resetInputs={this.resetInputs}
          />
          
          {/* Signature Side */}
          <Side 
            data={signature} 
            shifted={shifted}
            showSchool={showSchool}
            showSignature={showSignature}
            handleClick={this.handleClick} 
            showSteps={showSignatureSteps}
            onClick={this.hideSection}
            returnClick={this.returnClick}
            
            quantitySignature={quantitySignature}
            quantitySignatureChange={this.quantitySignatureChange}
            printerQuote={printerQuote}
            printerQuoteChange={this.printerQuoteChange}
            preferrefProfit={preferredProfit}
            preferredProfitChange={this.preferredProfitChange}
            signatureQuoteInfo={signatureQuoteInfo}
            
            password={password}
            passwordValue={passwordValue}
            passwordInput={this.passwordInput}
            passwordButton={this.passwordButton}
          />
        </div>

        <div className="footer">© copyright 2017 
        </div>

      </div>
    );
  }
}

