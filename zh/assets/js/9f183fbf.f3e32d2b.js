"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3578],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=p(n),g=r,s=k["".concat(m,".").concat(g)]||k[g]||d[g]||l;return n?a.createElement(s,i(i({ref:e},u),{},{components:n})):a.createElement(s,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49416:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"RBAC",shortTitle:"RBAC",weight:2},m=void 0,p={unversionedId:"explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",id:"explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",title:"RBAC",description:"\u672c\u8282\u63cf\u8ff0\u4e86 RBAC \u5728 Rancher Monitoring \u4e2d\u7684\u4f5c\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",sourceDirName:"explanations/integrations-in-rancher/monitoring-and-alerting",slug:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",permalink:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"RBAC",shortTitle:"RBAC",weight:2},sidebar:"tutorialSidebar",previous:{title:"Monitoring \u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},next:{title:"\u5185\u7f6e\u4eea\u8868\u677f",permalink:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards"}},u={},d=[{value:"\u96c6\u7fa4\u7ba1\u7406\u5458",id:"\u96c6\u7fa4\u7ba1\u7406\u5458",level:2},{value:"\u5177\u6709\u57fa\u4e8e Kubernetes ClusterRole \u6743\u9650\u7684\u7528\u6237",id:"\u5177\u6709\u57fa\u4e8e-kubernetes-clusterrole-\u6743\u9650\u7684\u7528\u6237",level:2},{value:"\u5177\u6709 Kubernetes \u7ba1\u7406\u5458/\u7f16\u8f91\u6743\u9650\u7684\u7528\u6237",id:"\u5177\u6709-kubernetes-\u7ba1\u7406\u5458\u7f16\u8f91\u6743\u9650\u7684\u7528\u6237",level:3},{value:"\u5177\u6709 Kubernetes \u67e5\u770b\u6743\u9650\u7684\u7528\u6237",id:"\u5177\u6709-kubernetes-\u67e5\u770b\u6743\u9650\u7684\u7528\u6237",level:3},{value:"\u5176\u4ed6\u76d1\u63a7\u89d2\u8272",id:"\u5176\u4ed6\u76d1\u63a7\u89d2\u8272",level:3},{value:"\u5176\u4ed6\u76d1\u63a7\u96c6\u7fa4\u89d2\u8272",id:"\u5176\u4ed6\u76d1\u63a7\u96c6\u7fa4\u89d2\u8272",level:3},{value:"\u4f7f\u7528 kubectl \u5206\u914d Role \u548c ClusterRole",id:"\u4f7f\u7528-kubectl-\u5206\u914d-role-\u548c-clusterrole",level:3},{value:"\u5177\u6709 Rancher \u6743\u9650\u7684\u7528\u6237",id:"\u5177\u6709-rancher-\u6743\u9650\u7684\u7528\u6237",level:2},{value:"2.5.x \u4e2d\u7684\u5dee\u5f02",id:"25x-\u4e2d\u7684\u5dee\u5f02",level:3},{value:"\u5206\u914d\u5176\u4ed6\u8bbf\u95ee\u6743\u9650",id:"\u5206\u914d\u5176\u4ed6\u8bbf\u95ee\u6743\u9650",level:3},{value:"Grafana \u7684 RBAC",id:"grafana-\u7684-rbac",level:2}],k={toc:d};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u8282\u63cf\u8ff0\u4e86 RBAC \u5728 Rancher Monitoring \u4e2d\u7684\u4f5c\u7528\u3002"),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u7ba1\u7406\u5458"},"\u96c6\u7fa4\u7ba1\u7406\u5458"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u6709\u5177\u6709 cluster-admin ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u7684\u7528\u6237\u624d\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," \u5e94\u7528\u5b89\u88c5\u5230\u96c6\u7fa4\u4e0a\uff0c\u5e76\u5728 Chart \u90e8\u7f72\u4e0a\u6267\u884c\u6240\u6709\u5176\u4ed6\u76f8\u5173\u914d\u7f6e\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff0c\u662f\u5426\u521b\u5efa\u4e86\u9ed8\u8ba4\u4eea\u8868\u677f\uff0c\u8981\u5c06\u54ea\u4e9b Exporter \u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\u4ee5\u6536\u96c6\u6307\u6807\u7b49\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Prometheus CR \u5728\u96c6\u7fa4\u4e2d\u521b\u5efa/\u4fee\u6539/\u5220\u9664 Prometheus deployment\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Alertmanager CR \u5728\u96c6\u7fa4\u4e2d\u521b\u5efa/\u4fee\u6539/\u5220\u9664 Alertmanager deployment\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa ConfigMap \u6765\u4fdd\u7559\u65b0\u7684 Grafana \u4eea\u8868\u677f\u6216\u6570\u636e\u6e90\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret \u5c06\u67d0\u4e9b Prometheus \u6307\u6807\u66b4\u9732\u7ed9 HPA \u7684 K8s Custom Metrics API\u3002")),(0,l.kt)("h2",{id:"\u5177\u6709\u57fa\u4e8e-kubernetes-clusterrole-\u6743\u9650\u7684\u7528\u6237"},"\u5177\u6709\u57fa\u4e8e Kubernetes ClusterRole \u6743\u9650\u7684\u7528\u6237"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Chart \u5b89\u88c5\u4e86\u4ee5\u4e0b\u4e09\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u4f1a\u805a\u5408\u5230\u76f8\u5e94\u7684 K8s ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u4e2d\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ClusterRole"),(0,l.kt)("th",{parentName:"tr",align:null},"\u805a\u5408\u5230\u9ed8\u8ba4\u7684 K8s ClusterRole"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"monitoring-admin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"admin"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"monitoring-edit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"edit"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"monitoring-view")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"view "))))),(0,l.kt)("p",null,"\u8fd9\u4e9b ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u6839\u636e\u53ef\u6267\u884c\u7684\u64cd\u4f5c\u63d0\u4f9b\u5bf9 Monitoring CRD \u7684\u4e0d\u540c\u8bbf\u95ee\u7ea7\u522b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CRD (monitoring.coreos.com)"),(0,l.kt)("th",{parentName:"tr",align:null},"Admin"),(0,l.kt)("th",{parentName:"tr",align:null},"Edit"),(0,l.kt)("th",{parentName:"tr",align:null},"View"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"alertmanagers")))),(0,l.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,l.kt)("td",{parentName:"tr",align:null},"Get, List, Watch"),(0,l.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"podmonitors")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"prometheusrules")))),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},"Get, List, Watch")))),(0,l.kt)("p",null,"\u5728\u8f83\u9ad8\u7ea7\u522b\u4e0a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u5206\u914d\u4ee5\u4e0b\u6743\u9650\u3002"),(0,l.kt)("h3",{id:"\u5177\u6709-kubernetes-\u7ba1\u7406\u5458\u7f16\u8f91\u6743\u9650\u7684\u7528\u6237"},"\u5177\u6709 Kubernetes \u7ba1\u7406\u5458/\u7f16\u8f91\u6743\u9650\u7684\u7528\u6237"),(0,l.kt)("p",null,"\u53ea\u6709\u5177\u6709 cluster-admin\u3001admin \u6216 edit \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u53ef\u4ee5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ServiceMonitor \u548c PodMonitor CR \u4fee\u6539 Prometheus deployment \u7684\u6293\u53d6\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 PrometheusRules CR \u4fee\u6539 Prometheus deployment \u7684\u544a\u8b66/\u8bb0\u5f55\u89c4\u5219\u3002")),(0,l.kt)("h3",{id:"\u5177\u6709-kubernetes-\u67e5\u770b\u6743\u9650\u7684\u7528\u6237"},"\u5177\u6709 Kubernetes \u67e5\u770b\u6743\u9650\u7684\u7528\u6237"),(0,l.kt)("p",null,"\u53ea\u6709\u5177\u6709 Kubernetes ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u7684\u7528\u6237\u53ef\u4ee5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u96c6\u7fa4\u5185\u90e8\u7f72\u7684 Prometheuses \u7684\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u770b\u96c6\u7fa4\u5185\u90e8\u7f72\u7684 Alertmanagers \u7684\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ServiceMonitor \u548c PodMonitor CR \u67e5\u770b Prometheus deployment \u7684\u6293\u53d6\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7 PrometheusRules CR \u67e5\u770b Prometheus deployment \u7684\u544a\u8b66/\u8bb0\u5f55\u89c4\u5219\u3002")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u76d1\u63a7\u89d2\u8272"},"\u5176\u4ed6\u76d1\u63a7\u89d2\u8272"),(0,l.kt)("p",null,"Monitoring \u8fd8\u4f1a\u521b\u5efa\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"Role"),"\uff0c\u8fd9\u4e9b\u89d2\u8272\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5206\u914d\u7ed9\u7528\u6237\uff0c\u800c\u662f\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u3002\u4f60\u53ef\u4ee5\u90e8\u7f72\u5f15\u7528\u89d2\u8272\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"RoleBinding")," \u6765\u5c06\u89d2\u8272\u7ed1\u5b9a\u5230\u547d\u540d\u7a7a\u95f4\u3002\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u800c\u4e0d\u662f\u901a\u8fc7 Rancher \u6765\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"RoleBinding"),"\uff0c\u8bf7\u5355\u51fb",(0,l.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8-kubectl-%E5%88%86%E9%85%8D-role-%E5%92%8C-clusterrole"},"\u6b64\u5904"),"\u3002"),(0,l.kt)("p",null,"\u7ba1\u7406\u5458\u5e94\u4f7f\u7528\u8fd9\u4e9b\u89d2\u8272\u4e3a\u7528\u6237\u63d0\u4f9b\u66f4\u7ec6\u7c92\u5ea6\u7684\u8bbf\u95ee\u6743\u9650\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-config-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b/\u7f16\u8f91 cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret \u548c ConfigMap\u3002\u4fee\u6539\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret/ConfigMap \u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u66f4\u6539\u96c6\u7fa4\u7684 Alertmanager \u914d\u7f6e\u3001Prometheus Adapter \u914d\u7f6e\u3001\u5176\u4ed6 Grafana \u6570\u636e\u6e90\u3001TLS \u5bc6\u94a5\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-config-edit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b/\u7f16\u8f91 cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret \u548c ConfigMap\u3002\u4fee\u6539\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret/ConfigMap \u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u66f4\u6539\u96c6\u7fa4\u7684 Alertmanager \u914d\u7f6e\u3001Prometheus Adapter \u914d\u7f6e\u3001\u5176\u4ed6 Grafana \u6570\u636e\u6e90\u3001TLS \u5bc6\u94a5\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-config-view"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret \u548c ConfigMap\u3002\u67e5\u770b\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Secret/ConfigMap \u53ef\u4ee5\u5141\u8bb8\u7528\u6237\u89c2\u5bdf\u96c6\u7fa4\u7684 Alertmanager \u914d\u7f6e\u3001Prometheus Adapter \u914d\u7f6e\u3001\u5176\u4ed6 Grafana \u6570\u636e\u6e90\u3001TLS \u5bc6\u94a5\u7b49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b/\u7f16\u8f91 cattle-dashboards \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap \u5c06\u5bf9\u5e94\u4e8e\u6301\u4e45\u5316\u5230\u96c6\u7fa4\u4e0a\u7684 Grafana \u4eea\u8868\u677f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-edit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b/\u7f16\u8f91 cattle-dashboards \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap \u5c06\u5bf9\u5e94\u4e8e\u6301\u4e45\u5316\u5230\u96c6\u7fa4\u4e0a\u7684 Grafana \u4eea\u8868\u677f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-dashboard-view"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7ba1\u7406\u5458\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\uff0c\u4ee5\u4fbf\u67e5\u770b cattle-dashboards \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ConfigMap \u5c06\u5bf9\u5e94\u4e8e\u6301\u4e45\u5316\u5230\u96c6\u7fa4\u4e0a\u7684 Grafana \u4eea\u8868\u677f\u3002")))),(0,l.kt)("h3",{id:"\u5176\u4ed6\u76d1\u63a7\u96c6\u7fa4\u89d2\u8272"},"\u5176\u4ed6\u76d1\u63a7\u96c6\u7fa4\u89d2\u8272"),(0,l.kt)("p",null,"Monitoring \u8fd8\u4f1a\u521b\u5efa\u5176\u4ed6 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole"),"\uff0c\u8fd9\u4e9b\u89d2\u8272\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5206\u914d\u7ed9\u7528\u6237\uff0c\u800c\u662f\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e9b\u89d2\u8272\u4e0d\u4f1a\u805a\u5408\uff0c\u4f46\u4f60\u53ef\u4ee5\u90e8\u7f72\u5f15\u7528\u89d2\u8272\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"RoleBinding")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," \u6765\u5c06\u89d2\u8272\u7ed1\u5b9a\u5230\u547d\u540d\u7a7a\u95f4\u3002\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u800c\u4e0d\u662f\u901a\u8fc7 Rancher \u6765\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"RoleBinding"),"\uff0c\u8bf7\u5355\u51fb",(0,l.kt)("a",{parentName:"p",href:"#%E4%BD%BF%E7%94%A8-kubectl-%E5%88%86%E9%85%8D-role-%E5%92%8C-clusterrole"},"\u6b64\u5904"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-ui-view"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{id:"monitoring-ui-view"}),(0,l.kt)("em",{parentName:"td"},"\u4ece Monitoring v2 14.5.100+ \u5f00\u59cb\u53ef\u7528"),"\u3002\u901a\u8fc7\u6388\u6743\u7528\u6237\u5217\u51fa Prometheus\u3001Alertmanager \u548c Grafana \u7aef\u70b9\uff0c\u5e76\u901a\u8fc7 Rancher \u4ee3\u7406\u5411 Prometheus\u3001Grafana \u548c Alertmanager UI \u8fdb\u884c GET \u8bf7\u6c42\uff0c\u6765\u5141\u8bb8\u7528\u6237\u5bf9\u5916\u90e8 Monitoring UI \u8fdb\u884c\u53ea\u8bfb\u8bbf\u95ee\u3002")))),(0,l.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u5206\u914d-role-\u548c-clusterrole"},"\u4f7f\u7528 kubectl \u5206\u914d Role \u548c ClusterRole"),(0,l.kt)("p",null,"\u4f7f\u7528 Rancher \u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"Role")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u9644\u52a0\u5230\u7528\u6237\u6216\u7ec4\u7684\u53e6\u4e00\u79cd\u65b9\u6cd5\uff0c\u662f\u5728\u4f60\u521b\u5efa\u7684 YAML \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7ed1\u5b9a\u3002\u4f60\u5fc5\u987b\u9996\u5148\u4f7f\u7528 YAML \u6587\u4ef6\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"RoleBinding"),"\uff0c\u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," \u547d\u4ee4\u6765\u5e94\u7528\u914d\u7f6e\u66f4\u6539\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Role"),"\uff1a\u4ee5\u4e0b YAML \u6587\u4ef6\u793a\u4f8b\u53ef\u5e2e\u52a9\u4f60\u5728 Kubernetes \u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"RoleBinding"),"\u3002\u4f60\u9700\u8981\u586b\u5199\u4e0b\u65b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),"\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# monitoring-config-view-role-binding.yaml\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: monitoring-config-view\n  namespace: cattle-monitoring-system\nroleRef:\n  kind: Role\n  name: monitoring-config-view\n  apiGroup: rbac.authorization.k8s.io\nsubjects:\n- kind: User\n  name: u-b4qkhsnliz # this can be found via `kubectl get users -A`\n  apiGroup: rbac.authorization.k8s.io\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"kubectl"),"\uff1a\u4ee5\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," \u793a\u4f8b\u547d\u4ee4\u7528\u4e8e\u5e94\u7528 YAML \u6587\u4ef6\u4e2d\u521b\u5efa\u7684\u7ed1\u5b9a\u3002\u5982\u524d\u6240\u8ff0\uff0c\u4f60\u9700\u8981\u76f8\u5e94\u5730\u586b\u5199\u4f60\u7684 YAML \u6587\u4ef6\u540d\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kubectl apply -f monitoring-config-view-role-binding.yaml"))))),(0,l.kt)("h2",{id:"\u5177\u6709-rancher-\u6743\u9650\u7684\u7528\u6237"},"\u5177\u6709 Rancher \u6743\u9650\u7684\u7528\u6237"),(0,l.kt)("p",null,"Rancher \u90e8\u7f72\u7684\u9ed8\u8ba4\u89d2\u8272\uff08\u5373 cluster-owner\u3001cluster-member\u3001project-owner\u3001project-member\uff09\u3001Kubernetes \u9ed8\u8ba4\u89d2\u8272\uff0c\u4ee5\u53ca rancher-monitoring Chart \u90e8\u7f72\u7684\u89d2\u8272\u4e4b\u95f4\u7684\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("figcaption",null,"\u9ed8\u8ba4 Rancher \u6743\u9650\u548c\u5bf9\u5e94\u7684 Kubernetes ClusterRole"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Rancher \u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes \u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"Monitoring ClusterRole/Role"),(0,l.kt)("th",{parentName:"tr",align:null},"ClusterRoleBinding/RoleBinding"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-owner"),(0,l.kt)("td",{parentName:"tr",align:null},"cluster-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cluster-member"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project-owner"),(0,l.kt)("td",{parentName:"tr",align:null},"admin"),(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-admin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 RoleBinding")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"project-member"),(0,l.kt)("td",{parentName:"tr",align:null},"edit"),(0,l.kt)("td",{parentName:"tr",align:null},"monitoring-edit"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 RoleBinding")))),(0,l.kt)("p",null,"\u9664\u8fd9\u4e9b\u9ed8\u8ba4\u89d2\u8272\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u7684\u5176\u4ed6 Rancher \u9879\u76ee\u89d2\u8272\u5e94\u7528\u4e8e\u96c6\u7fa4\u6210\u5458\uff0c\u4ee5\u63d0\u4f9b\u5bf9 Monitoring \u7684\u5176\u4ed6\u8bbf\u95ee\u3002\u8fd9\u4e9b Rancher \u89d2\u8272\u5c06\u4e0e Monitoring Chart \u90e8\u7f72\u7684 ClusterRole \u76f8\u5173\u8054\uff1a"),(0,l.kt)("figcaption",null,"\u975e\u9ed8\u8ba4\u7684 Rancher \u6743\u9650\u548c\u5bf9\u5e94\u7684 Kubernetes ClusterRole"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Rancher \u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"Kubernetes ClusterRole"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7528 Rancher \u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7528 Monitoring V2 \u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b Monitoring","*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#monitoring-ui-view"},"monitoring-ui-view")),(0,l.kt)("td",{parentName:"tr",align:null},"2.4.8+"),(0,l.kt)("td",{parentName:"tr",align:null},"9.4.204+")))),(0,l.kt)("p",null,"*"," \u5982\u679c\u67d0\u4e2a\u7528\u6237\u7ed1\u5b9a\u4e86 Rancher \u7684 ",(0,l.kt)("strong",{parentName:"p"},"View Monitoring")," \u89d2\u8272\uff0c\u8be5\u7528\u6237\u53ea\u6709\u5728\u6709 UI \u94fe\u63a5\u65f6\u624d\u6709\u6743\u8bbf\u95ee\u5916\u90e8 Monitoring UI\u3002\u8981\u8bbf\u95ee Monitoring Pane \u4ee5\u83b7\u53d6\u8fd9\u4e9b\u94fe\u63a5\uff0c\u7528\u6237\u5fc5\u987b\u662f\u81f3\u5c11\u4e00\u4e2a\u9879\u76ee\u7684\u9879\u76ee\u6210\u5458\u3002"),(0,l.kt)("h3",{id:"25x-\u4e2d\u7684\u5dee\u5f02"},"2.5.x \u4e2d\u7684\u5dee\u5f02"),(0,l.kt)("p",null,"\u5728 Rancher 2.5.x \u4e2d\uff0c\u5206\u914d\u4e86 project-member \u6216 project-owner \u89d2\u8272\u7684\u7528\u6237\u5c06\u65e0\u6cd5\u8bbf\u95ee Prometheus \u6216 Grafana\uff0c\u56e0\u4e3a\u6211\u4eec\u4ec5\u5728\u96c6\u7fa4\u7ea7\u522b\u521b\u5efa Grafana \u6216 Prometheus\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\uff0c\u867d\u7136 project-owner \u4ecd\u7136\u53ea\u80fd\u6dfb\u52a0\u9ed8\u8ba4\u5728\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u5185\u6293\u53d6\u8d44\u6e90\u7684 ServiceMonitor/PodMonitor\uff0c\u4f46 PrometheusRule \u5e76\u4e0d\u5c40\u9650\u4e8e\u5355\u4e2a\u547d\u540d\u7a7a\u95f4/\u9879\u76ee\u3002\u56e0\u6b64\uff0c\u5373\u4f7f project-owner \u65e0\u6cd5\u67e5\u770b/\u7f16\u8f91/\u5220\u9664\u5728\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e4b\u5916\u521b\u5efa\u7684\u4efb\u4f55\u89c4\u5219\uff0cproject-owner \u5728\u5176\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u5185\u521b\u5efa\u7684\u4efb\u4f55\u544a\u8b66\u89c4\u5219\u6216\u8bb0\u5f55\u89c4\u5219\u90fd\u5c06\u5e94\u7528\u4e8e\u6574\u4e2a\u96c6\u7fa4\u3002"),(0,l.kt)("h3",{id:"\u5206\u914d\u5176\u4ed6\u8bbf\u95ee\u6743\u9650"},"\u5206\u914d\u5176\u4ed6\u8bbf\u95ee\u6743\u9650"),(0,l.kt)("p",null,"\u5982\u679c cluster-admin \u60f3\u8981\u4e3a\u4e0d\u5177\u6709 rancher-monitoring chart \u89d2\u8272\u7684\u7528\u6237\u63d0\u4f9b admin/edit \u8bbf\u95ee\u6743\u9650\uff0c\u5219\u5b58\u5728\u4e0b\u8868\u7684\u6f5c\u5728\u5f71\u54cd\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"CRD (monitoring.coreos.com)"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f1a\u5728\u547d\u540d\u7a7a\u95f4/\u9879\u76ee\u4e4b\u5916\u9020\u6210\u5f71\u54cd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f71\u54cd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheuses")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u3002\u8be5\u8d44\u6e90\u53ef\u4ee5\u4ece\u6574\u4e2a\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u76ee\u6807\u4e2d\u6293\u53d6\u6307\u6807\uff08\u9664\u975e Operator \u672c\u8eab\u8fdb\u884c\u4e86\u989d\u5916\u7684\u914d\u7f6e\uff09\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u5b9a\u4e49\u5e94\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u65b0\u96c6\u7fa4\u7ea7 Prometheus deployment \u7684\u914d\u7f6e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"alertmanagers")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u5b9a\u4e49\u5e94\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u65b0\u96c6\u7fa4\u7ea7 Alertmanager deployment \u7684\u914d\u7f6e\u3002\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u53ea\u60f3\u5141\u8bb8\u7528\u6237\u914d\u7f6e\u8def\u7531\u548c\u63a5\u6536\u5668\u7b49\u8bbe\u7f6e\uff0c\u4f60\u5e94\u8be5\u53ea\u63d0\u4f9b\u5bf9 Alertmanager Config Secret \u7684\u8bbf\u95ee\u6743\u9650\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"servicemonitors")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"podmonitors")))),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426\uff08\u9ed8\u8ba4\uff09\u3002\u53ef\u4ee5\u901a\u8fc7 Prometheus CR \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"ignoreNamespaceSelectors")," \u8fdb\u884c\u914d\u7f6e\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u901a\u8fc7 Prometheus\uff0c\u5728\u4ed6\u4eec\u88ab\u6388\u4e88\u6b64\u6743\u9650\u7684\u547d\u540d\u7a7a\u95f4\u5185\u7684 Service/Pod \u66b4\u9732\u7684\u7aef\u70b9\u4e0a\u8bbe\u7f6e\u6293\u53d6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"prometheusrules")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u3002PrometheusRules \u662f\u96c6\u7fa4\u8303\u56f4\u7684\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u6839\u636e\u5728\u6574\u4e2a\u96c6\u7fa4\u4e2d\u6536\u96c6\u7684\u4efb\u4f55\u7cfb\u5217\uff0c\u5728 Prometheus \u4e0a\u5b9a\u4e49\u544a\u8b66\u6216\u8bb0\u5f55\u89c4\u5219\u3002")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"K8s \u8d44\u6e90"),(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u540d\u7a7a\u95f4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u4f1a\u5728\u547d\u540d\u7a7a\u95f4/\u9879\u76ee\u4e4b\u5916\u9020\u6210\u5f71\u54cd"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f71\u54cd"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"secrets")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cattle-monitoring-system")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Config \u548c Secret \u4f1a\u5f71\u54cd\u6574\u4e2a\u76d1\u63a7/\u544a\u8b66\u6d41\u6c34\u7ebf\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u521b\u5efa\u6216\u7f16\u8f91 Secret/ ConfigMap\uff0c\u4f8b\u5982 Alertmanager Config\u3001Prometheus Adapter \u914d\u7f6e\u3001TLS \u5bc6\u6587\u3001\u5176\u4ed6 Grafana \u6570\u636e\u6e90\u7b49\u3002\u8fd9\u4f1a\u5bf9\u6240\u6709\u96c6\u7fa4\u76d1\u63a7/\u544a\u8b66\u4ea7\u751f\u5e7f\u6cdb\u5f71\u54cd\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"secrets")),(0,l.kt)("li",null,(0,l.kt)("inlineCode",{parentName:"td"},"configmaps")))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cattle-dashboards")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u3002\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Config \u548c Secret \u53ef\u4ee5\u521b\u5efa\u4eea\u8868\u677f\uff0c\u5bf9\u5728\u96c6\u7fa4\u7ea7\u522b\u6536\u96c6\u7684\u6240\u6709\u6307\u6807\u8fdb\u884c\u67e5\u8be2\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5c06\u80fd\u591f\u521b\u5efa\u4ec5\u4fdd\u7559\u65b0 Grafana \u4eea\u8868\u677f\u7684 Secret/ConfigMap\u3002")))),(0,l.kt)("h2",{id:"grafana-\u7684-rbac"},"Grafana \u7684 RBAC"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7ecf\u8fc7 Kubernetes \u8ba4\u8bc1\u5e76\u53ef\u4ee5\u8bbf\u95ee Rancher Monitoring Chart \u90e8\u7f72\u7684 Grafana \u670d\u52a1\u7684\u4efb\u4f55\u7528\u6237\uff0cRancher \u5141\u8bb8\u4ed6\u4eec\u901a\u8fc7 Rancher Dashboard UI \u8bbf\u95ee Grafana\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u80fd\u591f\u8bbf\u95ee Grafana \u7684\u7528\u6237\u90fd\u88ab\u8d4b\u4e88 ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#viewer-role"},"Viewer")," \u89d2\u8272\uff0c\u80fd\u67e5\u770b Rancher \u90e8\u7f72\u7684\u4efb\u4f55\u9ed8\u8ba4\u4eea\u8868\u677f\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u6709\u9700\u8981\u7684\u8bdd\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/permissions/organization_roles/#admin-role"},"Admin")," \u8eab\u4efd\u767b\u5f55 Grafana\u3002Grafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"prom-operator"),"\uff0c\u4f46\u4f60\u4e5f\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002"),(0,l.kt)("p",null,"\u8981\u67e5\u770b Grafana UI\uff0c\u8bf7\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002\u7136\u540e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u53ef\u89c6\u5316\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Grafana"),"\u3002")),(0,l.kt)("figcaption",null,"Grafana \u4e2d\u7684\u96c6\u7fa4\u8ba1\u7b97\u8d44\u6e90\u4eea\u8868\u677f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Grafana \u4e2d\u7684\u96c6\u7fa4\u8ba1\u7b97\u8d44\u6e90\u4eea\u8868\u677f",src:n(20507).Z,width:"2234",height:"1718"})),(0,l.kt)("figcaption",null,"Grafana \u4e2d\u7684\u9ed8\u8ba4\u4eea\u8868\u677f"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Grafana \u4e2d\u7684\u9ed8\u8ba4\u4eea\u8868\u677f",src:n(89986).Z,width:"1305",height:"1106"})))}g.isMDXComponent=!0},20507:function(t,e,n){e.Z=n.p+"assets/images/cluster-compute-resources-dashboard-025b46a16d139fbae87db2a94461b808.png"},89986:function(t,e,n){e.Z=n.p+"assets/images/grafana-default-dashboard-957af33a50c22962b8accddd50b2a85e.png"}}]);