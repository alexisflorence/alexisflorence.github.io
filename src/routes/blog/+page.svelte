<script lang="ts">
  import type { BlogPageData } from './+page';
  export let data: BlogPageData;
</script>

<svelte:head>
	<title>wesflorence :: blog</title>
</svelte:head>

<h1 class="text-4xl font-bold mb-2">Blog</h1>

<ul class="list-none text-zinc-400">
  {#each data.posts as post}
    <li class="mb-5">
      <h2 class="text-lg font-bold hover:text-zinc-200">
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      <p class="font-mono text-xs">{post.meta.date}</p>
    </li>
  {/each}
</ul>
