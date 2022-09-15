"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[29641],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,h=d["".concat(i,".").concat(k)]||d[k]||p[k]||u;return n?r.createElement(h,c(c({ref:t},l),{},{components:n})):r.createElement(h,c({ref:t},l))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,c=new Array(u);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<u;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22770:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),c=["components"],o={title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",weight:2015},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",id:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",description:"\u672c\u6587\u4ecb\u7ecd kubectl CLI\u3001kubeconfig \u6587\u4ef6\u548c\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u5982\u4f55\u534f\u540c\u5de5\u4f5c\uff0c\u4f7f\u4f60\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher Server \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u672c\u6587\u65e8\u5728\u4e3a\u8bbe\u7f6e kubectl \u4ee5\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\u7684\u8bf4\u660e\u63d0\u4f9b\u80cc\u666f\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u7684\u5de5\u4f5c\u539f\u7406",weight:2015},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Kubectl \u548c kubeconfig \u8bbf\u95ee\u96c6\u7fa4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},next:{title:"\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u96c6\u7fa4",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"}},l={},p=[{value:"kubeconfig \u6587\u4ef6\u8bf4\u660e",id:"kubeconfig-\u6587\u4ef6\u8bf4\u660e",level:3},{value:"RKE \u96c6\u7fa4\u7684\u4e24\u79cd\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5",id:"rke-\u96c6\u7fa4\u7684\u4e24\u79cd\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5",level:3},{value:"\u5173\u4e8e kube-api-auth \u8eab\u4efd\u9a8c\u8bc1 Webhook",id:"\u5173\u4e8e-kube-api-auth-\u8eab\u4efd\u9a8c\u8bc1-webhook",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,c);return(0,u.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd kubectl CLI\u3001kubeconfig \u6587\u4ef6\u548c\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u5982\u4f55\u534f\u540c\u5de5\u4f5c\uff0c\u4f7f\u4f60\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u800c\u65e0\u9700\u901a\u8fc7 Rancher Server \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\u672c\u6587\u65e8\u5728\u4e3a",(0,u.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8bbe\u7f6e kubectl \u4ee5\u76f4\u63a5\u8bbf\u95ee\u96c6\u7fa4\u7684\u8bf4\u660e"),"\u63d0\u4f9b\u80cc\u666f\u4fe1\u606f\u548c\u4e0a\u4e0b\u6587\u3002"),(0,u.kt)("h3",{id:"kubeconfig-\u6587\u4ef6\u8bf4\u660e"},"kubeconfig \u6587\u4ef6\u8bf4\u660e"),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"kubeconfig \u6587\u4ef6")," \u662f\u4e0e kubectl \u547d\u4ee4\u884c\u5de5\u5177\uff08\u6216\u5176\u4ed6\u5ba2\u6237\u7aef\uff09\u7ed3\u5408\u4f7f\u7528\u65f6\u7528\u4e8e\u914d\u7f6e Kubernetes \u8bbf\u95ee\u7684\u6587\u4ef6\u3002"),(0,u.kt)("p",null,"\u6b64 kubeconfig \u6587\u4ef6\u53ca\u5176\u5185\u5bb9\u7279\u5b9a\u4e8e\u4f60\u6b63\u5728\u67e5\u770b\u7684\u96c6\u7fa4\u3002\u4f60\u53ef\u4ee5\u4ece Rancher \u7684",(0,u.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u89c6\u56fe\u4e2d\u4e0b\u8f7d\u8be5\u6587\u4ef6\u3002\u5728 Rancher \u4e2d\u53ef\u4ee5\u8bbf\u95ee\u7684\u6bcf\u4e2a\u96c6\u7fa4\u90fd\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684 kubeconfig \u6587\u4ef6\u3002"),(0,u.kt)("p",null,"\u4e0b\u8f7d kubeconfig \u6587\u4ef6\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u4f7f\u7528 kubeconfig \u6587\u4ef6\u53ca\u5176 Kubernetes ",(0,u.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#kubectl-context-and-configuration"},"\u4e0a\u4e0b\u6587"),"\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,u.kt)("p",null,"\u5982\u679c\u7ba1\u7406\u5458",(0,u.kt)("a",{parentName:"p",href:"/zh/reference-guides/about-the-api/api-tokens#%E5%9C%A8%E7%94%9F%E6%88%90%E7%9A%84-kubeconfigs-%E4%B8%AD%E7%A6%81%E7%94%A8%E4%BB%A4%E7%89%8C"},"\u5173\u95ed\u4e86 kubeconfig \u4ee4\u724c\u751f\u6210"),"\uff0c\u5219 kubeconfig \u6587\u4ef6\u8981\u6c42 ",(0,u.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"Rancher CLI")," \u5b58\u5728\u4e8e\u4f60\u7684 PATH \u4e2d\u3002"),(0,u.kt)("h3",{id:"rke-\u96c6\u7fa4\u7684\u4e24\u79cd\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5"},"RKE \u96c6\u7fa4\u7684\u4e24\u79cd\u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5"),(0,u.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u4e0d\u662f ",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE \u96c6\u7fa4"),"\uff0ckubeconfig \u6587\u4ef6\u53ea\u5141\u8bb8\u4f60\u4ee5\u4e00\u79cd\u65b9\u5f0f\u8bbf\u95ee\u200b\u200b\u96c6\u7fa4\uff0c\u5373\u901a\u8fc7 Rancher Server \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u7136\u540e Rancher \u5141\u8bb8\u4f60\u5728\u96c6\u7fa4\u4e0a\u8fd0\u884c kubectl \u547d\u4ee4\u3002"),(0,u.kt)("p",null,"\u5bf9\u4e8e RKE \u96c6\u7fa4\uff0ckubeconfig \u6587\u4ef6\u5141\u8bb8\u4f60\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u901a\u8fc7 Rancher Server \u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406"),"\uff1aRancher \u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7406\u4f1a\u9a8c\u8bc1\u4f60\u7684\u8eab\u4efd\uff0c\u7136\u540e\u5c06\u4f60\u8fde\u63a5\u5230\u8981\u8bbf\u95ee\u7684\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u76f4\u63a5\u4f7f\u7528\u4e0b\u6e38\u96c6\u7fa4\u7684 API Server"),"\uff1aRKE \u96c6\u7fa4\u9ed8\u8ba4\u542f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\u3002\u6b64\u7aef\u70b9\u5141\u8bb8\u4f60\u4f7f\u7528 kubectl CLI \u548c kubeconfig \u6587\u4ef6\u8bbf\u95ee\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\uff0c\u4e14 RKE \u96c6\u7fa4\u9ed8\u8ba4\u542f\u7528\u8be5\u7aef\u70b9\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e0b\u6e38\u96c6\u7fa4\u7684 Kubernetes API server \u901a\u8fc7\u8c03\u7528 Rancher \u8bbe\u7f6e\u7684 webhook\uff08",(0,u.kt)("inlineCode",{parentName:"li"},"kube-api-auth")," \u5fae\u670d\u52a1\uff09\u5bf9\u4f60\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,u.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\uff08\u5373\u76f4\u63a5\u8fde\u63a5\u5230\u96c6\u7fa4\u7684 Kubernetes API server\uff09\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5982\u679c\u4f60\u65e0\u6cd5\u8fde\u63a5\u5230 Rancher\uff0c\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u8ba9\u4f60\u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,u.kt)("p",null,"\u8981\u4f7f\u7528\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff0c\u4f60\u9700\u8981\u914d\u7f6e kubectl\uff0c\u4ece\u800c\u4f7f\u7528 Rancher \u5728\u521b\u5efa RKE \u96c6\u7fa4\u65f6\u751f\u6210\u7684 kubeconfig \u6587\u4ef6\u4e2d\u7684\u989d\u5916 kubectl \u4e0a\u4e0b\u6587\u3002\u8be5\u6587\u4ef6\u53ef\u4ee5\u4ece Rancher UI \u7684",(0,u.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u89c6\u56fe\u4e2d\u4e0b\u8f7d\uff0c\u914d\u7f6e kubectl \u7684\u8bf4\u660e\u5728",(0,u.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u6b64\u9875\u9762"),"\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture#%E4%B8%8E%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E9%80%9A%E4%BF%A1"},"\u67b6\u6784\u4ecb\u7ecd"),"\u4e5f\u8be6\u7ec6\u89e3\u91ca\u4e86\u8fd9\u4e9b\u4e0e\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u901a\u4fe1\u7684\u65b9\u6cd5\uff0c\u5e76\u4ecb\u7ecd\u4e86 Rancher \u7684\u5de5\u4f5c\u539f\u7406\u4ee5\u53ca Rancher \u5982\u4f55\u4e0e\u4e0b\u6e38\u96c6\u7fa4\u901a\u4fe1\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,u.kt)("h3",{id:"\u5173\u4e8e-kube-api-auth-\u8eab\u4efd\u9a8c\u8bc1-webhook"},"\u5173\u4e8e kube-api-auth \u8eab\u4efd\u9a8c\u8bc1 Webhook"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u5fae\u670d\u52a1\u662f\u4e3a",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture#4-%E6%8E%88%E6%9D%83%E9%9B%86%E7%BE%A4%E7%AB%AF%E7%82%B9"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9"),"\u63d0\u4f9b\u7528\u6237\u8ba4\u8bc1\u529f\u80fd\u800c\u90e8\u7f72\u7684\uff0c\u8be5\u529f\u80fd\u4ec5\u9002\u7528\u4e8e",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE \u96c6\u7fa4"),"\u3002\u5f53\u4f60\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8bbf\u95ee\u4e0b\u6e38\u96c6\u7fa4\u65f6\uff0c\u96c6\u7fa4\u7684 Kubernetes API server \u4f1a\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u670d\u52a1\u4f5c\u4e3a webhook \u5bf9\u4f60\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,u.kt)("p",null,"\u5728\u96c6\u7fa4\u914d\u7f6e\u671f\u95f4\u4f1a\u90e8\u7f72 ",(0,u.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/kube-api-authn-webhook.yaml")," \u6587\u4ef6\uff0c\u5e76\u4f7f\u7528 ",(0,u.kt)("inlineCode",{parentName:"p"},"--authentication-token-webhook-config-file=/etc/kubernetes/kube-api-authn-webhook.yaml")," \u914d\u7f6e ",(0,u.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),"\u3002\u8fd9\u4f1a\u5c06 ",(0,u.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," \u914d\u7f6e\u4e3a\u901a\u8fc7\u67e5\u8be2 ",(0,u.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:6440/v1/authenticate")," \u6765\u786e\u5b9a\u6301\u6709\u8005 token \u7684\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," \u7684\u8c03\u5ea6\u89c4\u5219\u5982\u4e0b\uff1a"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,u.kt)("th",{parentName:"tr",align:null},"nodeAffinity nodeSelectorTerms"),(0,u.kt)("th",{parentName:"tr",align:null},"nodeSelector"),(0,u.kt)("th",{parentName:"tr",align:null},"\u5bb9\u5fcd\u5ea6"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},"kube-api-auth"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"beta.kubernetes.io/os:NotIn:windows"),(0,u.kt)("br",null),(0,u.kt)("inlineCode",{parentName:"td"},'node-role.kubernetes.io/controlplane:In:"true"')),(0,u.kt)("td",{parentName:"tr",align:null},"none"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("inlineCode",{parentName:"td"},"operator:Exists"))))))}k.isMDXComponent=!0}}]);