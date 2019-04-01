import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'; 
import Auth from '../Auth'; 
import NavBar from '../components/InitialNavBarComponent';
class LandingComponent extends Component {
    render() {
        return (
            <div className="main-body">
                <NavBar/>
                <div className="home-body">
                    <div id="dashboard-item-1">
                        <a href="/register">REGISTER</a>
                    </div>
                    <div id="right-dashboard">
                        <div id="dashboard-item-2-not-logged">
                            <a href="/login">LOGIN</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingComponent;