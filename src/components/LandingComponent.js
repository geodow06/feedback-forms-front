import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Auth from '../Auth';
import NavBar from '../components/InitialNavBarComponent';
class LandingComponent extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="home-body">
                    <Link id="dashboard-item-1" to="/register" >REGISTER</Link>
                    <div id="right-dashboard">
                        <Link id="dashboard-item-2-not-logged" to="/login">LOGIN</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingComponent;