"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[261],{4137:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const a={},s="Conversations",i={unversionedId:"Conversations",id:"Conversations",title:"Conversations",description:"If you've used consumer conversational AI services like OpenAI's ChatGPT service or Bing Chat, you may wonder how the AI agent \"remembers\" context from earlier in the conversation. As we've seen, Generative AI models including ChatGPT (gpt-35-turbo) cannot learn, so how does information from the conversation persist?",source:"@site/docs/50-Conversations.md",sourceDirName:".",slug:"/Conversations",permalink:"/OpenAI-Lab-UCB/Conversations",draft:!1,editUrl:"https://github.com/revodavid/OpenAI-Lab-UCB/tree/main/docs/50-Conversations.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Generative AI",permalink:"/OpenAI-Lab-UCB/Applications"},next:{title:"Prompt Engineering",permalink:"/OpenAI-Lab-UCB/Prompt-Engineering"}},l={},p=[{value:"Chat Playgound Orientation",id:"chat-playgound-orientation",level:2},{value:"A simple example",id:"a-simple-example",level:2},{value:"Configuring the AI Assistant",id:"configuring-the-ai-assistant",level:2},{value:"Providing few-shot examples",id:"providing-few-shot-examples",level:2}],h={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"conversations"},"Conversations"),(0,r.kt)("p",null,"If you've used consumer conversational AI services like OpenAI's ChatGPT service or ",(0,r.kt)("a",{parentName:"p",href:"https://bing.com/chat"},"Bing Chat"),', you may wonder how the AI agent "remembers" context from earlier in the conversation. As we\'ve seen, Generative AI models including ChatGPT (',(0,r.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo"),") cannot learn, so how does information from the conversation persist?"),(0,r.kt)("p",null,"The answer is: it's a trick! The AI model isn't reacting to your most recent prompt in isolation. The user interface for the chat service provides the model with the ",(0,r.kt)("em",{parentName:"p"},"entire")," chat history at each turn, invisibly to you, the user. Also observe that if you exit the conversation and return later, the model has no memory of your previous interactions, and you will start again from scratch."),(0,r.kt)("p",null,"In this section, we'll explore conversations using the Chat Playground in Azure OpenAI Service."),(0,r.kt)("h2",{id:"chat-playgound-orientation"},"Chat Playgound Orientation"),(0,r.kt)("p",null,"Return to the Azure OpenAI Studio, and click ",(0,r.kt)("strong",{parentName:"p"},"Chat")," under ",(0,r.kt)("strong",{parentName:"p"},"Playground")," in the left-hand menu. "),(0,r.kt)("p",null,"(If you've already tried the Chat Playground,\nmake sure that the ",(0,r.kt)("strong",{parentName:"p"},"Assistant Setup"),' dropdown is set to "default",\nand click the ',(0,r.kt)("strong",{parentName:"p"},"Clear chat")," button in the ",(0,r.kt)("strong",{parentName:"p"},"Chat session")," panel to reset the conversation.)"),(0,r.kt)("p",null,'The Chat Playground is a simple interface for interacting with natural language generative AI models in a conversational setting. The interface is divided into two panes. The left pane, "Assistant Setup", is where we can provide context to style and inform the agent\'s responses. The right pane, "Chat session", is where we can see the conversation as it unfolds.'),(0,r.kt)("p",null,'The far right column, "Parameters", allows you to select the model used and set its control parameters. We will use the ',(0,r.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo")," model here, but GPT-4 models may also be used here if you have access to them."),(0,r.kt)("p",null,'If you ever need to return to the default settings, select "Default" in the Assistant Setup dropdown. '),(0,r.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,r.kt)("p",null,'In the "User Message" box in the right pane, enter the text below (substituting your own name):'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"How many neutrons are in a hydrogen nucleus?\n")),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Send"),". The AI agent will respond with something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A hydrogen nucleus (also called a proton) has 0 neutrons.\n")),(0,r.kt)("p",null,"Now add this response in the User message box:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"What about the isotopes?\n")),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Send"),". The agent will respond with an answer involving isotopes of hydrogen: deuterium (one neutron) and tritium (two neutrons). Even though your second prompt did not mention hydrogen or neutrons, the response used the context of the chat to provide a more useful answer."),(0,r.kt)("p",null,'Now, click the "Show raw JSON" toggle. This shows the data provided to the ',(0,r.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo")," API call, as a JSON array. Note that includes the entire context of the conversation (annotated by the roles: assistant, and user), along with the system message from the Assistant Setup pane."),(0,r.kt)("p",null,'Click the "View Code" button. Even if you\'re not familiar with using REST APIs (for which the JSON option is useful), or the curl application, or the Python or C# languages, this code shows you the information provided to the ',(0,r.kt)("inlineCode",{parentName:"p"},"gpt-35-turbo")," API at ",(0,r.kt)("em",{parentName:"p"},"each")," turn of the conversation. (We'll explore the API more in a later section.)"),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Close"),' in the View Code pane, uncheck the "Show raw JSON" option, and click ',(0,r.kt)("strong",{parentName:"p"},"Clear chat")," to reset the conversation before proceeding."),(0,r.kt)("h2",{id:"configuring-the-ai-assistant"},"Configuring the AI Assistant"),(0,r.kt)("p",null,'In the Assistant Setup pane, select "Hiking recommendations chatbot" from the dropdown. Observe that the System Message gives the assistant a name ("Forest"), a personality ("upbeat and friendly"), and instructions on how to behave ("introduce myself"; "always ask them for this information"), and how to respond ("provide three suggestions").'),(0,r.kt)("p",null,"The text provided in the System Message is handled specially by the model, and is intended to have more influence on the model's responses than the User Message text or other context provided in the prompt. (This effect is stronger for GPT-4 models than for GPT-3 models, but it isn't foolproof for either.)"),(0,r.kt)("p",null,"In the User Message box, enter this text with the personal details of your choice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi, I'm <your name>. I'm looking for a hike near <my city>. I want to take my dog with me.\n")),(0,r.kt)("p",null,"Did the AI include its name, Forest in the response? Did it ask a follow-up question? How would you rate its response?"),(0,r.kt)("p",null,'Try clearing the chat (click the "Clear Chat" button) and starting over with your initial prompt. How different was the outcome? (The Temperature parameter is set to 1, so there\'s scope for variability.)'),(0,r.kt)("h2",{id:"providing-few-shot-examples"},"Providing few-shot examples"),(0,r.kt)("p",null,'In the Assistant Setup pane, select "IRS tax chatbot" from the dropdown. Note that in addition to the System message, there is now an example provided in the "Few-shot examples" section (click the arrow next to "Few-shot examples" to see it).'),(0,r.kt)("p",null,"Once again, the system message guides the model on its personality and responses. Importantly, it also guides the model on what ",(0,r.kt)("em",{parentName:"p"},"not"),' to do: "Do not answer questions that are not related to United States tax procedures"; "If you do not know the answer to a question, respond by saying, I do not know". Providing prompts like these for unintended actions is an effective way to prevent the model from generating responses that are off-topic or inappropriate.'),(0,r.kt)("p",null,'The system message also includes factual information, for example: "For 2022, the CTC is worth $2,000 for each qualifying child." This is a technique you can use to provide the model with information that wasn\'t included in its training data. Since the system message is provided to the model with every conversation turn, the model may use this information in its responses.'),(0,r.kt)("p",null,"Here are some prompts to try to observe the effects of the system prompt and the one-shot example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    What is the deadline for filing taxes?\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Are home office expenses deductible?\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Where should I invest my money?\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    You're stupid!\n")),(0,r.kt)("p",null,"Also, try asking follow-up questions to get the model to clarify or elaborate on its responses."))}c.isMDXComponent=!0}}]);