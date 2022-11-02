// Page for when someone clicks "sign up" at top of home page. Not the same as 
// new acc page where someone has gotten endorsed
import React from 'react';
import AWS from 'aws-sdk';
import "../global.css"
import './stylesheets/login.css'
import "./stylesheets/signupTalent.css"

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
    });

    this.state = {
      s3: new AWS.S3({
       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
       region: 'us-east-1'
      }),
      filename: "",
      file: null,
      progress: 0.0
    };

  

    this.handleResumeInput = this.handleResumeInput.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleResumeInput(e) {
    this.setState({
      file: e.target.files[0]
    })
  }

 

  uploadFile() {
    const filename = "test_2.pdf";
    const params = {
      Body: this.state.file,
      Bucket: process.env.REACT_APP_AWS_STORAGE_BUCKET_NAME ,
      Key: filename
    }

    this.state.s3.upload(params, (err, data) => {
      if(err){
        console.log(err)
      } else {
        console.log(data)
        console.log("Success")
      }
    })
  }



    render() {
      return (
        <div className = "centered-container" /*style = {{justifyContent:"space-around"}}*/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className = "welcome-message ">            
            HRnext
          </div>

          <div className="endorse-message">
            Welcome USER, <span className='underline-company'>COMPANY</span> has endorsed you
          </div>
          <div className = "login-subtitle-text">
            Tell us more about yourself!
          </div>

          <div className="container">
            <div className="Row">
              <div className="div-row-two">
                <p>First Name</p>
                <input className="inline-nameblocks" placeholder='First Name'/>
              </div>
              <div className="div-row-two">
                <p>Last Name</p>
                <input className="inline-nameblocks" placeholder='Last Name'/>
              </div>
                
            </div>
            <div className="Row">
            <div className="div-row-two">
                <p>Job Category</p>
                <select className="inline-dropdowns">
                    <option value='engineering'> Engineering</option>
                  </select>              </div>
                  <div className="div-row-two">
                <p>Job Title</p>
                <select className="inline-dropdowns">
                    <option value='swe' >Software Engineer</option>
                  </select>
                </div>
                <div className="div-row-two">
                  <p>Years of Experience</p>
                <select className="inline-dropdowns">
                    <option value='0' >0</option>
                  </select>
                </div>
            </div>
            <div className="Row">
              <div className="div-row-two">
                <p>LinkedIn</p>
                <input className = "inline-nameblocks" placeholder='LinkedIn'/>
              </div>
              <div className="div-row-two">
                <p>Personal URL</p>
                <input className = "inline-nameblocks" placeholder='Personal URL'/>
              </div>
            </div>
            <div className="Row">
            <div className="div-row-two">
                <p>Location</p>
                <input className = "location-input " placeholder='Location'/>
              </div>
              <div className="div-row-two">
                <p>Country</p>
                <select className="location-input-country">
                    <option value='0' >USA</option>
              </select>
            </div>
             
            
            </div>
            <div className="Row">
              <div className="div-row-one">
                <p>Email</p>
                <input className = "email-input-box" placeholder='Email'/>
              </div>
            </div>
            <div className="Row">
              <div className="div-row-one">
                <p>Password</p>
                <input className = "email-input-box" placeholder='Password'/>
              </div>
            </div>
            <div className="Row">
              <div className="div-row-one">
                <p>Re-Enter Password</p>
                <input className = "email-input-box" placeholder='Re-Enter Password '/>
              </div>
            </div>
            <div className="Row-upload">

            <label className="file-upload">
              <input type="file" multiple onChange={this.handleResumeInput} />
              <i className="fa fa-cloud-upload" style={{fontSize: 22}}/><span className="file-upload-label">Attach Resume</span> 
            </label>
            </div>
            <div className="Row-upload">
              <button className="sign-up-button" onClick={() => this.uploadFile()}> Sign Up </button>

            </div>
          </div>
        
          
 
        </div>
      );
    }
  
  
  }
  
  export default SignUp;
  