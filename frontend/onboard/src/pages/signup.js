// Page for when someone clicks "sign up" at top of home page. Not the same as 
// new acc page where someone has gotten endorsed
import React, { useEffect } from 'react';
import AWS from 'aws-sdk';
import "../global.css"
import './stylesheets/login.css'
import "./stylesheets/signupTalent.css"
import "./stylesheets/contact.css"
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
      clickedSignUp: clickedSignUp
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

  const signUpIfValid = () => {
    return (
      <div className = "centered-container" /*style = {{justifyContent:"space-around"}}*/>
      <div className = "welcome-message ">            
        HRnext
      </div>
      {firstSignup ? 
      <><div className="endorse-message">
            Welcome {firstName}, <span className='underline-company'>{company}</span> has endorsed you
          </div><div className="login-subtitle-text" style = {{paddingBottom: "30px "}}>
              Tell us more about yourself!
            </div></> : <><div className="endorse-message">
            Welcome back {firstName}, <span className='underline-company'>{company}</span> has endorsed you
          </div><div className="login-subtitle-text">
              Finish telling us more about yourself!
            </div></>  
    }
      {/* <div className="endorse-message">
        Welcome {}, <span className='underline-company'>{company}</span> has endorsed you
      </div>
      <div className = "login-subtitle-text">
        Tell us more about yourself!
      </div> */}

      <div className="container">
        <div className="Row">
          <div className="div-row-two">
          <div className = "row-container">
                <p className = "contact-email-label">First Name</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
              </div>
            <input 
                name="firstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="inline-nameblocks" 
                placeholder='First Name'
                readonly
                />
          </div>
          <div className="div-row-two">
            <div className = "row-container">
                <p className = "contact-email-label">Last Name</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className="inline-nameblocks" 
              placeholder='Last Name'/>
          </div>
        </div>
        <div className="Row">
          <div className="div-row-two">
          <div className = "row-container">
                <p className = "contact-email-label">Phone Number</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              className = "inline-nameblocks" 
              placeholder='Phone Number'/>
          </div>
          <div className="div-row-two">
            <p className = "contact-email-label">Github</p>
            <input 
              name="github"
              value={github}
              onChange={e => setGithub(e.target.value)}
              className = "inline-nameblocks" 
              placeholder='Github'/>
          </div>
        </div>
        <div className="Row">
          <div className="div-row-two">
            <p className = "contact-email-label">LinkedIn</p>
            <input 
              name="linkedin"
              value={linkedin}
              onChange={e => setLinkedin(e.target.value)}
              className = "inline-nameblocks" 
              placeholder='LinkedIn'/>
          </div>
          <div className="div-row-two">
            <p className = "contact-email-label">Personal URL</p>
            <input 
              name="personalUrl"
              value={personalUrl}
              onChange={e => setPersonalUrl(e.target.value)}
              className = "inline-nameblocks" 
              placeholder='Personal URL'/>
          </div>
        </div>
        <div className="Row">
          <div className="div-row-two">
            <div className = "row-container">
                <p className = "contact-email-label">Location</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              name="location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className = "location-input" 
              placeholder='Location'/>
          </div>
          <div className="div-row-two">
            <div className = "row-container">
                <p className = "contact-email-label">Country</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <select 
              className="location-input-country"
              value={country}
              name="country"
              onChange={e => setCountry(e.target.value)}
            >
                <option value='United States' >United States</option>
                <option value='Canada'>Canada</option>
          </select>
        </div>
         
        
        </div>
        <div className="Row">
          <div className="div-row-one">
            <div className = "row-container">
                <p className = "contact-email-label">Email</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>            
            <input 
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className = {validEmail ? "email-input-box": "wrong-password-input-box"}
              placeholder='Email'/>
          </div>
        </div>
        <div className="Row">
          <div className="div-row-two">
            <div className = "row-container">
                <p className = "contact-email-label">Password</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className = {matchingPasswords ? "password-input-box" : "wrong-password-input-box"} 
              placeholder='Password'
              type="password"
              onFocus={() => {
                matchingPasswords ? setMatchingPasswords(true) : console.log("")
              }}/>
          </div>
          <div className="div-row-two">
            <div className = "row-container">
                <p className = "contact-email-label">Re-Enter Password</p>
                <p className = "contact-email-label" 
                style = {{color: 'red', marginLeft: '2px'}}>*</p>
            </div>
            <input 
              name="reenterPassword"
              value={reenterPassword}
              onChange={e => setReenterPassword(e.target.value)}
              className = {matchingPasswords ? "password-input-box" : "wrong-password-input-box"} 
              placeholder='Re-Enter Password'
              type="password"

              />
          </div>
        </div>
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
   
      </div>
      <div className="Row-upload">
          <button className="interests-next-box" onClick={() => nextPage()}> Next </button>
        </div>
    </div>
    )
    
  }


  return (
    validKey ? signUpIfValid() : signUpIfValid()
  )
}

export default SignUp;


  {/* <div className="Row">
                <div className="div-row-two">
                  <p>Job Category</p>
                  <select 
                  className="inline-dropdowns"
                  name="jobCategory">
                      <option value='Engineering'>Engineering</option>
                      <option value='Business'>Business</option>
                      <option value='Marketing'>Marketing</option>
                      <option value='Sales'>Sales</option>
                  </select>              
                </div>
                <div className="div-row-two">
              <p>Job Title</p>
                <select className="inline-dropdowns">
                  <option value='Software Engineer' >Software Engineer</option>
                </select>
              </div>
              <div className="div-row-two">
                <p>Years of Experience</p>
                <select className="inline-dropdowns">
                  <option value='0' >0</option>
                </select>
              </div>
          </div> */}



          // super(props);
          // AWS.config.region = 'us-east-1'; // Region
          // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          //   IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
          // });
      
          // this.state = {
          //   s3: new AWS.S3({
          //    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          //    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          //    region: 'us-east-1'
          //   }),
          //   filename: "",
          //   file: null,



          // handleResumeInput(e) {
          //   this.setState({
          //     file: e.target.files[0],
          //     allFieldsFilledOut : this.checkNotEmptyInputs()
          //   })
          // }


             // const filename = "test_2.pdf";
    // const params = {
    //   Body: this.state.file,
    //   Bucket: process.env.REACT_APP_AWS_STORAGE_BUCKET_NAME ,
    //   Key: filename
    // }

    // this.state.s3.upload(params, (err, data) => {
    //   if(err){
    //     console.log(err)
    //   } else {
    //     console.log(data)
    //     console.log("Success")
    //   }
    // })