import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/talent_page.css'
import React, { useState } from 'react';
import TalentEntry from "../components/talent-entry";
import axios from 'axios';

// Main page of the website for recruiters, they can see who's been laid off etc.
class TalentPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        talent: []
      };
    }


    componentDidMount() {
      this.retrieveTalentList()
      .then(res => this.setState({talent: res.data.data.users}))
      .catch((error) => console.log(error));
    }

    async retrieveTalentList() {
      const header = {
        "Content-Type": "application/json"
      };
      var talentListQuery = `
        query TalentQuery {
          users {
            full_name
            email
            resume
            url
            job_title
            job_category
            linkedin
            location
            country
          }
        }
      `;

      return axios({
        url: 'http://localhost:5000/graphql', //Change to handle any URL + graphql
        method: "POST",
        headers: header,
        data: {
          query: talentListQuery,
          variables: {}
        }
      })
    }




    render(){
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
            {
              this.state.talent.map((talent) => {
                return (
                  <TalentEntry 
                    key = {talent.email}
                    alt = {false} 
                    name = {talent.full_name} 
                    job = {talent.job_title}
                    years = {10} // TODO add YOE to GraphQL schema
                    field = {talent.job_category}
                    location = {talent.location}
                    company = "Google" // TODO add current company to GraphQL schema
                    linkedin = {talent.linkedin}/>
                )
              })
            }
            </div>

          </div>
        </div>
      );
    }
  }
  
  export default TalentPage;
  