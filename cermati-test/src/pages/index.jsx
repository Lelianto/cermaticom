import React, { Component } from 'react';
import '../styles/css/main.css'
import Upperheader from '../components/index';
import Bottomheader from '../components/mainPhoto';

class Homepage extends Component {
	render() {
		return (
		<div>
			<Upperheader/>
			<Bottomheader />
		</div>
		);
	}
}

export default Homepage;