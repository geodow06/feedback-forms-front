import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { ProtectedRoute } from '../Protected.route';
import { UnprotectedRoute } from '../Unprotected.route';
import { TraineeprotectedRoute } from '../Traineeprotected.route';

import TrainerHomepage from '../components/TrainerHomepageComponent';
import SubmitForm from '../components/FormComponent';
import Cohorts from '../components/CohortsComponent';
import Trainees from '../components/TraineesComponent.1';
import Account from '../components/AccountComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';
import TrainerHomepageComponent from '../components/TrainerHomepageComponent';
import CohortManager from '../managerComponents/CohortManager';

class TrainerRoutes extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Route exact path="/login/" render={() => <TrainerHomepage />} />
				<Route path="/login/form" render={() => <SubmitForm />} />
				{/* <Route path="/login/cohorts" render={() => <Cohorts />} />  */}
				<Route exact path="/login/cohortmanager" render={() => <CohortManager />} /> 
				<Route path="/login/trainees" render={() => <Trainees />} />
				<Route path="/login/account" render={() => <Account />} />
				{/* <Route exact path="/login/cohort:id" render={() => <Cohort />} /> */}
				{/* <Route path="/login/newcohort" render={() => <NewCohort />} /> */}
				<Route path="/login/viewform:id" render={() => <ViewForm />} />
				<Route path="/login/singleuser/:id" render={() => <User />} />
			</div>
		)
	}
}

export default TrainerRoutes;