import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';
import { UnprotectedRoute } from '../Unprotected.route';
import { TraineeprotectedRoute } from '../Traineeprotected.route';

import TrainerHomepage from '../components/TrainerHomepageComponent';
import SubmitForm from '../components/FormComponent';
import Cohorts from '../components/CohortsComponent';
import Trainees from '../components/TraineesComponent';
import Account from '../components/AccountComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';
import CohortManager from '../managerComponents/CohortManager';
import NavBar from '../components/NavbarComponent'; 
import TrainerForm from '../components/TrainerFormComponent';
import {ProtectedRoute} from '../Protected.route'

class TrainerRoutes extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div> 
				<NavBar/>
				<ProtectedRoute exact path="/login/" render={() => <TrainerHomepage />} />
				<ProtectedRoute path="/login/form" render={() => <SubmitForm />} />
				<ProtectedRoute path="/login/cohorts" render={() => <Cohorts />} />
				{/* <Route path="/login/cohorts" render={() => <Cohorts />} />  */}
				{/* <Route exact path="/login/cohortmanager" render={() => <CohortManager />} />  */}
				<ProtectedRoute path="/login/trainees" render={() => <Trainees />} />
				<ProtectedRoute path="/login/account" render={() => <Account />} />
				<ProtectedRoute path="/login/singlecohort/:id" render={(props) => <Cohort match={props.match} />} />
				<ProtectedRoute path="/login/newcohort" render={() => <NewCohort />} />
				<ProtectedRoute path="/login/viewform/:id" render={(props) => <ViewForm match={props.match}/>} />
				<ProtectedRoute path="/login/singleuser/:id" render={(props) => <User match={props.match}/>} /> 
				<ProtectedRoute path="/login/trainerform/:id/:formCount" render={(props)=><TrainerForm match={props.match}/>}/>
			</div>
		)
	}
}

export default TrainerRoutes;