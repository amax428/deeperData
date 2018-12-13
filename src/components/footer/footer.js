import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-page">
        <div className="footer-menu text-smaller text-center">
          <div className="row justify-content-around footer-margin">
            <div className="col-md-2 col-12">
              <a href="#">Candidates</a>
            </div>
            <div className="col-md-3 col-12">
            <a href="#">Side&nbsp;Hustlers</a>
            </div>
            <div className="col-md-3 col-12">
              <a href="#">Project&nbsp;Managers</a>
            </div>
            <div className="col-md-2 col-12">
              <a href="#">Register</a>
            </div>
            <div className="col-md-2 col-12">
              <a href="#">Login</a>
            </div>
            
          </div>
        </div>
        <div className="footer-mark text-center text-smallest">
            StrongHire.io&nbsp;&copy;&nbsp;Copyrights&nbsp;Protected&nbsp;2018.&nbsp;&nbsp;&nbsp;All Rights Reserved.
        </div>
        <div className="footer-watermark text-extra-big">
            Strong Hire
        </div>
      </div>
    )
  }
}
