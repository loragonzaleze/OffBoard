import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/login.css'
import React, { useState } from 'react';

// Page to login into an existing account
function Login() {
  let navigate = useNavigate(); 


  // stores corporate email 
  const [email, setEmail] = useState("");

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const goToEndorsed = () => {
    // TODO check that inputted email is valid (not blank, is valid email (@somecompany))
    // make sure email exists within database of recruiters endorsing ppl
    let path = `/endorsed`;
    navigate(path);
  }

    return (
      <div className = "centered-container" style = {{justifyContent:"space-around"}}>
        <BottomGoTos/>
        <div className = "login-logo" onClick = {goToHome}>
          HRnext
        </div>
        <div className = "login-title-text">
          Log in with your email
        </div>
        <div className = "login-subtitle-text">
          Welcome back to a new adventure!
        </div>
        <label>
          <div className = "row-container">
            <p className = "login-email-label">Email</p>
            <p className = "login-email-label" 
            style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input className = "login-input-box" onChange = {e => setEmail(e.target.value)}/>
        </label>
        <button className = "login-next-box" onClick = {goToEndorsed}>
            Next
        </button>
        <div className = "login-or">
          OR
        </div>
        <button className = "login-sso-box">
            Sign in with SSO
            {/*TODO add a link here for endorsement*/}

        </button>
        <div className = "login-endorsement-box">
          <div className = "login-cant-login-text">Can't log in?</div>
          <div className = "login-endorsement-button">Ask your company to endorse you</div> 
          {/*TODO add a link here for endorsement*/}
        </div>
        <div className = "signup-button" 
        style = {{position:"absolute", top: 10, right: 10, marginRight: 10}}>
          Sign Up
        </div>
      </div>
    );
  }
  
  export default Login;
  