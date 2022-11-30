// Explains about the company / what it does
import "./stylesheets/profile.css"
import "../global.css"
import { useNavigate } from "react-router-dom";
import ali from './images/ali_abusulb.jfif';
import meta from './images/meta.png';

function Profile() {
  let navigate = useNavigate(); 
  const goToLogin = () =>{ 
    let path = `../login`;
    navigate(path);
  }
  const goToSignUp = () => {
      let path = `../sign-up`;
      navigate(path);
  }
  const goToTalent = () =>{
    let path = `../talent-page`;
    navigate(path);
  }
  const goToHome = () =>{
    let path = `..`;
    navigate(path);
}
    return (
    <div>
        <div className = "profile-logo" onClick = {goToHome}>HRnext</div>
        <div className = "profile-row-container-large">
            <div className = "profile-left-container">
                <img className="profile-image" src={ali} alt='ali' />
                <text className="profile-title-text"> Ali Abusulb </text>
                <text className="profile-normal-text">
                    Hey, I'm Ali! aaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </text>
                <div className="profile-row-container">
                    <img src={meta} width="100" height="100" alt='meta' />
                </div>
            </div>
            <div className = "profile-right-container">
                <text> testing right container</text>
            </div>
        </div>
    </div>
    );
  }
  
  export default Profile;
  