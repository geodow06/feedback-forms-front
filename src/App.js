import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/NavbarComponent';
import LandingRoute from './components/LandingRoute';

class App extends Component {
	render() {
		return (
			<Router>
				<LandingRoute />
			</Router>

		);
	}
}

export default App;