import React from "react";
import './ProfileInformation.css';
import defaultProfile from "../Assets/profile.png";

export default function ProfileInformation(props){
    let {firstName, lastName, profileImage, birthday} = props;

    if(profileImage === null)
        profileImage = defaultProfile;


    firstName = "Ayman";
    lastName = "Ait Achour";
    birthday = "22 Sept, 2002";

    return(
        <>
            <div className="ProfileInformation">
                
                <h5 className="title">Profile Information :</h5>

                <div className="content">
                    <img className="profile" src={defaultProfile}/>
                    
                    <div className="text-content">
                        <div className="information">
                            <p className="labels">First Name :</p>
                            <p className="data">{firstName}</p>
                        </div>

                        <div className="information">
                            <p className="labels">Last Name :</p>
                            <p className="data">{lastName}</p>
                        </div>

                        <div className="information">
                            <p className="labels">Birthday :</p>
                            <p className="data birthday">{birthday}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
}