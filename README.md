[Click here for an easy-to-read version of this lab.](https://revodavid.github.io/OpenAI-Lab-UCB/)

# Explore the OpenAI GPT Models

This session is a 60-minute live demonstration of interaction with OpenAI models GPT3 (text-davinci-003) and ChatGPT (gpt-3.5-turbo). You can follow along with the demonstration live using Use [Azure AI Studio](https://oai.azure.com/portal) or [OpenAI Playground](https://platform.openai.com/playground), or work through the examples in this repository later at your own pace and schedule.

The goal of this 60-minute session is to:
  * Understand the implementation and capabilities of GPT3 and ChatGPT
  * Learn how to use and customize natural language generative AI models using prompt engineering techniques
  * Understand the basics of integrating OpenAI models into applications with the API

## Pre-requisites

You will need an Azure Account or an OpenAI account to complete this lab. If you do not have an Azure Account, you can create one for free [here](https://azure.microsoft.com/en-us/free/), and request access to Azure OpenAI Service [here](https://aka.ms/oai/access).

## Get Started

Visit [0 Setup.md](0%20Setup.md) to get started.

## Sections

Once you have completed the Setup step, you can skip ahead to any of the other sections:

1. [Setup](0%20Setup.md). Create and deploy the Azure OpenAI resource in the Azure Portal
1. [Explore Models](1%20Explore%20Models.md). Understand the natural language models availabe in OpenAI and Azure OpenAI Service.
1. [Completions](2%20Completions.md). Understand and experiment with prompts and completions.
1. [Tokens](3%20Tokens.md). Learn about tokens in OpenAI models.
1. [Applications](4%20Applications.md). Learn about applications of natural language generative AI models.
1. [Conversations](5%20Conversations.md). Use the Chat playground.
1. [Prompt Engineering](6%20Prompt%20Engineering.md). Learn how to use prompt engineering to customize the behavior of the model.
1. [Using the API](7%20Using%20the%20API.md). Learn how to generate integration code for use with the Azure OpenAI API.
1. [Learnings and Resources](8%20Learnings%20and%20Resources.md). Recap and links for further learning.
1. [Extra Credit](9%20Extra%20Credit.md). If we have time, explore the capabilities of Bing Chat.

## Citations

"Explore the OpenAI GPT Models", David Smith (Microsoft), 2023. Presented at [UC Berkelyy AI Hackathon](https://ai.calhacks.io), June 17-18 2023. 

When referening this repository, please use the shortlink: https://aka.ms/aoai-lab 

## Feedback

We would love to hear your feedback on this lab. Please use the Discussions tab for comments, or the Issues tab for bugs or suggestions.


# Building the Lab Webpages

## Docs published on GitHub Pages

Docs are published on [GitHub Pages](https://revodavid.github.io/OpenAI-Lab-UCB/)

## Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

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
