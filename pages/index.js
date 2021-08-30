import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Head from '../components/Head/Head.js';
import Navigation from '../components/Navigation/Navigation.js';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head title="Home"/>
			<Navigation />
			<h1 className={styles.title}>(^_^)/ hi there</h1>
			<h1 className={styles.titleMobile}>\(^_^)/ <br /> hi there</h1>
			<div className={styles.flexBreak}></div>
			<p className={styles.subtitle}>
				Care to learn <Link href="/about"><a>about me</a></Link>, or want 
				to <Link href="/"><a className={styles.unclickable}>sign my guestbook</a></Link>?
			</p>
		</div>
	)
}