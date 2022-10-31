// Explains about the company / what it does
import "./stylesheets/about.css"
import "../global.css"
import { useNavigate } from "react-router-dom";
import google from './images/google.png';
import meta from './images/meta.png';

function About() {
  let navigate = useNavigate(); 
  const goToLogin = () =>{ 
    let path = `login`;
    navigate(path);
  }
  const goToSignUp = () => {
      let path = `sign-up`;
      navigate(path);
  }
  const goToHome = () =>{
    let path = `..`;
    navigate(path);
}
    return (
      <div>
        <div className = "about-logo" onClick = {goToHome}>HRnext</div>
        <div className = "about-centered-container">
          <text className = "about-title-text"> About us </text>
          <text> 
            We are a company that focuses on providing a reliable and quick way for other companies to
            acquire talent that has already been vetted.
          </text>
        </div>
        <div className = "about-bottom-container">
          <div className ="about-subtitle-text">Companies that are in the program:</div>
          <div class ="about-row-container" >
              <img className="about-image" style={{ width: 50, height: 50 }} src={google} alt="google image" />
              <img className="about-image" style={{ width: 50, height: 50 }} src={meta} alt="meta image" />
          </div>
        </div>
        <div className = "about-row-container" 
            style = {{position:"absolute", top: 10, right: 10, marginRight: 10}}>
                <div className = "about-login-button" onClick = {goToLogin}>Login</div>
                <div className = "about-signup-button" onClick = {goToSignUp}>Sign Up</div>
            </div>
      </div>
    );
  }
  
  export default About;
  