"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64415],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),h=c(t),p=a,m=h["".concat(l,".").concat(p)]||h[p]||o[p]||i;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=h;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},51510:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return o}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),s=["components"],u={title:"Self-Assessment and Hardening Guides for Rancher v2.6",shortTitle:"Rancher v2.6 Hardening Guides",weight:1,aliases:["/rancher/v2.6/en/security/rancher-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-benchmark-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-benchmark-2.5/"]},l=void 0,c={unversionedId:"pages-for-subheaders/rancher-v2.6-hardening-guides",id:"pages-for-subheaders/rancher-v2.6-hardening-guides",title:"Self-Assessment and Hardening Guides for Rancher v2.6",description:"Rancher provides specific security hardening guides for each supported Rancher's Kubernetes distributions.",source:"@site/docs/pages-for-subheaders/rancher-v2.6-hardening-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-v2.6-hardening-guides",permalink:"/pages-for-subheaders/rancher-v2.6-hardening-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-v2.6-hardening-guides.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Self-Assessment and Hardening Guides for Rancher v2.6",shortTitle:"Rancher v2.6 Hardening Guides",weight:1,aliases:["/rancher/v2.6/en/security/rancher-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.5-benchmark-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-hardening-2.5/","/rancher/v2.6/en/security/rancher-2.5/1.6-benchmark-2.5/"]},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/pages-for-subheaders/rancher-security"},next:{title:"RKE Hardening Guide with CIS v1.6 Benchmark",permalink:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark"}},d={},o=[{value:"Rancher Kubernetes Distributions",id:"rancher-kubernetes-distributions",level:2},{value:"Hardening Guides and Benchmark Versions",id:"hardening-guides-and-benchmark-versions",level:2},{value:"RKE Guides",id:"rke-guides",level:3},{value:"RKE2 Guides",id:"rke2-guides",level:3},{value:"K3s Guides",id:"k3s-guides",level:3},{value:"Rancher with SELinux",id:"rancher-with-selinux",level:2}],h={toc:o};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher provides specific security hardening guides for each supported Rancher's Kubernetes distributions."),(0,i.kt)("h2",{id:"rancher-kubernetes-distributions"},"Rancher Kubernetes Distributions"),(0,i.kt)("p",null,"Rancher uses the following Kubernetes distributions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"RKE")),", Rancher Kubernetes Engine, is a CNCF-certified Kubernetes distribution that runs entirely within Docker containers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.rke2.io/"},(0,i.kt)("strong",{parentName:"a"},"RKE2"))," is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/"},(0,i.kt)("strong",{parentName:"a"},"K3s"))," is a fully conformant, lightweight Kubernetes distribution. It is easy to install, with half the memory of upstream Kubernetes, all in a binary of less than 100 MB.")),(0,i.kt)("p",null,"To harden a Kubernetes cluster outside of Rancher's distributions, refer to your Kubernetes provider docs."),(0,i.kt)("h2",{id:"hardening-guides-and-benchmark-versions"},"Hardening Guides and Benchmark Versions"),(0,i.kt)("p",null,"These guides have been tested along with the Rancher v2.6 release. Each self-assessment guide is accompanied with a hardening guide and tested on a specific Kubernetes version and CIS benchmark version. If a CIS benchmark has not been validated for your Kubernetes version, you can choose to use the existing guides until a newer version is added."),(0,i.kt)("h3",{id:"rke-guides"},"RKE Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.18 up to v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-self-assessment-guide-with-cis-v1.6-benchmark"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke1-hardening-guide-with-cis-v1.6-benchmark"},"Link"))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"CIS v1.20 benchmark version for Kubernetes v1.19 and v1.20 is not yet released as a profile in Rancher's CIS Benchmark chart.")))),(0,i.kt)("h3",{id:"rke2-guides"},"RKE2 Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher provisioned RKE2 cluster"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 up to v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-self-assessment-guide-with-cis-v1.6-benchmark"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/reference-guides/rancher-security/rancher-v2.6-hardening-guides/rke2-hardening-guide-with-cis-v1.6-benchmark"},"Link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standalone RKE2"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 up to v1.23"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/cis_self_assessment16/"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/security/hardening_guide/"},"Link"))))),(0,i.kt)("h3",{id:"k3s-guides"},"K3s Guides"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guides"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.21 and v1.22"),(0,i.kt)("td",{parentName:"tr",align:null},"CIS v1.6"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/self_assessment/"},"Link")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://rancher.com/docs/k3s/latest/en/security/hardening_guide/"},"Link"))))),(0,i.kt)("h2",{id:"rancher-with-selinux"},"Rancher with SELinux"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux. After being historically used by government agencies, SELinux is now industry standard and is enabled by default on RHEL and CentOS."),(0,i.kt)("p",null,"To use Rancher with SELinux, we recommend installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM according to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/selinux-rpm#installing-the-rancher-selinux-rpm"},"this page.")))}p.isMDXComponent=!0}}]);