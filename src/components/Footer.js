import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const { contact, contactShow } = this.props;
    return(
      <div className="footer">
        <h3 onClick={contact} >Contact</h3>
        <div className={`contact-info ${contactShow ? 'expand' : 'collapse'}`} >
          <p>Jeff Thomas</p>
          <p>email: <a href="mailto:jathom30@gmail.com?Subject=Yeabook%20Question">jathom30@gmail.com</a></p>
          <p>cell: <a href="tel:+1-502-439-1974" rel="nofollow">502-439-1974</a></p>
        </div>
        <p className="copyright">© copyright 2017</p>
      </div>
    );
  }
}