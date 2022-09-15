"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42207],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||l;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"\u56db\u5c42\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861",description:"Kubernetes \u652f\u6301\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u3002\u4e86\u89e3\u5bf9\u4e0d\u540c deployment \u7684\u652f\u6301",weight:3041},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",title:"\u56db\u5c42\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861",description:"Kubernetes \u652f\u6301\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u3002\u4e86\u89e3\u5bf9\u4e0d\u540c deployment \u7684\u652f\u6301",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u56db\u5c42\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861",description:"Kubernetes \u652f\u6301\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u3002\u4e86\u89e3\u5bf9\u4e0d\u540c deployment \u7684\u652f\u6301",weight:3041},sidebar:"tutorialSidebar",previous:{title:"\u5728 Rancher \u4e2d\u8bbe\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u548c Ingress Controller",permalink:"/zh/pages-for-subheaders/load-balancer-and-ingress-controller"},next:{title:"\u6dfb\u52a0 Ingress",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"}},d={},p=[{value:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668",id:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668",level:2},{value:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301",id:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301",level:3},{value:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668",id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668",level:2},{value:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301",id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301",level:3},{value:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e2d\u7684\u4e3b\u673a\u540d",id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e2d\u7684\u4e3b\u673a\u540d",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kubernetes \u652f\u6301\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u548c\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u3002"),(0,l.kt)("h2",{id:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668"},"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u6216\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668\uff09\u5c06\u6d41\u91cf\u8f6c\u53d1\u5230 Nodeport\u3002\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301\u8f6c\u53d1 HTTP \u548c TCP \u6d41\u91cf\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u7531\u5e95\u5c42\u4e91\u63d0\u4f9b\u5546\u652f\u6301\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u5728\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\u548c vSphere \u96c6\u7fa4\u4e0a\u90e8\u7f72 RKE \u96c6\u7fa4\uff0c\u5219\u4e0d\u652f\u6301\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u4f46\u662f\uff0c\u5355\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"\u5168\u5c40\u7ba1\u7406\u7684 config-map")," \u53ef\u7528\u4e8e\u5728 NGINX \u6216\u7b2c\u4e09\u65b9 Ingress \u4e0a\u516c\u5f00\u670d\u52a1\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u975e\u4e91\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u4f8b\u5982 ",(0,l.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/"},"MetalLB"),"\uff09\u6765\u90e8\u7f72\u96c6\u7fa4\u3002\u4f46\u662f\uff0c\u8be5\u7528\u4f8b\u6bd4\u4e91\u63d0\u4f9b\u5546\u652f\u6301\u7684\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u66f4\u9ad8\u7ea7\uff0c\u800c\u4e14\u4e0d\u53ef\u4ee5\u5728 Rancher \u6216 RKE \u4e2d\u914d\u7f6e\u3002"))),(0,l.kt)("h3",{id:"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301"},"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301"),(0,l.kt)("p",null,"\u4e0d\u540c\u5e95\u5c42\u4e91\u63d0\u4f9b\u5546\u5bf9\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u652f\u6301\u6709\u6240\u4e0d\u540c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4\u90e8\u7f72"),(0,l.kt)("th",{parentName:"tr",align:null},"\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 AWS \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 GCE \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 Azure \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EC2 \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 AWS \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DigitalOcean \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u9650\u7684 NGINX \u6216\u7b2c\u4e09\u65b9 Ingress","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vSphere \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u9650\u7684 NGINX \u6216\u7b2c\u4e09\u65b9 Ingress","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u4e3b\u673a\u4e0a\u7684 RKE",(0,l.kt)("br",null),"\uff08\u4f8b\u5982\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u9650\u7684 NGINX \u6216\u7b2c\u4e09\u65b9 Ingress","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7b2c\u4e09\u65b9 MetalLB"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d7\u9650\u7684 NGINX \u6216\u7b2c\u4e09\u65b9 Ingress","*")))),(0,l.kt)("p",null,"*"," \u53ef\u4ee5\u901a\u8fc7\u5355\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"\u5168\u5c40\u7ba1\u7406\u7684 config-map")," \u6765\u516c\u5f00\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668"},"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668"),(0,l.kt)("p",null,"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u6216 Ingress Controller\uff09\u652f\u6301\u57fa\u4e8e\u4e3b\u673a\u548c\u8def\u5f84\u7684\u8d1f\u8f7d\u5747\u8861\u548c SSL \u7ec8\u6b62\u3002\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4ec5\u8f6c\u53d1 HTTP \u548c HTTPS \u6d41\u91cf\uff0c\u56e0\u6b64\u5b83\u4eec\u4ec5\u4fa6\u542c\u7aef\u53e3 80 \u548c 443\u3002\u4e9a\u9a6c\u900a\u548c\u8c37\u6b4c\u7b49\u4e91\u63d0\u4f9b\u5546\u652f\u6301\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u3002\u6b64\u5916\uff0cRKE \u96c6\u7fa4\u90e8\u7f72\u4e86 Nginx Ingress Controller\u3002"),(0,l.kt)("h3",{id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301"},"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u652f\u6301"),(0,l.kt)("p",null,"\u4e0d\u540c\u5e95\u5c42\u4e91\u63d0\u4f9b\u5546\u5bf9\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u652f\u6301\u6709\u6240\u4e0d\u540c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u96c6\u7fa4\u90e8\u7f72"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u652f\u6301"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 AWS \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531 GKE \u4e91\u63d0\u4f9b\u5546\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EC2 \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DigitalOcean \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"vSphere \u4e0a\u7684 RKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u4e3b\u673a\u4e0a\u7684 RKE",(0,l.kt)("br",null),"\uff08\u4f8b\u5982\u88f8\u91d1\u5c5e\u670d\u52a1\u5668\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")))),(0,l.kt)("h3",{id:"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e2d\u7684\u4e3b\u673a\u540d"},"\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u4e2d\u7684\u4e3b\u673a\u540d"),(0,l.kt)("p",null,"\u4e00\u4e9b\u6258\u7ba1\u5728\u4e91\u4e0a\u7684\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u4f8b\u5982 AWS \u4e0a\u7684 ALB Ingress Controller\uff09\u4f1a\u4e3a Ingress \u89c4\u5219\u516c\u5f00 DNS \u5730\u5740\u3002\u4f60\u9700\u8981\uff08\u4f7f\u7528 CNAME\uff09\u5c06\u4f60\u7684\u57df\u540d\u6620\u5c04\u5230\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u751f\u6210\u7684 DNS \u5730\u5740\u3002"),(0,l.kt)("p",null,"\u5176\u4ed6\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u4f8b\u5982 Google Load Balancer \u6216 Nginx Ingress Controller\uff09\u4f1a\u76f4\u63a5\u516c\u5f00\u4e00\u4e2a\u6216\u591a\u4e2a IP \u5730\u5740\u3002Google Load Balancer \u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u8def\u7531\u7684 IP \u5730\u5740\u3002Nginx Ingress Controller \u516c\u5f00\u4e86\u8fd0\u884c Nginx Ingress Controller \u7684\u6240\u6709\u8282\u70b9\u7684\u5916\u90e8 IP\u3002\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u4efb\u4e00\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u4f60\u81ea\u5df1\u7684 DNS\uff0c\u4ece\u800c\uff08\u4f7f\u7528 A \u8bb0\u5f55\uff09\u5c06\u4f60\u7684\u57df\u540d\u6620\u5c04\u5230\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u516c\u5f00\u7684 IP \u5730\u5740\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8ba9 Rancher \u4e3a\u4f60\u7684 Ingress \u89c4\u5219\u751f\u6210\u4e00\u4e2a xip.io \u4e3b\u673a\u540d\u3002Rancher \u5c06\u4f7f\u7528\u4f60\u516c\u5f00\u7684\u5176\u4e2d\u4e00\u4e2a IP\uff08\u5047\u8bbe\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"a.b.c.d"),"\uff09\u751f\u6210\u4e00\u4e2a\u4e3b\u673a\u540d\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"li"},"<ingressname>.<namespace>.a.b.c.d.xip.io"),"\uff09\u3002")),(0,l.kt)("p",null,"\u4f7f\u7528 xip.io \u7684\u597d\u5904\u662f\u4f60\u53ef\u4ee5\u5728\u521b\u5efa Ingress \u89c4\u5219\u540e\u7acb\u5373\u83b7\u5f97\u4e00\u4e2a\u6709\u6548\u7684\u5165\u53e3\u70b9 URL\u3002\u6b64\u5916\uff0c\u5982\u679c\u4f60\u8bbe\u7f6e\u81ea\u5df1\u7684\u57df\u540d\uff0c\u5219\u9700\u8981\u914d\u7f6e DNS \u670d\u52a1\u5668\u5e76\u7b49\u5f85 DNS \u4f20\u64ad\u3002"),(0,l.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"\u521b\u5efa\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668"))))}g.isMDXComponent=!0}}]);