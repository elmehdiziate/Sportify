import React from "react";
import './PlayerStatistics.css';
import GameStatistics from "./Game Statistics/GameStatistics";
import soccerGif from "../Assets/ball.gif";
import basketballGif from "../Assets/basketball.gif";
import tennisGif from "../Assets/tennis.gif";
import rugbyGif from "../Assets/rugby.gif";

export default function PlayerStatistics(){
    
    return(
        <>
            <div className="statistics">
                <GameStatistics sportType="Soccer :" sportIcon={soccerGif} playedGames="50" width="50"/>
                <GameStatistics sportType="Basketball :" sportIcon={basketballGif} playedGames="25" width="25"/>
                <GameStatistics sportType="Tennis :" sportIcon={tennisGif} playedGames="10" width="10"/>
                <GameStatistics sportType="Rugby :" sportIcon={rugbyGif} playedGames="15" width="15"/>
            </div>
        </>
    );
}