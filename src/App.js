import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
// import School from './components/School';
// import Signature from './components/Signature';
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
      pageCount: '',
      bookQuantity: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.returnClick = this.returnClick.bind(this);
    this.handlePageCount = this.handlePageCount.bind(this);
    this.handleBookQuantity = this.handleBookQuantity.bind(this);
    this.resetInputs = this.resetInputs.bind(this);
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
  averageButton(e) {
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
    if (schoolAverage === Infinity) {
      averages = null;
    } else {
      averages= <div className="school-quote-range">
                  <h3>Price Quotes (per book)</h3>
                  <p>Average cost per book: <strong>${schoolAverage}</strong></p>
                  <div className="school-quote-high-low">
                    <p>Minimum cost per book: <strong>${schoolMin}</strong></p>
                    <p>Maximum cost per book: <strong>${schoolMax}</strong></p>
                    <p className="details">Average costs are built off available data. Print prices have fluctuated somewhat in the past and the above values represent the likely range the quote can move between.</p>
                  </div>
                </div>
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
      bookQuantity 
    } = this.state;

    // check for multiple of four pageCount
    let pageCountError = null;
    if (pageCount % 4 !== 0) {
      pageCountError =<div className="error-warning">
                        <p>Must be a multiple of four</p>
                      </div>;
    }

    //check for 100 min on bookCount
    let bookQuantityError = null;
    if(bookQuantity > 1 && bookQuantity < 100) {
      bookQuantityError=<div className="error-warning">
                          <p>Quantity must be at least 100</p>
                        </div>
    }

    //add averages to school page
    let averages = null;
    if (pageCount !== '' && bookQuantity !== '') {
      averages =<div>{this.averageButton()}</div>
    }

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
            averageButton={this.averageButton}
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
          />
        </div>

        <div className="footer">© copyright 2017 
        </div>

      </div>
    );
  }
}

