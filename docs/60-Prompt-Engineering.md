# Prompt Engineering

As we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:

* Insufficient information in the training data
* Insufficient context in the prompt
* Lack of capability of the model itself
* Hostile intent by the user providing the prompt ("jailbreaking")

Prompt Engineering is the process of adding additional context to the prompt to provide "grounding" to the AI model and make it more likely to produce the desired response and less likely to produce undesirable outputs. For example, in a chatbot application, the system would inject additional instructions and data into the prompt before the user's actual input, to provide context to the model. 

In the prior Conversations section, the System message, the one-shot examples, and the conversation history all provide grounding to the model via the prompt. If you're building an application that is based on a natural language generative AI model, your application will need to construct the prompt itself.

For more background, read [Introduction to prompt engineering on Microsoft Learn](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/prompt-engineering). 

## Fine Tuning

Another technique you can use to improve the quality of responses is a process called "[fine-tuning](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/fine-tuning)", which retrains the underlying model with example prompts and responses that you provide. We don't cover fine-tuning in this workshop, primarily because prompt engineering generally produces better results, faster and more easily.

## Prompt Engineering Techniques

Prompt Engineering is a complex and rapidly-evolving practice. The article [Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) on Microsoft Learn provides the latest guidance. 

Choose one of the topics summarized below, and try out the examples provided in the page linked above. You can use either the Completions Playground or the Chat Playground for your tests. The Completions Playground is easiest to work with, but you will need to prepend the system message to the provided prompt in the User column. 

* **System message**: use the system message to prime the model with context, instructions, or other information relevant to the use case.

* **Few-shot learning**: adapt language models to new tasks by providing a set of training examples as part of the prompt.

* **Non chat scenarios**: use the Chat Completion API for non chat scenarios, such as sentiment analysis or entity extraction. 

* **Start with clear instructions**: telling the model the task you want it to do at the beginning of the prompt, before sharing additional contextual information or examples, can help produce higher-quality outputs. 

* **Repeat instructions at the end**: models can be susceptible to recency bias, which means that information at the end of the prompt might have more significant influence over the output than information at the beginning of the prompt. 

* **Prime the output**: use a few words or phrases at the end of the prompt to obtain a model response that follows the desired form.

* **Add clear syntax**: use clear syntax for your prompt, such as punctuation, headings, and section markers, to communicate intent and make outputs easier to parse.

* **Break the task down**: large language models often perform better if the task is broken down into smaller steps. 

* **Use of affordances**: you can use affordances external to the model, such as search, instead of relying on the model’s own parameters for information and answers. 

* **Chain of thought prompting**: a variation on breaking down the task technique, where instead of splitting a task into smaller steps, you instruct the model response to proceed step-by-step and present all steps involved. 

* **Specifying the output structure**: providing a model for the output structure can have significant impact on nature and quality of results. 

* **Temperature and Top_p parameters**: changing the temperature or Top_probabilty parameters make the output more focused or more random. 

* **Provide grounding context**: use an ancillary process to provide reliable data in the prompt for the model to draw responses from.

Fun fact! The summarizations above were generated by Bing Chat (Creative Mode) from the contents of [this page](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/concepts/advanced-prompt-engineering) using the prompt: "summarize this page section by section with a 1 sentence summary of each section", along with some light editing.