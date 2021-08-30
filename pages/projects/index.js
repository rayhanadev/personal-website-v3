import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getAllProjects } from '../../libs/projects.js';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/Projects.module.scss';

function ProjectCard({ data: { title, description, publishedAt, hasLink, link, hasCode, code, hasCover, cover }}) {
	return (
		<div>
			<h2 className={styles.header}>
				<strong>
					{ title }
					<span style={{
						paddingLeft: '0.4rem',
						paddingRight: '1rem'
					}}>•</span>
					<span style={{
						color: '#666'
					}}>{ new Date(publishedAt).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</span>
				</strong>
			</h2>
			<p className={styles.content}>
				{ description }
				<br />
				<br />
				<div className={styles.meta}>				
					{ hasLink ? <Link href={ link }><a>Visit the Project</a></Link> : '' }
					{
						hasLink && hasCode ? (
							<span style={{
								paddingLeft: '0.4rem',
								paddingRight: '1rem'
							}}>•</span>
						) : ''
					}
					{ hasCode ? <Link href={ code }><a>Check out the Code</a></Link> : '' }
				</div>
				<Link href={ link ?? '/projects#' } passHref>
					<div className={styles.coverImg}>
						<Image
							src={ cover ? cover : '/filler.jpg'}
							alt='cover image'
							layout='fill'
							objectFit='cover'
						/>
					</div>
				</Link>
			</p>
		</div>
	)
}

export const getStaticProps = async () => {
	const projects = await getAllProjects();

	return {
		props: { projects },
	};
};

export default function Projects({ projects }) {
	return (
		<div className={styles.container}>
			<Head title="Projects" />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}><strong>My Projects</strong></h1>
				{
					projects.map(({ data }) => <ProjectCard data={data} key={data.title}/> )
				}
				<Footer />
			</div>
		</div>
	)
}