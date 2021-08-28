import React, { useMemo, useEffect } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../libs/posts.js';

import Head from '../../components/Head/Head.js';
import Navigation from '../../components/Navigation/Navigation.js';
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

export default function Blog({ frontmatter, code }) {
	const Component = useMemo(() => getMDXComponent(code), [code])

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${frontmatter.slug}`, {
        method: 'POST'
      });

    registerView();
  }, [frontmatter]);

	return (
		<div className="container">
			<Head />
			<div className={styles.topBar}>
				<Navigation />
				<h1 className={styles.title}>{frontmatter.title}</h1>
				<p className={styles.subtitle}>
					{frontmatter.description}
				</p>
			</div>
			
			<Component />
		</div>
	)
}