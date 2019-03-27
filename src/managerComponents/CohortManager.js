import React, { Component } from 'react';
import '../App.css';
import '../js/form';
import axios from 'axios';
import * as constants from "../Consts.js";
import Cookies from 'universal-cookie'; 
import CohortsComponent from '../components/CohortsComponent';
import SingleCohortComponent from '../components/SingleCohortComponent';

class CohortManager extends Component {

    constructor() {
        super();

        this.state = {
            chosen:false
        }
      
    }
  

   chooseCohort=()=>{ 
       this.setState({chosen:true})
   }

    render() {
        if(!chosen){ 
            return (
                <div >
                   <CohortsComponent chooseCohort={this.chooseCohort}/>
                </div>
            );
        } 
        else{ 
            return( 
                <SingleCohortComponent/>
            );
        }
        
    }
}

export default CohortManager;