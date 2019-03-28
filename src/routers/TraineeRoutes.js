import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';
import {ProtectedRoute} from '../Protected.route';
import {UnprotectedRoute} from '../Unprotected.route';
import {TraineeprotectedRoute} from '../Traineeprotected.route';

import Homepage from '../components/HomepageComponent';
import SubmitForm from '../components/FormComponent';
import Cohorts from '../components/CohortsComponent';
import Trainees from '../components/TraineesComponent.1';
import Account from '../components/AccountComponent';
import Register from '../components/RegisterComponent';
import Login from '../components/LoginComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';

class TraineeRoutes extends Component {
  render() {
  	return (
  	<div>
		<Route exact path="/login/" component={ Homepage } />
		<Route exact path="/login/home" component={ Homepage } />
		<Route  path="/singlecohort/:id" component={ Cohort } />
		<Route  path="/singleuser/:id" component={ User } />
		<Route  path="/viewform/:id" component={ ViewForm } />
		<Route  path="/newcohort" component={ NewCohort } /> 
	</div>
	)}
} 

export default TraineeRoutes;