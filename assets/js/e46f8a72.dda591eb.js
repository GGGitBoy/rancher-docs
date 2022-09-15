"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87439],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16221:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"5. Set up Istio's Components for Traffic Management",weight:6},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",id:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",title:"5. Set up Istio's Components for Traffic Management",description:"A central advantage of traffic management in Istio is that it allows dynamic request routing. Some common applications for dynamic request routing include canary deployments and blue/green deployments. The two key resources in Istio traffic management are virtual services and destination rules.",source:"@site/docs/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"5. Set up Istio's Components for Traffic Management",weight:6},sidebar:"tutorialSidebar",previous:{title:"4. Set up the Istio Gateway",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},next:{title:"6. Generate and View Traffic",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"}},c={},u=[{value:"Next: Generate and View Traffic",id:"next-generate-and-view-traffic",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A central advantage of traffic management in Istio is that it allows dynamic request routing. Some common applications for dynamic request routing include canary deployments and blue/green deployments. The two key resources in Istio traffic management are ",(0,i.kt)("em",{parentName:"p"},"virtual services")," and ",(0,i.kt)("em",{parentName:"p"},"destination rules"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Virtual services")," intercept and direct traffic to your Kubernetes services, allowing you to divide percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule/"},"Destination rules")," serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred.")),(0,i.kt)("p",null,"This section describes how to add an example virtual service that corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," microservice in the sample BookInfo app. The purpose of this service is to divide traffic between two versions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service."),(0,i.kt)("p",null,"In this example, we take the traffic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service and intercept it so that 50 percent of it goes to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," of the service and 50 percent goes to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),"."),(0,i.kt)("p",null,"After this virtual service is deployed, we will generate traffic and see from the Kiali visualization that traffic is being routed evenly between the two versions of the service."),(0,i.kt)("p",null,"To deploy the virtual service and destination rules for the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to the cluster where Istio is installed and click ",(0,i.kt)("strong",{parentName:"p"},"Explore"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the cluster where Istio is installed, click ",(0,i.kt)("strong",{parentName:"p"},"Istio > DestinationRules")," in the left navigation bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the DestinationRule yaml provided below.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Edit as YAML")," and use this configuration:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: DestinationRule\nmetadata:\n  name: reviews\nspec:\n  host: reviews\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n  - name: v2\n    labels:\n      version: v2\n  - name: v3\n    labels:\n      version: v3\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."))),(0,i.kt)("p",null,"Then to deploy the VirtualService that provides the traffic routing that utilizes the DestinationRule:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"VirtualService")," in the side nav bar."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create from Yaml"),"."),(0,i.kt)("li",{parentName:"ol"},"Copy and paste the VirtualService yaml provided below."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: reviews\nspec:\n  hosts:\n  - reviews\n  http:\n  - route:\n    - destination:\n        host: reviews\n        subset: v1\n      weight: 50\n    - destination:\n        host: reviews\n        subset: v3\n      weight: 50\n---\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," When you generate traffic to this service (for example, by refreshing the ingress gateway URL), the Kiali traffic graph will reflect that traffic to the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service is divided evenly between ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v3"),"."),(0,i.kt)("h3",{id:"next-generate-and-view-traffic"},(0,i.kt)("a",{parentName:"h3",href:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic"},"Next: Generate and View Traffic")))}f.isMDXComponent=!0}}]);