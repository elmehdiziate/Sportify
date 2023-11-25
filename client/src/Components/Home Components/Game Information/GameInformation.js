import React from "react";
import './GameInformation.css';
import locationGif from "../Assets/location.gif";
import dateGif from "../Assets/event.gif";

export default function GameInformation(props){

    const { sportIcon,sportType, field, date, time} = props;

    return(
        <>
            <div className="game-information">
                <div className="row-game">
                    <div className="col1">
                        <img  className="game-icon" src={sportIcon}/>
                        <p className="game-data" id="sport-type">{sportType} </p>
                    </div>
                    <div className="col2">
                        <img className="game-icon" src={locationGif}/>
                        <p className="game-data">{field}</p>
                    </div>

                    <div className="col3">
                        <img className="game-icon" src={dateGif}/>
                        <p className="game-data">{date} | {time}</p>
                    </div>
                </div>
            </div>
            <hr className="new-line-game"/>
        </>
    );
}