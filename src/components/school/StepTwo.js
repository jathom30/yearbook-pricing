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
            <h2>A List of Things</h2>
            <p>Staff List</p>
            <p>Team/Group photos</p>
            <p><a href="https://www.dropbox.com/sh/tjwz3xcryhzh39h/AAAMwS_AzFmYYyaC6V7aTuN7a?dl=0" target="_blank" rel="noopener noreferrer">Choose Cover and Page Design</a></p>
            <p>Due Date is primarily up to the school, but we recommend aiming to have the books arrive at the school 2-4 weeks before the last day of school.</p>
            <p>The printer needs no more than four weeks to print the books, so the yearbook should be ready to send to the printer at least <strong>6 weeks</strong> prior to school getting out for the summer.</p>
            <h4>Suggested due dates for 2018-2019 JCPS school year</h4>
            <ul>
              <li>Last day for new media: Thursday, April 11</li>
              <li>Due to Printer: Thursday, April 18</li>
              <li>Projected Delivery: Thursday, May 9</li>
              <li>Last Day of School:  Thursday, May 23</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}