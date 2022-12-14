// Explains about the company / what it does
import './stylesheets/profile.css';
import '../global.css';
import { useNavigate } from 'react-router-dom';
import ali from './images/ali_abusulb.jfif';
import {
	FcBusiness,
	FcRules,
	FcAdvertising,
	FcSettings,
	FcPhone,
	FcBarChart,
	FcVoicePresentation,
	FcEditImage,
	FcGlobe,
	FcBiotech,
	FcMoneyTransfer,
	FcBullish,
	FcTwoSmartphones,
} from 'react-icons/fc';

function Profile() {
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
			<div className="profile-logo" onClick={goToHome}>
				Layup
			</div>
			<div className="profile-row-container-large">
				<div className="profile-left-container">
					<img className="profile-image" src={ali} alt="IMPORT IMAGE HERE" />
					<text className="profile-name-text"> Captain America</text>
					<div className="profile-bio-box">
						<text className="profile-bio-text">
							Currently laid off from Jane Street, previously a quantitative
							researcher. Hoping to find a new company.
						</text>
					</div>
					<div className="profile-left-container-bottom-box">
						<div className="profile-row-container-specialty">
							<FcBiotech size={60} title="special" />
							<FcAdvertising size={60} title="special" />
							<FcBusiness size={60} title="special" />
						</div>
					</div>
				</div>
				<div className="profile-right-container">
					<div
						className="profile-row-container"
						style={{ justifyContent: 'center' }}
					>
						<text className="profile-previous-exp-text">
							{' '}
							Previous Work Experience
						</text>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
