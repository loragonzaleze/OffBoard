import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/login.css'
import React, { useState } from 'react';

// Page to login into an existing account
function Yoe() {
  let navigate = useNavigate(); 


  // stores corporate email 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [years, setYears] = useState("");

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
        <div className = "login-logo" onClick = {goToHome}>
          HRnext
        </div>
        <div className = "login-title-text">
          How many years of experience do you have?
        </div>
        <div className = "login-subtitle-text">
          Enter a number 
        </div>
        <label>
          <div className = "row-container">
            <p className = "login-email-label">Years of Experience</p>
            <p className = "login-email-label" 
            style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input className = "login-input-box" onChange = {e => setEmail(e.target.value)}/>
        </label>
        <button className = "login-next-box" onClick = {goToEndorsed}>
            Next
        </button>
      </div>
    );
  }
  
  export default Yoe;
  