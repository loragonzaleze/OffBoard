import { useNavigate } from "react-router-dom";
import "../global.css"
import './stylesheets/talent_page.css'
import React, { useState } from 'react';
import TalentEntry from "../components/talent-entry";
import axios from 'axios';
import {FcBusiness, FcRules, FcAdvertising, FcSettings, FcPhone,
  FcBarChart, FcVoicePresentation, FcEditImage, FcGlobe, 
  FcBiotech, FcMoneyTransfer, FcBullish, FcTwoSmartphones} from "react-icons/fc"

// Main page of the website for recruiters, they can see who's been laid off etc.
class TalentPage extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        talent: [],
        interests: {
          business: false,
          customerSupport: false,
          dataScience: false,
          design: false,
          engineering: false,
          finance: false,
          informationTechnology: false,
          legalPolicy: false,
          marketing: false,
          people: false,
          productManagement: false,
          researchScience: false,
        },
        filteredTalent: [],
        currentlySelectedTalentMap: new Map(),
        categoryToName: {
          "business": "Business",
          "customerSupport": "Customer Support",
          "dataScience": "Data Science",
          "design": "Design",
          "engineering": "Engineering",
          "financeAccounting": "Finance and Accounting",
          "informationTechnology": "Information Technology",
          "legalPolicy": "Legal and Policy",
          "marketing": "Marketing",
          "people": "People",
          "productManagement": "Product Management",
          "researchScience": "Research and Science",
        }
      };
    }
    /** Filter results based on buttons clicked on side */ 
    updateSelections = (name) => {
      let arr = this.state.interests
      arr[name] = !this.state.interests[name]
      this.setState({interests: arr})
      let filtered = []
      if(arr[name]) {
        let map = this.state.currentlySelectedTalentMap;
        filtered = this.state.talent.filter((talent) => {return talent.job_category === this.state.categoryToName[name]})
        let currFilter = [];
        if(!map.has(name)){
          map.set(name, filtered)
        }
        this.setState({currentlySelectedTalentMap: map})

        map.forEach((value, key) => {
          currFilter = currFilter.concat(value)
        })
        this.setState({filteredTalent: currFilter})

      } else {
        let map = this.state.currentlySelectedTalentMap;
        map.delete(name)
        this.setState({currentlySelectedTalentMap: map})
        let currFilter = [];
        map.forEach((value, key) => {
          currFilter = currFilter.concat(value)
        })
        this.setState({filteredTalent: currFilter})

        if(this.state.currentlySelectedTalentMap.size === 0){
          this.setState({filteredTalent: this.state.talent})
        }
      }

    }

    returnTalentList = () => {
      let talentList = [];
      let alt = false;
      console.log(this.state.filteredTalent)
      for(let i = 0; i < this.state.filteredTalent.length; i++){
        let talent = this.state.filteredTalent[i];
        talentList.push( <TalentEntry 
          key = {talent.email}
          alt = {alt} 
          name = {talent.full_name} 
          job = {talent.job_title}
          years = {10} // TODO add YOE to GraphQL schema
          field = {talent.job_category}
          resume = {talent.resume}
          location = {talent.location}
          company = "Google" // TODO add current company to GraphQL schema
          linkedin = {talent.linkedin}/>)
          alt = !alt;

      }
      return talentList;

    }


    componentDidMount() {
      this.retrieveTalentList()
      .then(res => {
        this.setState({talent: res.data.data.users})
        this.setState({filteredTalent: res.data.data.users})
      })
      .catch((error) => console.log(error));


      // console.log("Testing graphql query")
      // this.retrieveTalentByJobCategory("Engineering")
      // .then(res => console.log(res.data.data.userJobCategory))
      // .catch((error) => console.log(error));
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
        url: 'http://localhost:5001/graphql', //Change to handle any URL + graphql
        method: "POST",
        headers: header,
        data: {
          query: talentListQuery,
          variables: {}
        }
      })
    }

    async retrieveTalentByJobCategory(job_category) {
      const header = {
        "Content-Type": "application/json"
      };
      var talentListQuery = `
        query TalentQuery {
          userJobCategory(job_category: "${job_category}") {
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
        url: 'http://localhost:5001/graphql', //Change to handle any URL + graphql
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
          <div className = "talent-container">
            <div className = "talent-job-field-container">
              <text className = "talent-job-field-text">
                Job Field
              </text>
              <button 
              className = {this.state.interests['business'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('business')}>
                  <FcBusiness size = {25} className = "interests-icon"/>
                  Business
              </button>
              <button 
              className = {this.state.interests['customerSupport'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('customerSupport')}>
                  <FcPhone size = {25} className = "interests-icon"/>
                  Customer Support
              </button>
              <button 
              className = {this.state.interests['dataScience'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('dataScience')}>
                  <FcBarChart size = {25} className = "interests-icon"/>
                  Data Science
              </button>
              <button 
              className = {this.state.interests['design'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('design')}>
                  <FcEditImage size = {25} className = "interests-icon"/>
                  Design
              </button>
              <button 
              className = {this.state.interests['engineering'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('engineering')}>
                  <FcSettings size = {25} className = "interests-icon"/>
                  Engineering
              </button>
              <button 
              className = {this.state.interests['financeAccounting'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('financeAccounting')}>
                  <FcMoneyTransfer size = {25} className = "interests-icon"/>
                  Finance and Accounting
              </button>
              <button 
              className = {this.state.interests['informationTechnology'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('informationTechnology')}>
                  <FcTwoSmartphones size = {25} className = "interests-icon"/>
                  Information Technology
              </button>
              <button 
              className = {this.state.interests['legalPolicy'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('legalPolicy')}>
                  <FcRules size = {25} className = "interests-icon"/>
                  Legal and Policy
              </button>
              <button 
              className = {this.state.interests['marketing'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('marketing')}>
                  <FcAdvertising size = {25} className = "interests-icon"/>
                  Marketing
              </button>
              <button 
              className = {this.state.interests['people'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('people')}>
                  <FcVoicePresentation size = {25} className = "interests-icon"/>
                  People
              </button>
              <button 
              className = {this.state.interests['productManagement'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('productManagement')}>
                  <FcGlobe size = {25} className = "interests-icon"/>
                  Product Management
              </button>
              <button 
              className = {this.state.interests['researchScience'] ? "talent-button-clicked" : "talent-button"} 
              onClick = {() => this.updateSelections('researchScience')}>
                  <FcBiotech size = {25} className = "interests-icon"/>
                  Research and Science
              </button>
            </div>
            <div className = "talent-results">
                <div className = "talent-results-count">
                  {this.state.filteredTalent.length} results
                </div>
                {
                  this.returnTalentList().map((talent) =>{return talent})
                }
   
            </div>

          </div>
        </div>
      );
    }
  }
  
  export default TalentPage;
  