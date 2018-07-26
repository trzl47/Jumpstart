// libs
import React from 'react';
// styles
import '../../css/projects.css';

const Projects = () => {
	return (
		<div className='container'>
			<div className='row'>
				<h2 className='col-xs-12'>Projects</h2>
			</div>
			<div className='row'>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../../img/project1.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../../img/project2.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
				<div className='col-xs-12 col-sm-4 project'>
					<img src={require('../../img/project3.png')} />
					<h3>Project Title</h3>
					<p>by Person Person</p>
					<p>I have been questioned by many people to disclose some of the greatest traffic generating techniques that I know of. I am not to immediate to reveal them because I know the majority doesn't even take battle on them. All I know is that they work and you should be familiar with this too.</p>
				</div>
			</div>
		</div>

	);
};

export default Projects;