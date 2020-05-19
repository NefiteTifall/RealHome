import React from 'react';
import "../CSS/navBar.scss"
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPinterestP,
  faFacebookF,
  faInstagram,
  faGooglePlusG,  
} from '@fortawesome/free-brands-svg-icons';

function NavBar() {
	return (
		<div className="navBar">
			<div className="logo">
				<img src={logo} alt="RealHome logo"/>
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
				<div className="facebook">
					<FontAwesomeIcon className="Icon" icon={faFacebookF} />
				</div>
				<div className="pinterest">
					<FontAwesomeIcon className="Icon" icon={faPinterestP} />
				</div>
				<div className="instagram">
					<FontAwesomeIcon className="Icon" icon={faInstagram} />
				</div>
				<div className="googleplus">
					<FontAwesomeIcon className="Icon" icon={faGooglePlusG} />
				</div>
			</div>
		</div>
	);
}

export default NavBar;


