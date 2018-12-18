import React, { Component } from 'react';
import brandIcon from '../../assets/brand.png';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedin: this.props.isLoggedin,
    }
  }

  render() {
    return (
      <div className="header-page">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-light bg-no text-small">
            <a className="navbar-brand text-small" href="/">
              <img src={brandIcon} className="brand-icon" />
              <div className="brand-text">DeeperData</div>
            </a>
            {!this.state.isLoggedin && <button className="navbar-toggler text-right" type="button" data-toggle="collapse" data-target="#myNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>}
            <div className="collapse navbar-collapse justify-content-end text-right" id="myNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="/fundamentals" className="nav-link nav-active">Fundamentals</a>
                </li>
                <li className="nav-item">
                  <a href="/learning" className="nav-link">Open&nbsp;Learning</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Industry&nbsp;Training
                  </a>
                  <div className="dropdown-menu text-small" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
            {this.state.isLoggedin && (
              <div className="icon-area">
                <div className="extra-icon">
                  <a href="#">
                    <i class="fas fa-search"></i>
                  </a>
                </div>
                <div className="extra-icon">
                  <a href="#">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    )
  }
}
