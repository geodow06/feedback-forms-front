import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from "react-router-dom";
import Graph from './GraphComponent';
class SingleUserComponent extends Component {


	constructor(props) {
		super(props);

		this.state = {
			trainee: "",
			feedbackList: [],
			feedbackSize: 0,
			trainerFeedbackList: [],
			trainerFeedbackSize: 0,
			myArray: [],
			flaggedBoolean: ""
		}

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getTraineeFormsByTraineeID/${props.match.params.id}`
		}).then(response => {

			this.setState({
				feedbackList: response.data,
				feedbackSize: response.data.length
			})
		})

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getAccountByAccountID/${this.props.match.params.id}`
		}).then(response => {

			this.setState({
				trainee: response.data,
				flagged: response.data.flagged.toString()
			})
		})

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getTrainerFormsByTraineeID/${props.match.params.id}`
		}).then(response => {

			this.setState({
				trainerFeedbackList: response.data,
				trainerFeedbackSize: response.data.length
			})
			console.log(this.state.trainerFeedbackList)
		})

	}


	flagTrainee = () => {
		axios({
			method: 'put',
			url: `${constants.ip}${constants.gateway}updateAccountByID/${this.state.trainee.accountID}`,
			data: {
				flagged: !this.state.flagged
			}
		})
			.then(response => {
				this.setState({ flagged: response.data.flagged.toString() })
			})
	}

	render() {

		let feedbackData = this.state.feedbackList.map((feedback, i) => (
			<tr key={i}>
				<td>Week: {feedback.formCount}</td>
				<td>Score: {feedback.score}</td>
				<td><Link to={"/login/viewform/" + feedback.traineeFormID} className="button">VIEW</Link></td>
				<td><Link to={`/login/trainerform/${this.state.trainee.accountID}/${feedback.formCount}`} className="button">WRITE</Link></td>
			</tr>
		));

		return (
			<div className="main-body">
				<Graph graphData={this.state.feedbackList} graphData2={this.state.trainerFeedbackList} />
				<div className="single-user-body">
					<div id="single-user-info">
						<h1>{this.state.trainee.firstName} {this.state.trainee.lastName}</h1><button id="flag-trainee" onClick={this.flagTrainee} className="button">FLAG</button>
						<p>Cohort Number: {this.state.trainee.cohortID}</p>
						<p>Flagged? {this.state.flagged}</p>
						<p>Feedback given: {this.state.feedbackSize}</p>
					</div>
					<div id="single-user-feedback">
						<h3>Feedback</h3>
						<table>
							<thead>
								<tr>
									<td>Week</td>
									<td>Score</td>
									<td>View feedback</td>
									<td>Write Feedback</td>
								</tr>
							</thead>
							<tbody>
								{feedbackData}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default SingleUserComponent;
