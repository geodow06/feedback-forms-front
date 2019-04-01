import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { ProtectedRoute } from '../Protected.route';
import { UnprotectedRoute } from '../Unprotected.route';
import { TraineeprotectedRoute } from '../Traineeprotected.route';

import TraineeHomepage from '../components/TraineeHomepageComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';

class TraineeRoutes extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route exact path="/login/" render={() => <TraineeHomepage/>} />
				{/* <Route path="login/viewform/:id" component={ViewForm} />
				<Route path="login/newcohort" component={NewCohort} /> */}
			</div>
		)
	}
}

export default TraineeRoutes;