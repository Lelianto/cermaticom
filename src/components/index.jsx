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

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid head-upper">
					<div className='row'>
						<div className='col-lg-12 pad-zero'>
							<nav class="navbar navbar-expand-lg navbar-light bg-blue row">
								<div className='col-lg-7 col-md-10 col-sm-10 col-10 text-left'>
									<a class="navbar-brand brand-name" href="/">
										<span className='bold-white fs-24'>
											Duo
										</span>
										<span className='color-white font-light fs-24'>
											veloper
										</span>
									</a>
								</div>
								<div className='col-lg-2 col-md-2 col-sm-2 col-2'>
									<button class="navbar-toggler distance" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="navbar-toggler-icon"></span>
									</button>
								</div>
								<div className='col-lg-3'>
									<div class="collapse navbar-collapse" id="navbarSupportedContent">
										<ul class="navbar-nav mr-auto">
											<li class="nav-item active distance">
												<a class="nav-link" href="/">Projects <span class="sr-only">Projects</span></a>
											</li>
											<li class="nav-item distance">
												<a class="nav-link" href="/">About</a>
											</li>
											<li class="nav-item distance">
												<a class="nav-link" href="/">Contact</a>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Upperheader;