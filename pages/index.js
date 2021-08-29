import React from 'react';
import Image from 'next/image';

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
		</div>
	)
}