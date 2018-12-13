import React, { Component } from 'react';
import fundamentalIcon from '../../assets/fundamentals.png';
import learningIcon from '../../assets/learning.png';
import trainingIcon from '../../assets/training.png';
import './homeWaysToLearn.css';

export default class HomeWaysToLearn extends Component {
  render() {
    return (
      <div className="home-ways-to-learn">
        <div className="circuit-background">
          <div className="circuit-background-left col-md-6" />
          <div className="circuit-background-right col-md-6" />
        </div>
        <div className="container">
          <div className="content">
            <div className="title text-big">
              Ways to Learn
            </div>
            <div className="comment text-small">
              Learn for free. Hire a trainer when you are ready to take the leap.
            </div>
            <div className="contents text-small ">
              <div className="line" />
              <div className="content-area row">
                <div className="col-4 content-item">
                  <div className="pin" />
                  <div className="main-content">
                    <img src={fundamentalIcon} className="content-icon"/>
                    <div className="content-oval" />
                    <div className="item-title">
                      Fundamentals
                    </div>
                    <div className="item-contents">
                      Quickly grasp a Python foundation with a
                      curated list of free tutorials we found helpful.
                    </div>
                  </div>
                </div>
                <div className="col-4 content-item">
                  <div className="pin" />
                  <div className="main-content">
                    <img src={learningIcon} className="content-icon"/>
                    <div className="content-oval" />
                    <div className="item-title">
                      Open Learning
                    </div>
                    <div className="item-contents">
                      Sharpen your technical sword in ad-hoc study circles
                      meeting 1-3x/week in the evenings
                    </div>
                  </div>
                </div>
                <div className="col-4 content-item">
                  <div className="pin" />
                  <div className="main-content">
                    <img src={trainingIcon} className="content-icon"/>
                    <div className="content-oval" />
                    <div className="item-title">
                      Industry Training
                    </div>
                    <div className="item-contents">
                      Make a career leap by working
                      directly with industry domain experts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
