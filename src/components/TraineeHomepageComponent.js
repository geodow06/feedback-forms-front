import React, { Component } from 'react';
import '../App.css';
import auth from '../Auth';
import Cookies from 'universal-cookie';
import axios from 'axios';
import * as constants from "../Consts.js";

const cookies = new Cookies();

class TraineeHomepageComponent extends Component {

    constructor() {
        super();

        this.state = {
            trainees: [],
            unassignedList: 0,
            cohorts: 0,
            timeUpdate: ""

        }


        axios({
            method: 'get',
            url: constants.gateway + 'getAccounts'
        }).then(response => {

            let uList = [];

            this.setState({
                trainees: response.data
            })
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].cohortID === null && response.data[i].admin === false) {
                    uList.push(response.data[i]);
                }
            }
            this.setState({
                unassignedList: uList.length
            })
        })

        axios({
            method: 'get',
            url: constants.gateway + 'getCohorts'
        }).then(response => {
            let date = new Date();
            let currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
            this.setState({
                cohorts: response.data.length
            })
            this.updateWeek(currentDate);
        })
    }

    updateWeek = (currentDate) => {
        if (this.state.timeUpdate !== currentDate) {
            for (let i = 1; i <= this.state.cohorts; i++) {
                axios({
                    method: 'put',
                    url: constants.gateway + 'updateWeekNumber/' + i
                })
            }
            this.setState({
                timeUpdate: currentDate
            })
        }

    }

    	logOut2=()=>{
		this.props.logOut1();
	}

    render() {

        return (
            <div className="main-body">
                <div className="home-body">
                    <div id="dashboard-item-1">
                        {<a href="/form">FORM</a>}
                    </div>

                    <div id="right-dashboard">
                        <div id="dashboard-item-2">
                            {<a href="/account">ACCOUNT</a>}
                        </div>
                        <div id="dashboard-item-3">
                            {<a href="/home" onClick={this.logout1()}>LOGOUT</a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TraineeHomepageComponent;