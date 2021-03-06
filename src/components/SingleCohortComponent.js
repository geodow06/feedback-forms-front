import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { Link } from "react-router-dom";
import AverageGraphComponent from './AverageGraphComponent';
class SingleCohortComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cohort: "",
			cohortName: "",
			trainerName: "",
			week: 0,
			description: "",
			traineesList: [],
			feedbackList: ""
		}

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getCohortByCohortID/${props.match.params.id}`
		}).then(response => {

			console.log("Response:", response.data);

			this.setState({
				cohort: response.data
			})
		}).catch(error => {
			console.log("Error:", error);
		})

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getAccountsByCohortID/${props.match.params.id}`
		}).then(response => {
			this.setState({ traineesList: response.data })
		})

		axios({
			method: 'post',
			url: `${constants.ip}${constants.gateway}getAveragesForCohortID/${props.match.params.id}`
		}).then(response => { 
			console.log(response.data)
			this.setState({ feedbackList: response.data })
		})

	}

	updateCohortFormCount = () => {
		axios({
			method: 'put',
			url: `${constants.ip}${constants.gateway}updateCount/${this.state.cohort.cohortID}`
		})
		window.history.go(0)
	}

	back = () => {
		window.location = "/login/cohorts";
	}

	render() {

		let trainees = this.state.traineesList.map((trainee, i) => (
			<tr key={i}>
				<td>{trainee.firstName + " " + trainee.lastName}</td>
				<td>{trainee.email}</td>
				<td><Link to={"/login/singleuser/" + trainee.accountID} className="button">VIEW</Link></td>
			</tr>
		));

		return (
			<div className="main-body">
				<AverageGraphComponent cohortID={this.props.match.params.id}/>
				<h2 id="week-text">Current week {this.state.cohort.formCount}</h2>
				<button onClick={this.updateCohortFormCount} id="register-button">Send out form</button>
				<h1>{this.state.cohort.Name}</h1>
				<p>Trainer: {this.state.cohort.trainerName}</p>
				<p>Description: {this.state.cohort.description}</p>
				<h3>Trainees</h3>
				<table>
					<thead>
						<tr>
							<td>Name</td>
							<td>Email</td>
							<td>View</td>
						</tr>
					</thead>
					<tbody>
						{trainees}
					</tbody>
				</table>
				<button onClick={this.back}>BACK</button>
			</div>
		);
	}
}

export default SingleCohortComponent;