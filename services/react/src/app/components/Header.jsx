// libs
import React from 'react';
// styles
// import '../css/homepage.css';

const Header = () => {
	return (
		<nav className='navbar navbar-default navbar-fixed-top'>
			<div className='container-fluid'>
				<ul className='nav navbar-nav'>
					<li className='active'><a href='/#'>Explore</a></li>
					<li><a href='/#'>Start a project</a></li>
					<li><a href='/#'>About us</a></li>
				</ul>
				<img className='navbar-brand navbar-right collapse navbar-collapse' src={require('../../img/logo-jumpstart.png')} />
			</div>
		</nav>
	);
};

export default Header;