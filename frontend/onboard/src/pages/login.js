import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/login.css'
import React, { useState } from 'react';
import validator from 'validator';
import {BsFillCircleFill} from "react-icons/bs"
import axios from "axios"

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
  const [validLogin, setValidLogin] = useState(true)
  const [userDoesNotExit , setUserDoesNotExist] = useState(false)
  const [incorrectPassword, setIncorrectPassword] = useState(false)

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const goToSignUp = () => {
    let path = `../sign-up`;
    navigate(path);
  }

  const loginUser = () => {
    axios.post('http://localhost:5001/api/login', {"email" : email, "password" : password}).then((res, err) => {
        if(res.data.success) {
          navigate('/profile', {state: res.data})
        } else{
          if(res.data.type === "incorrect_password") {
            setValidPass(false)
            setPassword("")
          } else if(res.data.type === "user_not_found") {
            setValidEmail(false)
            setEmail("")
            setPassword("")
          }
        }
      
    })
    .catch(err => {
      console.log(err.response.data)
      if(err.response.data.type === "incorrect_password") {
        setValidPass(false)
        setValidEmail(true)
        setPassword("")

      } else if(err.response.data.type === "user_not_found") {
        setValidEmail(false)
        setEmail("")
        setPassword("")
      }
    })
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

  const clearEmailAndPassword = () => {
    if(validEmail === false) {
      setEmail("")
      setPassword("")
      setValidEmail(true)
    } else if(validPass === false) {
      setPassword("")
      setValidPass(true)
    } 
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
          <input className = {validEmail ? "login-input-box": "wrong-email-input-box"} onChange = {e => setEmail(e.target.value)} value={email} onClick={clearEmailAndPassword}/>
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
          <input className = {validPass ? "login-input-box": "wrong-email-input-box"} onChange = {e =>setPassword(e.target.value)} type="password" value={password} onClick={clearEmailAndPassword}/>
          {validPass ? null:
            <div className='row-upload'>
              <p style={{color: "#ff0000"}}>
                Invalid Password
              </p>
            </div>
          }
        </label>
        <button className = "login-next-box" onClick = {loginUser}>
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
  