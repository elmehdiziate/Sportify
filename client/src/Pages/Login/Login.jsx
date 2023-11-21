import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'


function Login() {

  const googleAuth = () => {
		window.open(
			`http://localhost:8000/auth/google/callback`,
			"_self"
		);
	};
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sportify</h1>
      <div className={styles.formContainer}>
        <div className={styles.left}>
          <img className={styles.img} src="../../../public/images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.subHeading}>Members Login</h2>
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <button className={styles.btn}>Log In</button>
          <p className={styles.text}>Or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign in with Google</span>
          </button>
          <p className={styles.text}>
            New Here ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;
