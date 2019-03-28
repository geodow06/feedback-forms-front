import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router
} from 'react-router-dom';
import LandingRoute from './routers/LandingRoute';
import NavBar from './components/NavbarComponent';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<header className="App-header">
						<NavBar />
					</header>
					<div id="main-content">
						<LandingRoute />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;