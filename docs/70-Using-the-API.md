# Using the API

Note, this section assumes familiarity with developer tools including the Azure Cloud Shell, shell scripts, and environment variables. If you are not familiar with these tools, you may want to skip ahead to the next section.

The Completions Playground and the Chat Playground in the Azure OpenAI Studio are handy tools for experimenting with the OpenAI natural language models. To add the power of these models to your applications, however, you will use the Azure OpenAI Service API.

## The Completion and Conversation APIs

The Azure OpenAI Service API provides two APIs: the Completions API and the Conversation API. The Completion API takes a single prompt as input and is used to generate text completions. The Conversation API takes a conversation history as input and generates the next AI response to the conversation. The Conversation API is particularly suitable for chatbot applications but can be used for other applications as well.

You can find a more complete list at [aka.ms/oai/models](https://aka.ms/oai/models).

| Model | Model ID | API Type |
| ----| --------------- | --------------- |
| GPT-3.5 | `text-davinci-003` | Completions |
| ChatGPT | `gpt-35-turbo` | Conversation |
| GPT-4 | `gpt-4` | Conversation |

In this workshop, we will have been using GPT-3.5 and ChatGPT. GPT-4 is currently in preview in Azure OpenAI Service, and existing customers can request access by [filling out this form](https://aka.ms/oai/get-gpt4).

### Finding your API key

Regardless of which API you use, you will need your unique API key to successfully complete any call. You can find your API key in the [Azure Portal](https://portal.azure.com) as follows:

1. Navigate to your `openai-lab-build` resource
2. Click "Keys and Endpoint" in the left-hand menu
3. Copy the Key 1 value and keep it handy (say, in a Notepad window). You'll be needing it soon.

### The Completions API with GPT-3.5

Return to the Completions Playground in the Azure OpenAI Studio.

### Create a new prompt

1. In the "User Message" box in the right pane, enter the following text: "`A long and unusual name for a cat: `" (including the space after the colon). Do **not** click generate.
2. Select `View code`, and select `curl` from the dropdown
3. Copy the curl command to the clipboard, and open the text editor of your choice, and paste the curl command into the editor window.
4. Update the curl command with your API key. The command should look something like this:

    ```bash
    curl https://openai-lab-build.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=2022-12-01 \
    -H "Content-Type: application/json" \
    -H "api-key: 09c999b9999c99cda999de9999b9ca9d" \
    -d '{
    "prompt": "A long and unusual name for a cat: ",
    "max_tokens": 100,
    "temperature": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0,
    "top_p": 0.5,
    "best_of": 1,
    "stop": null
    }'

### Run the CURL command

1. Open the [Azure Cloud Shell (https://shell.azure.com/)](https://shell.azure.com/), by clicking the ">" icon in the top menu bar of the Azure Portal.
2. If you see "Powershell" in the Cloud Shell menubar, switch to `Bash` using the dropdown menu.
3. Paste the updated curl command that contains your API key into the shell, and press `Enter`. (The easiest way to paste into the Cloud Shell window is by right-clicking the mouse in the window and selecting Paste from the context menu.)

The curl command will return a JSON object containing the completion, and  will look similar to this:

```json
{"id":"cmpl-7AB4yX79X0JxCvXXXDe6Lub8XXq0l","object":"text_completion","created":1682660224,"model":"text-davinci-003","choices":[{"text":"\n\nSir Fluffington Pawsworth IV","index":0,"finish_reason":"stop","logprobs":null}],"usage":{"completion_tokens":10,"prompt_tokens":9,"total_tokens":19}}
```

The actual completion is the first element of the `choices` tag in the array (here, "Sir Fluffington Pawsworth IV" with some added whitespace). An application calling this API would likely extract and clean that element before presenting it to the user via the UI.

## Next Steps

This section was intended to give a taste of automating prompt completions using the Azure OpenAI Service API. For more information on the API, see the [Azure OpenAI Service API Reference](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference).
