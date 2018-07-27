// libs
import React from 'react';
// styles
import '../../css/header.css';

const Header = () => {
	return (
		<header className='header'>
			<nav className='navbar'>
				<a href='/#' className='active'>Explore</a>
				<a href='/#'>Start a project</a>
				<a href='/#'>About us</a>
			</nav>
			<img className='logo' src={require('../../img/logo-jumpstart.png')} style={{ width: '178px', height: '20px' }} />
		</header>
	);
};

export default Header;