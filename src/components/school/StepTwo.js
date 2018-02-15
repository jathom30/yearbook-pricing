import React, { Component } from 'react';

import TwoIcon from '../../assets/TwoIcon';

export default class StepTwo extends Component {
  render() {
    return(
      <div className="step-two">
        <div className="step-title">
          <TwoIcon />
          <h2>Section Two</h2>
        </div>
        <div className="step-info">
          <div className="things-to-get">
            <h4>A List of Things</h4>
            <p>Staff List</p>
            <p>Team/Group photos</p>
            <p><a href="https://www.dropbox.com/sh/tjwz3xcryhzh39h/AAAMwS_AzFmYYyaC6V7aTuN7a?dl=0" target="_blank" rel="noopener noreferrer">Choose Cover and Page Design</a></p>
            <p>Due Date is up to the school, but we recommend aiming to have the books arrive at the school one month before the last day of school.</p>
            <p>The printer needs no more than four weeks to print the books, so the yearbook should be ready to send to the printer at least <strong>two months</strong> prior to school getting out for the summer.</p>
          </div>
        </div>
      </div>
    );
  }
}