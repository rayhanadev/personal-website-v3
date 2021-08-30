import React from 'react';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/About.module.scss';

export default function About() {
	return (
		<div className={styles.container}>
			<Head title="About" />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}><strong>About Me</strong></h1>
				<p className={styles.content}>
					Hiya, <strong>the name&apos;s Rayhan &quot;Ray&quot; Arayilakath</strong>! I&apos;m a
					developer, graphic designer, photographer, and audio producer always working
					on gaining more knowledge and perfecting my skillset. I am currently looking
					for a remote internship with some innovative people!
				</p>
				<p className={styles.content}>
					I&apos;m a high-school sophomore located at Justin, TX attending <a href="https://www.westlakeacademy.org/" rel="noreferrer" target="_blank">Westlake Academy</a>.
					I love my STEM classes and enjoy the creativity I can interweave into my life.
					I spend my free-time building websites, studying a new subject, and always
					listening to a new song.
				</p>
				<p className={styles.content}>
					You can find me in the wild contributing to and making open-source software,
					creating unique projects with <a href="https://www.westlakeacademy.org/" rel="noreferrer" target="_blank">Replit&apos;s</a>
					APIs, and writing (or playing) the occasional video-game.
				</p>
				<h2 className={styles.header}><strong>Socials</strong></h2>
				<p className={styles.content}>
					<ul className={styles.list}>
						<li>
							Replit ~ <a href="https://replit.com/@RayhanADev" rel="noreferrer" target="_blank">@RayhanADev</a>
						</li>
						<li>
							Github ~ <a href="https://github.com/RayhanADev" rel="noreferrer" target="_blank">@RayhanADev</a>
						</li>
					</ul>
				</p>
				<Footer />
			</div>
		</div>
	)
}