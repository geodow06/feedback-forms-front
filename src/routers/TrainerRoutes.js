import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';
import {ProtectedRoute} from '../Protected.route';
import {UnprotectedRoute} from '../Unprotected.route';
import {TraineeprotectedRoute} from '../Traineeprotected.route';

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



class TrainerRoutes extends Component { 

	constructor(props){ 
		super(props); 
	}
	

	logOut1=()=>{ 
		this.props.logOut();
	}
	
	render() {
  	return (
  	<div>
		<Route exact path="/login/" render={()=><TrainerHomepage logOut1={this.logOut1}/>}/>
		<Route exact path="/login/form" render={()=><SubmitForm logOut1={this.logOut1}/>}/>
		<Route exact path="/login/cohorts" render={()=><Cohorts logOut1={this.logOut1}/>}/>
		<Route exact path="/login/trainees" render={()=><Trainees logOut1={this.logOut1}/>}/>
		<Route exact path="/login/account" render={()=><Account logOut1={this.logOut1}/>}/>
		<Route exact path="/login/cohort:id" render={()=><Cohort logOut1={this.logOut1}/>}/>
		<Route exact path="/login/newcohort" render={()=><NewCohort logOut1={this.logOut1}/>}/> 
		<Route exact path="/login/viewform:id" render={()=><ViewForm logOut1={this.logOut1}/>}/>
		<Route exact path="/login/singleuser/:id" render={()=><User logOut1={this.logOut1}/>}/> 
	</div>
	)}
} 

export default TrainerRoutes;