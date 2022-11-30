// Page for when someone clicks "sign up" at top of home page. Not the same as 
// new acc page where someone has gotten endorsed
import React from 'react';
import AWS from 'aws-sdk';
import "../global.css"
import './stylesheets/login.css'
import "./stylesheets/signupTalent.css"
import { useNavigate } from "react-router-dom";
import validator from "validator"


function SignUp() {

  let navigate = useNavigate();
 
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
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


  const checkNotEmptyInputs = () => {
    return firstName !== "" 
        && lastName !== "" 
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



  return (
    <div className = "centered-container" /*style = {{justifyContent:"space-around"}}*/>
        <div className = "welcome-message ">            
          HRnext
        </div>

        <div className="endorse-message">
          Welcome Edwin, <span className='underline-company'>Google</span> has endorsed you
        </div>
        <div className = "login-subtitle-text">
          Tell us more about yourself!
        </div>

        <div className="container">
          <div className="Row">
            <div className="div-row-two">
              <p>First Name</p>
              <input 
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="inline-nameblocks" 
                  placeholder='First Name'
                  />
            </div>
            <div className="div-row-two">
              <p>Last Name</p>
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
              <p>LinkedIn (Optional)</p>
              <input 
                name="linkedin"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
                className = "inline-nameblocks" 
                placeholder='LinkedIn'/>
            </div>
            <div className="div-row-two">
              <p>Personal URL (Optional)</p>
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
              <p>Location</p>
              <input 
                name="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                className = "location-input" 
                placeholder='Location'/>
            </div>
            <div className="div-row-two">
              <p>Country</p>
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
              <p>Email</p>
              <input 
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)} 
                className = {validEmail ? "email-input-box": "wrong-password-input-box"}
                placeholder='Email'/>
            </div>
          </div>
          {validEmail ? null:
            <div className='Row-upload'>
              <p className='wrong-password-text'>
                Invalid Email
              </p>
            </div>
            }
          <div className="Row">
            <div className="div-row-one">
              <p>Password</p>
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
          </div>
          <div className="Row">
            <div className="div-row-one">
              <p>Re-Enter Password</p>
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
          {(!allFieldsFilledOut && clickedSignUp) ? 
          <div className='Row-upload'>
            <p className="wrong-password-text"
              >
              Fill out all fields!
            </p>

          </div> : null}
     
          <div className="Row-upload">
            <button className="interests-next-box" onClick={() => nextPage()}> Next </button>
          </div>
        </div>
      </div>

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