import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class GraphComponent extends Component {

	constructor(props) {
		super(props);
	}
	render() {
		const renderLineChart = (
			<LineChart width={800} height={300} data={this.props.graphData}>
				<Line type="monotone" dataKey="score" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="formCount" />
				<YAxis />
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

