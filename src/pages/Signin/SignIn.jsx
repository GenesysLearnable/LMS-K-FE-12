import React from 'react'
import imageSrc from "./image/portrait.png"
import imageSrc2 from "./image/arrow.png"
import styles from"../Signin/SignIn.module.css"
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className={styles['container']}>
    <div className={styles['right']}>
      <Link to='/'>
      <img className={styles['top-img']} src={imageSrc2}></img>
      </Link>
      <img className={styles['img1']} src={imageSrc}></img>
    </div>

    <div className={styles['left']}>
      <h1 className={styles['top-text']}>Sign in</h1>
      <div className={styles['second-text']}>Unlock exciting adventures! Sign up today</div>
      <form>
        <label  htmlFor=""  >Email Address</label>
        <input></input>
        <label htmlFor=''>Password</label>
        <input></input>
      </form>

      <div className={styles['Check-container']}>
        <div className={styles['checkbox-sideA']}>
          <input type="checkbox" className={styles['myCheckbox']} ></input>
        <p>Remember me</p>
        </div>

        <div className={styles['checkbox-sideB']}>
          Forgot Password?
        </div>
      </div>
      

      <button>Sign in</button>
      <div className={styles['last-text']}>Do not have an account? 
      <Link to='/signup'>
      <span className={styles['downSign']}>Sign up</span> 
      </Link>
      </div>
    </div>
</div>
  )
}

export default SignIn