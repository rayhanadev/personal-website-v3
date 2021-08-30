import fs from 'fs';
import path from 'path';

export const PROJECTS_PATH = path.join(process.cwd(), 'data/_projects');

export const getFileContents = (fileName) => {
	return fs.readFileSync(path.join(PROJECTS_PATH, fileName));
};

export const getAllProjects = async (sort = 'newest', count) => {
	const projects = fs
		.readdirSync(PROJECTS_PATH)
		.filter((path) => /\.json?$/.test(path))
		.map((fileName) => {
			const source = getFileContents(fileName);
			const slug = fileName.replace(/\.json?$/, '');
			const data = JSON.parse(source);

			return { data, slug };
		});
	
	if(sort === 'newest') {
		return projects
			.sort((a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt))
			.slice(0, count ? count : undefined)
	}

	if(sort === 'oldest') {
		return projects
			.sort((a, b) => new Date(a.data.publishedAt) - new Date(b.data.publishedAt))
			.slice(0, count ? count : undefined)
	}
};