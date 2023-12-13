import React, { useEffect, useState } from "react";
import './LatestGames.css';
import pastGif from "../Assets/past.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameInformation from "../Game Information/GameInformation";
import axios from "axios";


export default function LatestGames(props){
    const { userID } = props;
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/booking/user/${userID}`);
            const approvedGames = data.filter(game => game.status.toLowerCase() === "approved");
            setFilteredData(approvedGames);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
}, [userID]);
    
    return(
    <>
        <div className="upcoming-games scrollingDiv">
            <div className="header">
                <h5 className="title">Upcoming Game(s) :</h5>
                <img className="upcoming-games-icon flip-horizontally" src={pastGif} alt="icon"/>
            </div>
            <hr className="new-line"/>

            {filteredData.map((game) => {
                return <GameInformation game={game} />
            })}
        </div>
    </>
    );
}