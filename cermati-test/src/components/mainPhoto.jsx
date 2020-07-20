import React, { Component } from 'react';
import '../styles/css/main.css'
import '../styles/css/bootstrap.min.css';
import logo from '../assets/images/logo.png';
import backgroundPhoto from '../assets/images/background.jpg'

class Bottomheader extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-lg-1 mt-30 ml-20'>
							<img className='logo-width' src={logo} alt=""/>
						</div>
					</div>
					<div className='row text-center'>
						<div style={{backgroundColor:'#004A75'}} className='back-image'></div>		
						<img className='image-width' src={backgroundPhoto} alt=""/>
					</div>
					<div className='row'>
						<div className='col-lg-12 text-center overlay-text'>
							<span className='fs-48 lh-60'>
								Hello! I'm Lelianto Eko Pradana <br/>
							</span>
							<span className='font-weight-bold fs-32 lh-60'>
								Consult, Design, and Develop Websites <br/>
							</span>
							<span className='fs-24'>
								Have something great in mind? Feel free to contact me. <br/>
								I'll help you to make it happen.
							</span>
							<div className='mt-20'>
								<span className='fs-24 outer-box'>
									LET'S MAKE CONTACT
								</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Bottomheader;