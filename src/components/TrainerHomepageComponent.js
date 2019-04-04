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


    render() {

        return (
            <div className="main-body">
                <div className="home-body">

                    <Link id="dashboard-item-1" to="/login/cohorts">COHORTS</Link>


                    <div id="right-dashboard">

                        <Link id="dashboard-item-2" to="/login/trainees">TRAINEES</Link>

                        <Link id="dashboard-item-3" to="/" onClick={() => { Auth.logout(() => { }); }}>LOGOUT</Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default TrainerHomepageComponent;