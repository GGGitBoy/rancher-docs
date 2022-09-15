"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45413],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Helm Chart Options",weight:8},s=void 0,u={unversionedId:"reference-guides/monitoring-v2-configuration/helm-chart-options",id:"reference-guides/monitoring-v2-configuration/helm-chart-options",title:"Helm Chart Options",description:"Configuring Resource Limits and Requests",source:"@site/docs/reference-guides/monitoring-v2-configuration/helm-chart-options.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/helm-chart-options",permalink:"/reference-guides/monitoring-v2-configuration/helm-chart-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/helm-chart-options.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Helm Chart Options",weight:8},sidebar:"tutorialSidebar",previous:{title:"ServiceMonitor and PodMonitor Configuration",permalink:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},next:{title:"Examples",permalink:"/reference-guides/monitoring-v2-configuration/examples"}},p={},c=[{value:"Configuring Resource Limits and Requests",id:"configuring-resource-limits-and-requests",level:2},{value:"Trusted CA for Notifiers",id:"trusted-ca-for-notifiers",level:2},{value:"Additional Scrape Configurations",id:"additional-scrape-configurations",level:2},{value:"Configuring Applications Packaged within Monitoring v2",id:"configuring-applications-packaged-within-monitoring-v2",level:2},{value:"Increase the Replicas of Alertmanager",id:"increase-the-replicas-of-alertmanager",level:3},{value:"Configuring the Namespace for a Persistent Grafana Dashboard",id:"configuring-the-namespace-for-a-persistent-grafana-dashboard",level:3}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuring-resource-limits-and-requests"},"Configuring Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"."),(0,i.kt)("p",null,"The default values are in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/values.yaml"},"values.yaml")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart."),(0,i.kt)("p",null,"The default values in the table below are the minimum required resource limits and requests."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resource Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Memory Limit"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU Limit"),(0,i.kt)("th",{parentName:"tr",align:null},"Memory Request"),(0,i.kt)("th",{parentName:"tr",align:null},"CPU Request"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"alertmanager"),(0,i.kt)("td",{parentName:"tr",align:null},"500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"1000m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grafana"),(0,i.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kube-state-metrics subchart"),(0,i.kt)("td",{parentName:"tr",align:null},"200Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m"),(0,i.kt)("td",{parentName:"tr",align:null},"130Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheus-node-exporter subchart"),(0,i.kt)("td",{parentName:"tr",align:null},"50Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"30Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheusOperator"),(0,i.kt)("td",{parentName:"tr",align:null},"500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"200m"),(0,i.kt)("td",{parentName:"tr",align:null},"100Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"100m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"prometheus"),(0,i.kt)("td",{parentName:"tr",align:null},"2500Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"1000m"),(0,i.kt)("td",{parentName:"tr",align:null},"1750Mi"),(0,i.kt)("td",{parentName:"tr",align:null},"750m")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Total")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"3950Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2700m")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"2210Mi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"1250m"))))),(0,i.kt)("p",null,"At least 50Gi storage is recommended."),(0,i.kt)("h2",{id:"trusted-ca-for-notifiers"},"Trusted CA for Notifiers"),(0,i.kt)("p",null,"If you need to add a trusted CA to your notifier, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace."),(0,i.kt)("li",{parentName:"ol"},"Add your trusted CA secret to the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace."),(0,i.kt)("li",{parentName:"ol"},"Deploy or upgrade the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-monitoring")," Helm chart. In the chart options, reference the secret in ",(0,i.kt)("strong",{parentName:"li"},"Alerting > Additional Secrets"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The default Alertmanager custom resource will have access to your trusted CA."),(0,i.kt)("h2",{id:"additional-scrape-configurations"},"Additional Scrape Configurations"),(0,i.kt)("p",null,"If the scrape configuration you want cannot be specified via a ServiceMonitor or PodMonitor at the moment, you can provide an ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalScrapeConfigSecret")," on deploying or upgrading ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config"},"scrape_config section")," specifies a set of targets and parameters describing how to scrape them. In the general case, one scrape configuration specifies a single job."),(0,i.kt)("p",null,"An example of where this might be used is with Istio. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"this section.")),(0,i.kt)("h2",{id:"configuring-applications-packaged-within-monitoring-v2"},"Configuring Applications Packaged within Monitoring v2"),(0,i.kt)("p",null,"We deploy kube-state-metrics and node-exporter with monitoring v2. Node exporter are deployed as DaemonSets. In the monitoring v2 helm chart, in the values.yaml, each of the things are deployed as sub charts."),(0,i.kt)("p",null,"We also deploy grafana which is not managed by prometheus."),(0,i.kt)("p",null,"If you look at what the helm chart is doing like in kube-state-metrics, there are plenty more values that you can set that aren\u2019t exposed in the top level chart. "),(0,i.kt)("p",null,"But in the top level chart you can add values that override values that exist in the sub chart."),(0,i.kt)("h3",{id:"increase-the-replicas-of-alertmanager"},"Increase the Replicas of Alertmanager"),(0,i.kt)("p",null,"As part of the chart deployment options, you can opt to increase the number of replicas of the Alertmanager deployed onto your cluster. The replicas can all be managed using the same underlying Alertmanager Config Secret. For more information on the Alertmanager Config Secret, refer to ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#multiple-alertmanager-replicas"},"this section.")),(0,i.kt)("h3",{id:"configuring-the-namespace-for-a-persistent-grafana-dashboard"},"Configuring the Namespace for a Persistent Grafana Dashboard"),(0,i.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, set this value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,i.kt)("p",null,"Note that the RBAC roles exposed by the Monitoring chart to add Grafana Dashboards are still restricted to giving permissions for users to add dashboards in the namespace defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace"),", which defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),"."))}d.isMDXComponent=!0}}]);