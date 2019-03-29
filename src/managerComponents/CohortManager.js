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

    back = () =>{ 
        this.setState({chosen:false})
    }

    render() {
        if (!this.state.chosen) {
            return (
                <CohortsComponent chooseCohort={this.chooseCohort} />
            );
        }

        // else if (this.state.chosen) {
        //     return (
        //         <SingleCohortComponent chosenCohort={this.chosenCohort} back={this.back}/>
        //     );
        // }

        else {
            return (
                <a>you fucked up son</a>
            );
        }
    }
}

export default CohortManager;