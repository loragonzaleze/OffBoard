import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/login.css'
import React, { useState } from 'react';
import validator from 'validator';
import {BsFillCircleFill} from "react-icons/bs"

// Page to login into an existing account
function Login() {
  let navigate = useNavigate(); 
  const dummyEmail = "test@gmail.com"
  const dummyPassword = "test123"

  // stores corporate email 
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true)
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(true)

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const goToSignUp = () => {
    let path = `../sign-up`;
    navigate(path);
  }

  const goToProfile = () => {
    setValidEmail(true)
    setValidPass(true)
    if (!validator.isEmail(email)){
      setValidEmail(false)
      return;
    }
    if(!(email === dummyEmail))
    {
      setValidEmail(false)
      return;
    }
    if(!(password === dummyPassword))
    {
      setValidPass(false);
      return;
    }
    let path = `/profile`;
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
          <input className = {validEmail ? "login-input-box": "wrong-email-input-box"} onChange = {e => setEmail(e.target.value)}/>
          {validEmail ? null:
            <div className='row-upload'>
              <p style={{color: "#ff0000"}}>
                Invalid Email
              </p>
            </div>
          }
        </label>
        <label>
          <div className = "row-container">
            <p className = "login-email-label" style={{paddingTop: 10}}>Password</p>
            <p className = "login-email-label"
            style = {{color:'red', marginleft: '2px', paddingTop: 10}}>*</p>
          </div>
          <input className = {validPass ? "login-input-box": "wrong-email-input-box"} onChange = {e =>setPassword(e.target.value)} type="password"/>
          {validPass ? null:
            <div className='row-upload'>
              <p style={{color: "#ff0000"}}>
                Invalid Password
              </p>
            </div>
          }
        </label>
        <button className = "login-next-box" onClick = {goToProfile}>
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
        <div className = "signup-button" onClick = {goToSignUp} 
        style = {{position:"absolute", top: 10, right: 10, marginRight: 10}}>
          Sign Up
        </div>
      </div>
    );
  }
  
  export default Login;
  