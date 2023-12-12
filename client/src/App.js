import "./App.css";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login/Login";
import Session from "./Pages/Session";
import Fields from "./Pages/fields";
import Home from "./Pages/Home Page/Home";
import Signup from "./Pages/Signup/Signup";
import NavBar from "./Components/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Payment from "./Pages/Payment";

function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.BACKEND_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="container">
			<Router>
				{user && <NavBar />}
				<Routes>
					<Route
						exact
						path="/"
						element={
							user ? <Navigate to="/fields" /> : <Navigate to="/login" />
						}
					/>
					<Route
						exact
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						exact
						path="/signup"
						element={user ? <Navigate to="/" /> : <Signup />}
					/>
					<Route
						exact
						path="/fields"
						element={user ? <Navigate to="/" /> : <Fields />}
					/>
					<Route
						exact
						path="/Payment"
						element={user ? <Navigate to="/" /> : <Payment/>}
					/>
					<Route
            			exact
						path="/booking"
						element={user ? <Navigate to="/" /> : <Booking />}
					/>
					<Route 
          exact
          path="/session" 
          element={user ? <Navigate to="/" /> :<Session/>} />
					<Route 
          exact
          path="/home" 
          element={user ? <Navigate to="/" /> :<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
