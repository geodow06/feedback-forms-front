import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import CohortsComponent from '../components/CohortsComponent';
import SingleCohortComponent from '../components/SingleCohortComponent';
import axios from 'axios';
import * as constants from "../Consts.js";
class CohortManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chosen: false,
            chosenCohort: "", 
            cohortList:""
        } 
        axios.get(`http://35.246.12.195${constants.gateway}getCohorts`).then(response => {
			this.setState({
				cohortList: response.data
			})
		})
    } 

    

    chooseCohort = (cohort) => {
        this.setState({ chosen: true, chosenCohort: cohort })
    }

    back = () => {
        this.setState({ chosen: false }) 
    }

    render() {
        if (!this.state.chosen) {
            return (
                <CohortsComponent chooseCohort={this.chooseCohort} cohortList={this.state.cohortList} />
            );
        }

        else {
            return (
                <SingleCohortComponent chosenCohort={this.chosenCohort} back={this.back} />
            );
        }
    }
}

export default CohortManager;