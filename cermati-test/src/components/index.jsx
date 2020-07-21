import React, { Component } from 'react';
import '../styles/css/main.css'
import '../styles/css/bootstrap.min.css';

class Upperheader extends Component {
	constructor(props) {
    super(props);
    this.state = {
			clicked: false
		};
	}

	clickedGotIt() {
		this.setState({
			clicked : true
		})
	}

	render() {
		let className = 'container-fluid head-upper-true'
		if(this.state.clicked) {
			className = 'container-fluid head-upper slide-up'
		} else {
			className = 'container-fluid head-upper-true'
		}
		return (
			<React.Fragment>
				<div className={className} style={{backgroundColor:'#e5e5e5', zIndex: 400}}>
					<div className='row'>
						<div className='col-lg-3'></div>
						<div className='col-lg-4 text-left mt-20 mb-20 ml-20 fs-12'>
							By accessing and using this website, you acknowledge that you have read and <br/>
							understand our <span className='dark-blue'>Cookie Policy</span>, <span className='dark-blue'>Privacy Policy</span>, and our <span className='dark-blue'>Terms of Service</span>.
						</div>
						<div className='col-lg-1 pt-35 text-left fs-12 pb-25 ml-20'>
							<span onClick={()=>this.clickedGotIt()} className='mt-12 gotit-button' style={{backgroundColor:'#007bc1'}}>Got It!</span>
						</div>
						<div className='col-lg-5'></div>
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Upperheader;