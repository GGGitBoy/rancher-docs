"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42760],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||l[f]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"6. Generate and View Traffic",weight:7},c=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",id:"how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",title:"6. Generate and View Traffic",description:"This section describes how to view the traffic that is being managed by Istio.",source:"@site/docs/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/istio-setup-guide/generate-and-view-traffic.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"6. Generate and View Traffic",weight:7},sidebar:"tutorialSidebar",previous:{title:"5. Set up Istio's Components for Traffic Management",permalink:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},next:{title:"CIS Scan Guides",permalink:"/pages-for-subheaders/cis-scan-guides"}},d={},l=[],p={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to view the traffic that is being managed by Istio."),(0,i.kt)("h1",{id:"the-kiali-traffic-graph"},"The Kiali Traffic Graph"),(0,i.kt)("p",null,"The Istio overview page provides a link to the Kiali dashboard. From the Kiali dashboard, you are able to view graphs for each namespace. The Kiali graph provides a powerful way to visualize the topology of your Istio service mesh. It shows you which services communicate with each other."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To enable traffic to show up in the graph, ensure you have prometheus installed in the cluster. Rancher-istio installs Kiali configured by default to work with the rancher-monitoring chart. You can use rancher-monitoring or install your own monitoring solution. Optional: you can change configuration on how data scraping occurs by setting the ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"Selectors & Scrape Configs")," options."))),(0,i.kt)("p",null,"To see the traffic graph,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the cluster where Istio is installed, click ",(0,i.kt)("strong",{parentName:"li"},"Istio")," in the left navigation bar."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Kiali")," link."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Graph")," in the side nav."),(0,i.kt)("li",{parentName:"ol"},"Change the namespace in the ",(0,i.kt)("strong",{parentName:"li"},"Namespace")," dropdown to view the traffic for each namespace. ")),(0,i.kt)("p",null,"If you refresh the URL to the BookInfo app several times, you should be able to see green arrows on the Kiali graph showing traffic to ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v3")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviews")," service. The control panel on the right side of the graph lets you configure details including how many minutes of the most recent traffic should be shown on the graph."),(0,i.kt)("p",null,"For additional tools and visualizations, you can go to Grafana, and Prometheus dashboards from the ",(0,i.kt)("strong",{parentName:"p"},"Monitoring")," ",(0,i.kt)("strong",{parentName:"p"},"Overview")," page"))}f.isMDXComponent=!0}}]);