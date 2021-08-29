import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import db from './firebase.js';
import { asyncMap } from '@arcath/utils';
import { sassPlugin } from 'esbuild-sass-plugin';

export const POSTS_PATH = path.join(process.cwd(), 'data/_posts');

export const getFileContents = (fileName) => {
	return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = async (sort = 'newest', count) => {
	const posts = fs
		.readdirSync(POSTS_PATH)
		.filter((path) => /\.mdx?$/.test(path))
		.map((fileName) => {
			const source = getFileContents(fileName);
			const slug = fileName.replace(/\.mdx?$/, '');
			const { data } = matter(source);

			return {
				frontmatter: data,
				slug: slug,
			};
		})
	
	if(sort === 'newest') {
		return posts
			.sort((a, b) => new Date(b.frontmatter.publishedAt) - new Date(a.frontmatter.publishedAt))
			.slice(0, count ? count : undefined)
	}

	if(sort === 'oldest') {
		return posts
			.sort((a, b) => new Date(a.frontmatter.publishedAt) - new Date(b.frontmatter.publishedAt))
			.slice(0, count ? count : undefined)
	}

	if(sort === 'views') {
		const postsWithViews = await asyncMap(posts, async (post) => {
			const snapshot = await db.ref('views').child(post.slug).once('value');
			return {
				...post,
				views: Number(snapshot.val()) || 0
			};
		});

		return postsWithViews
			.sort((a, b) => b.views - a.views)
			.slice(0, count ? count : undefined)
	}
};

export const getSinglePost = async (slug) => {
	const source = getFileContents(slug + '.mdx');

	const { code, frontmatter } = await bundleMDX(source, {
		cwd: POSTS_PATH,
	});

	return {
		frontmatter,
		code,
	};
};
