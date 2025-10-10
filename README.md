# [ssciwr.github.io/iwr-interactive-visualization](https://ssciwr.github.io/iwr-interactive-visualization/)

[![Build and deploy to gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml/badge.svg)](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml)

An interactive visualization of the IWR and its activities

## Overview

Implemented in javascript and SVG using [svg.js](https://svgjs.dev/)

- [main](https://github.com/ssciwr/iwr-interactive-visualization/tree/main) branch contains the source code
  - contents can be edited in [src/data/data.json](https://github.com/ssciwr/iwr-interactive-visualization/blob/main/src/data/data.json)
- [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch contains the generated website
- uses [npm](https://www.npmjs.com/) and [webpack](https://webpack.js.org/) to manage the build and dependencies

## Online preview

On every commit to the main branch:

- [deploy.yml](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml) action builds website & deploys to the [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch
- github pages hosts these files at [ssciwr.github.io/iwr-interactive-visualization](https://ssciwr.github.io/iwr-interactive-visualization/)

## How to deploy

- [download a zipfile](https://github.com/ssciwr/iwr-interactive-visualization/archive/refs/heads/gh-pages.zip) of the files in the [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch
- contents can be edited in [data.json](https://raw.githubusercontent.com/ssciwr/iwr-interactive-visualization/gh-pages/data/data.json)
- to change the location of the image files
  - edit [image_base_url](https://github.com/ssciwr/iwr-interactive-visualization/blob/gh-pages/data/data.json#L2)
- to change the location of data.json
  - find `"data/data.json"` in [bundle.js](https://github.com/ssciwr/iwr-interactive-visualization/blob/gh-pages/bundle.js) and replace with desired url

## How to build and view locally

Initial setup:

- clone this repo
  - `git clone https://github.com/ssciwr/iwr-interactive-visualization.git`
  - `cd iwr-interactive-visualization`
- (optional) install pre-commit to auto-format code
  - `pip install pre-commit`
  - `pre-commit install`
- install [pnpm](https://pnpm.io/installation)
  - windows: `iwr https://get.pnpm.io/install.ps1 -useb | iex`
  - linux/macOS: `curl -fsSL https://get.pnpm.io/install.sh | sh -`
- install website dependencies
  - `pnpm install`
- the [cwebp](https://developers.google.com/speed/webp/download) binary is also needed to convert image files
  - ubuntu: `sudo apt install webp`

To build from source, start local http-server, open website in browser, monitor & re-build modified source files:

- `pnpm start`

Other commands:

- remove any existing build
  - `pnpm run clean`
- build website in `dist` folder
  - `pnpm run build`
- start a http-server serving files from the `dist` folder at `http://localhost:8080/` & open in browser
  - `pnpm run serve`
- monitor changes to source code & automatically re-build modified files
  - `pnpm run autobuild`
