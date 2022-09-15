"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73218],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,N=m["".concat(i,".").concat(k)]||m[k]||s[k]||l;return n?r.createElement(N,o(o({ref:t},c),{},{components:n})):r.createElement(N,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),u=n(67392),i=n(7094),p=n(12466),c="tabList__CuJ",s="tabItem_LNqP";function m(e){var t,n,o=e.lazy,m=e.block,k=e.defaultValue,N=e.values,d=e.groupId,h=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=N?N:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,u.l)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===k?k:null!=(t=null!=k?k:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,i.U)(),y=C.tabGroupChoices,V=C.setTabGroupChoices,E=(0,a.useState)(b),x=E[0],P=E[1],U=[],w=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var O=y[d];null!=O&&O!==x&&v.some((function(e){return e.value===O}))&&P(O)}var R=function(e){var t=e.currentTarget,n=U.indexOf(t),r=v[n].value;r!==x&&(w(t),P(r),null!=d&&V(d,String(r)))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=U.indexOf(e.currentTarget)+1;n=null!=(r=U[a])?r:U[0];break;case"ArrowLeft":var l,o=U.indexOf(e.currentTarget)-1;n=null!=(l=U[o])?l:U[U.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return U.push(e)},onKeyDown:T,onFocus:R,onClick:R},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function k(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},41934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(65488),u=n(85162),i=["components"],p={title:"NeuVector \u96c6\u6210",weight:22},c=void 0,s={unversionedId:"explanations/integrations-in-rancher/neuvector",id:"explanations/integrations-in-rancher/neuvector",title:"NeuVector \u96c6\u6210",description:"Rancher \u4e2d\u7684 NeuVector \u96c6\u6210",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/neuvector.md",sourceDirName:"explanations/integrations-in-rancher",slug:"/explanations/integrations-in-rancher/neuvector",permalink:"/zh/explanations/integrations-in-rancher/neuvector",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/neuvector.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"NeuVector \u96c6\u6210",weight:22},sidebar:"tutorialSidebar",previous:{title:"PromQL \u8868\u8fbe\u5f0f\u53c2\u8003",permalink:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},next:{title:"OPA Gatekeeper",permalink:"/zh/explanations/integrations-in-rancher/opa-gatekeeper"}},m={},k=[{value:"Rancher \u4e2d\u7684 NeuVector \u96c6\u6210",id:"rancher-\u4e2d\u7684-neuvector-\u96c6\u6210",level:3},{value:"\u4f7f\u7528 Rancher \u5b89\u88c5 NeuVector",id:"\u4f7f\u7528-rancher-\u5b89\u88c5-neuvector",level:3},{value:"\u4ece Rancher UI \u8bbf\u95ee NeuVector",id:"\u4ece-rancher-ui-\u8bbf\u95ee-neuvector",level:3},{value:"\u4ece Rancher UI \u5378\u8f7d NeuVector",id:"\u4ece-rancher-ui-\u5378\u8f7d-neuvector",level:3},{value:"GitHub \u4ed3\u5e93",id:"github-\u4ed3\u5e93",level:3},{value:"\u6587\u6863",id:"\u6587\u6863",level:3},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:3},{value:"CPU \u548c\u5185\u5b58\u5206\u914d",id:"cpu-\u548c\u5185\u5b58\u5206\u914d",level:3},{value:"\u5f3a\u5316\u96c6\u7fa4\u652f\u6301 - Calico \u548c Canal",id:"\u5f3a\u5316\u96c6\u7fa4\u652f\u6301---calico-\u548c-canal",level:3},{value:"\u542f\u7528 SELinux \u7684\u96c6\u7fa4\u652f\u6301 - Calico \u548c Canal",id:"\u542f\u7528-selinux-\u7684\u96c6\u7fa4\u652f\u6301---calico-\u548c-canal",level:3},{value:"\u79bb\u7ebf\u73af\u5883\u4e2d\u7684\u96c6\u7fa4\u652f\u6301",id:"\u79bb\u7ebf\u73af\u5883\u4e2d\u7684\u96c6\u7fa4\u652f\u6301",level:3},{value:"\u652f\u6301\u9650\u5236",id:"\u652f\u6301\u9650\u5236",level:3},{value:"\u5176\u4ed6\u9650\u5236",id:"\u5176\u4ed6\u9650\u5236",level:3}],N={toc:k};function d(e){var t=e.components,p=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},N,p,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"rancher-\u4e2d\u7684-neuvector-\u96c6\u6210"},"Rancher \u4e2d\u7684 NeuVector \u96c6\u6210"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"NeuVector 5.x")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\uff0c\u4ee5\u5bb9\u5668\u4e3a\u4e2d\u5fc3\u7684\u5b89\u5168\u5e94\u7528\u7a0b\u5e8f\uff0cRancher 2.6.5 \u73b0\u5df2\u96c6\u6210 NeuVector\u3002NeuVector \u5728\u8fd0\u884c\u65f6\u4e3a\u5173\u952e\u5e94\u7528\u7a0b\u5e8f\u548c\u6570\u636e\u63d0\u4f9b\u5b9e\u65f6\u7684\u5408\u89c4\u3001\u53ef\u89c1\u548c\u4fdd\u62a4\u529f\u80fd\u3002NeuVector \u63d0\u4f9b\u5177\u6709 CIS Benchmark \u548c\u6f0f\u6d1e\u626b\u63cf\u7684\u9632\u706b\u5899\u3001\u5bb9\u5668\u8fdb\u7a0b/\u6587\u4ef6\u7cfb\u7edf\u76d1\u63a7\u548c\u5b89\u5168\u5ba1\u8ba1\u3002\u6709\u5173 Rancher \u5b89\u5168\u6027\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-security"},"\u5b89\u5168\u6587\u6863"),"\u3002"),(0,l.kt)("p",null,"NeuVector \u53ef\u4ee5\u901a\u8fc7 Helm Chart \u542f\u7528\u3002\u4f60\u53ef\u4ee5\u5728",(0,l.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u6216 Rancher UI \u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u5de5\u5177"),"\u4e2d\u5b89\u88c5\u8be5 Chart\u3002\u5b89\u88c5 Helm Chart \u540e\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/deploying/rancher#deploy-and-manage-neuvector-through-rancher-apps-marketplace"},"\u5728 Rancher \u4e2d\u90e8\u7f72\u548c\u7ba1\u7406 NeuVector \u96c6\u7fa4"),"\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528-rancher-\u5b89\u88c5-neuvector"},"\u4f7f\u7528 Rancher \u5b89\u88c5 NeuVector"),(0,l.kt)("p",null,"Harvester Helm Chart \u7528\u4e8e\u7ba1\u7406 Rancher \u4e2d NeuVector UI \u7684\u8bbf\u95ee\uff0c\u7528\u6237\u53ef\u4ee5\u5728 Rancher \u4e2d\u76f4\u63a5\u8df3\u8f6c\uff0c\u7136\u540e\u90e8\u7f72\u548c\u7ba1\u7406 NeuVector \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'\u901a\u8fc7"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"\u5bfc\u822a\u5e76\u5b89\u88c5 NeuVector Chart'),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Clusters \u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u90e8\u7f72 NeuVector \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Charts"),"\uff0c\u7136\u540e\u4ece Chart \u4ed3\u5e93\u4e2d\u5b89\u88c5 ",(0,l.kt)("strong",{parentName:"li"},"NeuVector"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u540c\u7684\u96c6\u7fa4\u7c7b\u578b\u9700\u8981\u4e0d\u540c\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u3002\u914d\u7f6e Helm Chart \u503c\u65f6\uff0c\u8f6c\u5230",(0,l.kt)("strong",{parentName:"li"},"\u5bb9\u5668\u8fd0\u884c\u65f6"),"\uff0c\u7136\u540e\u6839\u636e\u96c6\u7fa4\u7c7b\u578b\u9009\u62e9\u8fd0\u884c\u65f6\u3002\u6700\u540e\uff0c\u518d\u6b21\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"RKE1\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"K3s \u548c RKE2\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"k3scontainerd"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"AKS\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," \u9002\u7528\u4e8e v1.19 \u53ca\u66f4\u9ad8\u7248\u672c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EKS\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"docker")," \u9002\u7528\u4e8e v1.22 \u53ca\u4ee5\u4e0b\u7248\u672c\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"containerd")," \u9002\u7528\u4e8e v1.23 \u53ca\u66f4\u9ad8\u7248\u672c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"GKE\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"containerd"),"\uff08\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/concepts/using-containerd"},"Google \u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff09"),(0,l.kt)("p",{parentName:"li"},"  :::note"),(0,l.kt)("p",{parentName:"li"},"  \u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u4e00\u6b21\u53ea\u80fd\u9009\u62e9\u4e00\u4e2a\u5bb9\u5668\u8fd0\u884c\u65f6\u5f15\u64ce\u3002"),(0,l.kt)("p",{parentName:"li"},"  :::"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u96c6\u7fa4\u5de5\u5177\u5bfc\u822a\u5e76\u5b89\u88c5 NeuVector Chart"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 Clusters \u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u90e8\u7f72 NeuVector \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4fa7\u5bfc\u822a\u680f\u5e95\u90e8\u7684",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u5de5\u5177"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u4e0a\u9762\u7684\u6b65\u9aa4 4 \u76f8\u5e94\u5730\u9009\u62e9\u4f60\u7684\u5bb9\u5668\u8fd0\u884c\u65f6\uff0c\u7136\u540e\u518d\u6b21\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,l.kt)("h3",{id:"\u4ece-rancher-ui-\u8bbf\u95ee-neuvector"},"\u4ece Rancher UI \u8bbf\u95ee NeuVector"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230\u5b89\u88c5\u4e86 NeuVector \u7684\u96c6\u7fa4\u7684 Cluster Explorer\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"NeuVector"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u5916\u90e8\u94fe\u63a5\u4ee5\u8f6c\u5230 NeuVector UI\u3002\u9009\u62e9\u94fe\u63a5\u540e\uff0c\u7528\u6237\u5fc5\u987b\u63a5\u53d7",(0,l.kt)("inlineCode",{parentName:"li"},"\u6700\u7ec8\u7528\u6237\u8bb8\u53ef\u534f\u8bae"),"\u624d\u80fd\u8bbf\u95ee NeuVector UI\u3002")),(0,l.kt)("h3",{id:"\u4ece-rancher-ui-\u5378\u8f7d-neuvector"},"\u4ece Rancher UI \u5378\u8f7d NeuVector"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'\u901a\u8fc7"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"\u5378\u8f7d'),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u4e0b\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-neuvector-system")," \u4e0b\uff0c\u9009\u62e9 NeuVector \u5e94\u7528\u7a0b\u5e8f\uff08\u5982\u679c\u9700\u8981\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9\u76f8\u5173\u7684 CRD\uff09\uff0c\u7136\u540e\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7\u96c6\u7fa4\u5de5\u5177\u5378\u8f7d"),"\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u5c4f\u5e55\u5de6\u4e0b\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u5de5\u5177"),"\uff0c\u7136\u540e\u5355\u51fb NeuVector Chart \u4e0b\u65b9\u7684\u5783\u573e\u6876\u56fe\u6807\u3002\u5982\u679c\u9700\u8981\uff0c\u9009\u62e9",(0,l.kt)("inlineCode",{parentName:"li"},"\u5220\u9664\u4e0e\u6b64\u5e94\u7528\u5173\u8054\u7684 CRD"),"\uff0c\u7136\u540e\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,l.kt)("h3",{id:"github-\u4ed3\u5e93"},"GitHub \u4ed3\u5e93"),(0,l.kt)("p",null,"NeuVector \u9879\u76ee\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/neuvector/neuvector"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("h3",{id:"\u6587\u6863"},"\u6587\u6863"),(0,l.kt)("p",null,"NeuVector \u6587\u6863\u5728",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/"},"\u8fd9\u91cc"),"\u3002"),(0,l.kt)("h3",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,l.kt)("p",null,"NeuVector \u5b89\u5168\u89e3\u51b3\u65b9\u6848\u5305\u542b\u56db\u79cd\u7c7b\u578b\u7684\u5b89\u5168\u5bb9\u5668\uff0c\u5206\u522b\u662f Controller\u3001Enforcer\u3001Manager \u548c Scanner\u3002\u5b83\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u79f0\u4e3a All-in-One \u7684\u7279\u6b8a\u5bb9\u5668\uff08\u4e3b\u8981\u7528\u4e8e Docker \u539f\u751f\u90e8\u7f72\uff09\uff0c\u80fd\u5c06 Controller\u3001Enforcer \u548c Manager \u529f\u80fd\u7ec4\u5408\u5728\u4e00\u4e2a\u5bb9\u5668\u4e2d\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e2a Updater\uff0c\u8fd0\u884c\u8be5\u7a0b\u5e8f\u65f6\u4f1a\u66f4\u65b0 CVE \u6570\u636e\u5e93\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Controller"),"\uff1a\u7ba1\u7406 NeuVector Enforcer \u5bb9\u5668\uff1b\u4e3a\u7ba1\u7406\u63a7\u5236\u53f0\u63d0\u4f9b REST API\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Enforcer"),"\uff1a\u6267\u884c\u5b89\u5168\u7b56\u7565\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Manager"),"\uff1a\u63d0\u4f9b\u4e00\u4e2a web-UI \u548c CLI \u63a7\u5236\u53f0\u6765\u7ba1\u7406 NeuVector \u5e73\u53f0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"All-in-One"),"\uff1a\u5305\u62ec Controller\u3001Enforcer \u548c Manager\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scanner"),"\uff1a\u5bf9\u955c\u50cf\u3001\u5bb9\u5668\u548c\u8282\u70b9\u6267\u884c\u6f0f\u6d1e\u548c\u5408\u89c4\u6027\u626b\u63cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Updater"),"\uff1a\u66f4\u65b0 Neuvector \u7684 CVE \u6570\u636e\u5e93\uff08\u8fd0\u884c\u7684\u65f6\u5019\uff09\uff1b\u91cd\u65b0\u90e8\u7f72 scanner pod\u3002")),(0,l.kt)("figcaption",null,"**NeuVector \u5b89\u5168\u5bb9\u5668\uff1a**"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"NeuVector \u5b89\u5168\u5bb9\u5668",src:n(22830).Z,width:"850",height:"395"})),(0,l.kt)("figcaption",null,"**NeuVector \u67b6\u6784\uff1a**"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"NeuVector \u67b6\u6784",src:n(28358).Z,width:"1243",height:"836"})),(0,l.kt)("p",null,"\u8981\u4e86\u89e3\u6709\u5173 NeuVector \u67b6\u6784\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"https://open-docs.neuvector.com/basics/overview#architecture"},"\u6b64\u5904"),"\u3002"),(0,l.kt)("h3",{id:"cpu-\u548c\u5185\u5b58\u5206\u914d"},"CPU \u548c\u5185\u5b58\u5206\u914d"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u9ed8\u8ba4 NeuVector Chart \u5b89\u88c5\u90e8\u7f72\u7684\u6700\u4f4e\u8ba1\u7b97\u8d44\u6e90\u63a8\u8350\u3002\u8bf7\u6ce8\u610f\uff0c\u672a\u8bbe\u7f6e\u8d44\u6e90\u9650\u5236\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5bb9\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"CPU - \u8bf7\u6c42"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5185\u5b58 - \u8bf7\u6c42"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controller"),(0,l.kt)("td",{parentName:"tr",align:null},"3\uff08\u6bcf\u4e2a\u63a7\u5236\u5668\u9700\u8981 1GB 1vCPU\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enforcer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u8282\u70b9\u4e0a (500MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"1GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Manager"),(0,l.kt)("td",{parentName:"tr",align:null},"1 (500MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Scanner"),(0,l.kt)("td",{parentName:"tr",align:null},"3 (100MB .5vCPU)"),(0,l.kt)("td",{parentName:"tr",align:null},"*")))),(0,l.kt)("p",null,"*"," Controller\u3001Manager \u548c Scanner \u5bb9\u5668\u5408\u8ba1\u81f3\u5c11\u9700\u8981 1GB \u5185\u5b58\u3002"),(0,l.kt)("h3",{id:"\u5f3a\u5316\u96c6\u7fa4\u652f\u6301---calico-\u548c-canal"},"\u5f3a\u5316\u96c6\u7fa4\u652f\u6301 - Calico \u548c Canal"),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"RKE1",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c PSP \u8bbe\u7f6e\u4e3a true\uff0c\u5219\u6240\u6709 NeuVector \u7ec4\u4ef6\u90fd\u662f\u53ef\u90e8\u7f72\u7684\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4e3a\u5f3a\u5316\u96c6\u7fa4\u73af\u5883\u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\uff08\u6216\u5347\u7ea7\u5230\uff09NeuVector \u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),"\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u9009\u9879")," > ",(0,l.kt)("strong",{parentName:"p"},"\u5176\u5b83\u914d\u7f6e"),"\u4e0b\uff0c\u9009\u4e2d\u590d\u9009\u6846\u6765\u542f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Pod \u5b89\u5168\u7b56\u7565"),"\uff08\u65e0\u9700\u5176\u4ed6\u914d\u7f6e\uff09\uff1a"),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("img",{alt:"\u4e3a RKE1 \u5f3a\u5316\u96c6\u7fa4\u542f\u7528 PSP",src:n(25475).Z,width:"946",height:"557"})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"))),(0,l.kt)(u.Z,{value:"RKE2",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c PSP \u8bbe\u7f6e\u4e3a true\uff0c\u5219\u53ef\u4ee5\u90e8\u7f72 NeuVector \u7ec4\u4ef6 Controller \u548c Enforcer\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ec5\u9002\u7528\u4e8e NeuVector Chart \u7248\u672c 100.0.0+up2.2.0"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Manager\u3001Scanner \u548c Updater \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"v2.6.7 \u65b0\u529f\u80fd"))),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u4e3a\u5f3a\u5316\u96c6\u7fa4\u73af\u5883\u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u4f60\u5fc5\u987b\u66f4\u65b0 RKE2 \u548c K3s \u5f3a\u5316\u96c6\u7fa4\u4e2d\u7684\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\uff08\u6216\u5347\u7ea7\u5230\uff09NeuVector \u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"li"},"100.0.1+up2.2.2"),"\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"\u7f16\u8f91\u9009\u9879")," > ",(0,l.kt)("strong",{parentName:"p"},"\u5176\u5b83\u914d\u7f6e"),"\u4e0b\uff0c\u9009\u4e2d\u590d\u9009\u6846\u6765\u542f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Pod \u5b89\u5168\u7b56\u7565"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"Manager runAsUser ID"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Scanner runAsUser ID")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Updater runAsUser ID"),"\uff0c\u4f60\u8fd8\u5fc5\u987b\u8f93\u5165\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," \u7684\u503c:"),(0,l.kt)("p",{parentName:"li"}," ",(0,l.kt)("img",{alt:"\u4e3a RKE2 \u548c K3s \u5f3a\u5316\u96c6\u7fa4\u542f\u7528 PSP",src:n(21447).Z,width:"942",height:"562"})))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684",(0,l.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")))),(0,l.kt)("h3",{id:"\u542f\u7528-selinux-\u7684\u96c6\u7fa4\u652f\u6301---calico-\u548c-canal"},"\u542f\u7528 SELinux \u7684\u96c6\u7fa4\u652f\u6301 - Calico \u548c Canal"),(0,l.kt)("p",null,"\u8981\u5728 RKE2 \u96c6\u7fa4\u4e0a\u542f\u7528 SELinux\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c PSP \u8bbe\u7f6e\u4e3a true\uff0c\u5219\u53ef\u4ee5\u90e8\u7f72 NeuVector \u7ec4\u4ef6 Controller \u548c Enforcer\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ec5\u9002\u7528\u4e8e NeuVector Chart \u7248\u672c 100.0.0+up2.2.0"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e Manager\u3001Scanner \u548c Updater \u7ec4\u4ef6\uff0c\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl patch deploy neuvector-manager-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch deploy neuvector-scanner-pod -n cattle-neuvector-system --patch \'{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}\'\nkubectl patch cronjob neuvector-updater-pod -n cattle-neuvector-system --patch \'{"spec":{"jobTemplate":{"spec":{"template":{"spec":{"securityContext":{"runAsUser": 5400}}}}}}}\'\n')),(0,l.kt)("h3",{id:"\u79bb\u7ebf\u73af\u5883\u4e2d\u7684\u96c6\u7fa4\u652f\u6301"},"\u79bb\u7ebf\u73af\u5883\u4e2d\u7684\u96c6\u7fa4\u652f\u6301"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 NeuVector \u7ec4\u4ef6\u90fd\u53ef\u90e8\u7f72\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u7684\u96c6\u7fa4\u4e0a\uff0c\u65e0\u9700\u4efb\u4f55\u989d\u5916\u914d\u7f6e\u3002")),(0,l.kt)("h3",{id:"\u652f\u6301\u9650\u5236"},"\u652f\u6301\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d\u4ec5\u652f\u6301\u7ba1\u7406\u5458\u548c\u96c6\u7fa4\u6240\u6709\u8005\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u652f\u6301 Fleet \u591a\u96c6\u7fa4\u90e8\u7f72\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Windows \u96c6\u7fa4\u4e0d\u652f\u6301 NeuVector\u3002"))),(0,l.kt)("h3",{id:"\u5176\u4ed6\u9650\u5236"},"\u5176\u4ed6\u9650\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76ee\u524d\uff0c\u5982\u679c NeuVector partner Chart \u5df2\u5b58\u5728\uff0c\u5219 NeuVector \u529f\u80fd Chart \u7684\u5b89\u88c5\u4f1a\u5931\u8d25\u3002\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u8bf7\u5378\u8f7d NeuVector partner Chart \u5e76\u91cd\u65b0\u5b89\u88c5 NeuVector \u529f\u80fd Chart\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Controller \u672a\u51c6\u5907\u597d\u65f6\uff0c\u6709\u53ef\u80fd\u65e0\u6cd5\u4ece Rancher UI \u8bbf\u95ee NeuVector UI\u3002\u5728\u6b64\u671f\u95f4\uff0cController \u5c06\u5c1d\u8bd5\u91cd\u65b0\u542f\u52a8\uff0c\u5e76\u4e14\u9700\u8981\u51e0\u5206\u949f\u624d\u80fd\u8fdb\u5165 active \u72b6\u6001\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5 NeuVector Chart \u65f6\uff0c\u4e0d\u4f1a\u9488\u5bf9\u4e0d\u540c\u7684\u96c6\u7fa4\u7c7b\u578b\u81ea\u52a8\u68c0\u6d4b\u5bb9\u5668\u8fd0\u884c\u65f6\u3002\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u6307\u5b9a\u8fd0\u884c\u65f6\u3002"))))}d.isMDXComponent=!0},28358:function(e,t,n){t.Z=n.p+"assets/images/neuvector-architecture-a985ec6ea53faf5c7d808055f8d64be5.png"},22830:function(e,t,n){t.Z=n.p+"assets/images/neuvector-security-containers-06d127dd89635663657feecb3310dfd5.png"},25475:function(e,t,n){t.Z=n.p+"assets/images/psp-nv-rke-d87045c466a93d8487507a469d32d0db.png"},21447:function(e,t,n){t.Z=n.p+"assets/images/psp-nv-rke2-a0eabc8b8a5e8d0476d885c29ca55017.png"}}]);