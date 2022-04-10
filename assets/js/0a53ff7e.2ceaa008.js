"use strict";(self.webpackChunknick_blog=self.webpackChunknick_blog||[]).push([[729],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),g=c(t),d=a,f=g["".concat(i,".").concat(d)]||g[d]||s[d]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4616:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],u={sidebar_position:2,title:"Angular"},i=void 0,c={unversionedId:"Typescript/Angular",id:"Typescript/Angular",title:"Angular",description:"Angular: \u5728\u6a19\u7c64\u4e0a\u9762\u7684\u6280\u5de7",source:"@site/docs/Typescript/Angular.md",sourceDirName:"Typescript",slug:"/Typescript/Angular",permalink:"/docs/Typescript/Angular",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Typescript/Angular.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Angular"},sidebar:"tutorialSidebar",previous:{title:"\u57fa\u672c\u6280\u5de7",permalink:"/docs/Typescript/basic"}},p={},s=[{value:"&gt; Angular: #\u5728\u6a19\u7c64\u4e0a\u9762\u7684\u6280\u5de7",id:"-angular-\u5728\u6a19\u7c64\u4e0a\u9762\u7684\u6280\u5de7",level:3},{value:"&gt; Angular: <code>ng-container</code>, <code>ng-template</code>\u4f7f\u7528\u6280\u5de7",id:"-angular-ng-container-ng-template\u4f7f\u7528\u6280\u5de7",level:3},{value:"&gt; Angular: \u5171\u7528component\u6982\u5ff5",id:"-angular-\u5171\u7528component\u6982\u5ff5",level:3},{value:"&gt; Angular: pipe\u4f7f\u7528\u6280\u5de7",id:"-angular-pipe\u4f7f\u7528\u6280\u5de7",level:3},{value:"&gt; Angular: Error handle",id:"-angular-error-handle",level:3},{value:"&gt; Angular: @Input, @Output\u7528\u6cd5",id:"-angular-input-output\u7528\u6cd5",level:3}],g={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"-angular-\u5728\u6a19\u7c64\u4e0a\u9762\u7684\u6280\u5de7"},"> Angular: #\u5728\u6a19\u7c64\u4e0a\u9762\u7684\u6280\u5de7"),(0,o.kt)("h3",{id:"-angular-ng-container-ng-template\u4f7f\u7528\u6280\u5de7"},"> Angular: ",(0,o.kt)("inlineCode",{parentName:"h3"},"ng-container"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"ng-template"),"\u4f7f\u7528\u6280\u5de7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* \u6a21\u7d44\u5316\u7684\u4ecb\u7d39\uff08\u5305\u542b\u50b3\u53c3\u6578\u9032\u53bb\uff09\n* ng else\n")),(0,o.kt)("h3",{id:"-angular-\u5171\u7528component\u6982\u5ff5"},"> Angular: \u5171\u7528component\u6982\u5ff5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* @input, @Output\n")),(0,o.kt)("h3",{id:"-angular-pipe\u4f7f\u7528\u6280\u5de7"},"> Angular: pipe\u4f7f\u7528\u6280\u5de7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5305\u542bcodeTable\u7684\u4f7f\u7528, default\u7684\u90a3\u4e9b\nng value accessor\u7684\u90a3\u500b\n")),(0,o.kt)("h3",{id:"-angular-error-handle"},"> Angular: Error handle"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Angular null handle \u53ef\u4ee5\u7528global\uff0c\u7136\u5f8c\u7528console error\u53bb\u63a5error\n* \u597d\u8655\u662f\u6709\u4e09\u500berror\u5c31\u6703\u90fd\u986f\u793a\uff0c\u4e0d\u6703\u88ab\u7b2c\u4e00\u500b\u5361\u6b7b\uff0c\u5269\u4e0b\u5c31\u4e0d\u986f\u793a\n* \u56e0\u70ba\u6709\u4e9b\u6642\u5019\u958b\u767c\u4e0a\uff0c\u6709\u4e9b\u4f8b\u5b50\u672c\u4f86\u8cc7\u6599\u5c31\u6703\u4e0d\u9f4a\u5168\uff0c\u6709\u53ef\u80fd\u6703\u5ffd\u7565\u4ed6\uff0c\u4f46\u662f\u6703\u9020\u6210\u5176\u4ed6\u5730\u65b9\u4e5f\u770b\u4e0d\u5230error\n* ?.\u7684\u4f7f\u7528\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-htmlmixed="},' <th *ngIf="this.status  this.caseStatus?.OP_RECHECK_EDITING?.code"></th>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"this.caseStatus\u662f\u7528\u975e\u540c\u6b65\u53bb\u53d6\u5f97\u7684\u72c0\u614b\uff0c\u4e00\u958b\u59cbrender\u6642\uff0c\u9084\u6c92\u6709\u76f4\uff0c\u6240\u4ee5\u5148\u7528?.\u4f86handle error\uff0c\u7b49\u6709\u503c\u5f97\u6642\u5019\u4ed6\u6703\u81ea\u52d5\u66f4\u65b0")),(0,o.kt)("h3",{id:"-angular-input-output\u7528\u6cd5"},"> Angular: @Input, @Output\u7528\u6cd5"))}d.isMDXComponent=!0}}]);