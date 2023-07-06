"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="Slack",s={unversionedId:"Toolkit/slack",id:"Toolkit/slack",title:"Slack",description:"This SuperAGI Tool lets users send messages to Slack Channels and provides a strong foundation for use cases to come.",source:"@site/docs/Toolkit/slack.md",sourceDirName:"Toolkit",slug:"/Toolkit/slack",permalink:"/docs/Toolkit/slack",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/slack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Searx Search",permalink:"/docs/Toolkit/searx"},next:{title:"Web Scraper",permalink:"/docs/Toolkit/webscraper"}},i={},c=[{value:"<strong>Features:</strong>",id:"features",level:2},{value:"<strong>Slack Configuration:</strong>",id:"slack-configuration",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slack"},"Slack"),(0,r.kt)("p",null,"This SuperAGI Tool lets users send messages to Slack Channels and provides a strong foundation for use cases to come."),(0,r.kt)("h2",{id:"features"},(0,r.kt)("strong",{parentName:"h2"},"Features:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send Message - This tool gives SuperAGI the ability to send messages to Slack Channels that you have specified")),(0,r.kt)("h3",{id:"slack-configuration"},(0,r.kt)("strong",{parentName:"h3"},"Slack Configuration:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an Application on SlackAPI Portal")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/9e612d67-439c-4e45-901a-38c61b52b08f",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Select "from scratch"')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/c9dcfb6a-8403-49d1-bdf4-680dd1d9d8bf",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add your application's name and the workspace for which you'd like to use your Slack Application")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/af21f530-25aa-4bbc-a555-3d52f9bd42eb",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Once the app creation process is done, head to the "OAuth and Permissions" tab')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/38e8761d-5d48-4d94-bf36-0c9561a96942",alt:null})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the \u201c",(0,r.kt)("strong",{parentName:"p"},"bot token scopes\u201d")," and define the following scopes:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'"chat:write",')," \xa0and save it"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/7d1d00a9-ff10-4694-9781-490e4f9b80d8",alt:null})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once you've defined the scope, install the application to your workspace")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/fe206e70-14d4-4595-bbcc-f92ad2a7e950",alt:null})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Post installation, you will get the bot token code")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/92881074/10581710-12e5-4bc8-a1e8-18d1a892faff",alt:null})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Once the installation is done, you'll get the Bot User OAuth Token, which needs to be added in the Slack Toolkit Page")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/2ecf1abf-1384-41f1-a317-c77d20f55330",alt:null})),(0,r.kt)("p",null,"Once the configuration is complete, you can install the app in the channel of your choice and create an agent on SuperAGI which can now send messages to the Slack Channel."))}d.isMDXComponent=!0}}]);