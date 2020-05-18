import React from 'react';
import "../CSS/thirdContent.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Maria from '../Assets/PP/01.png';
import Stan from '../Assets/PP/02.png';
import Phillip from '../Assets/PP/03.png';
import Andy from '../Assets/PP/04.png';


function ThirdContent() {
	return (
		<div className="thirdContent">
			<div className="firstText">
				<div className="title">
					<h1><span>Our</span> Team</h1>
				</div> 
				<div className="title2">
					<p>Want to be a part of this team?</p>
				</div> 
			</div>
			<div className="content">
				<div className="card">
					<img src={Maria} alt="Picture of Maria Spilberg" />
					<p className="name"><strong>Maria Spilberg</strong></p>
					<p className="role">Manager</p>
				</div>
				<div className="card">
					<img src={Stan} alt="Picture of Stan Barnard"/>
					<p className="name"><strong>Stan Barnard</strong></p>
					<p className="role">Agent</p>
				</div>
				<div className="card">
					<img src={Phillip} alt="Picture of Phillip Morris"/>
					<p className="name"><strong>Phillip Morris</strong></p>
					<p className="role">Agent</p>
				</div>
				<div className="card">
					<img src={Andy} alt="Picture of Andy Zuckerberg"/>
					<p className="name"><strong>Andy Zuckerberg</strong></p>
					<p className="role">Account Manager</p>
				</div>
			</div>
		</div>
	);
}

export default ThirdContent;


