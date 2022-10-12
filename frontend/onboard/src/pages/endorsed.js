import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/endorsed.css'
import React, { useState } from 'react';

// Page used for when someone gets endorsed, and gets an email to sign up
//  Different from signup page.
// Ex. Welcome Bruce, Google endorsed you!



// TODO set up functions to check everything (phone num, first / last name,
// personal email) for validity before going to next screen
function Endorsed() {
  let navigate = useNavigate(); 

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  }

  const goToChooseInterests = () => {
    let path = `/choose-interests`;
    navigate(path);
  }
  const [name, setName] = useState("Edwin");
  const [company, setCompany] = useState("Google");
  const [personalEmail, setPersonalEmail] = useState("");
  const [firstName, setFirstName] = ("");
  const [lastName, setLastName] = ("");
  const [phoneNumber, setPhoneNumber] = ("");

    return (
      <div className = "centered-container">
        <div className = "endorsed-logo" onClick = {goToHome}>HRnext</div>
        <div className = "endorsed-title-text">
          Welcome {name}, {company} has endorsed you!
        </div>
        <div className = "endorsed-subtitle-text">
          Tell us more about yourself!
        </div>
        <div className = "endorsed-info-container">
          {/* FIRST NAME */}
          <div className = "row-container"> 
            <label>
              <div className = "row-container">
                <p className = "endorsed-email-label">First Name</p>
                <p className = "endorsed-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
              </div>
              <input className = "endorsed-input-box" 
              onChange = {(e) => setFirstName(e.target.value)}/>
            </label>
            <div className = "endorsed-spacer"></div>
            {/* LAST NAME */}
            <label>
              <div className = "row-container">
                <p className = "endorsed-email-label">Last Name</p>
                <p className = "endorsed-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
              </div>
              <input className = "endorsed-input-box" 
              onChange = {(e) => setLastName(e.target.value)}/>
            </label>
          </div>
          {/* EMAIL */}
          <label>
            <div className = "row-container" >
              <p className = "endorsed-email-label">Email</p>
              <p className = "endorsed-email-label" 
              style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input className = "endorsed-email-box" 
            onChange = {(e) => setPersonalEmail(e.target.value)}/>
          </label>
          <text className = "endorsed-email-text">
            Make sure this is your
            <text style = {{fontWeight: 600}}> personal</text> email address,
            <text style = {{fontWeight: 600}}> not your corporate</text>.
             We will continue to contact you after
            your time at your current company comes to an end.
          </text>
          {/* PHONE NUM */}
          <label>
            <div className = "row-container">
              <p className = "endorsed-email-label">Phone Number</p>
              <p className = "endorsed-email-label" 
              style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input className = "endorsed-email-box"
            onChange = {(e) => setPhoneNumber(e.target.value)} />
          </label>
          <button className = "endorsed-submit-box"
           onClick = {goToChooseInterests}>
              Next
          </button>
        </div>
      </div>
    );
  }
  
  export default Endorsed;
  