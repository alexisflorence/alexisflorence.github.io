<script>
  import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="mx-auto max-w-5xl p-8">
  <slot />
</main>
