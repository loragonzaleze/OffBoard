import './stylesheets/successfullyendorsed.css';
import '../global.css';
import { useNavigate } from 'react-router-dom';
import { MdCelebration } from 'react-icons/md';
import { BsArrowRightCircle } from 'react-icons/bs';

function Successfullyendorsed() {
	let navigate = useNavigate();

	const goToHome = () => {
		let path = `..`;
		navigate(path);
	};

	const goToLogin = () => {
		let path = `../login`;
		navigate(path);
	};
	return (
		<div
			className="se-centered-container" /*style = {{justifyContent:"space-around"}}*/
		>
			<div className="se-logo" onClick={goToHome}>
				Layup
			</div>
			<div className="se-message">
				Congratualtions!
				<div className="se-message">You have been successfully enrolled!</div>
				<div className="se-message">
					<MdCelebration
						style={{ color: '#4685e3', fontSize: 250, marginTop: 50 }}
					/>
				</div>
				<div className="se-bottom-next" onClick={goToLogin}>
					<text className="se-bottom-text">
						Begin your next adventure <BsArrowRightCircle />
					</text>
				</div>
			</div>
		</div>
	);
}
export default Successfullyendorsed;
