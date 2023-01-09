// Team page shows who is working on the project
import './stylesheets/team.css';
import '../global.css';
import { useNavigate } from 'react-router-dom';
import ali from './images/ali_abusulb.jfif';
import edwin from './images/edwin_lora.jfif';
import khang from './images/khang_bui.jfif';
import bruce from './images/bruce_maddux.jfif';
import josh from './images/josh_jung.jfif';

function Team() {
	let navigate = useNavigate();
	const goToHome = () => {
		let path = `..`;
		navigate(path);
	};
	return (
		<div>
			<div className="team-logo" onClick={goToHome}>
				Layup
			</div>
			<div className="team-centered-container">
				<text className="team-title-text"> Meet the Team </text>
				<text className="team-normal-text">
					The engineers and designers that made this possible.
				</text>
			</div>
			<div className="team-bottom-container">
				<div className="team-subtitle-text"> Our Team </div>
				<div className="team-profiles">
					<img className="team-image" src={bruce} alt="bruce" />
					<img className="team-image" src={ali} alt="ali" />
					<img className="team-image" src={josh} alt="josh" />
					<img className="team-image" src={edwin} alt="edwin" />
					<img className="team-image" src={khang} alt="khang" />
				</div>
				<div className="team-row-names">
					<text className="team-text-names">Bruce Maddux</text>
					<text className="team-text-names">Ali Abusulb</text>
					<text className="team-text-names">Josh Jung</text>
					<text className="team-text-names">Edwin Lora</text>
					<text className="team-text-names">Khang Bui</text>
				</div>
			</div>
		</div>
	);
}

export default Team;
