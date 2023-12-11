import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
import '../Login/Login.css'
import { Button } from '@mui/material';
import LockPersonIcon from "@mui/icons-material/LockPerson";



function Signup() {

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
      <h2 className="Header">Sign up to your account</h2>

      <div>
        <hr />
        <div className="Button">
        <Button
          variant="contained"
          onClick={googleAuth}
          style={{ background: '#3d3d7c' }}
          
        >
          <img src="./images/google.png" alt="google icon" className='img'/>
          <p class="TextButton">Sign up with Google</p>
        </Button>
        </div>
        <hr />
        <div className="Text">
          <p className="Text">Already have an Account</p>
          <Link to="/login" className='signup'>Log in</Link>
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

export default Signup;
