import React from "react";
import NavBar from "../../Components/NavBar";
import "./Home.css";
import ProfileInformation from "../../Components/Home Components/Profile Information/ProfileInformation";
import SlideShow from "../../Components/Home Components/Slide Show/SlideShow";
import PlayerStatistics from "../../Components/Home Components/Statistics/PlayerStatistics";
import UpcomingGames from "../../Components/Home Components/Upcoming Games/UpcomingGames";
import LatestGames from "../../Components/Home Components/Latest Games/LatestGames";

export default function Home() {
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
								<ProfileInformation/>
							</div>
							<div>
								<SlideShow/>
							</div>
						</div>
						<div>
							<PlayerStatistics/>
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
