import React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.scss';

export default function Navigation() {
	return (
		<div className={styles.menu}>
			<ul>
				<li><Link href="/"><a>home</a></Link></li>
				<li><Link href="/blog"><a>blog</a></Link></li>
				<li><Link href="/resume"><a>resume</a></Link></li>
				<li><Link href="/links"><a>links</a></Link></li>
				<li><Link href="/contact"><a>contact</a></Link></li>
			</ul>
		</div>
	)
}