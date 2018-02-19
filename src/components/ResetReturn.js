import React, { Component } from 'react';

export default class ResetReturn extends Component {
  render() {
    const { returnClick } = this.props;
    return(
      <div className="button">
        <button className="return-button" onClick={returnClick}>Back</button>
      </div>
    );
  }
}