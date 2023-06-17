# Using Generative AI

Most people are familiar with natural language generative AI from applications like ChatGPT, but you can use these models for much more than chatbots. In this section, we'll explore some other useful applications of these models.

Return to the Completions playground. We will use the "Examples" dropdown (in Azure OpenAI Service) or the "Load a Preset" dropdown (in OpenAI)  to populate the prompt box for the different applications. The provided examples may differ between the services; we'll discuss the output from Azure OpenAI Service here. 

Note that in some cases you may need to increase the Max length (tokens) option to prevent truncated completions.

## Translation: Human languages

Configure the options above the prompt box as follows:

| Service | Examples / Load a Preset |
| --- | --- |  
| Azure OpenAI Service | Translate Text | 
| OpenAI | English to Other Langauges |


Click **Generate**. `text-davinci-003` translates the given text into French and Spanish. Modify the prompt to some other examples of text and languages.

Natural language models are trained on a subset of data from the internet, so they can learn languages other than English and translate between languages, too. English is the most-represented langauge on the Internet, so the model performs best in English. Languages that don't appear as frequently online are less prevalent in the training data, and so the model performs worse in such languages.

## Information extraction

| Service | Examples / Load a Preset |
| --- | --- |  
| Azure OpenAI Service | Extract entities from text |
| OpenAI | (clear the preset selection)


NOTE: OpenAI does not have an equivalent example, so paste in this prompt directly:
```
Extract the person name, company name, location and phone number from the text below.

Hello. My name is Robert Smith. I’m calling from Contoso Insurance, Delaware. My colleague mentioned that you are interested in learning about our comprehensive benefits policy. Could you give me a call back at (555) 346-9322 when you get a chance so we can go over the benefits?
```


Click **Generate**. This example shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the name, company, location, and phone number from an email. Modify the prompt and the source data to extract different information.

## Extract structured data from text

| Service | Examples / Load a Preset |
| --- | --- |  
| Azure OpenAI Service | Parse unstructured data |
| OpenAI | Parse unstructured data 

Click **Generate**. In this example, we provide freeform narrative about fictitious fruits, and prompt the model to generate a table of all the fruits mentioned and their attributes. 

In this example, we "primed" the model with the desired output format: a header row, and a couple of examples. 

Try extending the prompt by appending the following text:
```
 Please make a JSON array summarizing the fruits from Goocrux:
```
The model will now return a JSON array of the fruit and their attributes.

## Classification

| Service | Examples / Load a Preset |
| --- | --- |  
| Azure OpenAI Service | Classify Text | 
| OpenAI | Classification |

NOTE: We discuss this prompt from the "Classify Text" example.
```
Classify the following news headline into 1 of the following categories: Business, Tech, Politics, Sport, Entertainment

Headline 1: Donna Steffensen Is Cooking Up a New Kind of Perfection. The Internet's most beloved cooking guru has a buzzy new book and a fresh new perspective
Category: Entertainment

Headline 2: Major Retailer Announces Plans to Close Over 100 Stores
Category:
```

Click **Generate**. In this example, we provide one example of a headline and a category, and ask the model to classify a second example. This is an example of "one-shot learning": with just one example, the model can generalize to classify a new example.

Try replacing Headline 2 with other text and regenerating the completion. Does it generate the appropriate category?

```
    Jets lose, again!
```
```
    Obama announces re-election bid
```
```
    Microsoft up in after-hours trading
```
```
    20nm process offers more density and better power value
```

## Text summarization

| Service | Examples |
| --- | --- |  
Azure OpenAI Service | Summarize an article (abstractive)
Azure OpenAI Service | Summarize key points from financial report (extractive)
Azure OpenAI Service | Summarize issue resolution from a conversation
OpenAI | Summarize for a 2nd grader

These three examples show different methods of text summarization; load each example prompt and Click **Generate** to see the results.

The first example shows how to create a short summary of a larger piece of text: "Provide a summary of the text below that captures its main idea." Another prompt you can try to similiar effect is:

    tl;dr

(for "too long; didn't read"). This prompt works well after the text to be summarized.

The second example specifies the data to be extracted from the text: "Customer problem", "Outcome of the conversation", etc. Unlike the structured data example above, in this case we are extracting concepts as opposed to specific data points.

In the third example, we extract summaries for specific sub-topics: key financial numbers, internal risk factors, and external risk factors.

## Next steps

These examples are illustrative as one-off demonstrations, but their real power comes with automation. You can use the Azure OpenAI service to perform similar tasks either on-demand (say, as a customer request form is submitted) or in batch mode (say, to extract data points from a database of unstructured text responses). We'll explore the API later.
