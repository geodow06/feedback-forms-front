import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';

class GraphComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			test: []
		}


	}

	render() {

		const renderLineChart = (
			<LineChart width={800} height={300} data={this.props.graphData}>
				<Line type="monotone" dataKey="score" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="formCount" >
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
				<div id="single-user-chart">
					{renderLineChart}
				</div>
			</div>
		)
	}
}
export default GraphComponent;

