import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';
import '../App.css';

import Auth from '../Auth';
import Cookies from 'universal-cookie';
import Logo from '../QAfinal.png';

const cookies = new Cookies();

class NavComponent extends Component {


	render() {

		return (
			<div>
				<ul id="nav-ul"> 
                    <li><Link to="/" onClick={() => { Auth.logout(() => { }); }}><img src={Logo} height={75} width={120}></img></Link></li>
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li>QA feedback API</li>
				</ul>
			</div>
		);
	}
}

export default NavComponent;