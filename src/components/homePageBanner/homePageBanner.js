import React, { Component } from 'react';
import './homePageBanner.css';

export default class HomePageBanner extends Component {
  render() {
    const { title, description, buttons, imgUrl } = this.props;
    return (
      <div className="home-page-banner text-padding-extra-big">
        <div className="container">
          <div className="row text-column-align-center">
            <div className="col-md-6">
              <p className="text-biggest">
                {title}
              </p>
              {description.map(item=>(
                <p className="text-small">
                  {item}
                </p>
              ))}
              {buttons.map(item=>(
                <button className="normal-button text-small">{item}</button>
              ))}
            </div>
            <div className="col-md-6 col-padding-top">
              <img src={imgUrl} className="normal-image"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
