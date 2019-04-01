import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { ProtectedRoute } from '../Protected.route';
import { UnprotectedRoute } from '../Unprotected.route';
import { TraineeprotectedRoute } from '../Traineeprotected.route';

import TraineeHomepage from '../components/TraineeHomepageComponent';
import Form from '../components/FormComponent';

class TraineeRoutes extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route exact path="/login/" render={() => <TraineeHomepage/>} />
				<Route path="login/form/" render={()=><Form/>} />
				
			</div>
		)
	}
}

export default TraineeRoutes;