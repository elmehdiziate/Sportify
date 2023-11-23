import React from "react";
import './GameInformation.css';
import locationIcon from "../Assets/placeholder.png";
import dateIcon from "../Assets/calendar.png";
import timeIcon from "../Assets/clock.png";

export default function GameInformation(props){

    const { sportIcon,sportType, field, date, time} = props;

    return(
        <>
            <div className="game-information">
                <div className="row-game">
                    <img  className="game-icon" src={sportIcon}/>
                    <p className="game-data" id="sport-type">{sportType} </p>
                    <img className="game-icon" src={locationIcon}/>
                    <p className="game-data">{field}</p>
                
                    <img className="game-icon" src={dateIcon}/>
                    <p className="game-data">{date} </p>
                    <img className="game-icon" src={timeIcon}/>
                    <p className="game-data">{time}</p>
                </div>
            </div>
            <hr className="new-line-game"/>
        </>
    );
}