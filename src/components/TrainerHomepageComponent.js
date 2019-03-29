import React, { Component } from 'react';
import '../App.css';
import login from './LoginComponent';
import Cookies from 'universal-cookie';
import axios from 'axios';
import * as constants from "../Consts.js";
import Auth from '../Auth';

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
    
    logOut2=()=>{ 
        this.props.logOut1();
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
                        <a href="/login/cohortmanager">COHORTS ({this.state.cohorts})</a>
                    </div>

                    <div id="right-dashboard">
                        <div id="dashboard-item-2">
                            <a href="/login/trainees">TRAINEES ({this.state.unassignedList})</a>
                        </div>
                        <div id="dashboard-item-3">
                            {/* <button onClick={this.logOut2}>LOGOUT</button> */}
                            <a href="/" onClick={() => {Auth.logout(()=>{});}}>LOGOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainerHomepageComponent;