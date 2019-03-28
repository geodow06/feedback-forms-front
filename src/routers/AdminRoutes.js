import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

import AdminHomepage from '../components/AdminHomepageComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';
import Account from '../components/AccountComponent';

class AdminRoutes extends Component { 

	constructor(props){ 
		super(props);
	} 

	// logOut1=()=>{ 
	// 	this.props.logOut();
	// }

  render() {
  	return (
  	<div>

		<Route exact path="/login/" render={()=><AdminHomepage account={this.props.account}/>}/>
		{/* <TraineeprotectedRoute path="/form" component={ SubmitForm } />
		<ProtectedRoute  path="/cohorts" component={ Cohorts } />
		<ProtectedRoute  path="/trainees" component={ Trainees } />
		<Route path="/form" component={ SubmitForm } />
		<Route  path="/cohorts" component={ Cohorts } />
		<Route  path="/trainees" component={ Trainees } />
		<Route path="/account" component={ Account } />
		{/* <ProtectedRoute  path="/singlecohort/:id" component={ Cohort } />
		<ProtectedRoute  path="/singleuser/:id" component={ User } />
		<ProtectedRoute  path="/viewform/:id" component={ ViewForm } />
		<ProtectedRoute  path="/newcohort" component={ NewCohort } /> */}
		<Route  path="/login/singlecohort/:id" render={()=><Cohort account={this.props.account}/>}/>
		<Route  path="/login/singleuser/:id" render={()=><User account={this.props.account}/>}/>
		<Route  path="/login/viewform/:id" render={()=><ViewForm account={this.props.account}/>}/>
		<Route  path="/login/newcohort" render={()=><NewCohort account={this.props.account}/>}/> 
		<Route path="/login/account" render={()=><Account account={this.props.account}/>} />
	</div>
	)}
} 

export default AdminRoutes;