import React, { Component } from 'react';
import TutorialCard from '../../components/tutorialCard';
import fundamentalIcon from '../../assets/fundamentals.png';
import learningIcon from '../../assets/learning.png';
import trainingIcon from '../../assets/training.png';
import trailPhoto from '../../assets/social.jpg';
import teacherPhoto from '../../assets/offer.jpg';
import './fundamentalTutorial.css';

export default class FundamentalTutorial extends Component {
    state = {
        pythonCards: [
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'Youtube playlists',
                starsGrade: 1
            },
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'MOOC courses',
                starsGrade: 2
            },
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'Udemy courses',
                starsGrade: 4
            }
        ],
        dataScienceCards: [
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'Youtube playlists',
                starsGrade: 1
            },
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'MOOC courses',
                starsGrade: 2
            },
            {
                cardImg: trailPhoto,
                teacherName: 'John Rock',
                teacherPhoto: teacherPhoto,
                member: 230,
                comments: '05',
                title: 'Udemy courses',
                starsGrade: 4
            }
        ],
    };
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
                        <TutorialCard cardsInfo={this.state.pythonCards}/>
                        <div className="title text-big">
                            Data Science Tutorials
                        </div>
                        <TutorialCard cardsInfo={this.state.dataScienceCards}/>
                    </div>
                </div>
            </div>
        )
    }
}
