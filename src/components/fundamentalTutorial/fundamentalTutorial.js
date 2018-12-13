import React, { Component } from 'react';
import TutorialCard from '../../components/tutorialCard';
import fundamentalIcon from '../../assets/fundamentals.png';
import learningIcon from '../../assets/learning.png';
import trainingIcon from '../../assets/training.png';
import './fundamentalTutorial.css';

export default class FundamentalTutorial extends Component {
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
              Python Tutorials
            </div>
            <TutorialCard />
          </div>
        </div>
      </div>
    )
  }
}
