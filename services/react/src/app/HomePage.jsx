// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
import Jumbotron from './components/Jumbotron.jsx';
import Feature from './components/Feature.jsx';
import Projects from './components/Projects.jsx';
import Help from './components/Help.jsx';
// styles
// import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<Jumbotron />
			<Feature />
			<Projects />
			<Help />
		</section>
	);
};

export default HomePage;