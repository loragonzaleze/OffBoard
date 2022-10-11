import "../global.css"
import { useNavigate } from "react-router-dom";

function BottomGoTos() {
    let navigate = useNavigate(); 

    const goToAbout = () => {
        let path = `/about`;
        navigate(path);
    }
    const goToMission = () => {
        let path = `/mission`;
        navigate(path);
    }
    const goToContact = () => {
        let path = `/contact`;
        navigate(path);
    }
    const goToTeam = () => {
        let path = `/team`;
        navigate(path);
    }
    return (
        <div className="row-container" style = {{position:"absolute", bottom: 50}}>
        <div className = "bottom-go-tos" onClick = {goToAbout}> About </div>
        <div className = "bottom-go-tos" onClick = {goToMission}> Mission </div>
        <div className = "bottom-go-tos" onClick = {goToTeam}> Team </div>
        <div className = "bottom-go-tos" onClick = {goToContact}> Contact </div>
    </div>
    )
}
export default BottomGoTos;