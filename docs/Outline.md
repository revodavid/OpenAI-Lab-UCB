# Lab Outline

## Get Started with the Azure OpenAI Studio

* Model zoo: Exploring the "models" section

### Completions

Use the `text-davinci-003` model to explore completions. This is the same model as `GPT-3`, provided by OpenAI. Observe:

* Completions as natural language text
* Novel creations
    * Translations example
    * Generate a quiz example
* Random responses
    * "I climbed the tree and picked a"
    * Regenerate button
    * Effect of Temperature parameter
* Accuracy
    * "When did Queen Elizabeth II die"
* Hallucination / confabulation
    * Max length (tokens) parameter
    * "Write an obituary for..."
* Black box nature / lack of memory
    * "Hello, my name is"

### Chat

Use the `gpt-35-turbo` model to explore a chat experience. This is the same model as `ChatGPT` provided by OpenAI.

* Understanding tokens (token count)
* Ungrounded chat experience - how "memory" works
    * Use of "past messages included" option
    * Look at JSON/code to see actual prompt
* Grounding: Assistant Setup
* Grounding: Few-Shot examples

### Responsible use of Generative AI

* Code of Conduct

### Using the API

* Finding the API key
* Generate code as curl
* Run code in Cloud Shell
* Interpreting JSON output

### Extra Credit

* Using the openai python package
* Using Bing Chat (if you have access)
