import React from 'react';
import Image from 'next/image';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import styles from '../../styles/Blog.module.scss';

export default function Blog() {
	return (
		<div className="container">
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>My Blog ＼_ﾍ(ω｀●)</h1>
			</div>
		</div>
	)
}