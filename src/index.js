import React from 'react';
import ReactDOM from 'react-dom';
import AboutHome from './Componants/AboutIndex.js';
import Index from './Componants/index.js';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<div>
				<Switch>
	  				<Route path="/about">
						<AboutHome />
			  		</Route>
			  		<Route path="/">
			  			<Index />
			  		</Route>
				</Switch>
			</div>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
serviceWorker.unregister();
