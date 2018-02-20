import React, { Component } from 'react';

import BookIcon from '../assets/BookIcon';

export default class Header extends Component {
  render() {
    const { returnClick } = this.props;
    return(
      <div className="header" onClick={returnClick}>
        <BookIcon />
        <div className="header-text">
          <h1>Signature Studio</h1>
          <h3>Yearbook Pricing</h3>
        </div>
      </div>
    );
  }
}