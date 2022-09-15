"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[11911],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",weight:2},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",id:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",description:"\u4f60\u9700\u8981\u5728\u9700\u8981\u7531 Istio \u8ddf\u8e2a\u6216\u63a7\u5236\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u624b\u52a8\u542f\u7528 Istio\u3002\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio \u65f6\uff0cEnvoy sidecar \u4ee3\u7406\u5c06\u81ea\u52a8\u6ce8\u5165\u5230\u90e8\u7f72\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",weight:2},sidebar:"tutorialSidebar",previous:{title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},next:{title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",permalink:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"}},d={},p=[{value:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8 Istio Sidecar \u6ce8\u5165",id:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8-istio-sidecar-\u6ce8\u5165",level:3},{value:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684 Istio Sidecar \u6ce8\u5165",id:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684-istio-sidecar-\u6ce8\u5165",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u5728\u9700\u8981\u7531 Istio \u8ddf\u8e2a\u6216\u63a7\u5236\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u624b\u52a8\u542f\u7528 Istio\u3002\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio \u65f6\uff0cEnvoy sidecar \u4ee3\u7406\u5c06\u81ea\u52a8\u6ce8\u5165\u5230\u90e8\u7f72\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002"),(0,r.kt)("p",null,"\u6b64\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u53ea\u4f1a\u5f71\u54cd\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u3002\u4e4b\u524d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u91cd\u65b0\u90e8\u7f72\u624d\u80fd\u4f7f\u7528 sidecar \u81ea\u52a8\u6ce8\u5165\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8981\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio\uff0c\u96c6\u7fa4\u5fc5\u987b\u5b89\u88c5 Istio\u3002"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528 Istio \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5355\u51fb\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5728\u547d\u540d\u7a7a\u95f4\u8be6\u60c5\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," \u6807\u7b7e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u5728\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u5c06\u6ce8\u5165 Istio sidecar\u3002"),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8-istio-sidecar-\u6ce8\u5165"},"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8 Istio Sidecar \u6ce8\u5165"),(0,r.kt)("p",null,"\u8981\u9a8c\u8bc1 Istio \u662f\u5426\u5df2\u542f\u7528\uff0c\u8bf7\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u90e8\u7f72\u4e00\u4e2a hello-world \u5de5\u4f5c\u8d1f\u8f7d\u3002\u8f6c\u5230\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u5355\u51fb pod \u540d\u79f0\u3002\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5bb9\u5668"),"\u4e2d\uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-proxy")," \u5bb9\u5668\u3002"),(0,r.kt)("h3",{id:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684-istio-sidecar-\u6ce8\u5165"},"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684 Istio Sidecar \u6ce8\u5165"),(0,r.kt)("p",null,"\u8981\u6392\u9664 Istio sidecar \u88ab\u6ce8\u5165\u67d0\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8bf7\u5728\u5de5\u4f5c\u8d1f\u8f7d\u4e0a\u4f7f\u7528\u4ee5\u4e0b\u6ce8\u91ca\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sidecar.istio.io/inject: \u201cfalse\u201d\n")),(0,r.kt)("p",null,"\u8981\u5c06\u6ce8\u91ca\u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u4e0d\u9700\u8981 sidecar \u7684\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u4ee5 yaml \u7f16\u8f91\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u952e\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"sidecar.istio.io/inject: false")," \u6dfb\u52a0\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6ce8\u91ca\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aIstio sidecar \u4e0d\u4f1a\u88ab\u6ce8\u5165\u5230\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9047\u5230\u90e8\u7f72\u7684 job \u672a\u5b8c\u6210\u7684\u95ee\u9898\uff0c\u5219\u9700\u8981\u4f7f\u7528\u63d0\u4f9b\u7684\u6b65\u9aa4\u5c06\u6b64\u6ce8\u91ca\u6dfb\u52a0\u5230 pod \u4e2d\u3002\u7531\u4e8e Istio Sidecars \u4f1a\u4e00\u76f4\u8fd0\u884c\uff0c\u56e0\u6b64\u5373\u4f7f\u4efb\u52a1\u5b8c\u6210\u4e86\uff0c\u4e5f\u4e0d\u80fd\u8ba4\u4e3a Job \u5df2\u5b8c\u6210\u3002"))),(0,r.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"\u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72")))}m.isMDXComponent=!0}}]);