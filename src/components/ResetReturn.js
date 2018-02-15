import React, { Component } from 'react';

export default class ResetReturn extends Component {
  render() {
    const { returnClick } = this.props;
    return(
      <div className="button">
        <button className="reset">Reset</button>
        <button className="return" onClick={returnClick}>Back</button>
      </div>
    );
  }
}