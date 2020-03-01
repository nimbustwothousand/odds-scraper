import React from 'react';

function Navbar() {
	return (
		<nav>
			<div><a href="/" aria-label='homepage link'>Odds Scraper</a></div>
			<div className="social">
				<a href="/" aria-label='homepage link'><i className="fas fa-home"></i></a>
				<a href="https://github.com/nimbustwothousand" rel='noopener noreferrer' target='_blank' aria-label='github link'><i className="fab fa-github"></i></a>
				<a href="/about" aria-label='about page link'><i className="fas fa-question"></i></a>
			</div>
		</nav>
	)
}

export default Navbar
