import React, { Component } from 'react';
import '../App.css';
import login from './LoginComponent';
import Cookies from 'universal-cookie';
import axios from 'axios';
import * as constants from "../Consts.js";
import Auth from '../Auth';
import { Link } from "react-router-dom";
const cookies = new Cookies();

class TrainerHomepageComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trainees: [],
            unassignedList: 0,
            cohorts: 0,
            timeUpdate: ""

        }
    }

        // axios({
        //     method: 'get',
        //     url: constants.gateway + 'getAccounts'
        // }).then(response => {

        //     let uList = [];

        //     this.setState({
        //         trainees: response.data
        //     })
        //     for (let i = 0; i < response.data.length; i++) {
        //         if (response.data[i].cohortID === null && response.data[i].admin === false) {
        //             uList.push(response.data[i]);
        //         }
        //     }
        //     this.setState({
        //         unassignedList: uList.length
        //     })
        // })

        // axios({
        //     method: 'get',
        //     url: constants.gateway + 'getCohorts'
        // }).then(response => {
        //     let date = new Date();
        //     let currentDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        //     this.setState({
        //         cohorts: response.data.length
        //     })
        //     this.updateWeek(currentDate);
        // })
    

    // updateWeek = (currentDate) => {
    //     if (this.state.timeUpdate !== currentDate) {
    //         for (let i = 1; i <= this.state.cohorts; i++) {
    //             axios({
    //                 method: 'put',
    //                 url: constants.gateway + 'updateWeekNumber/' + i
    //             })
    //         }
    //         this.setState({
    //             timeUpdate: currentDate
    //         })
    //     }


    render() {

        return (
            <div className="main-body">
                <div className="home-body">
                    <div id="dashboard-item-1">
                        <Link to="/login/cohorts">COHORTS ({this.state.cohorts})</Link>
                    </div>

                    <div id="right-dashboard">
                        <div id="dashboard-item-2">
                            <Link to="/login/trainees">TRAINEES ({this.state.unassignedList})</Link>
                        </div>
                        <div id="dashboard-item-3">
                            {/* <button onClick={this.logOut2}>LOGOUT</button> */}
                            <Link to="/" onClick={() => {Auth.logout(()=>{});}}>LOGOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainerHomepageComponent;