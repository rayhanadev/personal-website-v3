import React from 'react';
import Link from 'next/link';

import Head from '../components/Head/Head.js';
import Navigation from '../components/Navigation/Navigation.js';
import Footer from '../components/Footer/Footer.js';
import styles from '../styles/Error.module.scss';

export default function Projects() {
	return (
		<div className={styles.container}>
			<Head title="500" />
			<div className={styles.topBar}>
				<Navigation />
			</div>
			<h1 className={styles.title}>500 Error<br /> Whoops! ＼_ﾍ(ω｀●)</h1>
			<div className={styles.flexBreak}></div>
			<p className={styles.subtitle}>Something went wrong on our end. Maybe check back in a few?</p>
			<p className={styles.subtitle}><Link href="/"><a>Go Back Home?</a></Link></p>
			<Footer />
		</div>
	)
}