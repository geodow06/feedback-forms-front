import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";

class CohortsComponent extends Component {

	constructor(props) {
		super(props);

		this.state = {
			cohortList: [] 

		}

		axios({
			method: 'get',
			// url: constants.get + 'getCohorts'
			url: constants.gateway + 'getCohorts'
		}).then(response => {
			this.setState({
				cohortList: response.data
			})
		})
	}
	
	chooseCohort=(cohort)=>{ 
		this.props.chooseCohort(cohort);
	}

  render() {

  	let cohorts = this.state.cohortList.map((cohort, i) => (

			<div className="single-cohort" key={i} >
			{/* <a href={"/singlecohort/" + cohort.cohortID} >  */}
			<a onClick={this.chooseCohort(cohort)}> 
			{/* <button></button> */}
				<p>Number: {cohort.cohortID}</p>
				<p>{cohort.cohortName}</p>
				<p>Week: {cohort.week}</p>
				</a>
			</div>
  	));

    return (
    	<div className="main-body">
			<h1 id="heading">View all cohorts</h1>
			<div id="add-cohort">
				<button><a href="/login/newcohort">Add Cohort</a></button>
			</div>
		  <div className="cohort-filter">
		    <select name="cohort-selection" id="cohort-selection">
		      <option>Sort By...</option>
		      <option value="1">Group Number ASC</option>
		      <option value="11">Group Number DESC</option>
		      <option value="2">Pupils ASC</option>
		      <option value="22">Pupils DESC</option>
		      <option value="3">Week ASC</option>
		      <option value="33">Week DESC</option>
		    </select>
		  </div>
			<div className="all-cohorts">				
				{ cohorts }
			</div> 
			<button onClick={this.chooseCohort}>click here to choose</button>
		</div>
    );
  }
}

export default CohortsComponent;
