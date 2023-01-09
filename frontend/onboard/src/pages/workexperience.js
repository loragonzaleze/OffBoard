import BottomGoTos from '../components/bottom-go-tos';
import { useNavigate } from 'react-router-dom';
import '../global.css';
import './stylesheets/workexperience.css';
import React, { useState } from 'react';
import validator from 'validator';

function Workexperience() {
	let navigate = useNavigate();

	const [prevCompany, setPrevCompany] = useState('');
	const [team, setTeam] = useState('');
	const [jobTitle, setJobTitle] = useState('');

	const goToHome = () => {
		let path = `/`;
		navigate(path);
	};

	const nextPage = () => {
		let path = `../profile`; // FIX - change endorsed
		navigate(path);
	};

	return (
		<div className="we-centered-container" style={{}}>
			<div className="login-logo" onClick={goToHome}>
				Layup
			</div>

			<div className="we-title-box">
				<div className="we-title-text">What was your previous company?</div>
			</div>
			<label>
				<div className="row-container">
					<p className="we-label">Name of Previous Company</p>
					<p className="we-label" style={{ color: 'red', marginLeft: '2px' }}>
						*
					</p>
				</div>
				<input
					className="we-input-box"
					onChange={(e) => setPrevCompany(e.target.value)}
				/>
			</label>

			<div className="we-title-box">
				<div className="we-title-text">What was your team or department?</div>
			</div>
			<label>
				<div className="row-container">
					<p className="we-label">Team/Department</p>
					<p className="we-label" style={{ color: 'red', marginLeft: '2px' }}>
						*
					</p>
				</div>
				<input
					className="we-input-box"
					onChange={(e) => setTeam(e.target.value)}
				/>
			</label>

			<div className="we-title-box">
				<div className="we-title-text">What was your job title?</div>
			</div>
			<label>
				<div className="row-container">
					<p className="we-label">Job Title</p>
					<p className="we-label" style={{ color: 'red', marginLeft: '2px' }}>
						*
					</p>
				</div>
				<input
					className="we-input-box"
					onChange={(e) => setJobTitle(e.target.value)}
				/>
			</label>

			<button className="we-next-box" onClick={nextPage}>
				Submit
			</button>
		</div>
	);
}

export default Workexperience;
