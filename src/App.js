import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/NavbarComponent';
import LandingComponent from './components/LandingComponent';

class App extends Component {
	render() {
		return (
			<LandingComponent />
		);
	}
}

export default App;