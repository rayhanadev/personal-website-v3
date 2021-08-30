import React, { useState, useRef } from 'react';
import useSWR, { mutate } from 'swr'

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import GuestBookEntry from '../../components/GuestBookEntry/GuestBookEntry.js'
import styles from '../../styles/Guestbook.module.scss';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function GuestBook() {
	return (
		<div className={styles.container}>
			<Head title="Guestbook" />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}><strong>Guestbook</strong></h1>
				<p className={styles.content}>
					WIP
				</p>
				<Footer />
			</div>
		</div>
	)
}