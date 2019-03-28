import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';
import Navbar from './components/NavbarComponent';
import LandingComponent from './components/LandingComponent';
import TrainerForm from './components/TrainerFormComponent'

class App extends Component {
	render() {
		return (
			// <LandingComponent /> 
			<TrainerForm/>
		);
	}
}

export default App;