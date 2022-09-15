"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27349],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89654:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Ingress Configuration",description:"Ingress configuration",weight:9999},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",title:"Ingress Configuration",description:"Ingress configuration",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/ingress-configuration.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Ingress Configuration",description:"Ingress configuration",weight:9999},sidebar:"tutorialSidebar",previous:{title:"Adding Ingresses",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},next:{title:"Services",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"}},u={},d=[{value:"NGINX Ingress controller changes in Kubernetes v1.21",id:"nginx-ingress-controller-changes-in-kubernetes-v121",level:3},{value:"Specify a hostname to use",id:"specify-a-hostname-to-use",level:3},{value:"Certificates",id:"certificates",level:3},{value:"Labels and Annotations",id:"labels-and-annotations",level:3}],p={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"nginx-ingress-controller-changes-in-kubernetes-v121"},"NGINX Ingress controller changes in Kubernetes v1.21"),(0,o.kt)("p",null,"For Kubernetes v1.21 and up, the NGINX Ingress controller no longer runs in hostNetwork but uses hostPorts for port 80 and port 443. This was done so the admission webhook can be configured to be accessed using ClusterIP so it can only be reached inside the cluster."),(0,o.kt)("h1",{id:"ingress-rule-configuration"},"Ingress Rule Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#specify-a-hostname-to-use"},"Specify a hostname to use")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-as-the-default-backend"},"Use as the default backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#certificates"},"Certificates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#labels-and-annotations"},"Labels and Annotations"))),(0,o.kt)("h3",{id:"specify-a-hostname-to-use"},"Specify a hostname to use"),(0,o.kt)("p",null,"If you use this option, ingress routes requests for a hostname to the service or workload that you specify."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Request Host")," that your ingress will handle request forwarding for. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Target Service"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Optional:")," If you want specify a workload or service when a request is sent to a particular hostname path, add a ",(0,o.kt)("strong",{parentName:"li"},"Path")," for the target. For example, if you want requests for ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com/contact-us")," to be sent to a different service than ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),", enter ",(0,o.kt)("inlineCode",{parentName:"li"},"/contact-us")," in the ",(0,o.kt)("strong",{parentName:"li"},"Path")," field. Typically, the first rule that you create does not include a path."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Port")," number that each target operates on.")),(0,o.kt)("h3",{id:"certificates"},"Certificates"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You must have an SSL certificate that the ingress can use to encrypt/decrypt communications. For more information see ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Adding SSL Certificates"),"."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When creating an ingress, click the ",(0,o.kt)("strong",{parentName:"li"},"Certificates")," tab."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Certificate"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a ",(0,o.kt)("strong",{parentName:"li"},"Certificate - Secret Name")," from the drop-down list."),(0,o.kt)("li",{parentName:"ol"},"Enter the host using encrypted communication."),(0,o.kt)("li",{parentName:"ol"},"To add additional hosts that use the certificate, click ",(0,o.kt)("strong",{parentName:"li"},"Add Hosts"),".")),(0,o.kt)("h3",{id:"labels-and-annotations"},"Labels and Annotations"),(0,o.kt)("p",null,"Add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Labels")," and/or ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"Annotations")," to provide metadata for your ingress."),(0,o.kt)("p",null,"For a list of annotations available for use, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"Nginx Ingress Controller Documentation"),"."))}g.isMDXComponent=!0}}]);