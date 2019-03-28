import React, { Component } from 'react';
import '../App.css';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import auth from '../Auth';
import * as constants from "../Consts.js";
import { post } from 'https';

import TrainerRoute from '../routers/TrainerRoutes';
import TraineeRoute from '../routers/TraineeRoutes';
import AdminRoute from '../routers/AdminRoutes';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

class LoginComponent extends Component {

	constructor() {
		super();

		this.state = {
			users: [],
			userName: "",
			email: "",
			password: "",
			error: "",
			loggedIn: false,
			account: "",
			type: ""
		}
	}

	updateUsername = (event) => {
		this.setState({ userName: event.target.value });
	}

	updateEmail = (event) => {
		this.setState({ email: event.target.value });
	}

	updatePassword = (event) => {
		this.setState({ password: event.target.value });
	}

	logInRequest = () => {
		axios({
			method: 'get',
			url: `${constants.gateway}/getAccountByEmail/${this.state.email}`,
			
		}).then(response => {
			let message = "";
			this.setState({
				account: response.data
			});
		
			 if (bcrypt.compareSync(this.state.password, this.state.account.password)) {

			    //  this.setState({loggedIn:true,type:this.state.account.type});
				 auth.login(this.state.account);
				 
				 message = "Logged in successfully."; 
			     
			 }   else {
			     message = "Username or password invalid";
			 }
			

			this.setState({
			 error: message
			})
		})
	}

	logOut = () => {
		this.setState({ loggedIn: false })
	}

	makeTrainer = () => {
		this.setState({ type: "trainer", loggedIn: true })
	}
	makeTrainee = () => {
		this.setState({ type: "trainee", loggedIn: true })
	}
	makeAdmin = () => {
		this.setState({ type: "admin", loggedIn: true })
	}
	render() {
		if (!auth.isAuthenticated()) {


			return (
				<div className="main-body">
					<div className="container">
						<h1 id="heading">Login</h1>
						<form>
							<div className="row">
								<div className="col-25">
									<label htmlFor="email">Email Address</label>
								</div>
								<div className="col-75">
									<input type="email" id="email" name="email" placeholder="Example: John.Doe@academytrainee.com" value={this.state.email} onChange={this.updateEmail} required />
								</div>
							</div>
							<div className="row">
								<div className="col-25">
									<label htmlFor="password">Password</label>
								</div>
								<div className="col-75">
									<input type="password" id="password" name="password" value={this.state.password} onChange={this.updatePassword} required />
								</div>
							</div>
							<div id="login-and-error" className="row">

								<button id="login-button" type="button" onClick={this.logInRequest}>Login</button>
								<span id="error-message">{this.state.error}</span>
							</div>
						</form>
					</div>
				</div> 
				// <div>
				// 	<button onClick={this.makeTrainer}>Trainer</button>
				// 	<button onClick={this.makeTrainee}>Trainee</button>
				// 	<button onClick={this.makeAdmin}>Admin</button>
				// </div>


			);
		}
		else if (cookies.get('type') === "trainer") {
			return (<TrainerRoute logOut={this.logOut}/>);

		}
		else if (cookies.get('type') === "trainee") {
			return (<TraineeRoute logOut={this.logOut}/>);

		}
		else if (cookies.get('type') === "admin") {
			return (<AdminRoute logOut={this.logOut}/>);

		}
		else {
			return ( 
			<div> 
				<a>You fucked up son</a>  
				<a href="/" onClick={() => {auth.logout(()=>{});}}>LOGOUT</a> 
			</div>
			
				);

		}
	}
}

export default LoginComponent;
