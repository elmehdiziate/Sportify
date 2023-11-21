import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Signup.module.css'
function Signup() {

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
          <img className={styles.img} src="/../../public/images/signup.jpg" alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.subHeading}>Creat a new Account</h2>
          <input type="text" className={styles.input} placeholder="Username" />
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <button className={styles.btn}>Sign Up</button>
          <p className={styles.text}>Or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign Up with Google</span>
          </button>
          <p className={styles.text}>
            Already have account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup;
