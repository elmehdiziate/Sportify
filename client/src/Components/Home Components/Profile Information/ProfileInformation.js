import React from "react";
import './ProfileInformation.css';
import defaultProfile from "../Assets/profile.gif";
import profileGif from "../Assets/user-profile.gif";

export default function ProfileInformation(props){
    
    const { userInfo1, userInfo2 } = props;
    const {familyName, givenName } = userInfo1;
    let {picture, isAdmin} = userInfo2;

    let beingadminn = "False";

    if (isAdmin)
        beingadminn = "True";

    if (picture === null) {
        picture = defaultProfile;
    }

    return(
        <>
            <div className="ProfileInformation">

                <div className="header">
                    <h5 className="title">Profile Information :</h5>
                    <img className="profile-icon" src={profileGif} alt="icon" />
                </div>

                <div className="content">
                    <img className="profile" src={picture} alt="profile"/>
                    
                    <div className="text-content">
                        <div className="information">
                            <p className="labels">First Name :</p>
                            <p className="data">{givenName}</p>
                        </div>

                        <div className="information">
                            <p className="labels">Last Name :</p>
                            <p className="data">{familyName}</p>
                        </div>

                        <div className="information">
                            <p className="labels">Admin :</p>
                            <p className="data admin">{beingadminn}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    );
}