import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import * as constants from "../Consts.js";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

class GraphComponent extends Component {


	constructor(props) {
		super(props);

		this.state = {
			trainee: "",
			feedbackList: [],
			feedbackSize: 0,
			myArray: [],
			flagged: ""
		}
		axios({
		}).then(response => {

			this.setState({
				trainee: response.data,
				flagged: response.data.flagged.toString()
			})
		})
			 	this.data = [ {name: 'Week 1', Score: 5 },
			  				  {name: 'Week 2', Score: 4 },
			  				  {name: 'Week 3', Score: 8 },
			  				  {name: 'Week 4', Score: 4 },
			   				  {name: 'Week 5', Score: 9 },]
	}
	render() {
		const renderLineChart = (
			<LineChart width={800} height={300} data={this.data}>
				<Line type="monotone" dataKey="Score" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="name" />
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
// 		axios({
// 			method: 'get',
// 			url: constants.gateway + 'getAccountByAccountID/' + props.match.params.id
// 		}).then(response => {

// 			this.setState({
// 				trainee: response.data,
// 				flagged: response.data.flagged.toString()
// 			})
// 		})

// 		axios({
// 			method: 'get',
// 			url: constants.gateway + 'getFeedbackFormsByAccountID/' + props.match.params.id
// 		}).then(response => {
// 			this.state.myArray = new Array(response.data.length)
// 			let i = 0;
// 			for (let fb of response.data) {
// 				i++;
// 				this.state.myArray[i] = { name: 'Week ' + i, Score: response.data[i].score }

// 			}
// 			this.setState({
// 				feedbackList: response.data,
// 				feedbackSize: response.data.length
// 			})
// 		})
// 	}
// 	render() {

// 		let feedbackData = this.state.feedbackList.map((feedback, i) => (
// 			<tr key={i}>
// 				<td>Week: {feedback.week}</td>
// 				<td>Score: {feedback.score}</td>
// 				<td><a href={"/viewform/" + feedback.feedbackID} className="button">VIEW</a></td>
// 			</tr>
// 		));

// 		const renderLineChart = (
// 			<LineChart width={800} height={300} data={this.state.myArray.length}>
// 				<Line type="monotone" dataKey="Score" stroke="#8884d8" />
// 				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 				<XAxis dataKey="name" />
// 				<YAxis />
// 				<Tooltip />
// 			</LineChart>
// 		);
// 		return (
// 			<div className="main-body">
// 				<div id="single-user-chart">
// 					{renderLineChart}
// 				</div>
// 			</div>
// 		)
// 	}
// }
// export default GraphComponent;
