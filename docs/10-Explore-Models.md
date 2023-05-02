# Explore OpenAI Models

Before you begin this section, navigate to your Azure OpenAI Studio homepage:

1. In the Azure Portal, click on the Azure OpenAI resource `openai-lab-build`
2. Click the "Explore" button to open the Azure OpenAI Studio

Remember, you chose your own unique name to replace `openai-lab-build` above. During this workshop you will often need to return to the home page of the Azure OpenAI Studio, so refer back to this section if you need a reminder of how to get there.

## Your deployed models

Click on **Deployments** in the "Management" section of the left pane. You have two models deployed:

* `text-davinci-003`: an instance of the OpenAI GPT-3.5 model
* `gpt-35-turbo`: an instance of the OpenAI ChatGPT model 

In this workshop, we will occasionally mention GPT-4, the latest model from OpenAI, but we will not deploy it.

You can find details about these models and other models available in Azure OpenAI Service at [https://aka.ms/oai/models](https://aka.ms/oai/models). There you will learn that:

* `text-davinci-003` is currently available in the East US and West Europe regions, has a Max Request limit of 4,097 tokens, and is based on training data up to June 2021.
* `gpt-35-turbo` is currently available (preview) in the East US, South Central US, and West Europe regions, has a Max Request limit of 4,096 tokens, and is based on training data up to September 2021.
* `gpt-4` is only available by request in the East US and South Central US regions, has a Max Request limit of 8,192 tokens (or 32,768 tokens for the `gpt-4-32k` variant), and is based on training data up to September 2021.

## Which model should I use?

There are many considerations when choosing a model, including cost, availability, performance, and capability. But as a general guide, we recommend the following:

* Start with `gpt-35-turbo`. This model is very economical, has good performance, and despite the "ChatGPT" name can be used for a wide range of tasks beyond chat and conversation.

* If `gpt-35-turbo` is not available to you, try `text-davinci-003`. This is a slightly older model, but it performs well for many tasks. For applications where language understanding, but not *generation* is important (for example, information extraction or text correction), some of the other, smaller models may be better suited.

* If you need to generate more than 4,096 tokens, or need to support larger prompts, you will need to use `gpt-4` or `gpt-4-32k`. These models are more expensive and can be slower, and have limited availability, but they are the most powerful models available today.
