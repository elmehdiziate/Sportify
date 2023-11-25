import React from "react";
import './LatestGames.css';
import pastGif from "../Assets/past.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameInformation from "../Game Information/GameInformation";
import soccerGif from "../Assets/ball.gif";
import basketballGif from "../Assets/basketball.gif";
import tennisIcon from '../Assets/tennis.gif';
import rugbyGif from "../Assets/rugby.gif";

export default function LatestGames(){
    return (
        <>
            <div className="LastestGames scrollingDiv">
                <div className="header">
                    <h5 className="title">Latest Game(s) :</h5>
                    <img className="latest-games-icon" src={pastGif} alt="icon"/>
                </div>
                <hr className="new-line"/>
                <GameInformation sportIcon={soccerGif} sportType="Soccer" field="La Prairie" date="24 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={basketballGif} sportType="Basketball" field="Marché" date="26 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={rugbyGif} sportType="Rugby" field="Ein vitel" date="28 Nov, 2023" time="15:00 - 16:00"/>
                <GameInformation sportIcon={tennisIcon} sportType="Tennis" field="La prairie tenis	" date="28 Nov, 2023" time="15:00 - 16:00"/>
                <GameInformation sportIcon={soccerGif} sportType="Soccer" field="La Prairie" date="24 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={rugbyGif} sportType="Rugby" field="Ein vitel" date="26 Nov, 2023" time="19:00 - 20:00"/>
            </div>
        </>
    );
}