import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import ChooseInterests from './pages/choose_interests.js';
import Login from './pages/login.js';
import GettingStarted from './pages/getting_started.js';
import Endorsed from './pages/endorsed.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Mission from './pages/mission.js';
import Team from './pages/team.js';
import SignUp from './pages/signup.js';
import TalentPage from './pages/talent_page.js';
import ResumeUpload from './pages/resume.js';
import JobseekerForm from './pages/jobseeker_form.js';
import Profile from './pages/profile.js';
import JobPreferences from './pages/job_preferences.js'
import JobTitle from './pages/job_title.js';
import Yoe from './pages/yoe.js';
import ConfirmInfo from './pages/confirmInfo.js';
import Endorse from './pages/endorse.js';
import SuccessfullyEndorsed from './pages/successfullyendorsed.js'
import WorkExperience from './pages/workexperience.js'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<GettingStarted />} />
						<Route path="/choose-interests" element={<ChooseInterests />} />
						<Route path="/login" element={<Login />} />
						<Route path="/endorsed" element={<Endorsed />} />
						<Route path="/about" element={<About />} />
						<Route path="/team" element={<Team />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/mission" element={<Mission />} />
						<Route path="/about" element={<About />} />
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/talent-page" element={<TalentPage />} />
						<Route path="/resume" element={<ResumeUpload />} />
						<Route path="/jobseeker_form" element={<JobseekerForm />} />
						<Route path="/profile" element={<Profile />} />
						<Route path = "/job-preferences" element={<JobPreferences/>} />
						<Route path = "/job-title" element={<JobTitle/>} />
						<Route path = "/yoe" element={<Yoe/>} />
						<Route path = "/confirm-info" element={<ConfirmInfo/>} />
						<Route path = "/endorse" element={<Endorse/>} />
						<Route path = "/successfullyendorsed" element={<SuccessfullyEndorsed/>} />
						<Route path ="/workexperience" element={<WorkExperience/>} />
					</Routes>
				</Router>
			</div>
		);
	}
}
export default App;
