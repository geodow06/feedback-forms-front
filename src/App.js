import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import LandingRoute from './routers/LandingRoute';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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