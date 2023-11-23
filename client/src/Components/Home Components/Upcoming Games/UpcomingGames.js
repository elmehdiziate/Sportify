import React from "react";
import './UpcomingGames.css';
import futurIcon from '../Assets/future.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameInformation from "../Game Information/GameInformation";
import soccerIcon from "../Assets/soccer-icon.png";
import basketballIcon from "../Assets/basketball-icon.png";
import tennisIcon from '../Assets/tennis-icon.png';
import rugbyIcon from "../Assets/rugby-icon.png";

export default function UpcomingGames(){
    return(
    <>
        <div className="upcoming-games">
            <div className="header">
                <img className="upcoming-games-icon" src={futurIcon} alt="icon"/>
                <h5 className="title">Upcoming Game(s) :</h5>
                
            </div>
            <hr className="new-line"/>
            <GameInformation sportIcon={soccerIcon} sportType="Soccer" field="La Prairie" date="24 Nov, 2023" time="19:00 - 20:00"/>
            <GameInformation sportIcon={basketballIcon} sportType="Basketball" field="Marché" date="26 Nov, 2023" time="19:00 - 20:00"/>
            <GameInformation sportIcon={tennisIcon} sportType="Tennis" field="La prairie tenis	" date="28 Nov, 2023" time="15:00 - 16:00"/>
            
        </div>
    </>
    );
}