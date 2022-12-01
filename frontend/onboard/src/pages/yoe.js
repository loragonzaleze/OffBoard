import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/yoe.css'
import React, { useState } from 'react';
import validator from "validator"

// Page to login into an existing account
function Yoe() {
  let navigate = useNavigate(); 


  // stores corporate email 
  const [years, setYears] = useState("");
  const [validYear, setValidYears] = useState(true);

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const nextPage = () => {
    console.log(years)

    setValidYears(false)
    if (validator.isNumeric(years)){
      if (years >= 0)
      {
        console.log("years")
        setValidYears(true)
      }
      else{
        console.log("Invalid years")
        setYears(0)
        return;
      }
    }
    else
    {
      return;
    }

    let path = `/endorsed`;  // FIX - change endorsed 
    navigate(path);
  }

    return (
      <div className = "centered-container" style = {{}}>
        <div className = "login-logo" onClick = {goToHome}>
          HRnext
        </div>
        <div className = "yoe-title-text">
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
          <input className = {validYear ? "yoe-input-box": "wrong-yoe-input-box"}  onChange = {e => setYears(e.target.value)}/>
          {validYear ? null:
            <div className='row-upload'>
              <p className='wrong-years' style={{color:"#ff0000"}}>
                Please enter a valid number
              </p>
            </div>}
        </label>
        <button className = "login-next-box" onClick = {nextPage}>
            Next
        </button>
      </div>
    );
  }
  
  export default Yoe;
  