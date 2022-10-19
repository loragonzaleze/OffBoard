import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/talent_page.css'
import React, { useState } from 'react';
import TalentEntry from "../components/talent-entry";

// Main page of the website for recruiters, they can see who's been laid off etc.
function TalentPage() {
    return (
      <div className = "talent-main-container">
        <div className = "talent-top-bar">
          <text className = "talent-logo">
            HRnext
          </text>
        </div>
        <div className = "talent-filter-bar">
            talent bar!
        </div>
        <div className = "talent-container">
          <div className = "talent-job-field-container">
            job field
          </div>
          <div className = "talent-results">
             <TalentEntry alt = {false} name="Edwin Lora" job="Software Engineer"
             years={10} field="Engineering" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
             <TalentEntry alt = {true} name="Bruce Maddux" job="Software Engineer"
             years={10} field="Engineering" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
            <TalentEntry alt = {false} name="Ali Abusulb" job="Software Engineer"
             years={10} field="Engineering" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
            <TalentEntry alt = {true} name="Khang Bui" job="Software Engineer"
             years={10} field="Engineering" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
            <TalentEntry alt = {false} name="Josh Jung" job="Product Manager"
             years={10} field="Product" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
             <TalentEntry alt = {false} name="Andie Kim" job="Cheif Executive Officer"
             years={10} field="Business" location="St. Petersburg, Florida"
             company="Google" linkedin = "https://www.linkedin.com/in/bruce-maddux-3269901bb/"/>
          </div>
        </div>
      </div>
    );
  }
  
  export default TalentPage;
  