import React from 'react';
import mgLogo from '../../assets/images/mg--logo-2.svg';

const Intro = () => {
	return (
		<section className="header-container">
			<div className="header-container-inner">
				<div className="header-content">
					<div className="header-logo-container">
						<img className="header-logo"
							src={mgLogo}
							alt="Matt Gallo logo" />
					</div>
					<div className="header-name-container">
						<h2 className="mg--extra-bold">Matt Gallo</h2>
						<p className="mg--light-italic">Senior Front end developer and designer</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
