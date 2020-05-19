import React from 'react';
import "../CSS/firstContent.scss"
import image from '../Assets/firstContentImg.png';

function FirstContent() {
	return (
		<div className="firstContent">
			<div className="breadCrumb">
				<p><span><a href="/home">Home</a></span> → About Us</p>
			</div>
			<div className="title">
				<h1><span>About</span> Our Company</h1>
			</div>
			<div className="content">
				<div className="image">
					<img src={image} alt="Intérieur de maison avec un ordinateur"/>
				</div>
				<div className="text">
					<p>
						Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr.
					</p>
					<p>
						Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.
					</p>
				</div>
			</div>
		</div>
	);
}

export default FirstContent;


