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
<<<<<<< HEAD
					<li><Link to="/">Home</Link></li>
					<li> {Auth.isAuthenticated() && cookies.get('type') === "trainee" ? <Link to="/form">Form</Link> : null}</li>
					<li> {Auth.isAuthenticated() && cookies.get('type') === "trainer" ? <Link to="/cohorts">Cohorts</Link> : null}</li>
					<li> {Auth.isAuthenticated() && cookies.get('type') === "trainer" ? <Link to="/trainees">Trainees</Link> : null}</li>
					<li> {Auth.isAuthenticated() && cookies.get('type') === "admin" ? <Link to="/">Admin</Link> : null}</li>
					<li> {Auth.isAuthenticated() ? <Link to="/account">Account</Link> : null}</li>
					<li> {Auth.isAuthenticated() ? null : <Link to="/register">Register</Link>}</li>
					<li> {Auth.isAuthenticated() ? <Link to="/" onClick={() => { Auth.logout(() => { }); }}>Logout</Link> : <Link to="/login">Login</Link>}</li>
=======
					<li><Link to="/home">Home</Link></li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainee") ? <Link to="/form">Form</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainer") ? <Link to="/cohorts">Cohorts</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "trainer") ? <Link to="/trainees">Trainees</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated() && cookies.get('type') === "admin") ? <Link to="/">Admin</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/account">Account</Link> : null}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? null : <Link to="/register">Register</Link>}</li>
					<li> {JSON.parse(Auth.isAuthenticated()) ? <Link to="/home" onClick={() => { Auth.logout(() => { }); }}>Logout</Link> : <Link to="/login">Login</Link>}</li>
>>>>>>> parent of d908d83... updating navbar
				</ul>
			</div>
		);
	}
}

export default NavComponent;
