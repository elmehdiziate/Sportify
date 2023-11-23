import React from "react";
import './LatestGames.css';
import pastIcon from "../Assets/past.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameInformation from "../Game Information/GameInformation";
import soccerIcon from "../Assets/soccer-icon.png";
import basketballIcon from "../Assets/basketball-icon.png";
import tennisIcon from '../Assets/tennis-icon.png';
import rugbyIcon from "../Assets/rugby-icon.png";

export default function LatestGames(){
    return (
        <>
            <div className="LastestGames">
                <div className="header">
                    <img className="latest-games-icon" src={pastIcon} alt="icon"/>
                    <h5 className="title">Latest Game(s) :</h5>
                </div>
                <hr className="new-line"/>
               <GameInformation sportIcon={soccerIcon} sportType="Soccer" field="La Prairie" date="24 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={basketballIcon} sportType="Basketball" field="Marché" date="26 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={rugbyIcon} sportType="Rugby" field="Ein vitel" date="28 Nov, 2023" time="15:00 - 16:00"/>
                <GameInformation sportIcon={tennisIcon} sportType="Tennis" field="La prairie tenis	" date="28 Nov, 2023" time="15:00 - 16:00"/>
                <GameInformation sportIcon={soccerIcon} sportType="Soccer" field="La Prairie" date="24 Nov, 2023" time="19:00 - 20:00"/>
                <GameInformation sportIcon={rugbyIcon} sportType="Rugby" field="Ein vitel" date="26 Nov, 2023" time="19:00 - 20:00"/>
            </div>
        </>
    );
}