import './stylesheets/contact.css';
import '../global.css';
import { useNavigate } from 'react-router-dom';
// Opens page to fill in contact info to reach our team
function Contact() {
	let navigate = useNavigate();

	const goToHome = () => {
		let path = `/`;
		navigate(path);
	};
	return (
		<div className="centered-container">
			<div className="contact-logo" onClick={goToHome}>
				Layup
			</div>
			<div className="contact-title-text">Talk with us</div>
			<div className="contact-subtitle-text">
				We're happy to give you a demo and answer your questions
			</div>
			<div className="contact-info-container">
				<div className="row-container">
					<label>
						<div className="row-container">
							<p className="contact-email-label">First Name</p>
							<p
								className="contact-email-label"
								style={{ color: 'red', marginLeft: '2px' }}
							>
								*
							</p>
						</div>
						<input className="contact-input-box" />
					</label>
					<div className="contact-spacer"></div>
					<label>
						<div className="row-container">
							<p className="contact-email-label">Last Name</p>
							<p
								className="contact-email-label"
								style={{ color: 'red', marginLeft: '2px' }}
							>
								*
							</p>
						</div>
						<input className="contact-input-box" />
					</label>
				</div>
				<label>
					<div className="row-container">
						<p className="contact-email-label">Email</p>
						<p
							className="contact-email-label"
							style={{ color: 'red', marginLeft: '2px' }}
						>
							*
						</p>
					</div>
					<input className="contact-email-box" />
				</label>
				<div className="row-container">
					<label>
						<div className="row-container">
							<p className="contact-email-label">Company Name</p>
							<p
								className="contact-email-label"
								style={{ color: 'red', marginLeft: '2px' }}
							>
								*
							</p>
						</div>
						<input className="contact-input-box" />
					</label>
					<div className="contact-spacer"></div>
					<label>
						<div className="row-container">
							<p className="contact-email-label">Company Size</p>
							<p
								className="contact-email-label"
								style={{ color: 'red', marginLeft: '2px' }}
							>
								*
							</p>
						</div>
						<input className="contact-input-box" />
					</label>
				</div>
				<label>
					<div className="row-container">
						<p className="contact-email-label">Phone Number</p>
						<p
							className="contact-email-label"
							style={{ color: 'red', marginLeft: '2px' }}
						>
							*
						</p>
					</div>
					<input className="contact-email-box" />
				</label>
				<button className="contact-submit-box">Submit</button>
				<div className="contact-privacy"> Privacy Policy </div>
			</div>
		</div>
	);
}

export default Contact;
