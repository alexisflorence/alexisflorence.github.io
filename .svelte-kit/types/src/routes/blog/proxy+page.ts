// @ts-nocheck
import type { PageLoad } from './$types'

interface PostMeta {
  title: string
  date: string
}

interface Post {
  path: string
  meta: PostMeta
}

interface BlogPageData {
  posts: Post[]
}

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
  const response = await fetch(`/api/posts`)
  const posts = await response.json()

  return {
    posts,
  }
}

export type { BlogPageData, Post, PostMeta };
