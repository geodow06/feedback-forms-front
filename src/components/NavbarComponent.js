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
					<li><Link to="/" onClick={() => { Auth.logout(() => { }); }}>Home</Link></li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainee") ? <Link to="/login/form">Form</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainer") ? <Link to="/login/cohorts">Cohorts</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainer") ? <Link to="/login/trainees">Trainees</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "admin") ? <Link to="/login/">Admin</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/login/account">Account</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? null : <Link to="/login/register">Register</Link>}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/" onClick={() => { Auth.logout(() => { }); }}>Logout</Link> : <Link to="/login">Login</Link>}</li>
				</ul>
			</div>
		);
	}
}

export default NavComponent;
