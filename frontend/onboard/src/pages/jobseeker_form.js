import { useState } from 'react';
import './stylesheets/jobseeker_form.css';

const JobseekerForm = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [company, setCompany] = useState('');
	const [author, setAuthor] = useState('mario');

	return (
		<div className="create">
			<h2>Get on the List</h2>
			<form>
				<label>Full name:</label>
				<input
					type="text"
					required
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
				/>
				<label>Email:</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Mobile Number:</label>
				<input
					type="text"
					required
					value={mobile}
					onChange={(e) => setMobile(e.target.value)}
				/>
				<label>Company:</label>
				<input
					type="text"
					required
					value={company}
					onChange={(e) => setCompany(e.target.value)}
				></input>
				<label>Department:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="Business">Business</option>
					<option value="Customer Support">Customer Support</option>
					<option value="Data Science">Data Science</option>
					<option value="Design">Design</option>
					<option value="Engineering">Engineering</option>
					<option value="Finance & Accounting">Finance & Accounting</option>
					<option value="Information Technology">Information Technology</option>
					<option value="Legal & Policy">Legal & Policy</option>
					<option value="Marketing">Marketing</option>
					<option value="People">People</option>
					<option value="Product Management">Product Management</option>
					<option value="Research & Science">Research & Science</option>
					<option value="Sales">Sales</option>
					<option value="Other">Other</option>
				</select>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default JobseekerForm;
