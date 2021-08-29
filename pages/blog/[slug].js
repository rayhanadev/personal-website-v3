import React, { useMemo, useEffect } from 'react'
import Image from 'next/image';
import useSWR from 'swr';

import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../libs/posts.js';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import styles from '../../styles/BlogPost.module.scss';

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPosts();

  return {
    paths: paths.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

export default function Blog({ frontmatter, code }) {
	const Component = useMemo(() => getMDXComponent(code), [code])
  const { data } = useSWR(`/api/views/${frontmatter.slug}`, fetcher);
  const views = new Number(data?.total);

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${frontmatter.slug}`, {
        method: 'POST'
      });

    registerView();
  }, [frontmatter]);

	return (
		<div className={styles.container}>
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>{frontmatter.title}</h1>
				<p className={styles.subtitle}>
					{frontmatter.description}
				</p>
			</div>
			
			<div className={styles.content}>
				<div className={styles.coverImg}>			
					<Image
						src={ frontmatter.cover ?? '/filler.jpg' }
						layout="fill"
					/>
				</div>
				<div className={styles.info}>
					<p>Ray Arayilakath / { new Date(frontmatter.publishedAt).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }</p>
					<p>{ frontmatter.readTime ? frontmatter.readTime + 'mins • ' : ''}{ views + ' views'}</p>
				</div>
				<Component />
				<p className={styles.metaInfo}>
					<a href={ 'https://twitter.com/search?q=https%3A%2F%2Frayhanadev.vercel.app%2Fblog%2F' + frontmatter.slug }>Discuss on Twitter</a>
					{' • '}
					<a href={ 'https://github.com/rayhanadev/personal-website/edit/master/data/_posts/' + frontmatter.slug + '.mdx' }>Edit on Github</a>
				</p>
			</div>

			<Footer />
		</div>
	)
}