(function(e){function t(t){for(var r,n,l=t[0],o=t[1],u=t[2],p=0,d=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);i&&i(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(r=!1)}r&&(c.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={app:0},c=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/unsplash/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"173a":function(e,t,a){},"1af3":function(e,t,a){"use strict";a("6e2c")},"2c41":function(e,t,a){},"4a21":function(e,t,a){"use strict";a("a1f8")},"4c6f":function(e,t,a){"use strict";a("2c41")},"6e2c":function(e,t,a){},"86f4":function(e,t,a){},"90e9":function(e,t,a){"use strict";a("86f4")},"9ac5":function(e,t,a){},a1f8:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);var r=a("7a23");const s=e=>(Object(r["r"])("data-v-7a8437c6"),e=e(),Object(r["q"])(),e),c=["onSubmit"],n=["placeholder"],l=s(()=>Object(r["g"])("svg",{class:"base-search__icon",width:"32",height:"32",viewBox:"0 0 24 24","aria-hidden":"false"},[Object(r["g"])("desc",{lang:"en-US"},"An X shape"),Object(r["g"])("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"})],-1)),o=[l],u=s(()=>Object(r["g"])("button",{class:"base-search__submit primary-btn","aria-label":"Search",type:"submit"},[Object(r["g"])("svg",{class:"base-search__icon",width:"32",height:"32",viewBox:"0 0 24 24","aria-hidden":"false"},[Object(r["g"])("desc",{lang:"en-US"},"A magnifying glass"),Object(r["g"])("path",{d:"M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"})])],-1));var i=Object(r["j"])({__name:"BaseSearch",props:{placeholder:{default:"Type in a value"},modelValue:{default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=e,s=Object(r["s"])(a.modelValue),l=Object(r["s"])(null),i=()=>{t("update:modelValue",s.value)},p=()=>{var e;null===(e=l.value)||void 0===e||e.focus(),s.value=""};return Object(r["y"])(()=>a.modelValue,e=>{s.value=e}),(e,t)=>(Object(r["p"])(),Object(r["f"])("form",{class:"base-search primary-border",role:"search",onSubmit:Object(r["B"])(i,["prevent"])},[Object(r["A"])(Object(r["g"])("input",{ref_key:"fieldEl",ref:l,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),class:"base-search__input field",type:"search",autocapitalize:"none",autocomplete:"off",spellcheck:"false",placeholder:e.placeholder},null,8,n),[[r["x"],s.value,void 0,{trim:!0}]]),s.value.length?(Object(r["p"])(),Object(r["f"])("button",{key:0,class:"base-search__reset transparent-btn","aria-label":"Clear",type:"reset",onClick:p},o)):Object(r["e"])("",!0),u],40,c))}}),p=(a("90e9"),a("6b0d")),d=a.n(p);const b=d()(i,[["__scopeId","data-v-7a8437c6"]]);var O=b,f=(a("14d9"),a("d9e2"),a("bc3a")),j=a.n(f);const v=JSON.parse('"https://api.unsplash.com/"'),g=JSON.parse('"B8oEDDuYg5MSeSgEzL7BnqTg5PuWIbqSrhC7qnCwiAk"'),h=JSON.parse("30");let m;j.a.interceptors.response.use(e=>e,e=>(console.error(e),Promise.reject(e)));var _={search(e="",t=1){const a=new AbortController,{signal:r}=a;m&&m.abort(),m=a;const s=j.a.get(v+"/search/photos",{signal:r,params:{query:e,page:t,per_page:h},headers:{Authorization:"Client-ID "+g}});return s.then(e=>e.data)}};class y{constructor({id:e,description:t=null,altDescription:a=null,url:r="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",username:s="",userUrl:c=null}){this.id=e,this.description=null!==t&&void 0!==t?t:"",this.altDescription=null!==a&&void 0!==a?a:"An image",this.url=r,this.username=s,this.userUrl=null!==c&&void 0!==c?c:""}}function w({id:e,description:t,alt_description:a,user:r,urls:s}){return new y({id:e,description:t,altDescription:a,url:s.small,username:r.username,userUrl:r.portfolio_url})}const A=Object(r["s"])(""),S=Object(r["s"])(null),k=Object(r["s"])(0),x=Object(r["s"])(1),I=Object(r["s"])(!1),B=Object(r["s"])(""),P=Object(r["b"])(()=>null!==S.value);var C=function(e){e&&(A.value=e);const t=e=>{k.value>1?e.forEach(e=>{var t;null===(t=S.value)||void 0===t||t.push(w(e))}):S.value=e.map(e=>w(e))},a=async()=>{let e;if(A.value.length){I.value=!0;try{e=await _.search(A.value,k.value),B.value="",x.value=e.total_pages,t(e.results)}catch(a){a instanceof Error&&(B.value=a.message,S.value=null)}finally{I.value=!1}}else S.value=null},r=()=>{k.value=1,x.value=1,a()},s=()=>{k.value!==x.value&&(k.value+=1,a())};return{firstPage:r,nextPage:s,query:A,images:S,error:B,hasImages:P,isLoading:I}};const M=Object(r["h"])('<header data-v-6d7659c9><h1 class="app-header__title" data-v-6d7659c9><span class="primary-text" data-v-6d7659c9>Splashed</span>  <span class="primary-outlined" data-v-6d7659c9>Unsplash</span></h1><p class="app-header__source" data-v-6d7659c9> Check the <a class="primary-link" target="_blank" href="https://github.com/hqcasanova/unsplash" data-v-6d7659c9> source here </a></p></header>',1),q={class:"app-header__nav app-header__nav--sticky"};var z=Object(r["j"])({__name:"AppHeader",props:{initQuery:{default:""}},setup(e){const t=e,{firstPage:a,query:s,error:c,isLoading:n}=C(t.initQuery);return Object(r["y"])(s,a),(e,t)=>(Object(r["p"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",{class:Object(r["l"])(["app-header__progress",{"app-header__progress--loading":Object(r["w"])(n)}])},null,2),M,Object(r["g"])("nav",q,[Object(r["i"])(O,{modelValue:Object(r["w"])(s),"onUpdate:modelValue":[t[0]||(t[0]=e=>Object(r["k"])(s)?s.value=e:null),t[1]||(t[1]=e=>Object(r["w"])(c)&&Object(r["w"])(a)())],class:"app-header__search rounded white-bg",placeholder:"Search for photos..."},null,8,["modelValue"])])],64))}});a("4c6f");const U=d()(z,[["__scopeId","data-v-6d7659c9"]]);var D=U;const E={class:"base-image"},V=["aria-label"],T={class:"base-image__caption padded"};var J=Object(r["j"])({__name:"BaseImage",props:{url:{},alt:{},description:{},username:{},userUrl:{}},setup(e){const t=e,a=Object(r["b"])(()=>t.description.length<t.alt.length?t.description||t.alt:t.alt||t.description);return(e,t)=>(Object(r["p"])(),Object(r["f"])("figure",E,[Object(r["g"])("div",{class:"base-image__container",role:"img","aria-label":e.alt,style:Object(r["m"])({backgroundImage:`url(${e.url})`})},null,12,V),Object(r["g"])("figcaption",T,Object(r["v"])(a.value),1)]))}});a("fd73");const N=d()(J,[["__scopeId","data-v-64daf560"]]);var L=N;const Q={class:"image-grid"},R={key:0};var G=Object(r["j"])({__name:"ImageGrid",props:{images:{},emptyMessage:{default:"No images"}},setup(e){const t=e,a=Object(r["b"])(()=>0===t.images.length);return(e,t)=>(Object(r["p"])(),Object(r["f"])("div",Q,[a.value?(Object(r["p"])(),Object(r["f"])("span",R,Object(r["v"])(e.emptyMessage),1)):(Object(r["p"])(!0),Object(r["f"])(r["a"],{key:1},Object(r["t"])(e.images,e=>(Object(r["p"])(),Object(r["d"])(L,{key:e.id,class:"primary-bg",alt:e.altDescription,description:e.description,url:e.url,username:e.username,"user-url":e.userUrl},null,8,["alt","description","url","username","user-url"]))),128))]))}});a("4a21");const H=d()(G,[["__scopeId","data-v-f55d78de"]]);var $=H,W=Object(r["j"])({__name:"DetectBottom",props:{root:{default:null},rootMargin:{default:""}},emits:["bottom"],setup(e,{emit:t}){const a=e,s=Object(r["s"])(null),c=Object(r["s"])(null);return Object(r["n"])(()=>{s.value=new IntersectionObserver(e=>{e[0].isIntersecting&&t("bottom")},a),s.value.observe(c.value)}),Object(r["o"])(()=>{var e;null===(e=s.value)||void 0===e||e.disconnect()}),(e,t)=>(Object(r["p"])(),Object(r["f"])(r["a"],null,[Object(r["u"])(e.$slots,"default"),Object(r["g"])("div",{ref_key:"bottomEl",ref:c},null,512)],64))}});const X=W;var Y=X;const Z=e=>(Object(r["r"])("data-v-30d9f83e"),e=e(),Object(r["q"])(),e),F={class:"image-results"},K={key:1,class:"image-results__error"},ee=Z(()=>Object(r["g"])("svg",{xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 1000 1000",class:"danger-text",fill:"currentColor",stroke:"currentColor"},[Object(r["g"])("path",{d:"M500 10C229.8 10 10 229.8 10 500s219.8 490 490 490 490-219.8 490-490S770.2 10 500 10zm0 953.5c-255.6 0-463.5-208-463.5-463.5S244.4 36.5 500 36.5 963.5 244.4 963.5 500 755.6 963.5 500 963.5z"}),Object(r["g"])("path",{d:"M500 615.9c-13.6 0-24.6-11-24.6-24.6v-309c0-13.6 11-24.6 24.6-24.6 13.6 0 24.6 11 24.6 24.6v308.9c.1 13.6-11 24.7-24.6 24.7zM467 709.4c0 18.2 14.8 33 33 33s33-14.8 33-33-14.8-33-33-33-33 14.8-33 33z"})],-1)),te={key:2,class:"image-results__feedback"};var ae=Object(r["j"])({__name:"ImageResults",props:{infiniteThreshold:{default:JSON.parse('"800px"')}},setup(e){const{nextPage:t,query:a,images:s,error:c,hasImages:n}=C();return(e,l)=>(Object(r["p"])(),Object(r["f"])("section",F,[Object(r["w"])(n)?(Object(r["p"])(),Object(r["d"])(Y,{key:0,"root-margin":e.infiniteThreshold,onBottom:Object(r["w"])(t)},{default:Object(r["z"])(()=>[Object(r["i"])($,{class:"image-results__grid","empty-message":"No images found",images:Object(r["w"])(s)},null,8,["images"])]),_:1},8,["root-margin","onBottom"])):Object(r["w"])(c)&&Object(r["w"])(a).length?(Object(r["p"])(),Object(r["f"])("div",K,[ee,Object(r["g"])("p",null,Object(r["v"])(Object(r["w"])(c)),1)])):(Object(r["p"])(),Object(r["f"])("div",te," Type in above the name of an image "))]))}});a("1af3");const re=d()(ae,[["__scopeId","data-v-30d9f83e"]]);var se=re,ce=Object(r["j"])({__name:"App",setup(e){return(e,t)=>(Object(r["p"])(),Object(r["f"])(r["a"],null,[Object(r["i"])(D,{"init-query":""}),Object(r["i"])(se)],64))}});a("f42c");const ne=ce;var le=ne;Object(r["c"])(le).mount("#app")},f42c:function(e,t,a){"use strict";a("9ac5")},fd73:function(e,t,a){"use strict";a("173a")}});
//# sourceMappingURL=app.78ea6705.js.map