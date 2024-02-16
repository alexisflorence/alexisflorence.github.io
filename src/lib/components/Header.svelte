<script>
  import { page } from '$app/stores';
</script>

<header>
  <nav class="text-sm font-mono text-zinc-400">
    <ul class="p-4 flex flex-col space-y-1">
      {#each ['/', '/cancer', '/research'] as route}
        <li class:active={$page.url.pathname === route} class="hover:text-zinc-200 flex items-center">
          <span class="mr-2 circle" />
          <a href={route}>{route.slice(1) || "home"}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .active {
    @apply text-zinc-200;
  }
  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    @apply border;
    @apply border-zinc-200;
  }
  .active .circle {
    @apply bg-zinc-200;
  }
</style>
