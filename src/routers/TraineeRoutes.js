import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { ProtectedRoute } from '../Protected.route';
import { UnprotectedRoute } from '../Unprotected.route';

import TraineeHomepage from '../components/TraineeHomepageComponent';
import Form from '../components/FormComponent';
import NavBar from '../components/NavbarComponent';
import Account from '../components/AccountComponent';
import {TraineeprotectedRoute} from '../Traineeprotected.route';

class TraineeRoutes extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar/>
				<TraineeprotectedRoute exact path="/login/" render={() => <TraineeHomepage/>} /> 
				<TraineeprotectedRoute path="/login/account/" render={()=><Account/>}/>
				<TraineeprotectedRoute path="/login/form/" render={()=><Form/>} />
				
			</div>
		)
	}
}

export default TraineeRoutes;