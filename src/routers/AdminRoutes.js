import React, { Component } from 'react';
import {
	Route
} from 'react-router-dom';

import AdminHomepage from '../components/AdminHomepageComponent';
import Cohort from '../components/SingleCohortComponent';
import User from '../components/SingleUserComponent';
import ViewForm from '../components/ViewFormComponent';
import NewCohort from '../components/NewCohortComponent';
import NavBar from '../components/NavbarComponent';

class AdminRoutes extends Component {

	constructor(props) {
		super(props);
	}

	logOut1 = () => {
		this.props.logOut();
	}

	render() {
		return (
			<div>
				<NavBar />
				<Route exact path="/login/" render={() => <AdminHomepage logOut1={this.logOut1} />} />
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
				<Route path="/singlecohort/:id" component={Cohort} />
				<Route path="/singleuser/:id" component={User} />
				<Route path="/viewform/:id" component={ViewForm} />
				<Route path="/newcohort" component={NewCohort} />
			</div>
		)
	}
}

export default AdminRoutes;