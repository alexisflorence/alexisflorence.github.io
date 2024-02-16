import { fetchMarkdownPosts } from '$lib';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
	});

	return json(sortedPosts);
};
