import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import axios from 'axios';
import * as constants from "../Consts.js";
import Cookies from 'universal-cookie';
import { send } from 'q';
import ViewTrainerForm from './ViewTrainerFormComponent';
const cookies = new Cookies();

class TrainerFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: "",
            attitude: "",
            attitudeChars: 0,
            techChars: 0,
            softChars: 0,
            commentsChars: 0,
            formCount: this.props.match.params.formCount,
            tech: "",
            soft: "",
            comments: "",
            error: "",
            attitudeSliderValue: "6",
            techSliderValue: "6",
            softSliderValue: "6",
            week: 0,
            show: "show-form",
            showComments: "no-show-form",
            showButton: "show-form",
            showFeedback: "no-show-form",
            completedForm: "",
            trainee: {}
        }

        axios({
            method: 'get',
            url: `${constants.ip}${constants.gateway}getTrainerFormsByTraineeID/${this.props.match.params.id}`
        }).then(response => {
            for (let i = 0; i < response.data.length; i++) {
                if (`${response.data[i].formCount}` === this.state.formCount) {
                    this.setState({
                        error: "You already submitted your feedback for this week.",
                        show: "no-show-form",
                        completedForm: response.data[i],
                        showFeedback: "show-form"
                    })
                    break;
                }
                else {
                    console.log(false)
                }
            }
        })

        axios({
            method: 'get',
            url: `${constants.ip}${constants.gateway}/getAccountByAccountID/${this.props.match.params.id}`
        }).then(response => {
            this.setState({ trainee: response.data })
        })
    }

    showCommentField = () => {
        this.setState({ showComments: "show-form", showButton: "no-show-form" })
    }

    sendForm = () => {
        axios({
            method: 'post',
            url: `${constants.ip}${constants.gateway}createTrainerForm`,
            data: {
                traineeID: this.props.match.params.id,
                trainerID: cookies.get('_id'),
                formCount: this.props.match.params.formCount,
                answers: [this.state.attitude,
                this.state.tech,
                this.state.soft],
                scores: [this.state.attitudeSliderValue,
                this.state.techSliderValue,
                this.state.softSliderValue],
                commentsForTrainee: this.state.comments
            }
        }).then(window.location = `/login/singleuser/${this.props.match.params.id}`)

    }

    sendEmail = () => {
        axios({
            method: 'post',
            url: `${constants.ip}${constants.gateway}/sendEmail`,
            data: {
                to: this.trainee.email,
                subject: `Feedback from week ${this.props.match.params.formCount}`,
                text: this.state.comments
            }
        })
    }

    updateattitude = (event) => {
        this.setState({
            attitude: event.target.value,
            attitudeChars: this.state.attitude.length + 1
        });

    }

    updatetech = (event) => {
        this.setState({
            tech: event.target.value,
            techChars: this.state.tech.length + 1
        });
    }

    updatesoft = (event) => {
        this.setState({
            soft: event.target.value,
            softChars: this.state.soft.length + 1
        });
    }

    updateComments = (event) => {
        this.setState({
            comments: event.target.value,
            commentsChars: this.state.comments.length + 1
        });
    }
    updateAttitudeSlider = (event) => {
        this.setState({ attitudeSliderValue: event.target.value });
    }

    updateTechSlider = (event) => {
        this.setState({ techSliderValue: event.target.value });
    }

    updateSoftSlider = (event) => {
        this.setState({ softSliderValue: event.target.value });
    }

    showAttitudeSlider = () => {
        if (this.state.attitudeSliderValue <= 4) {
            return <input type="range" min="1" max="10" value={this.state.attitudeSliderValue} onChange={this.updateAttitudeSlider} className="slider1" id="myAttRange" />
        }
        if (this.state.attitudeSliderValue <= 7) {
            return <input type="range" min="1" max="10" value={this.state.attitudeSliderValue} onChange={this.updateAttitudeSlider} className="slider2" id="myAttRange" />
        }

        else {
            return <input type="range" min="1" max="10" value={this.state.attitudeSliderValue} onChange={this.updateAttitudeSlider} className="slider3" id="myAttRange" />
        }
    }

    showTechSlider = () => {
        if (this.state.techSliderValue <= 4) {
            return <input type="range" min="1" max="10" value={this.state.techSliderValue} onChange={this.updateTechSlider} className="slider1" id="myTechRange" />
        }
        if (this.state.techSliderValue <= 7) {
            return <input type="range" min="1" max="10" value={this.state.techSliderValue} onChange={this.updateTechSlider} className="slider2" id="myTechRange" />
        }

        else {
            return <input type="range" min="1" max="10" value={this.state.techSliderValue} onChange={this.updateTechSlider} className="slider3" id="myTechRange" />
        }
    }

    showSoftSlider = () => {
        if (this.state.softSliderValue <= 4) {
            return <input type="range" min="1" max="10" value={this.state.softSliderValue} onChange={this.updateSoftSlider} className="slider1" id="mySoftRange" />
        }
        if (this.state.softSliderValue <= 7) {
            return <input type="range" min="1" max="10" value={this.state.softSliderValue} onChange={this.updateSoftSlider} className="slider2" id="mySoftRange" />
        }

        else {
            return <input type="range" min="1" max="10" value={this.state.softSliderValue} onChange={this.updateSoftSlider} className="slider3" id="mySoftRange" />
        }
    }

    render() {

        return (
            <div className="main-body">
                {this.state.error}
                <div className="container" id={this.state.show}>
                    <h1 id="heading-form">Trainee performance form</h1>
                    <form id="feedback-form-body">
                        <div className="row">
                            <div className="col-100">
                                <label>Attitude</label>
                                <div className="slidecontainer">
                                    {this.showAttitudeSlider()}
                                    <p>{this.state.attitudeSliderValue}</p>
                                </div>
                                <div>
                                    <p>Commments on attitude</p>
                                    <textarea id="attitude" name="attitude" onChange={this.updateattitude} />
                                    <div>{this.state.attitudeChars}/50</div>
                                </div>
                                <label>Technology</label>
                                <div className="slidecontainer">
                                    {this.showTechSlider()}
                                    <p>{this.state.techSliderValue}</p>
                                </div>
                                <div>
                                    <p>Comments on tech ability</p>
                                    <textarea id="tech" name="tech" onChange={this.updatetech} />
                                    <div>{this.state.techChars}/50</div>
                                </div>
                                <label>Soft skills</label>
                                <div className="slidecontainer">
                                    {this.showSoftSlider()}
                                    <p>{this.state.softSliderValue}</p>
                                </div>
                                <div>
                                    <p>Comments on soft skills</p>
                                    <textarea id="soft" name="soft" onChange={this.updatesoft} />
                                    <div>{this.state.softChars}/50</div>
                                </div>
                                <input type="checkbox" name="Checkbox1" onChange={this.showCommentField}></input>
                                <label for="Checkbox1">check to add a comment for the trainee</label>
                                <div id={this.state.showComments}>
                                    <p>Comments to be seen by trainee</p>
                                    <textarea id="comments" name="comments" onChange={this.updateComments} />
                                    <button id="register-button" type="button" onClick={this.sendEmail}>Send Email</button>
                                    <div>{this.state.commentsChars}/50</div>
                                </div>

                            </div>
                            <div className="row">
                                <button id="register-button" type="button" onClick={this.sendForm}>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div id={this.state.showFeedback}>
                    <ViewTrainerForm completedForm={this.state.completedForm} />
                </div>
            </div>
        );
    }
}

export default TrainerFormComponent;