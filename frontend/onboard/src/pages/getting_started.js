import "../global.css"
import {BsArrowRightCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import BottomGoTos from "../components/bottom-go-tos"
// Home page of website
function GettingStarted() {

    let navigate = useNavigate(); 
    const goToLogin = () =>{ 
      let path = `login`;
      navigate(path);
    }
    const goToSignUp = () => {
        let path = `sign-up`;
        navigate(path);
    }
    return (
      <div className = "centered-container">
          <div className = "logo">
              HRnext
          </div>
          <div className = "row-container"
            style = {{
                color: "#0078f5",
                paddingBottom: 50,
            }}> 
            <div className = "title-text" >
                Be the hottest  
            </div>
            <div class="slider">
              <div class="slider-text1">candidate.</div>
              <div class="slider-text2">recruiter.</div>
              <div class="slider-text3">manager.</div>
            </div> 

          </div>
        {// TODO fix the arrows so they are lined up
        // Make text not clickable on homepage
        }
            <div className = "row-container">
                <button className = "button-container">
                    Finding a Job
                    <BsArrowRightCircle style = {{marginLeft: 5}}/>
                </button>
                <button className = "button-container">
                    Looking to Hire
                    <BsArrowRightCircle style = {{marginLeft: 5}}/>
                </button>
                <button className = "button-container">
                    Endorse Someone
                    <BsArrowRightCircle style = {{marginLeft: 5}}/>
                </button>
            </div>
            <BottomGoTos/>
            <div className = "row-container" 
            style = {{position:"absolute", top: 10, right: 10, marginRight: 10}}>
                <div className = "login-button" onClick = {goToLogin}>Login</div>
                <div className = "signup-button" onClick = {goToSignUp}>Sign Up</div>
            </div>

      </div>
    );
  }
  
  export default GettingStarted;
  