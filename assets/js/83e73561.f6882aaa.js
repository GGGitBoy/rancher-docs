"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73292],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),u=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(o.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,v=l["".concat(o,".").concat(d)]||l[d]||h[d]||s;return n?t.createElement(v,i(i({ref:r},p),{},{components:n})):t.createElement(v,i({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=l;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<s;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},90148:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return h}});var t=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],c={title:"Best Practices for the Rancher Server",shortTitle:"Rancher Server",weight:1,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-server","/rancher/v2.x/en/best-practices/v2.5/rancher-server/"]},o=void 0,u={unversionedId:"pages-for-subheaders/rancher-server",id:"version-2.5/pages-for-subheaders/rancher-server",title:"Best Practices for the Rancher Server",description:"This guide contains our recommendations for running the Rancher server, and is intended to be used in situations in which Rancher manages downstream Kubernetes clusters.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/rancher-server.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-server",permalink:"/v2.5/pages-for-subheaders/rancher-server",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/rancher-server.md",tags:[],version:"2.5",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Best Practices for the Rancher Server",shortTitle:"Rancher Server",weight:1,aliases:["/rancher/v2.5/en/best-practices/v2.5/rancher-server","/rancher/v2.x/en/best-practices/v2.5/rancher-server/"]},sidebar:"tutorialSidebar",previous:{title:"Best Practices Guide",permalink:"/v2.5/pages-for-subheaders/best-practices"},next:{title:"Installing Rancher in a vSphere Environment",permalink:"/v2.5/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"}},p={},h=[{value:"Recommended Architecture and Infrastructure",id:"recommended-architecture-and-infrastructure",level:3},{value:"Deployment Strategies",id:"deployment-strategies",level:3},{value:"Installing Rancher in a vSphere Environment",id:"installing-rancher-in-a-vsphere-environment",level:3}],l={toc:h};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This guide contains our recommendations for running the Rancher server, and is intended to be used in situations in which Rancher manages downstream Kubernetes clusters."),(0,s.kt)("h3",{id:"recommended-architecture-and-infrastructure"},"Recommended Architecture and Infrastructure"),(0,s.kt)("p",null,"Refer to this ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"guide")," for our general advice for setting up the Rancher server on a high-availability Kubernetes cluster."),(0,s.kt)("h3",{id:"deployment-strategies"},"Deployment Strategies"),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},"guide")," is designed to help you choose whether a regional deployment strategy or a hub-and-spoke deployment strategy is better for a Rancher server that manages downstream Kubernetes clusters."),(0,s.kt)("h3",{id:"installing-rancher-in-a-vsphere-environment"},"Installing Rancher in a vSphere Environment"),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"guide")," outlines a reference architecture for installing Rancher in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."))}d.isMDXComponent=!0}}]);