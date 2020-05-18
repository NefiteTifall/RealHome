import React from 'react';
import "../CSS/secondContent.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobeAmericas,
  faSuitcase, 
} from '@fortawesome/free-solid-svg-icons';
import {
  faImages,
  faFolderOpen
} from '@fortawesome/free-regular-svg-icons';


function SecondContent() {
	return (
		<div className="secondContent">
			<div className="content">
				<div className="container">
					<div className="card">
						<div className="icon">
							<FontAwesomeIcon className="FontAwesomeIcon" icon={faGlobeAmericas} />
						</div>
						<div className="title">
							<p>Whole World</p>
						</div>
						<div className="text">
							<p>Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.</p>
						</div>
					</div>
					<div className="card">
						<div className="icon">
							<FontAwesomeIcon className="FontAwesomeIcon" icon={faSuitcase} />
						</div>
						<div className="title">
							<p>Confidentially</p>
						</div>
						<div className="text">
							<p>Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.</p>
						</div>
					</div>
					<div className="card">
						<div className="icon">
							<FontAwesomeIcon className="FontAwesomeIcon" icon={faImages} />
						</div>
						<div className="title">
							<p>Good Previews</p>
						</div>
						<div className="text">
							<p>Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.</p>
						</div>
					</div>
					<div className="card">
						<div className="icon">
							<FontAwesomeIcon className="FontAwesomeIcon" icon={faFolderOpen} />
						</div>
						<div className="title">
							<p>Confidentially</p>
						</div>
						<div className="text">
							<p>Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecondContent;


