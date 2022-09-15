"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8588],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"\u52a0\u5bc6 HTTP \u901a\u4fe1",description:"\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 SSL \u8bc1\u4e66\u6216 TLS \u8bc1\u4e66",weight:3060},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",title:"\u52a0\u5bc6 HTTP \u901a\u4fe1",description:"\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 SSL \u8bc1\u4e66\u6216 TLS \u8bc1\u4e66",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u52a0\u5bc6 HTTP \u901a\u4fe1",description:"\u4e86\u89e3\u5982\u4f55\u6dfb\u52a0 SSL \u8bc1\u4e66\u6216 TLS \u8bc1\u4e66",weight:3060},sidebar:"tutorialSidebar",previous:{title:"Services",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},next:{title:"ConfigMap",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"}},c={},p=[{value:"1. \u521b\u5efa\u4e00\u4e2a\u5bc6\u6587",id:"1-\u521b\u5efa\u4e00\u4e2a\u5bc6\u6587",level:3},{value:"2. \u5c06\u5bc6\u6587\u6dfb\u52a0\u5230 Ingress",id:"2-\u5c06\u5bc6\u6587\u6dfb\u52a0\u5230-ingress",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Rancher/Kubernetes \u4e2d\u521b\u5efa Ingress \u65f6\uff0c\u4f60\u5fc5\u987b\u63d0\u4f9b\u5305\u542b TLS \u79c1\u94a5\u548c\u8bc1\u4e66\u7684\u5bc6\u6587\uff0c\u7528\u4e8e\u52a0\u5bc6\u548c\u89e3\u5bc6\u901a\u8fc7 Ingress \u7684\u901a\u4fe1\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u8bc1\u4e66\u6dfb\u52a0\u5230 Ingress Deployment \u6765\u8ba9 Ingress \u4f7f\u7528\u8bc1\u4e66\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f60\u5fc5\u987b\u5177\u6709\u53ef\u4e0a\u4f20\u7684 TLS \u79c1\u94a5\u548c\u8bc1\u4e66\u3002"))),(0,o.kt)("h3",{id:"1-\u521b\u5efa\u4e00\u4e2a\u5bc6\u6587"},"1. \u521b\u5efa\u4e00\u4e2a\u5bc6\u6587"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u90e8\u7f72 Ingress \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u66f4\u591a\u8d44\u6e90 > \u6838\u5fc3 > \u5bc6\u6587"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"TLS \u8bc1\u4e66"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5bc6\u6587\u7684\u540d\u79f0\u3002\u8bf7\u6ce8\u610f\uff0c\u5bc6\u6587\u7684\u540d\u79f0\u5fc5\u987b\u4e0e\u9879\u76ee/\u5de5\u4f5c\u7a7a\u95f4\u4e2d\u7684\u5176\u4ed6\u8bc1\u4e66\u3001\u955c\u50cf\u4ed3\u5e93\u548c\u5bc6\u6587\u4e0d\u4e00\u6837\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u79c1\u94a5"),"\u5b57\u6bb5\u4e2d\uff0c\u5c06\u8bc1\u4e66\u7684\u79c1\u94a5\u590d\u5236\u5e76\u7c98\u8d34\u5230\u6587\u672c\u6846\u4e2d\uff08\u5305\u62ec\u6807\u5934\u548c\u9875\u811a\uff09\uff0c\u6216\u8005\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u9009\u62e9\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u79c1\u94a5\u3002\u5982\u679c\u53ef\u80fd\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,o.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u4ee5\u51cf\u5c11\u51fa\u9519\u7684\u53ef\u80fd\u6027\u3002\u8bf7\u6ce8\u610f\uff0c\u79c1\u94a5\u6587\u4ef6\u7684\u6269\u5c55\u540d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},".key"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u8bc1\u4e66"),"\u5b57\u6bb5\u4e2d\uff0c\u5c06\u4f60\u7684\u8bc1\u4e66\u590d\u5236\u5e76\u7c98\u8d34\u5230\u6587\u672c\u6846\u4e2d\uff08\u5305\u62ec\u6807\u5934\u548c\u9875\u811a\uff09\uff0c\u6216\u8005\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u9009\u62e9\u6587\u4ef6\u7cfb\u7edf\u4e0a\u7684\u8bc1\u4e66\u6587\u4ef6\u3002\u5982\u679c\u53ef\u80fd\uff0c\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,o.kt)("strong",{parentName:"li"},"\u4ece\u6587\u4ef6\u8bfb\u53d6"),"\u4ee5\u51cf\u5c11\u51fa\u9519\u7684\u53ef\u80fd\u6027\u3002\u8bf7\u6ce8\u610f\uff0c\u8bc1\u4e66\u6587\u4ef6\u7684\u6269\u5c55\u540d\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},".crt"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("h3",{id:"2-\u5c06\u5bc6\u6587\u6dfb\u52a0\u5230-ingress"},"2. \u5c06\u5bc6\u6587\u6dfb\u52a0\u5230 Ingress"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u90e8\u7f72 Ingress \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0 > Ingress"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9 Ingress \u7684",(0,o.kt)("strong",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165 Ingress \u7684",(0,o.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u8bc1\u4e66"),"\u9009\u9879\u5361\u4e2d\uff0c\u9009\u62e9\u5305\u542b\u4f60\u7684\u8bc1\u4e66\u548c\u79c1\u94a5\u7684\u5bc6\u6587\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,o.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5728\u8be5\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u52a8 Ingress \u65f6\u6dfb\u52a0\u8bc1\u4e66\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"\u6dfb\u52a0 Ingress"),"\u3002"))}d.isMDXComponent=!0}}]);