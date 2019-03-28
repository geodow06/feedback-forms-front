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
import Account from '../components/AccountComponent';

class TraineeRoutes extends Component {

	constructor(props) {
		super(props);
	}

	// logOut1 = () => {
	// 	this.props.logOut();
	// }

	render() {
		return (
			<div>
				<Route exact path="/login/" render={() => <TraineeHomepage account={this.props.account}/>} />
				<Route exact path="/login/home" render={() => <TraineeHomepage account={this.props.account}/>} />
				<Route path="/login/singlecohort/:id" render={() => <Cohort account={this.props.account}/>} />
				<Route path="/login/singleuser/:id" render={() => <User account={this.props.account}/>} />
				<Route path="/login/viewform/:id" render={() => <ViewForm account={this.props.account}/>} />
				<Route path="/login/newcohort" render={() => <NewCohort account={this.props.account}/>} /> 
				<Route path="/login/account" render={()=><Account account={this.props.account}/>}/>
			</div>
		)
	}
}

export default TraineeRoutes;