"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73804],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(h,c(c({ref:n},u),{},{components:t})):r.createElement(h,c({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99888:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={title:"Uninstall Rancher CIS Benchmark"},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",id:"version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",title:"Uninstall Rancher CIS Benchmark",description:"1. From the Cluster Dashboard, go to the left navigation bar and click Apps & Marketplace > Installed Apps.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",tags:[],version:"2.5",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Uninstall Rancher CIS Benchmark"},sidebar:"tutorialSidebar",previous:{title:"Install Rancher CIS Benchmark",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark"},next:{title:"Run a Scan",permalink:"/v2.5/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"}},u={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Cluster Dashboard,")," go to the left navigation bar and click ",(0,i.kt)("strong",{parentName:"li"},"Apps & Marketplace > Installed Apps"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cis-operator-system")," namespace and check the boxes next to ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark-crd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Delete")," and confirm ",(0,i.kt)("strong",{parentName:"li"},"Delete"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application is uninstalled."))}m.isMDXComponent=!0}}]);