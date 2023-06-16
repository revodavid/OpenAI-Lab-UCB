# Building this lab from your own repository

You can interact with the lab using the published repository and GitHub Pages, but you are welcome to welcome to fork the repository and adapt it under the terms if the [license](LICENSE).

This file describes how to configure your copy and build the web version for GitHub Pages on your own device or via GitHub Actions. The lab is configued to build on Windows, but if you have experience with Docusaurus can also be set up to build on Linux.

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

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

This command generates static content into the `build` directory and can be served using any static contents hosting service.

This respository is also set up to build the site to GitHub Pages with GitHub Actions. See the "Actions" tab for the actual scripts used. 

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
