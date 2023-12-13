import React, {useEffect, useState} from "react";
import './GameInformation.css';
import locationGif from "../Assets/location.gif";
import dateGif from "../Assets/event.gif";
import soccerGif from "../Assets/ball.gif";
import basketballGif from "../Assets/basketball.gif";
import tennisGif from '../Assets/tennis.gif';
import rugbyGif from '../Assets/rugby.gif';
import axios from "axios";

export default function GameInformation(props){

    const [fieldName, setFieldName] = useState("");
    const [sportIcon, setSportIcon] = useState("");
    const [sportType, setSportType] = useState("");

    const {game} = props;
    const {date, starttime, endtime, field} = game;

    const eventDate = new Date(date);
    const formattedDate = `${eventDate.getDate()} ${eventDate.toLocaleString("en-US", { month: "short" })}, ${eventDate.getFullYear()}`;

    const formattedTimeRange = `${formatTime(starttime)} - ${formatTime(endtime)}`;

    function formatTime(timeString) {
        const timeString1 = timeString.split("T");
        console.log(timeString1[1]);
        const [hours, minutes] = timeString1[1].split(":");
        return `${hours}:${minutes}`;
    }
    const formattedString = `${formattedDate} | ${formattedTimeRange}`;

    useEffect(()=>{
        const fetchData = async () =>{
            const {data} = await axios.get(`http://localhost:8000/fields/${field}`);
            const {sport, name} = data;
            setFieldName(name);
            setSportType(sport);
            
            if(sport.toLowerCase() === "basketball"){
                setSportIcon(basketballGif);
            }
            else if (sport.toLowerCase() === "soccer"){
                setSportIcon(soccerGif);
            }
            else if (sport.toLowerCase() === "tennis"){
                setSportIcon(tennisGif);
            }
            else if (sport.toLowerCase() === "rugby"){
                setSportIcon(rugbyGif);
            }
            else{
                console.error("Ash had riada");
            }
        };
        fetchData();
    }, [field]);


    
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
                        <p className="game-data">{fieldName}</p>
                    </div>

                    <div className="col3">
                        <img className="game-icon" src={dateGif}/>
                        <p className="game-data">{formattedString}</p>
                    </div>
                </div>
            </div>
            <hr className="new-line-game"/>
        </>
    );
    
}