"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return n?o.createElement(m,a(a({ref:t},f),{},{components:n})):o.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={},a="Stable Diffusion",l={unversionedId:"Toolkit/Image Generation/stable_diffusion",id:"Toolkit/Image Generation/stable_diffusion",title:"Stable Diffusion",description:"Introducing Stable Diffusion Integration with SuperAGI",source:"@site/docs/Toolkit/Image Generation/stable_diffusion.md",sourceDirName:"Toolkit/Image Generation",slug:"/Toolkit/Image Generation/stable_diffusion",permalink:"/docs/Toolkit/Image Generation/stable_diffusion",draft:!1,editUrl:"https://github.com/TransformerOptimus/SuperAGI-Docs/tree/main/docs/Toolkit/Image Generation/stable_diffusion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dall-E",permalink:"/docs/Toolkit/Image Generation/dalle"},next:{title:"Coding",permalink:"/docs/Toolkit/coding_tool"}},s={},u=[{value:"Configuring API from DreamStudio",id:"configuring-api-from-dreamstudio",level:2},{value:"Configuring Stable Diffusion with SuperAGI",id:"configuring-stable-diffusion-with-superagi",level:2}],f={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stable-diffusion"},"Stable Diffusion"),(0,r.kt)("p",null,"Introducing Stable Diffusion Integration with SuperAGI"),(0,r.kt)("p",null,"You can now use SuperAGI to summon Stable Diffusion to create true-to-life images which opens up a whole new range of possibilities. "),(0,r.kt)("h2",{id:"configuring-api-from-dreamstudio"},"Configuring API from DreamStudio"),(0,r.kt)("p",null,"You can now get your API Key from Dream Studio to use Stable Diffusion by following the instructions below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an Account/Login with ",(0,r.kt)("a",{parentName:"li",href:"http://DreamStudio.ai"},"DreamStudio.ai"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/6f99b6ab-3dbc-431c-abff-15c0a71850c3",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Click on the Profile Icon at the top right which will take you to the settings page. Once you have reached the settings page, you can now get your API keys ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/e405fbac-50fb-485a-8a3a-30ab7c64ac53",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy the API Key and save it in a separate file")),(0,r.kt)("h2",{id:"configuring-stable-diffusion-with-superagi"},"Configuring Stable Diffusion with SuperAGI"),(0,r.kt)("p",null,"You can configure SuperAGI with Stable Diffusion using the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the \u201c",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****"))),"Toolkit\u201d",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****")))," Page in SuperAGI\u2019s Dashboard and select \u201c",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****"))),"Image Generation Toolkit\u201d",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("strong",{parentName:"strong"},(0,r.kt)("strong",{parentName:"strong"},"****")))," ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/0d02b35a-f7ca-4375-a71b-50dc8dc8cbb0",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Once you\u2019ve clicked Image Generation Toolkit, it will open a page asking you for the API Key and the Model Engine. You can enter the generated API key from Dream Studio here")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Phoenix2809/SuperAGI/assets/133874957/5766bd80-0085-4467-b7bf-e6c0d1eddda6",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If you would like to go in-depth with the model of Stable Diffusion, you can choose between the following engine IDs: ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-v1'"),(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-v1-5'"),(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-512-v2-0'"),(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-768-v2-0'"),(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-512-v2-1'"),(0,r.kt)("li",{parentName:"ul"},"\u2019stable-diffusion-768-v2-1'"),(0,r.kt)("li",{parentName:"ul"},"'stable-diffusion-xl-beta-v2-2-2\u2019")),(0,r.kt)("p",null,"You have now successfully configured Stable Diffusion with SuperAGI!"))}c.isMDXComponent=!0}}]);