"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58882],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56103:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"\u8fd0\u884c\u626b\u63cf"},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan",id:"how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan",title:"\u8fd0\u884c\u626b\u63cf",description:"\u521b\u5efa ClusterScan \u81ea\u5b9a\u4e49\u8d44\u6e90\u540e\uff0c\u5b83\u4f1a\u5728\u96c6\u7fa4\u4e0a\u4e3a\u6240\u9009 ClusterScanProfile \u542f\u52a8\u65b0\u7684 CIS \u626b\u63cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u8fd0\u884c\u626b\u63cf"},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d Rancher CIS Benchmark",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark"},next:{title:"\u5b9a\u65f6\u8fd0\u884c\u626b\u63cf",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan-periodically-on-a-schedule"}},l={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa ClusterScan \u81ea\u5b9a\u4e49\u8d44\u6e90\u540e\uff0c\u5b83\u4f1a\u5728\u96c6\u7fa4\u4e0a\u4e3a\u6240\u9009 ClusterScanProfile \u542f\u52a8\u65b0\u7684 CIS \u626b\u63cf\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bf7\u6ce8\u610f\uff0c\u76ee\u524d\u4e00\u4e2a\u96c6\u7fa4\u6bcf\u6b21\u53ea\u80fd\u8fd0\u884c\u4e00\u6b21 CIS \u626b\u63cf\u3002\u5982\u679c\u4f60\u521b\u5efa\u4e86\u591a\u4e2a ClusterScan \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0coperator \u53ea\u80fd\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5730\u8fd0\u884c\u8fd9\u4e9b\u8d44\u6e90\u3002\u4e00\u4e2a\u626b\u63cf\u5b8c\u6210\u4e4b\u524d\uff0c\u5176\u4f59 ClusterScan \u81ea\u5b9a\u4e49\u8d44\u6e90\u5c06\u5904\u4e8e \u201cPending\u201d \u72b6\u6001\u3002"))),(0,o.kt)("p",null,"\u8981\u8fd0\u884c\u626b\u63cf\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u8fd0\u884c CIS \u626b\u63cf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"CIS Benchmark > \u626b\u63cf"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u96c6\u7fa4\u626b\u63cf\u914d\u7f6e\u6587\u4ef6\u3002\u8be5\u914d\u7f6e\u6587\u4ef6\u786e\u5b9a\u8981\u4f7f\u7528\u54ea\u4e2a CIS Benchmark \u7248\u672c\u4ee5\u53ca\u8981\u6267\u884c\u54ea\u4e9b\u6d4b\u8bd5\u3002\u5982\u679c\u4f60\u9009\u62e9 Default \u914d\u7f6e\u6587\u4ef6\uff0c\u5219 CIS Operator \u5c06\u9009\u62e9\u9002\u7528\u4e8e\u5b83\u6240\u5728\u7684 Kubernetes \u96c6\u7fa4\u7c7b\u578b\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u751f\u6210\u5e26\u6709\u626b\u63cf\u7ed3\u679c\u7684\u62a5\u544a\u3002\u5982\u9700\u67e5\u770b\u7ed3\u679c\uff0c\u8bf7\u5355\u51fb\u663e\u793a\u7684\u626b\u63cf\u540d\u79f0\u3002"))}m.isMDXComponent=!0}}]);