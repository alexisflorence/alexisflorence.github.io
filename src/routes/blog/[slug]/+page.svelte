<script>
  import { onMount } from 'svelte';
  export let data;
  const { title, date, Content } = data;

  onMount(() => {
    const headers = document.querySelectorAll('article h2, article h3, article h4, article h5, article h6');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const id = header.id;
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            history.pushState({}, '', '#' + id);
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
</script>

<svelte:head>
	<title>blog :: {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1 class="text-6xl font-bold mb-2">{title}</h1>
	<p class="text-xs font-mono mb-8">Published: {date}</p>
  <Content />
</article>
