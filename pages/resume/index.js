import React from 'react';
import Image from 'next/image';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import styles from '../../styles/Resume.module.scss';

export default function Resume() {
	return (
		<div className="container">
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>My Resume ＼_ﾍ(ω｀●)</h1>
			</div>
		</div>
	)
}