import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Button from '@mui/material/Button';
import LockPersonIcon from "@mui/icons-material/LockPerson";

function Login() {

  const googleAuth = () => {
		window.open(
			`http://localhost:8000/auth/google/callback`,
			"_self"
		);
	};
  
  return (
	
	<div className="LoginPage">
			<div className="Logincontainer">
				<LockPersonIcon className="custom-icon" />
				<h2 className="Header">Sign in to your account</h2>

				<div>
					<hr />
					<div className="Button">
					<Button
						variant="contained"
						onClick={googleAuth}
						style={{ background: '#3d3d7c' }}
						
					>
						<img src="./images/google.png" alt="google icon" className='img'/>
						<p class="TextButton">Login with Google</p>
					</Button>
					</div>
					<hr />
					<div className="Text">
						<p className="Text">Don't have an account?</p>
						<Link to="/signup" className='signup'>Sign Up</Link>
					</div>
					
				</div>
			</div>
			<div className="Right">
			<img src="./images/Sportify.png" alt="Logo" />
			</div>
			<div />
		</div>




  )
}

export default Login;
