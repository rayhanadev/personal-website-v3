import React from 'react';
import Image from 'next/image';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import styles from '../../styles/Links.module.scss';

export default function Links() {
	return (
		<div className="container">
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>Links ＼_ﾍ(ω｀●)</h1>
			</div>
		</div>
	)
}