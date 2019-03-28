import React, { Component } from 'react';
import '../App.css';

class AccountComponent extends Component {

  constructor(props){ 
    super(props);
  }
  render() {
    return (
    	<div className="main-body">
			<h1>Hello from account. {this.props.account.email}</h1>
		</div>
    );
  }
}

export default AccountComponent;