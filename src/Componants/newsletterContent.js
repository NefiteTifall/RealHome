import React from 'react';
import "../CSS/newsletter.scss"

function Newsletter() {
	return (
		<div className="newsletter">
			<div className="title">
				<h1><span>Subscribe To</span> Our Newsletter</h1>
			</div>
			<div class="entry">
				<div class="email">
					<input type="text" name="email" placeholder="Your email..." />
				</div>
				<div class="ebutton">
					<button>Subscribe</button>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;


