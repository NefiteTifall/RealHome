import React from 'react';
import NavBar from './navBar.js';
import FirstContent from './firstContent.js';
import SecondContent from './secondContent.js';
import ThirdContent from './thirdContent.js';
import Newsletter from './newsletterContent.js';
import Footer from './footer.js';


function AboutHome() {
	return (
		<div>
			<NavBar />
			<FirstContent />
			<SecondContent />
			<ThirdContent />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default AboutHome;
