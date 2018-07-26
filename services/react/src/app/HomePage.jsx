// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
// styles
// import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />

		<div className='jumbotron'>
			<div className='container-fluid'>
				<h1>GET GOING.</h1>
				<p>Jumpstart your startup with some crowdsourced seed money, or support one of our 300,000,000+ creators and get rewards.</p>
				<a href='/#' className='btn btn-primary btn-lg'>Jump in</a>
			</div>
		</div>

		<div className='container featured-project'>
			<div className='row'>
				<h2 className='col-xs-12'>Featured project</h2>
			</div>
			<div className='row'>
				<div className='col-xs-12 col-md-6'>
					<img src={require('../img/featured-project.png')} />
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

		<div className='container'>
			<div className='row'>
				<h2 className='col-xs-12'>Projects</h2>
			</div>
			<div className='row'>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../img/project1.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../img/project2.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../img/project3.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
			</div>
		</div>

		<div className='container-fluid help'>
			<strong>Having trouble thinking of an idea?</strong>
			<p>Inventors' block strikes at the worst times. But that's all changed with Jumpstart's Good Idea Generator Lite (GIGLi).</p>
			<a href='/#' className='btn btn-primary btn-lg'>Learn more</a>
		</div>

		</section>
	);
};

export default HomePage;