import "./stylesheets/choose_interests.css"
import "./stylesheets/job_preferences.css"
import "../global.css"
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function JobPreferences() {
  let navigate = useNavigate(); 
  let location = useLocation();

  const [onsite, setOnsite] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  const [remote, setRemote] = useState(false);
  const [salary, setSalary] = useState("Set salary expectations");

  useEffect(() => {
    console.log(location.state)
  });

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  } 
  
  const nextPage = () => {

    navigate('/resume', {state: location.state})
    let workModel = "";
    if(onsite) {
        workModel += "Onsite, ";
    }
    if(hybrid) {
        workModel += "Hybrid, ";
    }
    if(remote) {
        workModel += "Remote, ";
    }
    if(workModel.length != 0) {
        workModel = workModel.concat(0, workModel.length - 2);
    }
    console.log(workModel);
    // TODO EDWIN LOOK AT THIS!
    location.state.work_model = workModel;
    location.state.salary = salary;
  }

  return (
    <div className = "centered-container">
        <div className = "interests-logo" onClick = {goToHome}>HRnext</div>
        <text className = "interests-title-text">Your Job Preferences</text>
        <text className = "interests-subtitle-text">
          Work on your terms
        </text>
        <text className="job-preferences-title-text">Preferred Work Model(s)</text>
        <div className="job-preferences-work-location-container">
            <button className = {onsite ? "job-preferences-button-container-clicked" : "job-preferences-button-container"}
             onClick = {()=>setOnsite(!onsite)}>On-Site</button>
            <button className = {hybrid ? "job-preferences-button-container-clicked" : "job-preferences-button-container"}
             onClick = {()=>setHybrid(!hybrid)}>Hybrid</button>
                         <button className = {remote ? "job-preferences-button-container-clicked" : "job-preferences-button-container"}
             onClick = {()=>setRemote(!remote)}>Remote</button>
        </div>
        <text className="job-preferences-title-text">Salary Expectations</text>
            
        <DropdownButton
            title={salary}
            id="dropdown-menu-align-right"
            variant="light"
            onSelect={(e)=> setSalary(e)}
        >
                <Dropdown.Item eventKey="$40,000-70,000">$40,000-70,000</Dropdown.Item>
                <Dropdown.Item eventKey="$70,000-$100,000">$70,000-$100,000</Dropdown.Item>
                <Dropdown.Item eventKey="$100,000-$140,000">$100,000-$140,000</Dropdown.Item>
                <Dropdown.Item eventKey="$140,000-$180,000">$140,000-$180,000</Dropdown.Item>
                <Dropdown.Item eventKey="$180,000-$230,000">$180,000-$230,000</Dropdown.Item>
                <Dropdown.Item eventKey="$230,000-$280,000">$230,000-$280,000</Dropdown.Item>
                <Dropdown.Item eventKey="$280,000+">$280,000+</Dropdown.Item>
        </DropdownButton>
        <button className = "interests-next-box" onClick={() => nextPage()}>
            Next
        </button>

    </div>
  );
}

export default JobPreferences;
