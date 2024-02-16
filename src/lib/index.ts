// place files you want to import through the `$lib` alias in this folder.
interface MarkdownPost {
  default: any;
  metadata: {
    [key: string]: any;
  };
}

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob<MarkdownPost>('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
      // trim '/src/routes' and '.md' from path
			const postPath = path.slice(11, -3); 
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
