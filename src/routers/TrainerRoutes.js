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
				<Route exact path="/login/" render={() => <TrainerHomepage account={this.props.account}/>} />
				<Route path="/login/form" render={() => <SubmitForm account={this.props.account}/>} />
				<Route path="/login/cohorts" render={() => <Cohorts account={this.props.account}/>} /> 
				<Route path="login/cohortmanager" render={()=><CohortManager/>}/>
				<Route path="/login/trainees" render={() => <Trainees account={this.props.account}/>} />
				<Route path="/login/account" render={() => <Account account={this.props.account}/>} />
				<Route path="/login/cohort:id" render={() => <Cohort account={this.props.account}/>} />
				<Route path="/login/newcohort" render={() => <NewCohort account={this.props.account}/>} />
				<Route path="/login/viewform:id" render={() => <ViewForm account={this.props.account}/>} />
				<Route path="/login/singleuser/:id" render={() => <User account={this.props.account}/>} />
			</div>
		)
	}
}

export default TrainerRoutes;