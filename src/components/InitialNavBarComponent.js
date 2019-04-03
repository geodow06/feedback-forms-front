import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import '../App.css';

import Auth from '../Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class NavComponent extends Component {


	render() {

		return (
			<div>
				<ul id="nav-ul"> 
                    <li><Link to="/" onClick={() => { Auth.logout(() => { }); }}><img src='../logo.svg'></img></Link></li>
                    <li>QA feedback API</li>
				</ul>
			</div>
		);
	}
}

export default NavComponent;