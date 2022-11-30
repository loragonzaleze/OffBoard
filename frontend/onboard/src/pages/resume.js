import React, { useEffect } from 'react';
import AWS from 'aws-sdk';
import "../global.css"
import "./stylesheets/resume.css"
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';


function ResumeUpload() {

    const [file, setFile] = React.useState(null);
    let location = useLocation();
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID
    });
    const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-1'
    })


    useEffect(() => {
        console.log(location.state)
    }, [""])
    const handleResumeInput = (e) => {
        setFile(e.target.files[0]);
    }

    const uploadResume = () => {
        const filename = location.state.firstName + "_" + location.state.lastName + "_Resume.pdf";

        const params = {
            Body: file,
            Bucket: process.env.REACT_APP_AWS_STORAGE_BUCKET_NAME,
            Key: filename
        }

    s3.upload(params, (err, data) => {
      if(err){
        console.log(err)
      } else {
        console.log(data)
        location.state.resume = data.Location
        console.log("Success")

        axios.post('http://localhost:5001/talent-entry', location.state).then((res, err) => {
            if(err) {
                console.log(err)
            } else {
                console.log(res)
                console.log("Successfully uplaoded ")

            }
        })

      }
    })
    }

    return (
        <div className = "centered-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
             <div className = "interests-logo">HRnext</div>
             <text className = "interests-title-text">Attach your resume below!</text>
             <div className="Row-upload-resume">
                <label className="file-upload">
                    <input type="file" multiple onChange={e => handleResumeInput(e)} />
                    <i className="fa fa-cloud-upload" style={{fontSize: 22}}/><span className="file-upload-label">Attach Resume</span> 
                </label>
            </div>
            <button className = "interests-next-box" onClick={() => uploadResume()} >
                Next
            </button>
        </div>

    )
}

export default ResumeUpload;