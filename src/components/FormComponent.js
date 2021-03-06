import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import axios from 'axios';
import * as constants from "../Consts.js";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class FormComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: "",
			question1: "",
			question1Chars: 0,
			question2: "",
			question3: "",
			question4: "",
			error: "",
			sliderValue: 6,
			week: 0,
			show: "show-form", 
			formCount:""
		}
		axios({
			method: 'get',
			url: `${constants.ip}${constants.gateway}getAccountByAccountID/${cookies.get('_id')}`

		})
			.then(response => {

				if (response.data.cohortID == null) {
					this.setState({
						error: "You have not been assigned a cohort yet, please speak with your trainer.",
						show: "no-show-form"
					})
				}
				this.setState({
					user: response.data
				})



				axios({
					method: 'get',
					url: `${constants.ip}${constants.gateway}getCohortByCohortID/${this.state.user.cohortID}`
				})
					.then(response => {
						this.setState({
							formCount: response.data.formCount
						})

						axios({
							method: 'get',
							url: `${constants.ip}${constants.gateway}getTraineeFormsByTraineeID/${this.state.user.accountID}`

						})
							.then(response => {
								for (let k = 0; k < response.data.length; k++) {
									if (response.data[k].formCount === this.state.formCount || this.state.user.cohortID === null) {
										this.setState({
											error: "You already submitted this week. Try again next week.",
											show: "no-show-form"
										})

										break;
									}
								}
							})
					})
			})
	}

	createFeedback = () => {
		axios({
			method: 'post',
			url: `${constants.ip}${constants.gateway}createTraineeForm`,
			data: {
				traineeID: this.state.user.accountID,
				cohortID: this.state.user.cohortID,
				score: this.state.sliderValue,
				answers:
				[this.state.question1,
				this.state.question2,
				this.state.question3,
				this.state.question4]
				,
				formCount: this.state.formCount
			}
		})
			.then(window.location = "/login/"
			)
	}

	updateQuestion1 = (event) => {
		this.setState({
			question1: event.target.value,
			question1Chars: this.state.question1.length + 1
		});
	}

	updateQuestion2 = (event) => {
		this.setState({ question2: event.target.value });
	}

	updateQuestion3 = (event) => {
		this.setState({ question3: event.target.value });
	}

	updateQuestion4 = (event) => {
		this.setState({ question4: event.target.value });
	}
	updateSlider = (event) => {
		this.setState({ sliderValue: event.target.value });
	}

	showSlider = () => {
		if (this.state.sliderValue <= 4) {
			return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider1" id="myRange" />
		}
		if (this.state.sliderValue <= 7) {
			return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider2" id="myRange" />
		}

		else {
			return <input type="range" min="1" max="10" value={this.state.sliderValue} onChange={this.updateSlider} className="slider3" id="myRange" />
		}
	}

	render() {

		return (
			<div className="main-body">
				{this.state.error}
				<div className="container" id={this.state.show}>
					<h1 id="heading-form">Form</h1>
					<form id="feedback-form-body">
						<div className="row">
							<div className="col-100">
								<label>Overall thoughts</label>
								<div className="slidecontainer">
									{this.showSlider()}
									<p>{this.state.sliderValue}</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<p>Question 1: What went well last week. </p>
							</div>
						</div>
						<div className="row">
							<div className="col-100">	
								<textarea id="question1" name="question1" onChange={this.updateQuestion1} />
								<div>{this.state.question1Chars}/50</div>
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<p>Question 2: How do you plan to show more of this?</p>
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<textarea id="question2" name="question2" onChange={this.updateQuestion2} />
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<p>Question 3: What went well last week. </p>
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<textarea id="question3" name="question3" onChange={this.updateQuestion3} />
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<p>Question 4: How do you plan to show more of this?</p>
							</div>
						</div>
						<div className="row">
							<div className="col-100">
								<textarea id="question4" name="question4" onChange={this.updateQuestion4} />
							</div>
						</div>
						<div className="row">
							<button id="register-button" type="button" onClick={this.createFeedback}>Create</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FormComponent;
