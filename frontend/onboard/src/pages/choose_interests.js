import "./stylesheets/choose_interests.css"
import "../global.css"
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

// Used after someone gets endorsed / signs up, they choose their interests here

function ChooseInterests() {
  let navigate = useNavigate(); 

  const goToHome = () => {
    let path = `/`;
    navigate(path);
  } 
  // Mapping of each type of interest to an index. Ex. Business is 0, etc.
  const [interests, setInterests] = 
  useState([false, false, false, false, false, false, false, 
    false, false, false, false, false, false, false]);

  const updateMap = (index) => {
    let arr = [...interests];
    arr[index] = !arr[index];
    setInterests(arr);
  }
  // TODO add icons for each interest
  return (
    <div className = "centered-container">
        <div className = "interests-logo" onClick = {goToHome}>HRnext</div>
        <div className = "interests-title-text">Your Specialty or Interest</div>
        <div className = "interests-subtitle-text">
          What's your strong suit?
        </div>
        <div className = "interests-container">
          <div className = "row-container">
            <button 
            className = {interests[0] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(0)}>
                Business
            </button>
            <button 
            className = {interests[1] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(1)}>
                Legal and Policy
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[2] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(2)}>
                Customer Support
            </button>
            <button 
            className = {interests[3] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(3)}>
                Marketing
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[4] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(4)}>
                Data Science
            </button>
            <button 
            className = {interests[5] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(5)}>
                People
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[6] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(6)}>
                Design
            </button>
            <button 
            className = {interests[7] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(7)}>
                Product Management
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[8] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(8)}>
                Engineering
            </button>
            <button 
            className = {interests[9] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(9)}>
                Research and Science
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[10] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(10)}>
                Finance and Accounting
            </button>
            <button 
            className = {interests[11] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(11)}>
                Sales
            </button>
          </div>
          <div className = "row-container">
            <button 
            className = {interests[12] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(12)}>
                Information Technology
            </button>
            <button 
            className = {interests[13] ? "interests-button-clicked" : "interests-button"} 
            onClick = {() => updateMap(13)}>
                Other
            </button>
          </div>
          <button className = "interests-next-box">
            Next
        </button>
        </div>
    </div>
  );
}

export default ChooseInterests;
