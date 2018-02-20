import React, { Component } from 'react';

import LockIcon from '../assets/LockIcon';

export default class Password extends Component {
  render() {
    const { passwordValue, passwordInput, passwordButton, submitPassword } = this.props;
    return(
      <div className="password">
        <LockIcon />
        <h2>Please, enter your password:</h2>
        <div className="password-inputs">
          <input id="password" type="password" placeholder="password" value={passwordValue} onChange={passwordInput} onKeyDown={submitPassword} />
          <button id="signature-password-button" type="button" onClick={passwordButton}>Submit</button>
        </div>
      </div>
    );
  }
}