<script lang="ts">
  import { onMount } from "svelte";

  interface Book {
    name: string;
    authors: string;
    review: string;
    isbn: string;
    link: string;
  }

  let completedBooks: Book[] = [];
  let readingBooks: Book[] = [];

  onMount(async () => {
    const urls = [
      "https://raw.githubusercontent.com/wesleyflorence/library/main/completed_books.json",
      "https://raw.githubusercontent.com/wesleyflorence/library/main/reading_books.json",
    ];

    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      [completedBooks, readingBooks] = await Promise.all(
        responses.map(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Failed to fetch: ${response.url}`);
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  });
</script>

<h1 class="text-4xl font-bold mb-5">Library</h1>
<p class="bg-zinc-900 text-zinc-200 text-md rounded mb-8 p-5">
  Books on my reading list should not be seen as reflective of my personal or
  political beliefs. This list is not exhaustive and is continually updated <a
    href="https://github.com/wesleyflorence/library"
    class="text-rose-700 italic hover:font-bold"
  >
    (here!)</a
  >, representing a snapshot of my journey. We are learning.
</p>

<h2 class="text-lg font-bold text-zinc-400 mb-1">Currently Reading</h2>
{#if readingBooks.length > 0}
  <ul class="mb-2">
    {#each readingBooks as book}
      <li class="font-mono text-sm">
        <a href={book.link} target="_blank"><strong class="hover:text-rose-700">{book.name}</strong></a>
        :: {book.authors}
        <br />
        <br />
      </li>
    {/each}
  </ul>
{:else}
  <p>No books currently being read.</p>
{/if}


<h2 class="text-lg font-bold text-zinc-400 mb-1">Completed</h2>
{#if completedBooks.length > 0}
  <ul>
    {#each completedBooks as book}
      <li class="font-mono text-sm">
        <a href={book.link} target="_blank"><strong class="hover:text-rose-700">{book.name}</strong></a>
        :: {book.authors}
        <br /><i class="text-rose-700 mx-7">{book.review || ""}</i>
        <br />
      </li>
    {/each}
  </ul>
{:else}
  <p>No completed books found.</p>
{/if}
