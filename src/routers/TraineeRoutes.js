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

	logOut1 = () => {
		this.props.logOut();
	}

	render() {
		return (
			<div>
				<Route exact path="/login/" render={() => <TraineeHomepage logOut1={this.logOut1} />} />
				<Route exact path="/login/home" component={TraineeHomepage} />
				<Route path="/singlecohort/:id" component={Cohort} />
				<Route path="/singleuser/:id" component={User} />
				<Route path="/viewform/:id" component={ViewForm} />
				<Route path="/newcohort" component={NewCohort} />
			</div>
		)
	}
}

export default TraineeRoutes;