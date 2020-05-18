import React from 'react';
import "../CSS/navBar.scss"
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPinterest,
  faFacebook,
  faInstagram,
  faGooglePlus,  
} from '@fortawesome/free-brands-svg-icons';

function NavBar() {
	return (
		<div className="navBar">
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="menu">
				<div>
					<a href="#">Home</a>
				</div>
				<div>
					<a href="/about">About Us</a>
				</div>
				<div>
					<a href="#">Property</a>
				</div>
				<div>
					<a href="#">Out Blog</a>
				</div>
				<div>
					<a href="#">Contacts</a>
				</div>
			</div>
			<div className="reseaux">
				<div>
					<FontAwesomeIcon className="Icon facebook" icon={faFacebook} />
				</div>
				<div>
					<FontAwesomeIcon className="Icon pinterest" icon={faPinterest} />
				</div>
				<div>
					<FontAwesomeIcon className="Icon instagram" icon={faInstagram} />
				</div>
				<div>
					<FontAwesomeIcon className="Icon googleplus" icon={faGooglePlus} />
				</div>
			</div>
		</div>
	);
}

export default NavBar;


