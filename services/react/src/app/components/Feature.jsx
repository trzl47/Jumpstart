// libs
import React from 'react';
// styles
import '../../css/feature.css';

const Feature = () => {
	return (
		<section className='feature'>
			<header className='feat-header'>
				<h2>Featured Project</h2>
			</header>
			<figure className='feat-fig'>
				<img src={require('../../img/featured-project.png')} />
			</figure>
			<article className='feat-project'>
				<header>
					<h3>Project Title</h3>
				</header>
				<p className='author'>by Person Person</p>
				<p className='description'>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
			</article>
			<article className='feat-categories'>
				<header>
					<h3>Product Categories</h3>
				</header>
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
			</article>
		</section>
	);
};

export default Feature;