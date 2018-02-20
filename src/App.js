import React, { Component } from 'react';
import 'normalize.css';
import './App.css';
import { TimelineMax, Elastic, Sine } from 'gsap';

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
      profitValue: '',
      passwordValue: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.returnClick = this.returnClick.bind(this);
    this.handlePageCount = this.handlePageCount.bind(this);
    this.handleBookQuantity = this.handleBookQuantity.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.passwordButton = this.passwordButton.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.quantitySignatureChange = this.quantitySignatureChange.bind(this);
    this.printerQuoteChange = this.printerQuoteChange.bind(this);
    this.preferredProfitChange = this.preferredProfitChange.bind(this);
    this.profitValueChange = this.profitValueChange.bind(this);
  }

  //Animations
  //move icons out
  iconsOut() {
    const tl = new TimelineMax()
    tl
    .to(".panel-holder", .5, {x: '-300%', ease:Sine.easeInOut})
    .set(".panel-holder h1" , {y: '-260%', color: 'white', scale: 2, textShadow: '1px 1px 5px black'})
    .set("#main-icon", {scale: .75})
  }
  //slide in new icon and steps
  slideInSteps() {
    const tl = new TimelineMax()
    tl
    .fromTo(".steps", .4, {x: '100%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease:Elastic.easeOut.config(1.2, 1)})
    .fromTo(".step-title svg", 1.1, {rotation: -20}, {rotation: 0, ease:Elastic.easeOut.config(1.2, .3)}, 0.1)
    .fromTo(".lock-icon", 1.1, {rotation: -20}, {rotation: 0, ease:Elastic.easeOut.config(1.2, .3)}, 0.1)
    .fromTo(".panel-holder", .5, {x: '0%', y: '100%'}, {x:'0%', y:'0%', ease:Elastic.easeOut.config(1.2, .5)}, 0)
  }
  //return icons
  returnTitleIcon() {
    const tl = new TimelineMax();
    tl 
      .to(".steps", .5, {x: '200%'})
      .to(".panel-holder", .5, {y: '-200%'}, 0)
      .set(".panel-holder h1", {y:'0%', color: '#373b5d', scale: 1, textShadow: 'none'})
      .set("#main-icon", {x:'0%', scale: 1})
      .fromTo(".panel-holder", .5, {y: '0%', x: '-200%'}, {x: '0%'})
  }

  //show proper page Side
  handleClick(e) {
    this.setState({
      shifted: true,
    });
    //slide icons out
    this.iconsOut();
    //click school, then slide in Side with title icon
    if (e.target.className === 'panel-holder school') {
      //timeout func to delay setState
      setTimeout(function() {
        this.slideInSteps();
        this.setState({
          showSchool: true,
          showSignature: false,
          showSchoolSteps: true,
          showSignatureSteps: false,
        });
      }.bind(this), 500)
    } 
    if (e.target.className === 'panel-holder signature') {
      setTimeout(function() {
        this.slideInSteps();
        this.setState({
          showSignature: true,
          showSchool: false,
          showSignatureSteps: true,
          showSchoolSteps: false,
        });
      }.bind(this), 500)
    } 
  }


  returnClick(e) {
    this.returnTitleIcon();
    setTimeout(function() { 
      this.setState({
        shifted: false,
        showSchool: true,
        showSignature: true,
        showSchoolSteps: false,
        showSignatureSteps: false,
      });
     }.bind(this), 1000);
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
      quantitySignature: '',
      printerQuote: '',
      preferredProfit: '',
      profitValue: '',
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
    let signatureQuoteInfo = null;
    // if minimum and recommended is not a number, show nothing
    if (!isNaN(minimum) && !isNaN(recommended) && minimum !== Infinity && recommended !== Infinity) {
      signatureQuoteInfo =<div className="quote-range">
                            <h3>Price Per Book</h3>
                            <p>Minimum to break even: <strong>${minimum}</strong></p>
                            <p>Recommended for desired profit: <strong>${recommended}</strong></p>
                          </div>
    }
    return signatureQuoteInfo
  }

  // Signature Step Two Input Form
  profitValueChange(e) {
    this.setState({
      profitValue: e.target.value,
    });
  }

  createSignatureProfit() {
    const { printerQuote, quantitySignature, profitValue } = this.state;
    let profit = quantitySignature * profitValue - printerQuote;
    let profitInfo = null;
    //if any of the inputs are blank, don't show profit results
    if (quantitySignature !== '' && profitValue !== '' && printerQuote !== '') {
    profitInfo =<div className="quote-range">
                  <h3>Total Profits at set Price</h3>
                  <p><strong>${profit}</strong></p>
                </div>
    }
    return profitInfo;
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
  }
  //submit password on 'enter'
  submitPassword(e) {
    if (e.keyCode === 13) {
      if (this.state.passwordValue === 'arnold4121') {
        this.setState({
          password: false,
        });
      }
    }
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
      profitValue,
    } = this.state;

    // check for multiple of four pageCount
    let pageCountError = this.pageCountCheck();

    //check for 100 min on bookCount
    let bookQuantityError = this.bookQuantityCheck();
    
    //add averages to school page
    let averages = this.createAverage();

    //add signature price points to signature page
    let signatureQuoteInfo = this.createSignatureQuotes();
    
    //add custom profit to step two of signature page
    let signatureProfit = this.createSignatureProfit();

    return (
      <div className="App" >
        <Header 
          returnClick={this.returnClick} />

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
            profitValue={profitValue}
            profitValueChange={this.profitValueChange}
            signatureProfit={signatureProfit}
            
            password={password}
            passwordValue={passwordValue}
            passwordInput={this.passwordInput}
            passwordButton={this.passwordButton}
            submitPassword={this.submitPassword}

            resetInputs={this.resetInputs}
          />
        </div>

        <div className="footer">© copyright 2017 
        </div>

      </div>
    );
  }
}

