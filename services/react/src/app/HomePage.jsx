// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Feature from './components/Feature.jsx';
import Projects from './components/Projects.jsx';
// styles
// import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<Jumbotron />
			<Feature />
			<Projects />


		<div className='container-fluid help'>
			<strong>Having trouble thinking of an idea?</strong>
			<p>Inventors' block strikes at the worst times. But that's all changed with Jumpstart's Good Idea Generator Lite (GIGLi).</p>
			<a href='/#' className='btn btn-primary btn-lg'>Learn more</a>
		</div>

		</section>
	);
};

export default HomePage;