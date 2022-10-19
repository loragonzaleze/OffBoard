import './stylesheets/talent-entry.css'
import React, { useState, useEffect } from 'react';
import { BsLinkedin } from 'react-icons/bs';
// Row in main talent page
// props:
// name: ex. Bruce Maddux
// job: ex. Software Engineer
// years: Years of Experience (int) 1, 2, 3, etc.
// company: ex. Google
// field : Job Field (Engineering, Business, etc)
// linkedin: linkedin link
// location: ex. St Petersburg, FL
function TalentEntry(props) {
  const [containerColor, setContainerColor] = useState("#fff")
  const [years, setYears] = useState("");
  const [yearColor, setYearColor] = useState("");
  const [fieldColor, setFieldColor] = useState("#fff");

  // TODO Finish filling in the colors for all Job fields
  const fieldToColor = new Map([
    ['Engineering', '#ffe4b2'],
    ['Product', '#ffcccc'],
    ['Business', '#ccffcc ']
  ]); 
  useEffect(() => {
    // Set Year Tag info
    let displayYears = "Y"
    if(props.years > 9) {
      displayYears += "10+"
    }
    else {
      displayYears += props.years
    }
    setYears(displayYears);
    const colors = [
      "#e9f2fa", "#e9f2fa", "#bedaf0", "#93c2e7", "#7eb6e2",
       "#68aade", "#529ed9", "#529ed9", "#3d92d4", "#3d92d4"
    ];
    setYearColor(colors[props.years - 1]);

    setFieldColor(fieldToColor.get(props.field));

    if(props.alt) {
      setContainerColor("#d3d3d350");
    } else {
      setContainerColor("#fff")
    }
  });
  return (
    <div className = "talent-entry-container" style = {{backgroundColor: containerColor}}>
      <text className = "talent-entry-name">{props.name}</text>
      <div className = "talent-entry-row-container">
        <text className = "talent-entry-font">{props.job}</text>
        <div className = "talent-entry-tag" style = {{backgroundColor: yearColor}}>
          {years}
        </div>
      </div>
      <div className = "talent-entry-row-container">
        <text className = "talent-entry-font">{props.company}</text>
        <div className = "talent-entry-tag" style = {{backgroundColor: fieldColor}}>
          {props.field}
        </div>
      </div>
      <div className = "talent-entry-location-container">
        <BsLinkedin className = "talent-entry-linkedin" 
        onClick = {() => window.open(props.linkedin, '_blank')}/>
        <div className = "talent-entry-font">{props.location}</div>
      </div>

    </div>
  );
}

export default TalentEntry;
