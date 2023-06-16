"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[639],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:0},i="Workshop Setup",l={unversionedId:"Setup",id:"Setup",title:"Workshop Setup",description:"This section provides information on how to get yourself set up to run this lab on your own time. We won't go through this section live, but it's provided for your reference.",source:"@site/docs/07-Setup.md",sourceDirName:".",slug:"/Setup",permalink:"/OpenAI-Lab-UCB/Setup",draft:!1,editUrl:"https://github.com/revodavid/OpenAI-Lab-UCB/tree/main/docs/07-Setup.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Explore the OpenAI GPT Models",permalink:"/OpenAI-Lab-UCB/"},next:{title:"Explore OpenAI Models",permalink:"/OpenAI-Lab-UCB/Explore-Models"}},p={},u=[{value:"If you&#39;re using OpenAI",id:"if-youre-using-openai",level:2},{value:"If you&#39;re using Azure OpenAI Service",id:"if-youre-using-azure-openai-service",level:2},{value:"Create an Azure OpenAI Service resource in Azure Portal",id:"create-an-azure-openai-service-resource-in-azure-portal",level:3},{value:"While you&#39;re waiting for the deployment to complete...",id:"while-youre-waiting-for-the-deployment-to-complete",level:2},{value:"Create model deployments",id:"create-model-deployments",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workshop-setup"},"Workshop Setup"),(0,o.kt)("p",null,"This section provides information on how to get yourself set up to run this lab on your own time. We won't go through this section live, but it's provided for your reference."),(0,o.kt)("p",null,"You can run this lab using either OpenAI (at ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com"},"https://platform.openai.com"),") or Azure OpenAI Service (at ",(0,o.kt)("a",{parentName:"p",href:"https://oai.azure.com/portal"},"https://oai.azure.com/portal"),"). Both services provide access to the same models used in this workshop."),(0,o.kt)("p",null,"To use either service, you will need to have an account and available credits to use the service."),(0,o.kt)("h2",{id:"if-youre-using-openai"},"If you're using OpenAI"),(0,o.kt)("p",null,"Other than having a valid account and available credit, no further setup is needed."),(0,o.kt)("p",null,"During the lab, we will mostly use the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground"},"OpenAI Playground"),', using both the "Complete" and "Chat" modes.'),(0,o.kt)("h2",{id:"if-youre-using-azure-openai-service"},"If you're using Azure OpenAI Service"),(0,o.kt)("p",null,"To use Azure OpenAI Playgound during the lab, follow the instructions below to set up resources for models that use the Completions and Chat interfaces."),(0,o.kt)("h3",{id:"create-an-azure-openai-service-resource-in-azure-portal"},"Create an Azure OpenAI Service resource in Azure Portal"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Microsoft Azure Portal at ",(0,o.kt)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"),' and sign into your Azure Subscription. Make sure you are viewing the Home page of the Azure portal by clicking the hamburger menu in the top-left and selecting "Home".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "+ Create a Resource"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'In the search box, type "openai" and select "Azure OpenAI"')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the "Azure OpenAI" pane, and then click "Create". (Leave the "Plan" field as "Azure OpenAI".)'))),(0,o.kt)("p",null,'NOTE: If you see the message in red, "Azure OpenAI Service is currently available to customers via an application form. The selected subscription has not been enabled for use of the service and does not have quota for any pricing tiers.", you need to apply for access to the service and wait for approval to continue. ',(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/oai/access"},"Click here to request access to Azure OpenAI service"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a unique set of characters to make your resource group and domain name unique. You might choose something like ",(0,o.kt)("inlineCode",{parentName:"p"},"openai-19800101")," with your birthday to make it easy to remember. From now on, we'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"openai-lab-build"),", but remember to substitute your selection.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Complete the "Basics" tab as follows'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subscription: leave unchanged"),(0,o.kt)("li",{parentName:"ul"},'Resource Group: Click "create new" and enter ',(0,o.kt)("inlineCode",{parentName:"li"},"openai-lab-build")," "),(0,o.kt)("li",{parentName:"ul"},"Region: Select ",(0,o.kt)("inlineCode",{parentName:"li"},"South Central US")),(0,o.kt)("li",{parentName:"ul"},"Name: Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"openai-lab-build")),(0,o.kt)("li",{parentName:"ul"},"Pricing Tier: Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Standard S0"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click Next. On the next page "Network", click Next. On the next page "Tags" also click Next. On the final tab "Create Azure OpenAI", click "Create".')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deployment may take up to 5 minutes. Once the deployment is complete, proceed to the next step."))),(0,o.kt)("h2",{id:"while-youre-waiting-for-the-deployment-to-complete"},"While you're waiting for the deployment to complete..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/legal/cognitive-services/openai/code-of-conduct"},"Code of conduct for Azure OpenAI Service"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review the information on ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy"},"Data, privacy and security for Azure OpenAI Service"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Browse the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/cognitive-services/openai/faq"},"Azure OpenAI Service Frequently Asked Questions"),"."))),(0,o.kt)("h2",{id:"create-model-deployments"},"Create model deployments"),(0,o.kt)("p",null,"Once your Azure OpenAI deployment is complete:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Azure Portal Home page, click the Resource you just created, ",(0,o.kt)("inlineCode",{parentName:"p"},"openai-lab-build"),'. (If you don\'t see your resource, click on "All Resources".)')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'From the Overview tab, click the button "Explore" to launch the Azure OpenAI Studio.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You will see the message "No deployment detected". Click the "Deployments" link under "Management" in the left navigation.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click "+ Create New Deployment". Complete the "Deploy Model" form as follows, then click "Create"'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model Name: Select ",(0,o.kt)("inlineCode",{parentName:"li"},"text-davinci-003")),(0,o.kt)("li",{parentName:"ul"},"Model version: Leave as ",(0,o.kt)("inlineCode",{parentName:"li"},"1")),(0,o.kt)("li",{parentName:"ul"},"Deployment Name: Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"text-davinci-003"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},'Once more, click "+ Create New Deployment". Complete the "Deploy Model" form as follows, then click "Create"')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model Name: Select ",(0,o.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo")),(0,o.kt)("li",{parentName:"ul"},"Model version: Leave as ",(0,o.kt)("inlineCode",{parentName:"li"},"0301")),(0,o.kt)("li",{parentName:"ul"},"Deployment Name: Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"gpt-35-turbo"))))}m.isMDXComponent=!0}}]);