"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22043],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40858:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"\u81ea\u5b9a\u4e49\u89d2\u8272",weight:1128},p=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",title:"\u81ea\u5b9a\u4e49\u89d2\u8272",description:"\u5728 Rancher \u4e2d\uff0c\u89d2\u8272 \u51b3\u5b9a\u4e86\u7528\u6237\u53ef\u4ee5\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u6267\u884c\u54ea\u4e9b\u64cd\u4f5c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u81ea\u5b9a\u4e49\u89d2\u8272",weight:1128},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},next:{title:"\u9501\u5b9a\u89d2\u8272",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"}},c={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272",level:2},{value:"\u521b\u5efa\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\u7ee7\u627f\u7684\u81ea\u5b9a\u4e49\u89d2\u8272",id:"\u521b\u5efa\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\u7ee7\u627f\u7684\u81ea\u5b9a\u4e49\u89d2\u8272",level:2},{value:"\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272",id:"\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272",level:2},{value:"\u4e3a\u7ec4\u5206\u914d\u81ea\u5b9a\u4e49\u89d2\u8272",id:"\u4e3a\u7ec4\u5206\u914d\u81ea\u5b9a\u4e49\u89d2\u8272",level:2},{value:"\u6743\u9650\u63d0\u5347",id:"\u6743\u9650\u63d0\u5347",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Rancher \u4e2d\uff0c",(0,o.kt)("em",{parentName:"p"},"\u89d2\u8272")," \u51b3\u5b9a\u4e86\u7528\u6237\u53ef\u4ee5\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u6267\u884c\u54ea\u4e9b\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c",(0,o.kt)("em",{parentName:"p"},"\u89d2\u8272")," \u4e0e ",(0,o.kt)("em",{parentName:"p"},"\u6743\u9650")," \u4e0d\u540c\uff0c\u6743\u9650\u51b3\u5b9a\u7684\u662f\u4f60\u53ef\u4ee5\u8bbf\u95ee\u54ea\u4e9b\u96c6\u7fa4\u548c\u9879\u76ee\u3002"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u81ea\u5b9a\u4e49\u89d2\u8272\u53ef\u4ee5\u542f\u7528\u6743\u9650\u63d0\u5347\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"#%E6%9D%83%E9%99%90%E6%8F%90%E5%8D%87"},"\u672c\u8282"),"\u3002"))),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u8981\u5b8c\u6210\u6b64\u9875\u9762\u4e0a\u7684\u4efb\u52a1\uff0c\u9700\u8981\u4ee5\u4e0b\u6743\u9650\u4e4b\u4e00\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u5458\u5168\u5c40\u6743\u9650"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5206\u914d\u4e86",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"\u7ba1\u7406\u89d2\u8272"),"\u7684",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%85%A8%E5%B1%80%E6%9D%83%E9%99%90"},"\u81ea\u5b9a\u4e49\u5168\u5c40\u6743\u9650"),"\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272"),(0,o.kt)("p",null,"\u867d\u7136 Rancher \u63d0\u4f9b\u4e00\u7ec4\u5f00\u7bb1\u5373\u7528\u7684\u9ed8\u8ba4\u7528\u6237\u89d2\u8272\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u521b\u5efa\u9ed8\u8ba4\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u4ece\u800c\u5728 Rancher \u4e2d\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u7cbe\u7ec6\u7684\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89d2\u8272\u7684\u6b65\u9aa4\u56e0 Rancher \u7684\u7248\u672c\u800c\u5f02\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u5361\u6765\u786e\u5b9a\u8981\u6dfb\u52a0\u7684\u89d2\u8272\u7684\u8303\u56f4\u3002\u8fd9\u4e9b\u9009\u9879\u5361\u662f\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5168\u5c40"),"\uff1a\u4ec5\u5728\u5141\u8bb8\u6210\u5458\u7ba1\u7406\u5168\u5c40\u8303\u56f4\u7684\u8d44\u6e90\u65f6\uff0c\u53ef\u4ee5\u5206\u914d\u8be5\u89d2\u8272\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\uff1a\u4ec5\u5728\u5411\u96c6\u7fa4\u6dfb\u52a0/\u7ba1\u7406\u6210\u5458\u65f6\uff0c\u53ef\u4ee5\u5206\u914d\u8be5\u89d2\u8272\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4"),"\uff1a\u4ec5\u5728\u5411\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0/\u7ba1\u7406\u6210\u5458\u65f6\uff0c\u53ef\u4ee5\u5206\u914d\u8be5\u89d2\u8272\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6839\u636e\u6240\u9700\u8981\u7684\u8303\u56f4\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5168\u5c40\u89d2\u8272"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u7684\u89d2\u8272"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u89d2\u8272\u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u9009\uff1a\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u521b\u5efa\u8005\u7684\u9ed8\u8ba4\u89d2\u8272/\u9879\u76ee\u521b\u5efa\u8005\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u9009\u9879\uff0c\u4ee5\u5c06\u8be5\u89d2\u8272\u5206\u914d\u7ed9\u96c6\u7fa4/\u9879\u76ee\u521b\u5efa\u8005\u3002\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u6269\u5c55\u6216\u9650\u5236\u96c6\u7fa4/\u9879\u76ee\u521b\u5efa\u8005\u7684\u9ed8\u8ba4\u89d2\u8272\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u5f00\u7bb1\u5373\u7528\u7684",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u521b\u5efa\u8005\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u9879\u76ee\u521b\u5efa\u8005\u7684\u9ed8\u8ba4\u89d2\u8272"),"\u5206\u522b\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u96c6\u7fa4\u6240\u6709\u8005"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6240\u6709\u8005"),"\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u6388\u6743\u8d44\u6e90"),"\u9009\u9879\u5c06\u5404\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/"},"Kubernetes API \u7aef\u70b9"),"\u5206\u914d\u7ed9\u89d2\u8272\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u67e5\u770b Rancher \u521b\u5efa\u7684\u9ed8\u8ba4\u89d2\u8272\u5173\u8054\u7684\u8d44\u6e90\u65f6\uff0c\u5982\u679c\u5728\u4e00\u884c\u4e0a\u6709\u591a\u4e2a Kubernetes API \u8d44\u6e90\uff0c\u5219\u8be5\u8d44\u6e90\u5c06\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"(Custom)")," \u6807\u8bc6\u3002\u8fd9\u4e0d\u4ee3\u8868\u8fd9\u4e2a\u8d44\u6e90\u662f\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u800c\u53ea\u662f\u8868\u660e\u591a\u4e2a Kubernetes API \u8d44\u6e90\u4f5c\u4e3a\u4e00\u4e2a\u8d44\u6e90\u3002")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6e90"),"\u6587\u672c\u5b57\u6bb5\u53ef\u4ee5\u7528\u6765\u641c\u7d22\u9884\u5b9a\u4e49\u7684 Kubernetes API \u8d44\u6e90\uff0c\u6216\u8005\u4e3a\u6388\u6743\u8f93\u5165\u81ea\u5b9a\u4e49\u8d44\u6e90\u540d\u79f0\u3002\u5728\u6b64\u5b57\u6bb5\u4e2d\u8f93\u5165\u8d44\u6e90\u540d\u79f0\u540e\uff0c\u5fc5\u987b\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u9884\u5b9a\u4e49\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"\uff08\u81ea\u5b9a\u4e49\uff09"),"\u8d44\u6e90\u3002")),(0,o.kt)("p",{parentName:"li"},"\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u6bcf\u4e2a\u5206\u914d\u7684\u7aef\u70b9\u53ef\u7528\u7684 cURL \u65b9\u6cd5\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Delete"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Get")," \u7b49\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Inherit from")," \u9009\u9879\u5c06\u5404\u4e2a Rancher \u89d2\u8272\u5206\u914d\u7ed9\u4f60\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u81ea\u5b9a\u4e49\u89d2\u8272\u4ece\u7236\u89d2\u8272\u7ee7\u627f\uff0c\u4f60\u9700\u8981\u5148\u5220\u9664\u5b50\u89d2\u8272\u624d\u80fd\u5220\u9664\u7236\u89d2\u8272\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("h2",{id:"\u521b\u5efa\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\u7ee7\u627f\u7684\u81ea\u5b9a\u4e49\u89d2\u8272"},"\u521b\u5efa\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\u7ee7\u627f\u7684\u81ea\u5b9a\u4e49\u89d2\u8272"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u7ec4\u9700\u8981\u5728 Rancher \u4e2d\u5177\u6709\u76f8\u540c\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\uff0c\u4e00\u79cd\u8282\u7701\u65f6\u95f4\u7684\u65b9\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\uff0c\u800c\u8be5\u89d2\u8272\u7684\u89c4\u5219\u90fd\u662f\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\uff08\u4f8b\u5982\u7ba1\u7406\u5458\u89d2\u8272\uff09\u590d\u5236\u800c\u6765\u7684\u3002\u8fd9\u6837\uff0c\u4f60\u53ea\u9700\u8981\u914d\u7f6e\u73b0\u6709\u89d2\u8272\u548c\u65b0\u89d2\u8272\u4e4b\u95f4\u4e0d\u540c\u7684\u90e8\u5206\u3002"),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\u6216\u7ec4\u3002\u8be5\u89d2\u8272\u5728\u7528\u6237\u9996\u6b21\u767b\u5f55 Rancher \u65f6\u751f\u6548\u3002"),(0,o.kt)("p",null,"\u8981\u57fa\u4e8e\u73b0\u6709\u89d2\u8272\u521b\u5efa\u81ea\u5b9a\u4e49\u89d2\u8272\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u89d2\u8272"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4"),"\u9009\u9879\u5361\u3002\u6839\u636e\u6240\u9700\u8981\u7684\u8303\u56f4\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u96c6\u7fa4\u89d2\u8272"),"\u6216",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u7684\u89d2\u8272"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u53ea\u6709\u96c6\u7fa4\u89d2\u8272\u548c\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u89d2\u8272\u53ef\u4ee5\u4ece\u53e6\u4e00\u4e2a\u89d2\u8272\u7ee7\u627f\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165\u89d2\u8272\u7684\u540d\u79f0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Inherit From")," \u9009\u9879\u5361\u4e2d\uff0c\u9009\u62e9\u81ea\u5b9a\u4e49\u89d2\u8272\u9700\u8981\u4ece\u54ea\u4e2a\u89d2\u8272\u7ee7\u627f\u6743\u9650\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u6388\u6743\u8d44\u6e90"),"\u9009\u9879\u5361\u4e2d\uff0c\u9009\u62e9\u62e5\u6709\u81ea\u5b9a\u4e49\u89d2\u8272\u7684\u7528\u6237\u8981\u542f\u7528\u7684 Kubernetes \u8d44\u6e90\u64cd\u4f5c\u3002"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6e90"),"\u6587\u672c\u5b57\u6bb5\u53ef\u4ee5\u7528\u6765\u641c\u7d22\u9884\u5b9a\u4e49\u7684 Kubernetes API \u8d44\u6e90\uff0c\u6216\u8005\u4e3a\u6388\u6743\u8f93\u5165\u81ea\u5b9a\u4e49\u8d44\u6e90\u540d\u79f0\u3002\u5728\u6b64\u5b57\u6bb5\u4e2d\u8f93\u5165\u8d44\u6e90\u540d\u79f0\u540e\uff0c\u5fc5\u987b\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u9884\u5b9a\u4e49\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"\uff08\u81ea\u5b9a\u4e49\uff09"),"\u8d44\u6e90\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53ef\u9009\uff1a\u5c06\u89d2\u8272\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("h2",{id:"\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272"},"\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272"),(0,o.kt)("p",null,"\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272\u65f6\uff0c\u5177\u6709\u6b64\u81ea\u5b9a\u4e49\u89d2\u8272\u7684\u6240\u6709\u5168\u5c40\u89d2\u8272\u7ed1\u5b9a\uff08Global Role Bindings\uff09\u90fd\u5c06\u88ab\u5220\u9664\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u7528\u6237\u4ec5\u5206\u914d\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u5168\u5c40\u89d2\u8272\uff0c\u800c\u4e14\u4f60\u5220\u9664\u4e86\u8fd9\u4e2a\u89d2\u8272\uff0c\u8be5\u7528\u6237\u5c06\u4e0d\u80fd\u518d\u8bbf\u95ee Rancher\u3002\u8981\u8ba9\u7528\u6237\u91cd\u65b0\u83b7\u5f97\u8bbf\u95ee\u6743\u9650\uff0c\u7ba1\u7406\u5458\u9700\u8981\u7f16\u8f91\u7528\u6237\u5e76\u5e94\u7528\u65b0\u7684\u5168\u5c40\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u89d2\u8272\u53ef\u4ee5\u5220\u9664\uff0c\u4f46\u5185\u7f6e\u89d2\u8272\u4e0d\u80fd\u5220\u9664\u3002"),(0,o.kt)("p",null,"\u8981\u5220\u9664\u81ea\u5b9a\u4e49\u89d2\u8272\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u89d2\u8272"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5220\u9664\u7684\u81ea\u5b9a\u4e49\u5168\u5c40\u89d2\u8272\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee (\u2026) > \u5220\u9664"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,o.kt)("h2",{id:"\u4e3a\u7ec4\u5206\u914d\u81ea\u5b9a\u4e49\u89d2\u8272"},"\u4e3a\u7ec4\u5206\u914d\u81ea\u5b9a\u4e49\u89d2\u8272"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u7ec4\u9700\u8981\u5728 Rancher \u4e2d\u5177\u6709\u76f8\u540c\u8bbf\u95ee\u6743\u9650\u7684\u7528\u6237\uff0c\u4e00\u79cd\u8282\u7701\u65f6\u95f4\u7684\u65b9\u6cd5\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\u3002\u5c06\u89d2\u8272\u5206\u914d\u7ed9\u7ec4\u65f6\uff0c\u7ec4\u4e2d\u7684\u7528\u6237\u5728\u9996\u6b21\u767b\u5f55 Rancher \u65f6\u5c31\u4f1a\u62e5\u6709\u914d\u7f6e\u7684\u8bbf\u95ee\u7ea7\u522b\u3002"),(0,o.kt)("p",null,"\u7ec4\u4e2d\u7684\u7528\u6237\u767b\u5f55\u65f6\uff0c\u4ed6\u4eec\u9ed8\u8ba4\u83b7\u5f97\u5185\u7f6e\u7684",(0,o.kt)("strong",{parentName:"p"},"\u666e\u901a\u7528\u6237"),"\u5168\u5c40\u89d2\u8272\u3002\u4ed6\u4eec\u8fd8\u5c06\u83b7\u5f97\u5206\u914d\u7ed9\u4ed6\u4eec\u7684\u7ec4\u7684\u6743\u9650\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5c06\u7528\u6237\u4ece\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u7cfb\u7edf\u7684\u7ec4\u4e2d\u5220\u9664\uff0c\u7528\u6237\u5c06\u5931\u53bb\u5206\u914d\u7ed9\u8be5\u7ec4\u7684\u81ea\u5b9a\u4e49\u5168\u5c40\u89d2\u8272\u7684\u6743\u9650\u3002\u4f46\u662f\uff0c\u7528\u6237\u4ecd\u4f1a\u62e5\u6709",(0,o.kt)("strong",{parentName:"p"},"\u666e\u901a\u7528\u6237"),"\u89d2\u8272\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ea\u6709\u5728\u4ee5\u4e0b\u60c5\u51b5\u4e0b\uff0c\u4f60\u624d\u80fd\u5c06\u5168\u5c40\u89d2\u8272\u5206\u914d\u7ed9\u7ec4\uff1a"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u4f60\u5df2\u8bbe\u7f6e",(0,o.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/about-authentication#%E5%A4%96%E9%83%A8%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%9C%AC%E5%9C%B0%E9%AA%8C%E8%AF%81"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u652f\u6301",(0,o.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/manage-users-and-groups"},"\u7528\u6237\u7ec4"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u5df2\u4f7f\u7528\u8eab\u4efd\u9a8c\u8bc1\u63d0\u4f9b\u7a0b\u5e8f\u8bbe\u7f6e\u4e86\u81f3\u5c11\u4e00\u4e2a\u7528\u6237\u7ec4\u3002")))),(0,o.kt)("p",null,"\u8981\u5c06\u81ea\u5b9a\u4e49\u89d2\u8272\u5206\u914d\u7ed9\u7ec4\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u7ec4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5c06\u5206\u914d\u81ea\u5b9a\u4e49\u89d2\u8272\u7684\u7ec4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u5df2\u521b\u5efa\u89d2\u8272\uff0c\u89d2\u8272\u5c06\u663e\u793a\u5728",(0,o.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\u3002\u9009\u62e9\u8981\u5206\u914d\u7ed9\u7ec4\u7684\u81ea\u5b9a\u4e49\u89d2\u8272\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5168\u5c40\u6743\u9650"),"\u6216",(0,o.kt)("strong",{parentName:"li"},"\u5185\u7f6e\u89d2\u8272"),"\u4e2d\uff0c\u9009\u62e9\u8981\u5206\u914d\u7ed9\u8be5\u7ec4\u7684\u5176\u4ed6\u6743\u9650\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u81ea\u5b9a\u4e49\u89d2\u8272\u5c06\u5728\u7ec4\u5185\u7528\u6237\u767b\u5f55 Rancher \u65f6\u751f\u6548\u3002"),(0,o.kt)("h2",{id:"\u6743\u9650\u63d0\u5347"},"\u6743\u9650\u63d0\u5347"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u5e94\u7528\u5546\u5e97"),"\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u6743\u9650\u5f88\u5f3a\u5927\uff0c\u5e94\u8c28\u614e\u4f7f\u7528\u3002\u5982\u679c\u7ba1\u7406\u5458\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"\u914d\u7f6e\u5e94\u7528\u5546\u5e97"),"\u6743\u9650\u5206\u914d\u7ed9\u666e\u901a\u7528\u6237\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6743\u9650\u63d0\u5347\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u8ba9\u81ea\u5df1\u5bf9 Rancher \u914d\u7f6e\u7684\u96c6\u7fa4\u8fdb\u884c\u7ba1\u7406\u5458\u8bbf\u95ee\u3002\u56e0\u6b64\uff0c\u62e5\u6709\u6b64\u6743\u9650\u7684\u4efb\u4f55\u7528\u6237\u90fd\u5e94\u88ab\u89c6\u4e3a\u7ba1\u7406\u5458\u3002"))}d.isMDXComponent=!0}}]);