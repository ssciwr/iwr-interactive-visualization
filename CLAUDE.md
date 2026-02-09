# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive SVG visualization of the IWR (Interdisciplinary Center for Scientific Computing) and its research activities. Built with TypeScript and [svg.js](https://svgjs.dev/), bundled with webpack, deployed to GitHub Pages.

## Build Commands

- `pnpm install` — install dependencies
- `pnpm run build` — build website to `dist/` (runs clean, then builds images + scripts/static in parallel)
- `pnpm start` — build, start local server, open browser, and watch for changes
- `pnpm run clean` — remove `dist/`
- `pnpm run serve` — serve `dist/` via http-server
- `pnpm run autobuild` — watch source files and rebuild on change

Image conversion requires the `cwebp` binary (`sudo apt install webp` on Ubuntu).

There are no tests in this project. Linting uses eslint with typescript-eslint (strict + stylistic configs). Pre-commit hooks run prettier for formatting.

## Architecture

The build system uses custom Node.js scripts in `scripts/`:

- **build-scripts.mjs** — webpack bundles `src/index.ts` → `dist/bundle.js` (TypeScript via ts-loader)
- **build-static.mjs** — copies `src/html/index.html`, `src/css/style.css`, and `src/data/data.json` to `dist/`
- **build-images.mjs** — converts images from `src/img/` to webp format in `dist/data/`

Source code (`src/js/`):

- **script.ts** — main application logic: creates the SVG visualization from JSON data, handles segment selection/hover, group display, zoom, and settings menu. All SVG rendering targets a `#iwr-vis-menu-svg` container.
- **utils.ts** — geometry helpers (SVG arc/segment path generation), name formatting, array utilities. All arc math is centered at (200, 200).

Data-driven content lives in `src/data/data.json` — defines members, methods, applications, colors, and image URLs. Content changes should be made there rather than in code.
