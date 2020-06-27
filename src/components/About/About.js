import React, { Component } from 'react';

class About extends Component {
	componentDidMount() {
		this.moveImage();
	}

	moveImage = () => {
		const root = document.getElementById('portrait');
		const rect = root.getBoundingClientRect();
		const mouseMonitor = e => {
			const leftOfMiddle = e.clientX < rect.left + rect.width / 2;
			const aboveMiddle = e.clientY < rect.bottom - rect.height / 2;

			const moveX = leftOfMiddle ? '-10px' : '10px';
			const moveY = aboveMiddle ? '-5px' : '5px';

			root.style.setProperty('--translate-x', moveX);
			root.style.setProperty('--translate-y', moveY);
		};

		root.addEventListener('mousemove', mouseMonitor);
	};

	render() {
		return (
			<>
				<div className="about--content">
					<div className="about--text">
						<h3>Hello!</h3>
						<h3 className="text-line">I՚m Matt, a front end developer / designer.</h3>
						<p className="about-desc">
							I currently work for the IBM Blockchain Platform as the front end development practice lead, working to bridge the gap between design and
							engineering. I enjoy learning new things, some of which currently include react hooks, redux, svg animations, and finding out there is something
							else about async/await that I don&apos;t know.
						</p>
						<p className="about-desc">
							In my free time, I play my saxophone{' '}
							<span aria-label="Saxophone"
								role="img">
								🎷
							</span>
							and my fender rhodes{' '}
							<span aria-label="Fender Rhodes piano"
								role="img">
								🎹
							</span>
							, play with Petey{' '}
							<span aria-label="Dog, Petey"
								role="img">
								🐶
							</span>
							, and enjoy life with Rach{' '}
							<span aria-label="Heart"
								role="img">
								❤️
							</span>
							.
						</p>
					</div>
				</div>
				<div className="portrait"
					id="portrait">
					<div className="fill cover-img" />
					<div className="fill z-10 hover">
						<div className="fill cover-img hover-img" />
					</div>
				</div>
			</>
		);
	}
}

export default About;
