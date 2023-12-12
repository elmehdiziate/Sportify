import React from "react";
import './PlayerStatistics.css';
import GameStatistics from "./Game Statistics/GameStatistics";
import soccerGif from "../Assets/ball.gif";
import basketballGif from "../Assets/basketball.gif";
import tennisGif from "../Assets/tennis.gif";
import rugbyGif from "../Assets/rugby.gif";

export default function PlayerStatistics(props){
    
    const {userInfo} = props;

    const {soccerGames, basketballGames, tennisGames, rugbyGames} = userInfo;

    const total = soccerGames + basketballGames + tennisGames +  rugbyGames;

    if (total === 0){
        return(
            <>
                <div className="statistics">
                    <GameStatistics sportType="Soccer :" sportIcon={soccerGif} playedGames="0" width="0"/>
                    <GameStatistics sportType="Basketball :" sportIcon={basketballGif} playedGames="0" width="0"/>
                    <GameStatistics sportType="Tennis :" sportIcon={tennisGif} playedGames="0" width="0"/>
                    <GameStatistics sportType="Rugby :" sportIcon={rugbyGif} playedGames="0" width="0"/>
                </div>
            </>
        );
    }
    else{
        return(
        <>
            <div className="statistics">
                <GameStatistics sportType="Soccer :" sportIcon={soccerGif} playedGames={soccerGames} width= {(soccerGames/total)*100}/>
                <GameStatistics sportType="Basketball :" sportIcon={basketballGif} playedGames={basketballGames} width={(basketballGames/total)*100}/>
                <GameStatistics sportType="Tennis :" sportIcon={tennisGif} playedGames={tennisGames} width={(tennisGames/total)*100}/>
                <GameStatistics sportType="Rugby :" sportIcon={rugbyGif} playedGames={rugbyGames} width={(rugbyGames/total)*100}/>
            </div>
        </>
        );
    }
}