"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14950],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,h=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45564:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={title:"FAQ",weight:25,aliases:["/rancher/v2.0-v2.4/en/about/"]},l=void 0,u={unversionedId:"faq",id:"version-2.0-2.4/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x.",source:"@site/versioned_docs/version-2.0-2.4/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v2.0-v2.4/faq",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/faq.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"FAQ",weight:25,aliases:["/rancher/v2.0-v2.4/en/about/"]},sidebar:"tutorialSidebar",previous:{title:"Notifiers",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},next:{title:"Installing and Configuring kubectl",permalink:"/v2.0-v2.4/faq/install-and-configure-kubectl"}},p={},c=[],f={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/technical-items"},"Technical FAQ"),", for frequently asked technical questions."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Docker Swarm and Mesos as environment types?")),(0,a.kt)("p",null,"When creating an environment in Rancher v2.x, Swarm and Mesos will no longer be standard options you can select. However, both Swarm and Mesos will continue to be available as Catalog applications you can deploy. It was a tough decision to make but, in the end, it came down to adoption. For example, out of more than 15,000 clusters, only about 200 or so are running Swarm."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Is it possible to manage Azure Kubernetes Services with Rancher v2.x?")),(0,a.kt)("p",null,"Yes."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher support Windows?")),(0,a.kt)("p",null,"As of Rancher 2.3.0, we support Windows Server 1809 containers. For details on how to set up a cluster with Windows worker nodes, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"configuring custom clusters for Windows.")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher support Istio?")),(0,a.kt)("p",null,"As of Rancher 2.3.0, we support ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/istio"},"Istio.")),(0,a.kt)("p",null,'Furthermore, Istio is implemented in our micro-PaaS "Rio", which works on Rancher 2.x along with any CNCF compliant Kubernetes cluster. You can read more about it ',(0,a.kt)("a",{parentName:"p",href:"https://rio.io/"},"here")),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Will Rancher v2.x support Hashicorp's Vault for storing secrets?")),(0,a.kt)("p",null,"Secrets management is on our roadmap but we haven't assigned it to a specific release yet."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support RKT containers as well?")),(0,a.kt)("p",null,"At this time, we only support Docker."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Calico, Contiv, Contrail, Flannel, Weave net, etc., for embedded and imported Kubernetes?")),(0,a.kt)("p",null,"Out-of-the-box, Rancher provides the following CNI network providers for Kubernetes clusters: Canal, Flannel, Calico and Weave (Weave is available as of v2.2.0).  Always refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher Support Matrix")," for details about what is officially supported."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you planning on supporting Traefik for existing setups?")),(0,a.kt)("p",null,"We don't currently plan on providing embedded Traefik support, but we're still exploring load-balancing approaches."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I import OpenShift Kubernetes clusters into v2.x?")),(0,a.kt)("p",null,"Our goal is to run any upstream Kubernetes clusters. Therefore, Rancher v2.x should work with OpenShift, but we haven't tested it yet."),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Are you going to integrate Longhorn?")),(0,a.kt)("p",null,"Yes. Longhorn was on a bit of a hiatus while we were working on v2.0. We plan to re-engage on the project."))}d.isMDXComponent=!0}}]);