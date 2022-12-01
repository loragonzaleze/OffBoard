import React from 'react';
import "../global.css"
import './stylesheets/login.css'
import "./stylesheets/signupTalent.css"
import "./stylesheets/endorsePerson.css"
import BottomGoTos from '../components/bottom-go-tos'
import { useNavigate } from 'react-router-dom';
import validator from "validator"
import axios from 'axios';

function Endorse() {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [validEmail, setValidEmail] = React.useState(true);
    const [allFieldsFilledOut, setAllFieldsFilledOut] = React.useState(false);
    const [clickedSignUp, setClickedSignUp] = React.useState(false);
    const [company, setCompany] = React.useState("");

    let navigate = useNavigate();

    const checkNonEmptyInputs = () => {
        return firstName !== "" && lastName !== "" && company !== "" && validEmail;
    }

    const upload = () => {
        if(!checkNonEmptyInputs()){
            setClickedSignUp(true);
            return;
        }
        setAllFieldsFilledOut(true);

        if (!validator.isEmail(email)){
            setValidEmail(false)
            return;
        }

        axios.post('http://localhost:5001/api/endorse', 
            {
                "firstName" : firstName, 
                "lastName" : lastName, 
                "email" : email, 
                "company" : company})
            .then((res, err) => {
                console.log(res)
            })
    }
    const goToHome = () => {
        let path = `/`;
        navigate(path);
    }

    return (
        <div className = "centered-container" style = {{justifyContent:"space-around"}}>
        <BottomGoTos/>
        <div className = "login-logo" onClick = {goToHome}>
          HRnext
        </div>
        <div className = "endorsedPerson-title-text">
          Have someone you want to Endorse?
        </div>
        <div className = "endorsedPerson-subtitle-text">
            Enter their email below and we'll send them a link to sign up!
        </div>
       
        <div className = "contact-info-container">
          <div className = "row-container"> 
            <label>
              <div className = "row-container">
                <p className = "contact-email-label">First Name</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
              </div>
              <input 
                className = "contact-input-box" 
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder='First Name'
              />
            </label>
            <div className = "contact-spacer"></div>
            <label>
              <div className = "row-container">
                <p className = "contact-email-label">Last Name</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
              </div>
              <input 
              className = "contact-input-box" 
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder='Last Name'/>
            </label>
          </div>
       
          <label>
            <div className = "row-container" >
              <p className = "contact-email-label">Email</p>
              <p className = "contact-email-label" 
              style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
                className = "contact-email-box" 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onClick={() => !validEmail ? () => {
                    setEmail("")
                    setValidEmail(true)
                } : null}

            />
          </label>
          <label>
            <div className = "row-container" >
              <p className = "contact-email-label">Company</p>
              <p className = "contact-email-label" 
              style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              className = "contact-email-box" 
              name="company"
              value={company}
              onChange={e => setCompany(e.target.value)}
              placeholder='Company'
              />
          </label>
          {validEmail ? null:
              <div className='Row-upload'>
                <p className='wrong-password-text'>
                  Invalid Email!
                </p>
              </div>
              }
          {(!allFieldsFilledOut && clickedSignUp) ? 
          <div className='Row-upload'>
            <p className="wrong-password-text"
              >
              Fill out all fields!
            </p>
  
          </div> : null}
          <button className = "contact-submit-box" onClick={() => upload()}>
              Submit
          </button>
          <div className = "signup-privacy"> Privacy Policy </div>
        </div>
  
      </div>
    )
}

export default Endorse 