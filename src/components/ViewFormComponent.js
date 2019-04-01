import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class ViewFormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = ({
			feedbackList: "",
			user: "",
			traineeForm: ""
		})

		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getTraineeForm/${props.match.params.id}`

		}).then(response => {

			this.setState({
				feedbackList: response.data, 
			})
			console.log(this.state.feedbackList)
			axios({
				method: 'get',
				url: `${constants.ip}${constants.gateway}getAccountByAccountID/${response.data.traineeID}`

			}).then(res => {
				this.setState({
					user: res.data
				})
			})
		})

	
	}

	render() { 
		if(!this.state.feedbackList.answers){ 
			return(<p></p>);
		} 
		else{
		return (
			<div className="main-body">
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
				<p>Cohort Number: {this.state.user.cohortID}</p>
				<h3>Feedback Form</h3>

				<div>
					<p>Rating {this.state.feedbackList.score}</p>
					<div className="question-list">
						<div className="question">
							<p><strong>QUESTION 1</strong></p>
							<p>{this.state.feedbackList.answers[0]}</p>
						</div>
						<div className="question">
							<p><strong>QUESTION 2</strong></p>
							<p>{this.state.feedbackList.answers[1]}</p>
						</div>
						<div className="question">
							<p><strong>QUESTION 3</strong></p>
							<p>{this.state.feedbackList.answers[2]}</p>
						</div>
						<div className="question">
							<p><strong>QUESTION 4</strong></p>
							<p>{this.state.feedbackList.answers[3]}</p>
						</div>

					</div>
				</div>
			</div>
		); 
		}
	}
}

export default ViewFormComponent;
