import "./stylesheets/choose_interests.css"
import "../global.css"
import { useNavigate, useLocation } from "react-router-dom";
import {FcBusiness, FcRules, FcAdvertising, FcSettings, FcPhone,
  FcBarChart, FcVoicePresentation, FcEditImage, FcGlobe, 
  FcBiotech, FcMoneyTransfer, FcBullish, FcTwoSmartphones} from "react-icons/fc"
import React, { useEffect, useState } from 'react';

// Used after someone gets endorsed / signs up, they choose their interests here

// TODO implement next page functionaltiy to link this page to something
// implement prev page functionality from where this is being linked
function ChooseInterests() {
  let navigate = useNavigate(); 
  let location = useLocation();

  useEffect(() => {
    console.log(location.state)
  });

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  } 
  // Mapping of each type of interest to an index. Ex. Business is 0, etc.
  const [interests, setInterests] = 
  useState([false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false]);
  
  const jobCategories = [
    "Business", "Legal and Policy", "Customer Support", "Marketing", "Data Science",
    "People", "Design", "Product Management", "Engineering", "Research and Science",
    "Finance and Accounting", "Sales", "Information Technology", "Other"
  ]
  
  //Can only choose one Job Category for now, so deactivate previous selection  
  const [prevJobCategory, setPrevJobCategory] = useState(-1);
  const [selectedJobCategory, setSelectedJobCategory] = useState(true);

  const updateMap = (index) => {
    setSelectedJobCategory(true)
    let arr = [...interests];
    arr[index] = !arr[index];
    if(prevJobCategory > -1) {
      arr[prevJobCategory] = false;
    }
    if(index === prevJobCategory) {
      setPrevJobCategory(-1)
    } else {
      setPrevJobCategory(index)
    }
    setInterests(arr);
  }

  const nextPage = () => {
    if(prevJobCategory === -1) {
      setSelectedJobCategory(false)
      return
    }
    console.log(prevJobCategory)
    location.state.job_category = jobCategories[prevJobCategory]
    console.log(location.state)

    navigate('/resume', {state: location.state})

  }



  // TODO add icons for each interest
  return (
    <div className = "centered-container">
        <div className = "interests-logo" onClick = {goToHome}>HRnext</div>
        <text className = "interests-title-text">Your Specialty or Interest</text>
        <text className = "interests-subtitle-text">
          What's your strong suit?
        </text>
        <div className = "interests-container">
          <div className = "row-container">
            <button 
            className = {interests[0] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(0)}>
                <FcBusiness size = {25} className = "interests-icon"/>
                Business
            </button>
            <button 
            className = {interests[1] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(1)}>
                <FcRules size = {25} className = "interests-icon"/>
                Legal and Policy
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[2] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(2)}>
              <FcPhone size = {25} className = "interests-icon"/>
                Customer Support
            </button>
            <button 
            className = {interests[3] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(3)}>
                <FcAdvertising size = {25} className = "interests-icon"/>
                Marketing
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[4] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(4)}>
                <FcBarChart size = {25} className = "interests-icon"/>
                Data Science
            </button>
            <button 
            className = {interests[5] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(5)}>
                <FcVoicePresentation size = {25} className = "interests-icon"/>
                People
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[6] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(6)}>
                <FcEditImage size = {25} className = "interests-icon"/>
                Design
            </button>
            <button 
            className = {interests[7] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(7)}>
                <FcGlobe size = {25} className = "interests-icon"/>
                Product Management
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[8] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(8)}>
                <FcSettings size = {25} className = "interests-icon"/>
                Engineering
            </button>
            <button 
            className = {interests[9] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(9)}>
                <FcBiotech size = {25} className = "interests-icon"/>
                Research and Science
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[10] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(10)}>
                <FcMoneyTransfer size = {25} className = "interests-icon"/>
                Finance and Accounting
            </button>
            <button 
            className = {interests[11] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(11)}>
                <FcBullish size = {25} className = "interests-icon"/>
                Sales
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[12] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(12)}>
                <FcTwoSmartphones size = {25} className = "interests-icon"/>
                Information Technology
            </button>
            <button 
            className = {interests[13] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(13)}>
              {/* Used as spacer here */}
              <div className = "interests-icon"/>
                Other
            </button>
          </div>
          {
            selectedJobCategory ? null : <p className = "interests-error-text">Please select a job category</p>
          }
          <button className = "interests-next-box" onClick={() => nextPage()}>
            Next
        </button>
        </div>
    </div>
  );
}

export default ChooseInterests;
