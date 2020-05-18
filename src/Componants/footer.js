import React from 'react';
import "../CSS/footer.scss"
import Realhome from '../Assets/RealhomeDark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPinterest,
  faFacebook,
  faInstagram,
  faGooglePlus,  
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className="footer">
			<div className="contain">
				<div className="col-1">
					<div className="image">
						<img src={Realhome} alt="RealHome logo DarkMode"/>
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
				<div className="col-2 col">
					<p>Navigation</p>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About Us</a></li>
						<li><a href="#">Property</a></li>
						<li><a href="#">Gallery</a></li>
						<li><a href="#">Our Blog</a></li>
						<li><a href="#">Contacts</a></li>
					</ul>
				</div>
				<div className="col-3 col">
					<p>For clients</p>
					<ul>
						<li><a href="#">Forum</a></li>
						<li><a href="#">Property</a></li>
						<li><a href="#">Promotions</a></li>
						<li><a href="#">News</a></li>
					</ul>
				</div>
				<div className="col-4 col">
					<p>Contact us</p>
					<ul>
						<li><a href="#">240 Central Park, London OR 10019</a></li>
						<li><a href="#">Freephone: +1 800 559 6580</a></li>
						<li><a href="#">Telephone: +1 959 603 6035</a></li>
						<li><a href="#">FAX: +1 800 559 6580</a></li>
						<li><a class="email" href="mailto:realhome@gmail.com">info@realhome.com</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;