import React, { Component } from 'react';
import '../styles/css/main.css'
import '../styles/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import backgroundPhoto from '../assets/images/background.jpg'

class Bottomheader extends Component {
	constructor(props) {
    super(props);
    this.state = {
		};
	}

	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-1 mt-30 ml-20'>
							<img className='logo-width' src={logo} alt=""/>
						</div>
					</div>
					<div className='row'>
						<div style={{backgroundColor:'#004A75'}} className='back-image'></div>		
						<img className='image-width' src={backgroundPhoto} alt=""/>
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Bottomheader;