import React, { Component } from 'react';
import '../styles/css/main.css'
import '../styles/css/bootstrap.min.css';

class Bottomheader extends Component {
	constructor(props) {
    super(props);
    this.state = {
			text: [
				{
					title: 'Consult',
					icon: 'fa fa-comments',
					content: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
				},
				{
					title: 'Design',
					icon: 'fa fa-paint-brush',
					content: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
				},
				{
					title: 'Develop',
					icon: 'fa fa-layer-group',
					content: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
				},
				{
					title: 'Marketing',
					icon: 'fa fa-bullhorn',
					content: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.'
				},
				{
					title: 'Manage',
					icon: 'fa fa-tasks',
					content: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
				},
				{
					title: 'Evolve',
					icon: 'fa fa-chart-line',
					content: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
				},
			]
		};
	}

	render() {
		let datas = this.state.text
		return (
			<React.Fragment>
				<div className='container-fluid mt-20 mb-60'>
					<div className='mt-60 mb-60'>
						<span className='title-help fs-48'>
							How Can I Help You?
						</span>
						<br/>
						<span className='fs-24'>
							Our work then targeted, best practices outcomes social innovation synergy. <br/>
							Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
							program areas scale.
						</span>
					</div>
					<div className='row'>
						{datas.map((item)=>
						<div className='col-lg-4 col-md-6 col-sm-12 mt-20 mb-12 text-left'>
							<div className='service-card'>
								<div className='mb-12'>
									<span className='fs-24'>
										{item.title}
									</span>
									<span className='fl-r mt-8'>
										<i className={item.icon}></i>
									</span>
								</div>
								<div className='fs-16 pb-8'>
									{item.content}
								</div>
							</div>
						</div>
						)}
					</div>
				</div>
			</React.Fragment>
		)
	} 
}

export default Bottomheader;