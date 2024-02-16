# wesflorence.com

## Getting Started

### Prerequisites

- [bun](https://bun.sh/): A modern JavaScript runtime optimized for performance and developer experience.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `nix develop` to set up a reproducible development environment using the provided `flake.nix` file (if you are a nix user).
4. Install the project dependencies with `bun install`.

### Commands

- **Development Server**: `bun run dev -- --open` - Start the development server and open the application in your default web browser.
- **Build the Project**: `bun run build` - Compile the project for production.
- **Preview the Build**: `bun run preview` - Serve the built application locally.

---

## SvelteKit Overview

This project is built using SvelteKit, a framework designed to build web applications with a focus on simplicity and performance. Key concepts and features of SvelteKit used in this project include:

- **File-Based Routing**: Components in the `src/routes` directory automatically become routes of your application. The structure of this directory determines the routes of your application.
- **Layouts and Pages**: `+layout.svelte` files define layouts that can be applied to multiple routes, while `+page.svelte` files define the content of individual pages.
- **Script and Logic**: `+page.ts` files can be used to include TypeScript logic related to specific routes.
- **Static Rendering**: This project is configured for static rendering, with routes and content pre-rendered at build time to ensure fast load times.
- **Component Reusability**: The `src/lib` directory contains reusable Svelte components and utilities.

---

## Blogging System

The blogging system is built using SvelteKit's file-based routing and mdsvex for Markdown support:

- Blog posts are written in Markdown and located in `src/routes/blog`. Each post is a `.md` file.
- `+page.svelte` and `+page.ts` in the blog directory define how the list of posts is displayed.
- Individual blog posts are rendered using `[slug]/+page.svelte` and `[slug]/+page.ts`, where `[slug]` corresponds to the Markdown file name.
- The Markdown files are treated as Svelte components, allowing the use of Svelte syntax and components within the blog posts.

This setup allows for a seamless integration of blog content and Svelte components.

---

## Dependency Overview

This project leverages several key technologies and libraries:

- **Vite**: Used as the build tool, providing fast development and build times.
- **mdsvex**: A preprocessor for SvelteKit, enabling the use of Markdown files as Svelte components.
- **PostCSS and Tailwind CSS**: For styling, enabling a utility-first CSS approach and various optimizations.
- **TypeScript**: To provide static types for JavaScript, enhancing code quality and developer experience.

---

## Using `flake.nix`

The `flake.nix` file defines a Nix flake to ensure a consistent and reproducible development environment, encapsulating all necessary dependencies and tools.

