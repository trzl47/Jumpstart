// libs
import React from 'react';
// styles
import '../../css/projects.css';

const Projects = () => {
	return (
		<section className='projects'>
			<header className='proj-header'>
				<h2 className=''>Projects</h2>
			</header>
			<article className='project1'>
				<img className='project-img' src={require('../../img/project1.png')} />
				<h3>Project Title</h3>
				<p>by Person Person</p>
				<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
			</article>
			<article className='project2'>
				<img className='project-img' src={require('../../img/project2.png')} />
				<h3>Project Title</h3>
				<p>by Person Person</p>
				<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
			</article>
			<article className='project3'>
				<img className='project-img' src={require('../../img/project3.png')} />
				<h3>Project Title</h3>
				<p>by Person Person</p>
				<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
			</article>
		</section>

	);
};

export default Projects;