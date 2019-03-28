import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import LandingRoute from './routers/LandingRoute';


class App extends Component {
	render() {
		return ( 
			<Router> 
				<LandingRoute/>
			</Router>
		);
	}
}

export default App;