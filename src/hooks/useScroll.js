/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from 'react';

function useScroll() {
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect());
	const [scrollY, setScrollY] = useState(bodyOffset.top);
	const [scrollDirection, setScrollDirection] = useState();

	const listener = () => {
		setBodyOffset(document.body.getBoundingClientRect());
		setScrollY(-bodyOffset.top);
		setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
		setLastScrollTop(-bodyOffset.top);
	};

	useEffect(() => {
		window.addEventListener('scroll', listener);
		return () => {
			window.removeEventListener('scroll', listener);
		};
	});

	return {
		scrollY,
		scrollDirection,
	};
}

export default useScroll;
