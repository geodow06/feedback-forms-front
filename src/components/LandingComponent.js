import React, { Component } from 'react';
import '../App.css';

class LandingComponent extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="home-body">
                    <div id="dashboard-item-1">
                        <a href="/register">REGISTERy</a>
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