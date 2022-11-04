// Team page shows who is working on the project
import "./stylesheets/team.css"
import "../global.css"
import {useNavigate} from 'react-router-dom'
import ali from './images/ali_abusulb.jfif';
import edwin from './images/edwin_lora.jfif';
import khang from './images/khang_bui.jfif';
import bruce from './images/bruce_maddux.jfif';
import josh from './images/josh_jung.jfif'



function Team() {
    let navigate = useNavigate();
    const goToHome = () => {
      let path = `..`;
      navigate(path)
    }
    return (
      <div>
        <div className = "team-logo" onClick = {goToHome}>HRnext</div>
        <div className="team-centered-container">
            <text className="team-title-text"> Meet the Team </text>
            <text>
              The engineers and designers that made this possible
            </text>
        </div>
        <div className="team-bottom-container">
           <div className="team-subtitle-text"> Our Team </div>
           <div className="team-profiles">
              <img className="team-image" src={bruce} alt='bruce' />
              <img className="team-image" src={ali} alt='ali' />
              <img className="team-image" src={josh} alt='josh' />
              <img className="team-image" src={edwin} alt='edwin'/>
              <img className="team-image" src={khang} alt='khang'/>
           </div>
        </div>
      </div>
    );
  }
  
  export default Team;
  