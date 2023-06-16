# Building this lab from your own repository

You can interact with the lab using the published repository and GitHub Pages, but you are welcome to welcome to fork the repository and adapt it under the terms if the [license](LICENSE).

This file describes how to configure your copy and build the web version for GitHub Pages on your own device or via GitHub Actions. The lab is configued to build on Windows, but if you have experience with Docusaurus can also be set up to build on Linux.

## Prerequisites for local builds

Follow the directions in the [Docusaurus documentation](https://docusaurus.io/docs/installation). 

If you fork or clone this repository, you will need to edit the file [docusaurus.config.js](docusaurus.config.js) for successful builds.

## Local development

Launch a local server and see edits to the content in the `docs\` folder as you go with:

```
npm run start
```
 
## Build for deployment

Create a hostable version of the pages with:

```
npm run build
```

This respository is also set up to build the site to GitHub Pages with GitHub Actions. See the "Actions" tab for the actual scripts used. 