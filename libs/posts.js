import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

export const POSTS_PATH = path.join(process.cwd(), 'data/_posts');

export const getFileContents = (fileName) => {
	return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = () => {
	return fs
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
		});
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
