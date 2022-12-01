// Page for when someone clicks "sign up" at top of home page. Not the same as 
// new acc page where someone has gotten endorsed
import React, { useEffect } from 'react';
import "../global.css"
import './stylesheets/login.css'
import "./stylesheets/signupTalent.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import validator from "validator"
import axios from 'axios';


function SignUp() {

  let navigate = useNavigate();
 
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [github, setGithub] = React.useState("");
  const [linkedin, setLinkedin] = React.useState("");
  const [personalUrl, setPersonalUrl] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [validEmail, setValidEmail] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [reenterPassword, setReenterPassword] = React.useState("");
  const [country, setCountry] = React.useState("United States");
  const [matchingPasswords, setMatchingPasswords] = React.useState(true);
  const [allFieldsFilledOut, setAllFieldsFilledOut] = React.useState(false);
  const [clickedSignUp, setClickedSignUp] = React.useState(false);
  const [company, setCompany] = React.useState("");
  const [firstFunctionCall, setFirstFunctionCall] = React.useState(true);


  const [keyParam, setKeyParam] = useSearchParams();
  const [validKey, setValidKey] = React.useState(false);
  const [firstSignup, setFirstSignup] = React.useState(true);

  const checkNotEmptyInputs = () => {
    return firstName !== "" 
        && lastName !== "" 
        && phoneNumber !== ""
        && location !== ""
        && email !== "" 
        && password !== "" 
        && reenterPassword !== ""
  }

  const nextPage = () => {
    if(!checkNotEmptyInputs()){
      if(!clickedSignUp){
        setClickedSignUp(true);
      }
      return;
    }
    setAllFieldsFilledOut(true);
    setValidEmail(true)
    if (!validator.isEmail(email)){
      setValidEmail(false)
      return;
    }
    if(password !== reenterPassword){
      setMatchingPasswords(false);
      setPassword("")
      setReenterPassword("")
      return;
    } 
    let state = {
      full_name: firstName + " " + lastName,
      firstName: firstName,
      lastName: lastName,
      linkedin: linkedin,
      phoneNumber: phoneNumber,
      github: github,
      url: personalUrl,
      location: location,
      email: email,
      password: password,
      reenterPassword: reenterPassword,
      country: country,
      matchingPasswords: matchingPasswords,
      allFieldsFilledOut: allFieldsFilledOut,
      clickedSignUp: clickedSignUp,
      company: company
    }

    console.log("STATE")
    console.log(state)

    navigate('/choose-interests',{state: state});


  }

  /** gets key from link, if valid continue with sign up and prepopulate some fields */
  useEffect(() => {
    console.log("KEY PARAM")
    if(keyParam.get("_key") !== null){
      console.log(keyParam.get("_key"))
      axios.post(
        "http://localhost:5001/api/signup/confirm",
        {
          key: keyParam.get("_key").toString()
        }  
      ).then((res) => {
        console.log(res.data)
        /** differentiate between initial and later signup  */
        if(res.data.success) {
          setValidKey(true);
          setCompany(res.data.data.company)
          setFirstName(res.data.data.first_name)
          setLastName(res.data.data.last_name)
          setEmail(res.data.data.email)
          setFirstSignup(!res.data.data.finished_sign_up && !res.data.data.key_used)
        }
      })
      .catch((err) => {
        console.log("Error retrieving key validity")
        console.log(err)
      })
    } else {
      console.log("no key");
    }

  }, [""])

  const invaidSignUp = () => {
    return (
      <div className = "centered-container" /*style = {{justifyContent:"space-around"}}*/>
      <div className = "welcome-message ">            
        HRnext
      </div>
      <div className="endorse-message">
           Uh oh, looks like you're trying to sign up with an invalid key. Please contact the person who gave you this key for more information.
      </div>
    </div>
    )
   
  }

  const newSignUpValid = () => {
    return (
      <div className = "centered-container">
      <div className = "signup-logo">HRnext</div>
      {firstSignup ? 
      <>
        <div className = "contact-title-text">
          Welcome {firstName}, <span className='underline-company'>{company}</span> has endorsed you
        </div>
        <div className = "contact-subtitle-text">
          Tell us more about yourself!        
        </div>
       </> :
       <>
        <div className = "contact-title-text">
          Welcome back {firstName}, <span className='underline-company'>{company}</span> has endorsed you        </div>
        <div className = "contact-subtitle-text">
        Finish telling us more about yourself!
        </div>
       </>}
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
              readOnly
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
        <div className = "row-container">
        <label>
          <div className = "row-container">
            <p className = "contact-email-label">Phone Number</p>
            <p className = "contact-email-label" 
            style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input 
              className="contact-input-box"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder='Phone Number'
          />
        </label>
        <div className = "contact-spacer"></div>
        <label>
          <div className = "row-container">
            <p className = "contact-email-label">Github</p>
          </div>
          <input 
              className="contact-input-box"
              name="github"
              value={github}
              onChange={e => setGithub(e.target.value)}
              placeholder='Github'/>
        </label>
        </div>
        
        <div className = "row-container">
        <label>
          <div className = "row-container">
            <p className = "contact-email-label">LinkedIn</p>
          </div>
          <input 
              className="contact-input-box"
              name="linkedin"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              placeholder='LinkedIn'
          />
        </label>
        <div className = "contact-spacer"></div>
        <label>
          <div className = "row-container">
            <p className = "contact-email-label">Personal URL</p>
          </div>
          <input 
              className="contact-input-box"
              name="personalUrl"
              value={personalUrl}
              onChange={e => setPersonalUrl(e.target.value)}
              placeholder='Personal URL'/>
        </label>
        </div>
        <div className = "row-container">
        <label>
          <div className = "row-container">
            <p className = "contact-email-label">Location</p>
            <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input 
              className="contact-input-box"
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder='Location'
          />
        </label>
        <div className = "contact-spacer"></div>
        <label>
            <div className = "row-container">
              <p className = "contact-email-label">Country</p>
              <p className = "contact-email-label" 
              style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <select 
              className="contact-input-box"
              value={country}
              name="country"
              onChange={e => setCountry(e.target.value)}
            >
                <option value='United States' >United States</option>
                <option value='Canada'>Canada</option>
          </select>
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
              
          />
        </label>
        <label>
          <div className = "row-container" >
            <p className = "contact-email-label">Password</p>
            <p className = "contact-email-label" 
            style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input 
            className = "contact-email-box" 
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
            type="password"
            onFocus={() => {
              matchingPasswords ? setMatchingPasswords(true) : console.log("")
            }}/>
        </label>
        <label>
          <div className = "row-container" >
            <p className = "contact-email-label">Re-Enter Password</p>
            <p className = "contact-email-label" 
            style = {{color: 'red', marginLeft: '2px'}}>*</p>
          </div>
          <input 
            className = "contact-email-box" 
            name="reenterPassword"
              value={reenterPassword}
              onChange={e => setReenterPassword(e.target.value)}
              placeholder='Re-Enter Password'
              type="password"/>
        </label>
        {matchingPasswords ? null : 
        <div className='Row-upload'>
          <p className="wrong-password-text"
            >
            Passwords do not match!
          </p>

        </div>}
        {validEmail ? null:
            <div className='Row-upload'>
              <p className='wrong-password-text'>
                Invalid Email
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
        <button className = "contact-submit-box" onClick={() => nextPage()}>
            Submit
        </button>
        <div className = "signup-privacy"> Privacy Policy </div>
      </div>

    </div>
    )
  }
  return (
    validKey ? newSignUpValid() : invaidSignUp()
  )
}

export default SignUp;
