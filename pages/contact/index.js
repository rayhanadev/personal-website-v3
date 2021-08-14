import React from 'react';
import Image from 'next/image';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import styles from '../../styles/Contact.module.scss';

export default function Contact() {
	return (
		<div className="container">
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>Get in Touch ＼_ﾍ(ω｀●)</h1>
			</div>
		</div>
	)
}