import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import CohortsComponent from '../components/CohortsComponent';
import SingleCohortComponent from '../components/SingleCohortComponent';

class CohortManager extends Component {

    constructor() {
        super();

        this.state = {
            chosen: false,
            chosenCohort: ""
        }
    }

    chooseCohort = (cohort) => {
        this.setState({ chosen: true, chosenCohort: cohort })
    }

    render() {
        if (!this.state.chosen) {
            return (
                <CohortsComponent chooseCohort={this.chooseCohort} />
            );
        }
        else {
            return (
                <SingleCohortComponent chosenCohort={this.state.chosenCohort} />
            );
        }

    }
}

export default CohortManager;