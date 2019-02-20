import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { contact, contactShow } = this.props;
    return (
      <div className="footer">
        <h3 onClick={contact} >Contact</h3>
        <div className={`contact-info ${contactShow ? 'expand' : 'collapse'}`} >
          <p>Alex Clark</p>
          <p>email: <a href="mailto:signaturelouky@gmail.com?Subject=Yeabook%20Question">signaturelouky@gmail.com</a></p>
          <p>cell: <a href="tel:+1-502-896-1393" rel="nofollow">502-896-1393</a></p>
        </div>
        <p className="copyright">© copyright 2019</p>
      </div>
    );
  }
}