import React from 'react';
import Image from 'next/image';

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
				<p></p>
				<Footer />
			</div>
		</div>
	)
}