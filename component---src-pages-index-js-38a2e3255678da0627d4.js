(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return V}));var r=n("q1tI"),o=n.n(r),i=n("Zttt"),a=n("wtQ5"),s=(n("VRzm"),n("Btvt"),n("o0o1")),c=n.n(s),l=(n("ls82"),n("Vd3H"),n("Z2Ku"),n("L9s1"),n("vOnD")),d=n("VuKL"),u=n("DSs8"),p=n("b6Qr"),m=function(t){var e=t.title,n=t.selectTag,r=t.selectedTag,i=(t.unmountTagsAnimation,function(){n(e)});return p.isMobile?o.a.createElement(h,{className:"tag-horizontal",onClick:i,selected:r===e},e):o.a.createElement(f,{className:"tag-vertical",onClick:i,selected:r===e},e)},f=l.d.div.withConfig({displayName:"Tag__StyledTagVertical",componentId:"sc-1rro27m-0"})(["cursor:pointer;padding:0.07rem 0;margin:0.6rem 0;padding-left:0.5rem;border-left-width:3px;border-left-style:solid;border-left-color:",";font-weight:",";position:sticky;transition:none;"],(function(t){return t.selected?""+u.b.mintColor:"transparent"}),(function(t){return t.selected?"bold":"400"})),h=l.d.div.withConfig({displayName:"Tag__StyledTagHorizontal",componentId:"sc-1rro27m-1"})(["position:relative;cursor:pointer;padding:0.5rem 0.9rem;margin:0 0.3rem;font-size:0.9rem;background:",";border-radius:15px;font-weight:",";white-space:nowrap;transition:none;"],(function(t){return!t.selected&&"none !important"}),(function(t){return t.selected?"bold":"400"})),g=n("IP2g"),v=n("wHSu"),y="All";var w=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).detectSticky=function(){var t=n.state,e=t.sticky,r=t.topPos-window.pageYOffset,o=r<=0;o&&r>=-55?e.classList.add("moveToBotAnimate"):o?e.classList.add("moveToBot"):n.unmountTagsAnimation()},n.unmountTagsAnimation=function(){var t=n.tagRef.current;t.classList.remove("moveToBot"),t.classList.remove("moveToBotAnimate")},n.handleScrollX=function(){if(n.state.sticky&&n.state.horizontalScroll){var t=n.state.sticky.clientWidth;if(n.state.horizontalScroll.scrollWidth>t){var e=n.state.horizontalScroll.scrollLeft;sessionStorage.setItem("scrollX_",e)}}},n.tagRef=o.a.createRef(),n.state={sticky:void 0,topPos:void 0,showSwipeIcon:!1},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){if(p.isMobile){this.setState({sticky:this.tagRef.current,topPos:this.tagRef.current.getBoundingClientRect().y+window.pageYOffset,horizontalScroll:this.tagRef.current.querySelector(".tag-list-inner")});var t=this.tagRef.current.clientWidth,e=this.tagRef.current.querySelector(".tag-list-inner"),n=e.scrollWidth,r=sessionStorage.getItem("scrollX_")||0;e.scrollLeft=r;var o=parseInt(localStorage.getItem("swiped_"))||0;n>t&&o<2&&!sessionStorage.getItem("swiped__")&&(this.setState({showSwipeIcon:!0}),localStorage.setItem("swiped_",o+1),sessionStorage.setItem("swiped__",!0)),window.addEventListener("scroll",this.detectSticky)}},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.detectSticky)},i.render=function(){var t=this.props,e=t.tags,n=t.selectTag,r=t.selectedTag,i=o.a.createElement("div",{className:"tag-list",onScroll:this.handleScrollX},p.isMobile&&this.state.showSwipeIcon&&o.a.createElement(S,{className:"icon-hand-ptr",icon:v.e}),o.a.createElement("div",{className:"tag-list-inner"},o.a.createElement(m,{title:y,selectTag:n,selectedTag:r}),e.map((function(t,e){return o.a.createElement(m,{key:e,title:t,selectTag:n,selectedTag:r})}))));return p.isMobile?o.a.createElement(b,{className:"tags-horizontal",ref:this.tagRef},i):o.a.createElement(x,{className:"tags-vertical"},i)},r}(o.a.Component),x=l.d.div.withConfig({displayName:"Tags__StyledTagsVertical",componentId:"sc-1cr6zj8-0"})(["margin-top:0.5rem;background:none !important;.tag-list{position:sticky;top:50px;z-index:1;display:flex;flex-direction:column;justify-content:flex-start;padding:0.5rem;&-inner{width:120px;overflow-x:auto;}}@media (max-width:500px){.tag-list{&-inner{width:80px;font-size:0.75rem;}}}"]),b=l.d.div.withConfig({displayName:"Tags__StyledTagsHorizontal",componentId:"sc-1cr6zj8-1"})(["position:static;z-index:1;display:flex;align-items:center;padding:1.5rem 0.2rem;width:100%;height:46px;translate:transform 500ms ease-in;.tag-list{position:relative;width:100%;&-inner{display:flex;flex-direction:row;padding:1.3rem 0rem;width:inherit;overflow-x:auto;::-webkit-scrollbar{width:0px;display:none;}}}"]),E=Object(l.e)(["0%{opacity:1;}50%{opacity:1;right:35%;transform:translateX(-35%);bottom:5px;}100%{opacity:0;right:35%;transform:translateX(-35%);bottom:5px;}"]),S=Object(l.d)(g.a).withConfig({displayName:"Tags__StyledFA",componentId:"sc-1cr6zj8-2"})(["position:absolute;bottom:6px;right:20%;transform:translateX(-20%);animation:"," 2000ms forwards 1500ms ease-in;"],E),_=n("Wbzz"),T=n("xRap"),L=n("S+kE"),k=n.n(L),C=function(t){var e=t.id,n=t.title,r=(t.date,t.path),i=t.excerpt,a=t.timeToRead;return o.a.createElement(o.a.Fragment,null,o.a.createElement(_.Link,{to:r},o.a.createElement(I,{key:e},o.a.createElement("h3",null,n),k.a.showTimeToRead&&o.a.createElement("span",null,o.a.createElement(g.a,{className:"icon-clock",icon:v.d,size:"xs"}),a," minute read"),o.a.createElement("p",null,i))))},I=l.d.div.withConfig({displayName:"PostCard__StyledPostCard",componentId:"bfopw6-0"})(["cursor:pointer;padding:1.5rem 1rem;transition:none;h3{font-weight:500;}&:hover{background:",";}span{font-size:0.8rem;.icon-clock{margin:0 0.1rem;}}p{margin-top:0.5rem;color:",";}@media (max-width:500px){padding:1.5rem 1.25rem;h3{font-size:1.15rem;}&:hover{background:transparent;}}"],(function(){return Object(T.a)(u.b.bgSubColorLight,u.b.darkerColor)}),(function(){return Object(T.a)(u.b.fontSubColorLight,u.b.fontSubColorDark)})),N=function(t){var e=t.posts.filter((function(t){return"/about/"!==t.node.fields.slug&&"/__do-not-remove/"!==t.node.fields.slug}));return o.a.createElement("div",{className:"posts-list"},e.map((function(t){return o.a.createElement(C,{key:t.node.id,title:t.node.frontmatter.title,date:t.node.frontmatter.date,path:t.node.fields.slug,excerpt:t.node.frontmatter.excerpt?t.node.frontmatter.excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})})))},z=Object(l.e)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),O=l.d.div.withConfig({displayName:"Loader__StyledLoader",componentId:"sc-8skdge-0"})(["display:inline-block;position:relative;width:64px;height:64px;& div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid ",";border-radius:50%;border-color:"," transparent transparent transparent;animation:"," 1200ms cubic-bezier(0.5,0,0.5,1) infinite;}& div:nth-child(1){animation-delay:-450ms;}& div:nth-child(2){animation-delay:-300ms;}& div:nth-child(3){animation-delay:-150ms;}"],u.b.lightGreyColor,u.b.lightGreyColor,z),j=function(){return o.a.createElement(O,null,o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))},P=n("D98b");function M(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function R(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){M(i,r,o,a,s,"next",t)}function s(t){M(i,r,o,a,s,"throw",t)}a(void 0)}))}}var A=function(t){var e,n;function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={selectedTag:y,filteredPosts:[],tags:[]},e.checkTag=function(t){if(!t)return!1;if(t===y)return!0;for(var n=e.props.posts,r=0;r<n.length;r++){var o=n[r].node.frontmatter.tags;if(o&&o.length>0&&o.includes(t))return!0}return!1},e.filterTags=function(){var t=e.props.posts,n={},r=[];t.filter((function(t){return"/about/"!==t.node.fields.slug&&"/__do-not-remove/"!==t.node.fields.slug})).forEach((function(t){var e=t.node.frontmatter.tags;e||(t.node.frontmatter.tags=["Uncategorized"],e=["Uncategorized"]),e.forEach((function(t){n[t]?n[t]=n[t]+1:(n[t]=1,r.push(t))}))})),r.sort((function(t,e){return n[e]-n[t]})),e.setState({tags:r})},e.filterPosts=function(){var t=e.props.posts.filter((function(t,n){var r=t.node;return e.state.selectedTag===y||r.frontmatter.tags&&r.frontmatter.tags.includes(e.state.selectedTag)}));e.setState({filteredPosts:t})},e.handleSelectTag=function(){var t=R(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return sessionStorage.setItem("curTag",n),t.next=3,e.setState({selectedTag:n});case 3:return t.next=5,e.filterPosts();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){var t=this,e=sessionStorage.getItem("curTag")||y;this.checkTag(e)||(e=y),this.setState({selectedTag:e},(function(){t.filterPosts(),t.filterTags()}))},i.render=function(){return o.a.createElement(B,{className:"main-card"},o.a.createElement(X,{className:"switch-container"},o.a.createElement(P.a,null)),o.a.createElement(F,{className:"sub-main"},o.a.createElement(H,null,o.a.createElement(d.a,{home:!0}),this.state.filteredPosts.length>0?o.a.createElement(G,null,o.a.createElement(w,{selectedTag:this.state.selectedTag,selectTag:this.handleSelectTag,tags:this.state.tags}),o.a.createElement(N,{posts:this.state.filteredPosts.slice(0,this.props.loads)})):o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(j,null)))))},r}(r.Component),G=l.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-0"})([""]);G=l.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-1"})(["position:relative;display:flex;flex-direction:column;.moveToBot{position:sticky;top:0;padding-top:2.5rem;padding-bottom:2.5rem;.tag-list{.tag-horizontal{font-size:0.85rem;}}}.moveToBotAnimate{position:sticky;top:0;transition:padding 300ms ease-in;padding-top:2.5rem;padding-bottom:2.5rem;.tag-list{.tag-horizontal{transition:font-size 300ms ease-in;font-size:0.85rem;}}}"]),p.isMobile||(G=l.d.div.withConfig({displayName:"MainCard__StyledTagsPosts",componentId:"sc-18n6ohm-2"})(["position:relative;display:grid;grid-template-columns:0.25fr auto;padding:0.5rem 1.5rem 1.5rem 1.5rem;@media (max-width:500px){padding:0rem 1rem 1rem 1rem;}"]));var B=l.d.div.withConfig({displayName:"MainCard__StyledMainCard",componentId:"sc-18n6ohm-3"})(["position:relative;padding:0 1rem 1rem 1rem;@media (max-width:500px){padding:0;}"]),F=l.d.div.withConfig({displayName:"MainCard__StyledSubMain",componentId:"sc-18n6ohm-4"})(["position:relative;margin-top:3rem;border-radius:10px;@media (max-width:500px){margin-top:1rem;border-radius:0px;}"]),H=l.d.div.withConfig({displayName:"MainCard__StyledSubMainInner",componentId:"sc-18n6ohm-5"})([""]);p.isMobile||(H=l.d.div.withConfig({displayName:"MainCard__StyledSubMainInner",componentId:"sc-18n6ohm-6"})(["transform:translateY(-25px);"]));var X=l.d.div.withConfig({displayName:"MainCard__StyledSwitchContainer",componentId:"sc-18n6ohm-7"})(["position:absolute;text-align:end;margin:0 0.4rem;top:12px;right:25px;z-index:2;@media (max-width:500px){right:10px;}"]),V="3245709421";e.default=function(t){var e=t.data,n=Object(r.useState)(void 0),s=n[0],c=n[1],l=e.allMdx.edges;Object(r.useEffect)((function(){var t=sessionStorage.getItem("curLoad")||15;c(parseInt(t))}),[]),Object(r.useEffect)((function(){return window.addEventListener("scroll",d),function(){window.removeEventListener("scroll",d)}}));var d=function(){var t=document.querySelector("div.posts-list > a:last-child"),e=t.offsetTop+t.clientHeight;window.pageYOffset+window.innerHeight>e&&l.length>s&&c((function(t){return sessionStorage.setItem("curLoad",t+15),t+15}))};return o.a.createElement(i.a,null,o.a.createElement(a.a,{title:"Home"}),o.a.createElement(A,{posts:l,loads:s}))}},ls82:function(t,e,n){n("rGqo"),n("yt8O"),n("a1Th"),n("h7Nl"),n("VRzm"),n("Btvt"),n("/SS/"),n("f3/d"),n("8+KV"),n("hHhE"),n("rE2o"),n("ioFf");var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var d=c(t,e,n);if("normal"===d.type){if(r=n.done?"completed":"suspendedYield",d.arg===l)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(r="completed",n.method="throw",n.arg=d.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var l={};function d(){}function u(){}function p(){}var m={};m[o]=function(){return this};var f=Object.getPrototypeOf,h=f&&f(f(S([])));h&&h!==e&&n.call(h,o)&&(m=h);var g=p.prototype=d.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var l=c(t[o],t,i);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(u).then((function(t){d.value=t,a(d)}),(function(t){return r("throw",t,a,s)}))}s(l.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return u.prototype=g.constructor=p,p.constructor=u,p[a]=u.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new y(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},v(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},o0o1:function(t,e,n){t.exports=n("ls82")}}]);
//# sourceMappingURL=component---src-pages-index-js-38a2e3255678da0627d4.js.map