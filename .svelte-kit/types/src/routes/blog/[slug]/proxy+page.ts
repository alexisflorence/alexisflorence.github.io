// @ts-nocheck
import type { PageLoad } from "./$types";

// src/routes/blog/[slug]/+page.ts
export const load = async ({ params }: Parameters<PageLoad>[0]) => {
	const { slug } = params as { slug: string };
	const post = await import(`../${slug}.md`);
	const { title, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date
	};
}
