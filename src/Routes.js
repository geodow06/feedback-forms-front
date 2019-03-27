import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { ProtectedRoute } from './Protected.route';
import { UnprotectedRoute } from './Unprotected.route';
import { TraineeprotectedRoute } from './Traineeprotected.route';

import Homepage from './components/HomepageComponent';
import SubmitForm from './components/FormComponent';
import Cohorts from './components/CohortsComponent';
import Trainees from './components/TraineesComponent.1';
import Account from './components/AccountComponent';
import Register from './components/RegisterComponent';
import Login from './components/LoginComponent';
import Cohort from './components/SingleCohortComponent';
import User from './components/SingleUserComponent';
import ViewForm from './components/ViewFormComponent';
import NewCohort from './components/NewCohortComponent';
import TrainerForm from './components/TrainerFormComponent';

class Routes extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/home" component={Homepage} />
				{/* <TraineeprotectedRoute path="/form" component={SubmitForm} />
				<ProtectedRoute path="/cohorts" component={Cohorts} />
				<ProtectedRoute path="/trainees" component={Trainees} />
				<ProtectedRoute path="/account" component={Account} />
				<UnprotectedRoute path="/register" component={Register} />  */}
				<Route path="/form" component={SubmitForm} />
				<Route path="/cohorts" component={Cohorts} />
				<Route path="/trainees" component={Trainees} />
				<Route path="/account" component={Account} />
				<Route path="/register" component={Register} />
				<Route path="/trainerForm" component={TrainerForm} />
				<Route path="/login" component={Login} />
				{/* <ProtectedRoute path="/singlecohort/:id" component={Cohort} />
				<ProtectedRoute path="/singleuser/:id" component={User} />
				<ProtectedRoute path="/viewform/:id" component={ViewForm} />
				<ProtectedRoute path="/newcohort" component={NewCohort} /> */}
				<Route path="/singlecohort/:id" component={Cohort} />
				<Route path="/singleuser/:id" component={User} />
				<Route path="/viewform/:id" component={ViewForm} />
			  <Route path="/newcohort" component={NewCohort} />
			</div>
		)
	}
}

export default Routes;