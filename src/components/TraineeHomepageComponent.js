import React, { Component } from 'react';
import '../App.css';
import Cookies from 'universal-cookie';
import axios from 'axios';
import * as constants from "../Consts.js";
import Auth from '../Auth';
import { Link } from "react-router-dom";
const cookies = new Cookies();

class TraineeHomepageComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            trainees: [],
            unassignedList: 0,
            cohorts: 0,
            timeUpdate: ""

        }

    }
   


    render() {

        return (
            <div className="main-body">
                <div className="home-body">
                    <div id="dashboard-item-1">
                        <Link to="/login/form">FORM</Link>
                    </div>

                    <div id="right-dashboard">
                        <div id="dashboard-item-2">
                            <Link to="/login/account">ACCOUNT</Link>
                        </div>
                        <div id="dashboard-item-3">
                            <Link to="/" onClick={()=>{Auth.logout(()=>{});}}>LOGOUT</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TraineeHomepageComponent;