// libs
import React from 'react';
// styles
import '../../css/jumbotron.css';

const Jumbotron = () => {
	return (
		<div className='jumbotron'>
			<div className='container-fluid'>
				<h1>GET GOING.</h1>
				<p>Jumpstart your startup with some crowdsourced seed money, or support one of our 300,000,000+ creators and get rewards.</p>
				<a href='/#' className='btn btn-primary btn-lg'>Jump in</a>
			</div>
		</div>

	);
};

export default Jumbotron;