import React, { useEffect } from 'react';
import AWS from 'aws-sdk';
//import "../global.css"
import './stylesheets/job_title.css';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';

function JobTitle() {
	const [jobTitle, setJobTitle] = React.useState('');

	let location = useLocation();
	let navigate = useNavigate();

	/** Check if location.state is null, if so redirect to main signup page */

	useEffect(() => {
		// if(location.state == null) {
		//     navigate("/sign-up")
		// }
	}, ['']);
	const nextPage = () => {
		if (jobTitle === '') {
			return;
		}
		/**TODO add message for empty title */
		location.state.jobTitle = jobTitle;
		console.log(location.state);
		navigate('/job-preferences', { state: location.state });
	};
	return (
		<div>
			<div className="job-title-top-bar">
				<div className="interests-logo">Layup</div>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</div>
			<div className="job-title-text-div">
				<text className="job-title-text">What's your job title?</text>
			</div>

			<div className="job-title-input-div">
				<label>
					<div className="job-title-row-container">
						<p className="login-email-label">Job Title</p>
						<p
							className="login-email-label"
							style={{ color: 'red', marginLeft: '2px' }}
						>
							*
						</p>
					</div>
					<input
						className="job-title-input-box "
						onChange={(e) => setJobTitle(e.target.value)}
					/>
				</label>
			</div>
			<div className="job-title-input-div">
				<button className="job-title-next-box" onClick={() => nextPage()}>
					Next
				</button>
			</div>
		</div>
		// </div>
	);
}

export default JobTitle;
