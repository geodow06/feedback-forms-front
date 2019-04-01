import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { Link } from "react-router-dom";
class SingleCohortComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cohort: "",
			cohortName: "",
			trainerName: "",
			week: 0,
			description: "",
			traineesList: []
		}
		console.log("Path:", `${constants.ip}${constants.gateway}getCohortByCohortID/${props.match.params.id}`);
		axios({
			method: 'get',
			// 	// url: constants.get + '/cohorts/getCohortById/' + props.match.params.id
			url: `${constants.ip}${constants.gateway}getCohortByCohortID/${props.match.params.id}`
		}).then(response => {

			console.log("Response:", response.data);

			this.setState({
				// cohort: response.data,
				// cohortName: response.data.cohortName,
				// trainerName: response.data.trainerName,
				// week: response.data.week,
				// description: response.data.cohortDescription 
				cohort: response.data
			})
		}).catch(error => {
			console.log("Error:", error);
		})


	}

	back = () => {
		window.location = "/login/cohorts";
	}

	render() {

		let trainees = this.state.traineesList.map((trainee, i) => (
			<tr key={i}>
				<td>{trainee.firstName + " " + trainee.lastName}</td>
				<td>{trainee.email}</td>
				<td><Link to={"login/singleuser/" + trainee.accountID} className="button">VIEW</Link></td>
			</tr>
		));

		return (
			<div className="main-body">
				BLOOP
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