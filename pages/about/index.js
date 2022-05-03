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
					Hiya, <strong>the name&apos;s Ray Arayilakath</strong>! I&apos;m a full-
					stack web developer, software engineer, graphic designer, photographer, and
					audio producer always working on gaining more knowledge and perfecting my
					skillset. I am currently looking for a local or remote internship with some
					innovative people!
				</p>
				<p className={styles.content}>
					I&apos;m a high-school sophomore based in Keller, TX attending <a href="https://www.westlakeacademy.org/" rel="noreferrer" target="_blank">Westlake Academy</a>.
					I love my STEM classes and enjoy the creativity I can interweave into my life.
					I spend my free-time building websites, studying some new topic area, and always
					listening to a new song.
				</p>
				<p className={styles.content}>
					You can find me in the wild contributing to and making open-source software,
					creating unique projects with <a href="https://replit.com/" rel="noreferrer" target="_blank">Replit&apos;s</a>
					APIs, and writing (or playing) the occasional video-game.
				</p>
				<h2 className={styles.header}><strong>Socials</strong></h2>
				<p className={styles.content}>
					<ul className={styles.list}>
						<li>
							LinkedIn ~ <a href="https://linkedin.com/in/rayhanadev" rel="noreferrer" target="_blank">@rayhanadev</a>
						</li>
						<li>
							Github ~ <a href="https://github.com/rayhanadev" rel="noreferrer" target="_blank">@rayhanadev</a>
						</li>
					</ul>
				</p>
				<Footer />
			</div>
		</div>
	)
}