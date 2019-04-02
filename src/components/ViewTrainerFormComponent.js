import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class ViewTrainerFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedbackList: "",
            user: "",
            traineeForm: ""
        }

        // axios({
        // 	method: 'get',
        // 	url: `${constants.ip}${constants.gateway}getTraineeForm/${props.match.params.id}`

        // }).then(response => {

        // 	this.setState({
        // 		feedbackList: response.data, 
        // 	})
        // 	console.log(this.state.feedbackList)
        // 	axios({
        // 		method: 'get',
        // 		url: `${constants.ip}${constants.gateway}getAccountByAccountID/${response.data.traineeID}`

        // 	}).then(res => {
        // 		this.setState({
        // 			user: res.data
        // 		})
        // 	})
        // })


    }

    render() {
        if (!this.props.completedForm.answers) {
            return (<p></p>);
        }
        else {
            return (
                <div className="main-body">
                    <h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                    <h3>Feedback You Submitted</h3>
                    <div>
                        <div className="question-list">
                            <div className="question">
                                <p><strong>Attitude</strong></p>
                                <p>{this.props.completedForm.scores[0]}</p>
                            </div>
                            <div className="question">
                                <p><strong>Attitude Comments</strong></p>
                                <p>{this.props.completedForm.answers[0]}</p>
                            </div>
                            <div className="question">
                                <p><strong>Soft Skills</strong></p>
                                <p>{this.props.completedForm.scores[1]}</p>
                            </div>
                            <div className="question">
                                <p><strong>Soft Skills Comments</strong></p>
                                <p>{this.props.completedForm.scores[1]}</p>
                            </div>
                            <div className="question">
                                <p><strong>Tech skills</strong></p>
                                <p>{this.props.completedForm.scores[2]}</p>
                            </div>
                            <div className="question">
                                <p><strong>Tech skills comments</strong></p>
                                <p>{this.props.completedForm.scores[2]}</p>
                            </div>
                            <div className="question">
                                <p><strong>comments sent to trainee</strong></p>
                                <p>{this.props.completedForm.comments}</p>
                            </div>
                         
                         

                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ViewTrainerFormComponent;