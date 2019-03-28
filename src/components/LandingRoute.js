import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';
import { ProtectedRoute } from './Protected.route';
import { UnprotectedRoute } from './Unprotected.route';
import { TraineeprotectedRoute } from './Traineeprotected.route';

import LandingComponent from './LandingComponent';
import Register from './RegisterComponent';
import Login from './LoginComponent'; 
import TrainerForm from './TrainerFormComponent';


class LandingRoute extends Component {
    render() {
        return (
            <div>
                <Route path="/" component={LandingComponent} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} /> 
                <Route path="/trainerform" component={TrainerForm}/>
            </div>
        )
    }
}
export default LandingRoute;