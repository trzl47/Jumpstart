// libs
import React from 'react';
// styles
import '../../css/feature.css';

const Feature = () => {
	return (
		<div className='container featured-project'>
			<div className='row'>
				<h2 className='col-xs-12'>Featured project</h2>
			</div>
			<div className='row'>
				<div className='col-xs-12 col-md-6'>
					<img src={require('../../img/featured-project.png')} />
				</div>
				<div className='col-xs-6 col-md-3'>
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
				<div className='col-xs-6 col-md-3 categories'>
					<h3>Product Categories</h3>
					<ul>
						<li>Art</li>
						<li>Books</li>
						<li>Crystals</li>
						<li>Design</li>
						<li>Doodles</li>
						<li>Deedlybobs</li>
						<li>Farming</li>
						<li>Gadgets</li>
						<li>Hoverboards</li>
						<li>Jams, Jellies, Etc.</li>
						<li>Magazines</li>
						<li>Plants</li>
						<li>Snakes &amp; Snake Equipment</li>
						<li>Tables</li>
						<li>Ventriliquist Figures</li>
						<li>Yoyos</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Feature;