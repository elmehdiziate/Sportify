import React, { useEffect, useState } from "react";
import './UpcomingGames.css';
import futurGif from '../Assets/past.gif';
import sleepGif from '../Assets/sleep.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameInformation from "../Game Information/GameInformation";
import axios from "axios";

export default function UpcomingGames(props){

    const { userID } = props;
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/booking/user/${userID}`);
            const approvedGames = data.filter(game => game.status.toLowerCase() === "pending");
            setFilteredData(approvedGames);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, [userID]);
    
    if(filteredData.length != 0){
        return(
            <>
                <div className="upcoming-games scrollingDiv">
                    <div className="header">
                        <h5 className="title">Upcoming Game(s) :</h5>
                        <img className="upcoming-games-icon" src={futurGif} alt="icon"/>
                    </div>
                    <hr className="new-line"/>
        
                    {filteredData.map((game) => {
                        return <GameInformation game={game} />
                    })}
                </div>
            </>
            );
    }
    else{
        return<>

                <div className="upcoming-games scrollingDiv">
                    <div className="header">
                        <h5 className="title">Upcoming Game(s) :</h5>
                        <img className="upcoming-games-icon" src={futurGif} alt="icon"/>
                    </div>
                    <hr className="new-line"/>
                    <div className="sleepIcon">
                        <img src={sleepGif} className="sleep"/>
                    </div>
                
                </div>
        </>
    }
}