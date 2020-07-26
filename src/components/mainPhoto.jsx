import React, { Component } from 'react';
import '../styles/css/main.css'
import '../styles/css/bootstrap.min.css';

class Bottomheader extends Component {
	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row main-frame'>
						<div className='col-lg-12 fs-32 mb-12'>
							We Create The Best
						</div>
						<div className='col-lg-12 content'>
							<span className='fs-32 slider-wrapper'>
								<div className='slider'>
									<div className='slider-text1'>Personal Website</div>
									<div className='slider-text2'>Company Website</div>
									<div className='slider-text3'>Curricullum Vitae</div>
								</div>
							</span>
						</div>
						<div className='col-lg-12 fs-32 mb-20'>
							For You
						</div>
						<div className='col-lg-12'>
							<span className='button-contact-us'>
								Contact Us
							</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Bottomheader;