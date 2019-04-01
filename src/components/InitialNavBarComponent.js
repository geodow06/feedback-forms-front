import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import '../App.css';

import Auth from '../Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NavComponent extends Component {


	render() {

		return (
			<div>
				<ul id="nav-ul"> 
                    <li>LOGO</li>
                    <li>QA feedback API</li>
					<li><Link to="/">Home</Link></li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? null : <Link to="/register">Register</Link>}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/" onClick={() => { Auth.logout(() => { }); }}>Logout</Link> : <Link to="/login">Login</Link>}</li>
				</ul>
			</div>
		);
	}
}

export default NavComponent;