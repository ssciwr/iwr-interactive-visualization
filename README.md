# [ssciwr.github.io/iwr-interactive-visualization](https://ssciwr.github.io/iwr-interactive-visualization/)

[![Build and deploy to gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml/badge.svg)](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml)

Prototype implementation for an interactive presentation of the IWR and its activities

## Overview

Implemented in javascript and SVG using [svg.js](https://svgjs.dev/)

- [main](https://github.com/ssciwr/iwr-interactive-visualization/tree/main) branch contains the source code
  - [src/js/data.ts](src/js/data.ts) contains the contents (group data, applications, methods, weights)
- [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch contains the generated website
- uses [npm](https://www.npmjs.com/) and [webpack](https://webpack.js.org/) to manage the build and dependencies

## Online preview

On every commit to the main branch:

- [deploy.yml](https://github.com/ssciwr/iwr-interactive-visualization/actions/workflows/deploy.yml) action builds website & deploys to the [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch
- github pages hosts these files at [ssciwr.github.io/iwr-interactive-visualization](https://ssciwr.github.io/iwr-interactive-visualization/)

## How to deploy

- copy the files from the [gh-pages](https://github.com/ssciwr/iwr-interactive-visualization/tree/gh-pages) branch
- contents can be edited in [data.json](https://github.com/ssciwr/iwr-interactive-visualization/blob/gh-pages/fileadmin/templates/iwr_vis/data.json)
- to change the location of the image files
  - edit [image_base_url](https://github.com/ssciwr/iwr-interactive-visualization/blob/gh-pages/fileadmin/templates/iwr_vis/data.json#L2)
- to change the location of data.json
  - find `"fileadmin/templates/iwr_vis/data.json"` in [bundle.js](https://github.com/ssciwr/iwr-interactive-visualization/blob/gh-pages/bundle.js) and replace with desired url

## How to build locally

- clone this repo
  - `git clone https://github.com/ssciwr/iwr-interactive-visualization.git`
  - `cd iwr-interactive-visualization`
- (optional) install pre-commit to auto-format code
  - `pip install pre-commit`
  - `pre-commit install`
- install node
  - macOS: `brew install node`
  - windows: https://nodejs.org/en/
  - ubuntu: `sudo apt install nodejs npm`
- install website node dependencies
  - `npm install`
- build website
  - `npm run build`
- website will be built in `dist` folder
