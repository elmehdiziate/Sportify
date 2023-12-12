import React, {useEffect, useState} from "react";
import NavBar from "../../Components/NavBar";
import "./Home.css";
import ProfileInformation from "../../Components/Home Components/Profile Information/ProfileInformation";
import SlideShow from "../../Components/Home Components/Slide Show/SlideShow";
import PlayerStatistics from "../../Components/Home Components/Statistics/PlayerStatistics";
import UpcomingGames from "../../Components/Home Components/Upcoming Games/UpcomingGames";
import LatestGames from "../../Components/Home Components/Latest Games/LatestGames";
import axios  from "axios";



export default function Home() {
	const [name, setName] = useState("");
	const [user, setUser] = useState("");
  
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const { data } = await axios.get("http://localhost:8000/auth/login/success", { withCredentials: true });
		  const { googleinfo, user } = data;
		  const { name } = googleinfo;
  
		  setName(name);
		  setUser(user);
		} catch (error) {
		  console.error("walo");
		}
	  };
	  fetchData();
	}, []);
	return (
		<>
			<div className="home">
				<div className="navbar">
					<NavBar />
				</div>
				<div className="home-content">
					<div className="container">
						<div className="firstrow">
							<div className="profileInformation">
								<ProfileInformation userInfo1={name} userInfo2={user}/>
							</div>
							<div>
								<SlideShow/>
							</div>
						</div>
						<div>
							<PlayerStatistics userInfo={user}/>
						</div>
						<div className="secondrow">
							<UpcomingGames/>
							<LatestGames/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
