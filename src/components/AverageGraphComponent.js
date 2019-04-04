import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as c from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

class AverageGraphComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: []
        }

        axios({
            method: 'post',
            url: `${c.ip}${c.gateway}/getAveragesForCohortID/${this.props.cohortID}`
        }).then(response =>
            this.setState({ test: response.data }))
    }

    render() {
        let test1 = [];
       
        for (let i = 0; i < this.state.test.length; i++) {
            test1[i] = { score: this.state.test[i], formCount: i + 1 }
        }
        const renderLineChart = (
            <LineChart width={800} height={300} >
                <Line type="monotone" data={test1} dataKey="score" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="formCount">
                    <Label value="Week" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis type="number" domain={[0,10]}>
                    <Label value="Score" offset={0} position="insideLeft" />
                </YAxis>
                <Tooltip />
            </LineChart>
        );
        return (
            <div className="main-body">
                <div id="single-user-chart" >
                    {renderLineChart}
                </div>
            </div>
        )
    }
}
export default AverageGraphComponent;