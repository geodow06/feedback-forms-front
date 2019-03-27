import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import axios from 'axios';
import * as constants from "../Consts.js";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class TrainerFormComponent extends Component {

    constructor() {
        super();

        this.state = {
            user: "",
            attitude: "",
            attitudeChars: 0,
            techChars: 0,
            softChars: 0,
            commentsChars: 0,
            tech: "",
            soft: "",
            comments: "",
            error: "",
            attitudeSliderValue: 6,
            techSliderValue: 6,
            softSliderValue: 6,
            week: 0,
            show: "show-form"
        }
        // axios({
        //     method: 'get',
        //     url: constants.gateway + 'getAccounts'
        // })
        //     .then(response => {
        //         for (let i = 0; i < response.data.length; i++) {
        //             if (cookies.get('_id') == response.data[i].accountID) {
        //                 if (response.data[i].cohortID == null) {
        //                     this.setState({
        //                         error: "You have not been assigned a cohort yet, please speak with your trainer.",
        //                         show: "no-show-form"
        //                     })
        //                 }
        //                 this.setState({
        //                     user: response.data[i]
        //                 })
        //             }
        //         }

        //         axios({
        //             method: 'get',
        //             url: constants.gateway + "getCohortByCohortID/" + this.state.user.cohortID
        //         })
        //             .then(response => {
        //                 this.setState({
        //                     week: response.data.week
        //                 })

        //                 axios({
        //                     method: 'get',
        //                     url: constants.gateway + "getFeedbackFormsByAccountID/" + this.state.user.accountID
        //                 })
        //                     .then(response => {
        //                         for (let k = 0; k < response.data.length; k++) {
        //                             if (response.data[k].week == this.state.week || this.state.user.cohortID === null) {
        //                                 this.setState({
        //                                     error: "You already submitted this week. Try again next week.",
        //                                     show: "no-show-form"
        //                                 })

        //                                 break;
        //                             }
        //                         }
        //                     })
        //             })
        //     })
    }

    sendForm = () => {
        axios({
            method: 'post',
            url: constants.gateway + 'sendForm',
            data: {
                accountID: this.state.user.accountID,
                cohortID: this.state.user.cohortID,
                attitude: this.state.attitude,
                attitudeScore: this.state.attitudeSliderValue,
                tech: this.state.tech,
                techScore: this.state.techSliderValue,
                soft: this.state.soft,
                softScore: this.state.softSliderValue,
                comments: this.state.comments,
                // week: this.state.week
            }
        })
    }
    // createFeedback = () => {
    //     axios({
    //         method: 'post',
    //         url: constants.gateway + 'addFeedbackForm',
    //         data: {
    //             accountID: this.state.user.accountID,
    //             cohortID: this.state.user.cohortID,
    //             score: this.state.sliderValue,
    //             attitude: this.state.attitude,
    //             tech: this.state.tech,
    //             soft: this.state.soft,
    //             comments: this.state.comments,
    //             week: this.state.week
    //         }
    //     })
    //         .then(response => {
    //             this.props.history.push("/");
    //         })
    // } 

    createFeedback = () => {
        console.log("attitude value " + this.state.attitudeSliderValue);
        console.log("tech value " + this.state.techSliderValue);
        console.log("soft value " + this.state.softSliderValue);
        console.log("attitude " + this.state.attitude);
        console.log("tech " + this.state.tech);
        console.log("soft " + this.state.soft);
        console.log("comments " + this.state.comments);
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
                                <div>
                                    <p>Comments to be seen by trainee</p>
                                    <textarea id="comments" name="comments" onChange={this.updateComments} />
                                    <div>{this.state.commentsChars}/50</div>
                                </div>

                            </div>
                            <div className="row">
                                <button id="register-button" type="button" onClick={this.createFeedback}>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TrainerFormComponent;