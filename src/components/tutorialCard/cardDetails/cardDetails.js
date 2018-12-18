import React from 'react';
import './cardDetails.css';
import SvgComponent from '../../../shared/style/svgComponents/svgComponent';

export class CardDetails extends React.Component {
    state = {
        stars : []
    };
    starsHandler=()=>{
        for(let i=0;i<5;i++){
            console.log(this.props.starsGrade);
            if(i<this.props.starsGrade){
                this.state.stars.push(<SvgComponent name="full-star"/>);
            }else{
                this.state.stars.push(<SvgComponent name="empty-star"/>);
            }
        }
    };

    render()
    {
        this.starsHandler();
        return (
            <div className="card__details">
                <div className="card__details--review">
                    <div className="card__details--review-stars">
                        {this.state.stars}
                    </div>
                    <div className="card__details--review-members text-smallest">
                        <i className="fas fa-user"></i>
                        <span>{this.props.member}</span>
                    </div>
                    <div className="card__details--review-comments text-smallest">
                        <i className="fas fa-comments"></i>
                        <span>{this.props.comments}</span>
                    </div>
                </div>
                <div className="card__details--text text-smaller">
                    Just replace your text. Just replace your text.
                </div>
                <a className="card__details--btn text-smaller normal-button"><span>Learn Now</span></a>
            </div>
        )
    }

}
