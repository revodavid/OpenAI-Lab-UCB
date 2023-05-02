# Conversations

If you've used consumer conversational AI services like OpenAI's ChatGPT service or [Bing Chat](https://bing.com/chat), you may wonder how the AI agent "remembers" context from earlier in the conversation. As we've seen, Generative AI models including ChatGPT (`gpt-35-turbo`) cannot learn, so how does information from the conversation persist?

The answer is: it's a trick! The AI model isn't reacting to your most recent prompt in isolation. The user interface for the chat service provides the model with the *entire* chat history at each turn, invisibly to you, the user. Also observe that if you exit the conversation and return later, the model has no memory of your previous interactions, and you will start again from scratch.

In this section, we'll explore conversations using the Chat Playground in Azure OpenAI Service.

## Chat Playgound Orientation

Return to the Azure OpenAI Studio, and click **Chat** under **Playground** in the left-hand menu. 

(If you've already tried the Chat Playground, 
make sure that the **Assistant Setup** dropdown is set to "default", 
and click the **Clear chat** button in the **Chat session** panel to reset the conversation.)

The Chat Playground is a simple interface for interacting with natural language generative AI models in a conversational setting. The interface is divided into two panes. The left pane, "Assistant Setup", is where we can provide context to style and inform the agent's responses. The right pane, "Chat session", is where we can see the conversation as it unfolds.

The far right column, "Parameters", allows you to select the model used and set its control parameters. We will use the `gpt-35-turbo` model here, but GPT-4 models may also be used here if you have access to them.

If you ever need to return to the default settings, select "Default" in the Assistant Setup dropdown. 

## A simple example

In the "User Message" box in the right pane, enter the text below (substituting your own name):

    How many neutrons are in a hydrogen nucleus?

Click **Send**. The AI agent will respond with something like:

    A hydrogen nucleus (also called a proton) has 0 neutrons.

Now add this response in the User message box:

    What about the isotopes?

Click **Send**. The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer.

Now, click the "Show raw JSON" toggle. This shows the data provided to the `gpt-35-turbo` API call, as a JSON array. Note that includes the entire context of the conversation (annotated by the roles: assistant, and user), along with the system message from the Assistant Setup pane.

Click the "View Code" button. Even if you're not familiar with using REST APIs (for which the JSON option is useful), or the curl application, or the Python or C# languages, this code shows you the information provided to the `gpt-35-turbo` API at *each* turn of the conversation. (We'll explore the API more in a later section.)

Click **Close** in the View Code pane, uncheck the "Show raw JSON" option, and click **Clear chat** to reset the conversation before proceeding.

## Configuring the AI Assistant

In the Assistant Setup pane, select "Hiking recommendations chatbot" from the dropdown. Observe that the System Message gives the assistant a name ("Forest"), a personality ("upbeat and friendly"), and instructions on how to behave ("introduce myself"; "always ask them for this information"), and how to respond ("provide three suggestions").

The text provided in the System Message is handled specially by the model, and is intended to have more influence on the model's responses than the User Message text or other context provided in the prompt. (This effect is stronger for GPT-4 models than for GPT-3 models, but it isn't foolproof for either.)

In the User Message box, enter this text with the personal details of your choice:

    Hi, I'm <your name>. I'm looking for a hike near <my city>. I want to take my dog with me.

Did the AI include its name, Forest in the response? Did it ask a follow-up question? How would you rate its response?

Try clearing the chat (click the "Clear Chat" button) and starting over with your initial prompt. How different was the outcome? (The Temperature parameter is set to 1, so there's scope for variability.)

## Providing few-shot examples

In the Assistant Setup pane, select "IRS tax chatbot" from the dropdown. Note that in addition to the System message, there is now an example provided in the "Few-shot examples" section (click the arrow next to "Few-shot examples" to see it).

Once again, the system message guides the model on its personality and responses. Importantly, it also guides the model on what *not* to do: "Do not answer questions that are not related to United States tax procedures"; "If you do not know the answer to a question, respond by saying, I do not know". Providing prompts like these for unintended actions is an effective way to prevent the model from generating responses that are off-topic or inappropriate.

The system message also includes factual information, for example: "For 2022, the CTC is worth $2,000 for each qualifying child." This is a technique you can use to provide the model with information that wasn't included in its training data. Since the system message is provided to the model with every conversation turn, the model may use this information in its responses.

Here are some prompts to try to observe the effects of the system prompt and the one-shot example:

```
    What is the deadline for filing taxes?
```
```
    Are home office expenses deductible?
```
```
    Where should I invest my money?
```
```
    You're stupid!
```

Also, try asking follow-up questions to get the model to clarify or elaborate on its responses.
