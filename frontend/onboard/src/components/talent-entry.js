import './stylesheets/talent-entry.css';
import React, { useState, useEffect } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFileEarmarkRichtext} from 'react-icons/bs'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Button from 'react-bootstrap/Button';

// Row in main talent page
// props:
// name: ex. Bruce Maddux
// job: ex. Software Engineer
// years: Years of Experience (int) 1, 2, 3, etc.
// company: ex. Google
// field : Job Field (Engineering, Business, etc)
// linkedin: linkedin link
// location: ex. St Petersburg, FL
function TalentEntry(props) {
	const [containerColor, setContainerColor] = useState('#fff');
	const [years, setYears] = useState('');
	const [yearColor, setYearColor] = useState('');
	const [fieldColor, setFieldColor] = useState('#fff');
	const [showModal, setShowModal] = useState(false);
	const [talentData, setTalentData] = useState({});

	// TODO Finish filling in the colors for all Job fields
	const fieldToColor = new Map([
		['Engineering', '#ffe4b2'],
		['Product', '#ffcccc'],
		['Business', '#ccffcc '],
		['Customer Support', '#ccffff'],
	]);
	useEffect(() => {
		// Set Year Tag info
		let displayYears = 'Y';
		if (props.years > 9) {
			displayYears += '10+';
		} else {
			displayYears += props.years;
		}
		setYears(displayYears);
		const colors = [
			'#e9f2fa',
			'#e9f2fa',
			'#bedaf0',
			'#93c2e7',
			'#7eb6e2',
			'#68aade',
			'#529ed9',
			'#529ed9',
			'#3d92d4',
			'#3d92d4',
		];
		setYearColor(colors[props.years - 1]);
		setTalentData(props.data)
		setFieldColor(fieldToColor.get(props.field));

		if (props.alt) {
			setContainerColor('#F6F6F6');
		} else {
			setContainerColor('#fff');
		}
	});
	const renderModal = () => {
		
	}
	return (
		<div
			className="talent-entry-container"
			style={{ backgroundColor: containerColor }}
		>
			<div className="talent-entry-name" onClick={()=> setShowModal(true)}>{props.name}</div>
			<text className="talent-entry-font">{props.job}</text>
			<div
				className="talent-entry-tag-years"
				style={{ backgroundColor: yearColor }}
			>
				{years}
			</div>
			<text className="talent-entry-company">{props.company}</text>
			<div className="talent-entry-tag-field-container">
				<div
					className="talent-entry-tag-field"
					style={{ backgroundColor: fieldColor }}
				>
					{props.field}
				</div>
			</div>
			<div className="talent-entry-resume">
				<a href={props.resume} download>
					<BsFileEarmarkRichtext style={{fontSize: 30}}/>
				</a>
			</div>
			<BsLinkedin
				className="talent-entry-linkedin"
				onClick={() => window.open(props.linkedin, '_blank')}
			/>
			<div className="talent-entry-location">{props.location}</div>
			{showModal && 
				<Modal show={showModal} onHide={()=>setShowModal(false)} size="lg">
				<Modal.Header closeButton>
				<Modal.Title className="talent-entry-modal-title">
					<text style = {{fontWeight: 600}}>{props.name}</text>
					<BsLinkedin
						className="talent-entry-modal-linkedin"
						onClick={() => window.open(props.linkedin, '_blank')}
					/>
					<a href={props.resume} download>
						<BsFileEarmarkRichtext style={{fontSize: 40}}/>
					</a>
				</Modal.Title>
				</Modal.Header>
				<Modal.Body className = "talent-entry-modal-body">
					<text className="talent-entry-modal-body-title">
						Contact info
					</text>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Mobile phone number
						</text>
						<text className="talent-entry-modal-body-p">
							{talentData.phone_number}
						</text>
					</div>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Email address
						</text>
						<text className="talent-entry-modal-body-p">
							{talentData.email}
						</text>
					</div>
				</Modal.Body>
				<Modal.Footer style = {{padding: 0}}/>


				<Modal.Body className = "talent-entry-modal-body">
					<text className="talent-entry-modal-body-title">
						Work experience
					</text>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Previous company
						</text>
						<text className="talent-entry-modal-body-p">
						{props.workexp[props.email] ? props.workexp[props.email].prev_company : "N/A" }
						</text>
					</div>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Team/Department
						</text>
						<text className="talent-entry-modal-body-p">
						{props.workexp[props.email] ? props.workexp[props.email].prev_team : "N/A" }
						</text>
					</div>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Job Title
						</text>
						<text className="talent-entry-modal-body-p">
						{props.workexp[props.email] ? props.workexp[props.email].prev_job_title : "N/A" }
						</text>
					</div>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Years of Experience
						</text>
						<text className="talent-entry-modal-body-p">
							{props.workexp[props.email] ? props.workexp[props.email].prev_yoe : "N/A" }
						</text>
					</div>
				</Modal.Body>
				<Modal.Footer style = {{padding: 0}}/>


				<Modal.Body className = "talent-entry-modal-body">
					<text className="talent-entry-modal-body-title">
						Job preference
					</text>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Location
						</text>
						<text className="talent-entry-modal-body-p">
							{talentData.location}
						</text>
					</div>
					<div className = "talent-entry-modal-body-container">
						<text className="talent-entry-modal-body-small-title">
							Salary Expectation
						</text>
						<text className="talent-entry-modal-body-p">
							{talentData.salary_range}
						</text>
					</div>
				</Modal.Body>
			</Modal>}
		</div>
	);
}

export default TalentEntry;
