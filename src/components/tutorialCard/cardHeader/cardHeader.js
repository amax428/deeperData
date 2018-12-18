import React from 'react';
import './cardHeader.css';

export const CardHeader = (props) =>(
    <div className="card__header">
        <div>
            <img src={props.cardImg} className="card__header-img"/>
            <div className="card__header--teacher-info">
                <div className="card__header--name text-smallest">
                    {props.teacherName}
                </div>
                <img src={props.teacherPhoto} className="card__header--photo"/>
            </div>
        </div>
        <div className="card__header--title text-medium">
            {props.title}
        </div>
    </div>
);
