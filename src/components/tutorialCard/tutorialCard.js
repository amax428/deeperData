import React, { Component } from 'react';
import './tutorialCard.css';
import {CardHeader} from "./cardHeader/cardHeader";
import {CardDetails} from "./cardDetails/cardDetails";


export default class TutorialCard extends Component {
  render() {
    const cards = this.props.cardsInfo.map(el => {
      return (
        <div className="card col-md-3 col-sm-4 col-10">
          <div className="card-content">
            <CardHeader
              cardImg={el.cardImg}
              teacherName={el.teacherName}
              teacherPhoto={el.teacherPhoto}
              title={el.title}
            />
            <CardDetails
              member={el.member}
              comments={el.comments}
              starsGrade={el.starsGrade}
            />
          </div>
        </div>
      )
    });
    return (
      <div className="card__container">
          {cards}
      </div>
    )
  }
}
