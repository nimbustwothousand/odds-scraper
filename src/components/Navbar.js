import React from 'react';

function Navbar() {
	return (
		<nav>
			<div>Odds Scraper</div>
			<div className="social">
				<a href="/"><i className="fas fa-home"></i></a>
				<a href="https://github.com/nimbustwothousand"><i className="fab fa-github"></i></a>
				<a href="/about"><i className="fas fa-question"></i></a>
			</div>
		</nav>
	)
}

export default Navbar
