// Explains about the company / what it does
import './stylesheets/about.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../global.css';
import { useNavigate } from 'react-router-dom';
import google from './images/google.png';
import meta from './images/meta.png';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BsLightningCharge } from 'react-icons/bs';

function About() {
	let navigate = useNavigate();
	const goToLogin = () => {
		let path = `../login`;
		navigate(path);
	};
	const goToSignUp = () => {
		let path = `../sign-up`;
		navigate(path);
	};
	const goToTalent = () => {
		let path = `../talent-page`;
		navigate(path);
	};
	const goToHome = () => {
		let path = `..`;
		navigate(path);
	};
	return (
		<div>
			<div className="about-logo" onClick={goToHome}>
				Layup
			</div>
			<div className="about-centered-container-2">
				<div
					className="row-container"
					style={{
						color: '#0078f5',
						paddingBottom: 10,
					}}
				>
					<div className="title-text">Be the hottest</div>
					<div class="slider">
						<div class="slider-text1">candidate.</div>
						<div class="slider-text2">recruiter.</div>
						<div class="slider-text3">manager.</div>
					</div>
				</div>
				<div className="about-normal-text-2-box">
					<text className="about-normal-text-2">
						Our mission is to flip the hiring process. Let recruiters reach out
						to you instead of the other way around.
					</text>
				</div>
				<div className="row-container">
					<button className="button-container">
						Finding a Job
						<BsArrowRightCircle style={{ marginLeft: 5 }} />
					</button>
					<button className="button-container" onClick={goToTalent}>
						Looking to Hire
						<BsArrowRightCircle style={{ marginLeft: 5 }} />
					</button>
					<button className="button-container">
						Endorse Someone
						<BsArrowRightCircle style={{ marginLeft: 5 }} />
					</button>
				</div>
			</div>
			<div className="about-centered-container">
				<text className="about-title-text">
					{' '}
					Every ending is really just a new beginning.{' '}
				</text>
				<div className="about-text-container">
					<text className="about-normal-text">
						Layup aims to create new relationships. Whether you are hiring or
						looking for a new gig, use Portal to grow your network and start a
						new chapter.
					</text>
				</div>
				<div className="about-row-container-2">
					<div className="about-row-container-2-box">
						<BsArrowsAngleExpand
							className="about-icon-style"
							style={{ fontSize: 50 }}
						/>
						<text className="about-normal-text-3">Expand your horizon</text>
					</div>
					<div className="about-row-container-2-box">
						<BsSearch className="about-icon-style" style={{ fontSize: 50 }} />
						<text className="about-normal-text-3">
							Search for the right fit
						</text>
					</div>
					<div className="about-row-container-2-box">
						<BsLightningCharge
							className="about-icon-style"
							style={{ fontSize: 50 }}
						/>
						<text className="about-normal-text-3">Back on the grind</text>
					</div>
				</div>
			</div>
			{/*
        <div className = "about-bottom-container">
          <div className ="about-subtitle-text">Affiliated Companies:</div>
          <div className ="about-row-container" >
              <img className="about-image" style={{ width: 50, height: 50 }} src={google} alt="google" />
              <img className="about-image" style={{ width: 50, height: 50 }} src={meta} alt="meta" />
          </div>
        </div>
          */}
			<div
				className="about-row-container"
				style={{ position: 'absolute', top: 10, right: 10, marginRight: 10 }}
			>
				<div className="about-login-button" onClick={goToLogin}>
					Login
				</div>
				<div className="about-signup-button" onClick={goToSignUp}>
					Sign Up
				</div>
			</div>
		</div>
	);
}

export default About;
