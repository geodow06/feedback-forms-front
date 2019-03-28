import React, { Component } from 'react';
import {
    Route,Router
} from 'react-router-dom';

import LandingComponent from '../components/LandingComponent';
import Register from '../components/RegisterComponent';
import Login from '../components/LoginComponent'; 

class LandingRoute extends Component {
    render() {
        return (
            <div> 
                <Router>
                <Route exact path="/" component={LandingComponent} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} /> 
                </Router>
            </div>
        )
    }
}
export default LandingRoute;