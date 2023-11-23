import React from "react";
import './PlayerStatistics.css';
import GameStatistics from "./Game Statistics/GameStatistics";
import soccerIcon from "../Assets/soccer-icon.png";
import basketballIcon from "../Assets/basketball-icon.png";
import tennisIcon from "../Assets/tennis-icon.png";
import rugbyIcon from "../Assets/rugby-icon.png";

export default function PlayerStatistics(){
    
    return(
        <>
            <div className="statistics">
                <GameStatistics sportType="Soccer :" sportIcon={soccerIcon} playedGames="50" width="50"/>
                <GameStatistics sportType="Basketball :" sportIcon={basketballIcon} playedGames="25" width="25"/>
                <GameStatistics sportType="Tennis :" sportIcon={tennisIcon} playedGames="10" width="10"/>
                <GameStatistics sportType="Rugby :" sportIcon={rugbyIcon} playedGames="15" width="15"/>
            </div>
        </>
    );
}