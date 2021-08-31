import React from 'react';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/Resume.module.scss';

export default function Resume() {
	return (
		<div className={styles.container}>
			<Head title="Resume" />
			<div className={styles.topBar}>
				<Navigation />
			</div>
			<h1 className={styles.title}><strong>My Resume</strong></h1>
			<p className={styles.content}>
				This page holds my resume, detailing previous work experience, education, and
				achievements. If it piques your interest feel free to take a look!
			</p>
			<button
				className={styles.openBtn}
				onClick={
					(event) => { window.open('/resume.pdf', '_blank', 'fullscreen-true'); return false; }
				}
			>Open In A New Window</button>
			<Footer />
		</div>
	)
}