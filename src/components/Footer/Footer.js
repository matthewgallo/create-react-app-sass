import React from 'react';
import Scroll from 'react-scroll';
import GradientLink from '../GradientLink/GradientLink';
import Logo from '../Intro/Logo';

const scroll = Scroll.animateScroll;
const { Link } = Scroll;

const Footer = () => {
	const scrollToTop = event => {
		event.preventDefault();
		scroll.scrollToTop();
	};

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-logo">
					<Link to="/"
						className="footer-logo-link"
						onClick={event => scrollToTop(event)}>
						<Logo
							style={{
								height: '50px',
								transition: 'fill 0.8s ease',
								width: '88px',
							}}
						/>
					</Link>
				</div>
				<ul className="footer-link-container">
					<li className="footer-link-item">
						<GradientLink url="https://twitter.com/matthewgallo27"
							external
							bold>
							Twitter
						</GradientLink>
					</li>
					<li className="footer-link-item">
						<GradientLink url="https://www.linkedin.com/in/matthew-gallo-1090748a/"
							external
							bold>
							LinkedIn
						</GradientLink>
					</li>
					<li className="footer-link-item">
						<GradientLink url="https://github.com/matthewgallo/"
							external
							bold>
							Github
						</GradientLink>
					</li>
				</ul>
				<span className="copyright mg--caption">&copy; 2020 Matt Gallo</span>
			</div>
		</footer>
	);
};

export default Footer;
