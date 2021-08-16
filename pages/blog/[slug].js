import React, { useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../libs/posts.js';

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

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