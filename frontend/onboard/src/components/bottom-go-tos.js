import "../global.css"
import { useNavigate } from "react-router-dom";
// Used for many pages, has all four elements to link at the bottom to describe
// About the company,
// Mission of the company,
// Team
// Contact
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
        <div className="row-container" style = {{position:"absolute", bottom: 30}}>
        <div className = "bottom-go-tos" onClick = {goToAbout}> About </div>
        <div className = "bottom-go-tos" onClick = {goToMission}> Mission </div>
        <div className = "bottom-go-tos" onClick = {goToTeam}> Team </div>
        <div className = "bottom-go-tos" onClick = {goToContact}> Contact </div>
    </div>
    )
}
export default BottomGoTos;