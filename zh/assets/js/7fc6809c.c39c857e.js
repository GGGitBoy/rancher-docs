"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23557],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||p[k]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),i=["components"],o={title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528 K3s Kubernetes \u96c6\u7fa4",shortTitle:"\u4e3a Rancher \u914d\u7f6e K3s",weight:2},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",id:"how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528 K3s Kubernetes \u96c6\u7fa4",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u6839\u636e Rancher Server \u73af\u5883\u7684\u6700\u4f73\u5b9e\u8df5\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"\u4e3a Rancher \u8bbe\u7f6e\u9ad8\u53ef\u7528 K3s Kubernetes \u96c6\u7fa4",shortTitle:"\u4e3a Rancher \u914d\u7f6e K3s",weight:2},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u53ef\u7528\u5b89\u88c5",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/high-availability-installs"},next:{title:"\u914d\u7f6e\u9ad8\u53ef\u7528\u7684 RKE Kubernetes \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher"}},c={},p=[{value:"1. \u5b89\u88c5 Kubernetes \u5e76\u8bbe\u7f6e K3s Server",id:"1-\u5b89\u88c5-kubernetes-\u5e76\u8bbe\u7f6e-k3s-server",level:3},{value:"2. \u786e\u8ba4 K3s \u6b63\u5728\u8fd0\u884c",id:"2-\u786e\u8ba4-k3s-\u6b63\u5728\u8fd0\u884c",level:3},{value:"3. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6",id:"3-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6",level:3},{value:"4. \u68c0\u67e5\u96c6\u7fa4 Pod \u7684\u5065\u5eb7\u72b6\u51b5",id:"4-\u68c0\u67e5\u96c6\u7fa4-pod-\u7684\u5065\u5eb7\u72b6\u51b5",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u6839\u636e ",(0,s.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations#kubernetes-%E5%AE%89%E8%A3%85%E7%8E%AF%E5%A2%83"},"Rancher Server \u73af\u5883\u7684\u6700\u4f73\u5b9e\u8df5"),"\u5b89\u88c5 Kubernetes \u96c6\u7fa4\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7cfb\u7edf\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u8bf7\u53c2\u89c1\u79bb\u7ebf\u5b89\u88c5\u8bf4\u660e\u3002"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5355\u8282\u70b9\u5b89\u88c5\u63d0\u793a\uff1a")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5728\u5355\u8282\u70b9 Kubernetes \u96c6\u7fa4\u4e2d\uff0cRancher Server \u4e0d\u5177\u5907\u9ad8\u53ef\u7528\u6027\uff0c\u800c\u9ad8\u53ef\u7528\u6027\u5bf9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c Rancher \u975e\u5e38\u91cd\u8981\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u8981\u77ed\u671f\u5185\u4f7f\u7528\u5355\u8282\u70b9\u8282\u7701\u8d44\u6e90\uff0c\u540c\u65f6\u53c8\u4fdd\u7559\u9ad8\u53ef\u7528\u6027\u8fc1\u79fb\u8def\u5f84\uff0c\u628a Rancher \u5b89\u88c5\u5230\u5355\u8282\u70b9\u96c6\u7fa4\u4e5f\u662f\u5408\u9002\u7684\u3002"),(0,s.kt)("p",{parentName:"div"},"\u8981\u914d\u7f6e\u5355\u8282\u70b9 K3s \u96c6\u7fa4\uff0c\u4f60\u53ea\u9700\u8981\u5728\u5355\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c Rancher Server \u5b89\u88c5\u547d\u4ee4\uff08\u4e0d\u9700\u8981\u5728\u4e24\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u547d\u4ee4\uff09\u3002"),(0,s.kt)("p",{parentName:"div"},"\u5728\u8fd9\u4e24\u79cd\u5355\u8282\u70b9\u8bbe\u7f6e\u4e2d\uff0cRancher \u53ef\u4ee5\u4e0e Helm \u4e00\u8d77\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5b89\u88c5\u65b9\u6cd5\u4e0e\u5b89\u88c5\u5230\u5176\u4ed6\u96c6\u7fa4\u4e0a\u4e00\u6837\u3002"))),(0,s.kt)("h1",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster"},"\u6b64\u7ae0\u8282"),"\u914d\u7f6e\u597d\u4e24\u4e2a\u8282\u70b9\uff0c\u4e00\u4e2a\u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u4e00\u4e2a DNS \u8bb0\u5f55\u548c\u4e00\u4e2a\u5916\u90e8 MySQL \u6570\u636e\u5e93\u3002"),(0,s.kt)("p",null,"Rancher \u9700\u8981\u5b89\u88c5\u5728\u652f\u6301\u7684 Kubernetes \u7248\u672c\u4e0a\u3002\u5982\u9700\u4e86\u89e3\u4f60\u4f7f\u7528\u7684 Rancher \u7248\u672c\u652f\u6301\u54ea\u4e9b Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u7ef4\u62a4\u6761\u6b3e"),"\u3002\u5982\u9700\u6307\u5b9a K3s \u7248\u672c\uff0c\u8bf7\u5728\u8fd0\u884c K3s \u5b89\u88c5\u811a\u672c\u65f6\uff0c\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_VERSION")," \u73af\u5883\u53d8\u91cf\u3002"),(0,s.kt)("h1",{id:"\u5b89\u88c5-kubernetes"},"\u5b89\u88c5 Kubernetes"),(0,s.kt)("h3",{id:"1-\u5b89\u88c5-kubernetes-\u5e76\u8bbe\u7f6e-k3s-server"},"1. \u5b89\u88c5 Kubernetes \u5e76\u8bbe\u7f6e K3s Server"),(0,s.kt)("p",null,"\u5728\u8fd0\u884c\u542f\u52a8 K3s Kubernetes API Server \u7684\u547d\u4ee4\u65f6\uff0c\u4f60\u4f1a\u4f20\u5165\u4f7f\u7528\u4e4b\u524d\u8bbe\u7f6e\u7684\u5916\u90e8\u6570\u636e\u5b58\u50a8\u7684\u9009\u9879\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u8fde\u63a5\u5230\u4f60\u51c6\u5907\u7528\u4e8e\u8fd0\u884c Rancher Server \u7684\u5176\u4e2d\u4e00\u4e2a Linux \u8282\u70b9\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728 Linux \u8282\u70b9\u4e0a\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8 K3s Server\uff0c\u5e76\u5c06\u5176\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5b58\u50a8\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl -sfL https://get.k3s.io | sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("p",null,"\u8981\u6307\u5b9a K3s \u7248\u672c\uff0c\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"INSTALL_K3S_VERSION")," \u73af\u5883\u53d8\u91cf\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -sfL https://get.k3s.io |  INSTALL_K3S_VERSION=vX.Y.Z sh -s - server \\\n  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"\n')),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff1a\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"$K3S_DATASTORE_ENDPOINT")," \u73af\u5883\u53d8\u91cf\u6765\u4f20\u9012\u6570\u636e\u5b58\u50a8\u7aef\u70b9\u3002"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5728\u7b2c\u4e8c\u4e2a K3s Server \u8282\u70b9\u4e0a\u8fd0\u884c\u540c\u6837\u7684\u547d\u4ee4\u3002")),(0,s.kt)("h3",{id:"2-\u786e\u8ba4-k3s-\u6b63\u5728\u8fd0\u884c"},"2. \u786e\u8ba4 K3s \u6b63\u5728\u8fd0\u884c"),(0,s.kt)("p",null,"\u5728\u5176\u4e2d\u4e00\u4e2a K3s Server \u8282\u70b9\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u6765\u786e\u8ba4 K3s \u662f\u5426\u5df2\u7ecf\u8bbe\u7f6e\u6210\u529f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get nodes\n")),(0,s.kt)("p",null,"\u7136\u540e\u4f60\u4f1a\u770b\u5230\u4e24\u4e2a\u5177\u6709 master \u89d2\u8272\u7684\u8282\u70b9\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo k3s kubectl get nodes\nNAME               STATUS   ROLES    AGE    VERSION\nip-172-31-60-194   Ready    master   44m    v1.17.2+k3s1\nip-172-31-63-88    Ready    master   6m8s   v1.17.2+k3s1\n")),(0,s.kt)("p",null,"\u6d4b\u8bd5\u96c6\u7fa4 Pod \u7684\u5065\u5eb7\u72b6\u51b5\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo k3s kubectl get pods --all-namespaces\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u5df2\u6210\u529f\u914d\u7f6e\u4e00\u4e2a K3s Kubernetes \u96c6\u7fa4\u3002"),(0,s.kt)("h3",{id:"3-\u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528-kubeconfig-\u6587\u4ef6"},"3. \u4fdd\u5b58\u5e76\u5f00\u59cb\u4f7f\u7528 kubeconfig \u6587\u4ef6"),(0,s.kt)("p",null,"\u4f60\u5728\u6bcf\u4e2a Rancher Server \u8282\u70b9\u4e0a\u5b89\u88c5 K3s \u65f6\uff0c\u4f1a\u5728\u6bcf\u4e2a\u8282\u70b9\u4e2d\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/k3s.yaml")," \u4f4d\u7f6e\u4e0a\u521b\u5efa\u4e00\u4e2a",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002\u8be5\u6587\u4ef6\u5305\u542b\u8bbf\u95ee\u96c6\u7fa4\u7684\u51ed\u8bc1\u3002\u8bf7\u5c06\u8be5\u6587\u4ef6\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u4f4d\u7f6e\u3002"),(0,s.kt)("p",null,"\u8981\u4f7f\u7528\u6b64 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5b89\u88c5 ",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl"),"\uff08Kubernetes \u547d\u4ee4\u884c\u5de5\u5177\uff09\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u590d\u5236 ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/rancher/k3s/k3s.yaml")," \u6587\u4ef6\u5e76\u4fdd\u5b58\u5230\u4f60\u672c\u5730\u4e3b\u673a\u7684 ",(0,s.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," \u76ee\u5f55\u4e2d\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728 ",(0,s.kt)("inlineCode",{parentName:"li"},"kubeconfig")," \u6587\u4ef6\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"li"},"server")," \u7684\u53c2\u6570\u4e3a localhost\u3002\u4f60\u9700\u8981\u5c06 ",(0,s.kt)("inlineCode",{parentName:"li"},"server")," \u914d\u7f6e\u4e3a\u8d1f\u8f7d\u5747\u8861\u5668\u7684 DNS\uff0c\u5e76\u6307\u5b9a\u7aef\u53e3 6443\uff08\u901a\u8fc7\u7aef\u53e3 6443 \u8bbf\u95ee Kubernetes API Server \u4f1a\u901a\u8fc7\u7aef\u53e3 6443\uff0c\u901a\u8fc7\u7aef\u53e3 80 \u548c 443 \u8bbf\u95ee Rancher Server\uff09\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"li"},"k3s.yaml")," \u793a\u4f8b\uff1a")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml"},"apiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: [CERTIFICATE-DATA]\n    server: [LOAD-BALANCER-DNS]:6443 # \u7f16\u8f91\u6b64\u884c\n  name: default\ncontexts:\n- context:\n    cluster: default\n    user: default\n  name: default\ncurrent-context: default\nkind: Config\npreferences: {}\nusers:\n- name: default\n  user:\n    password: [PASSWORD]\n    username: admin\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u7ba1\u7406\u4f60\u7684 K3s \u96c6\u7fa4\u3002\u5982\u679c\u4f60\u6709\u591a\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff0c\u5728\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u65f6\uff0c\u4f60\u53ef\u4ee5\u4f20\u5165\u6587\u4ef6\u8def\u5f84\u6765\u6307\u5b9a\u8981\u4f7f\u7528\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"kubectl --kubeconfig ~/.kube/config/k3s.yaml get pods --all-namespaces\n")),(0,s.kt)("p",null,"\u6709\u5173 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7684\u8be6\u60c5\uff0c\u8bf7\u53c2\u89c1 ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/cluster-access/"},"K3s \u5b98\u65b9\u6587\u6863")," \u6216 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"}," Kubernetes \u5b98\u65b9\u6587\u6863"),"\u4e2d\u5173\u4e8e\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u7ba1\u7406\u96c6\u7fa4\u8bbf\u95ee\u7684\u90e8\u5206\u3002"),(0,s.kt)("h3",{id:"4-\u68c0\u67e5\u96c6\u7fa4-pod-\u7684\u5065\u5eb7\u72b6\u51b5"},"4. \u68c0\u67e5\u96c6\u7fa4 Pod \u7684\u5065\u5eb7\u72b6\u51b5"),(0,s.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u8bbe\u7f6e\u4e86 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubeconfig")," \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5728\u672c\u5730\u4e3b\u673a\u8bbf\u95ee\u96c6\u7fa4\u3002"),(0,s.kt)("p",null,"\u68c0\u67e5\u6240\u6709\u9700\u8981\u7684 Pod \u548c\u5bb9\u5668\u662f\u5426\u5065\u5eb7\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ubuntu@ip-172-31-60-194:~$ sudo kubectl get pods --all-namespaces\nNAMESPACE       NAME                                      READY   STATUS    RESTARTS   AGE\nkube-system     metrics-server-6d684c7b5-bw59k            1/1     Running   0          8d\nkube-system     local-path-provisioner-58fb86bdfd-fmkvd   1/1     Running   0          8d\nkube-system     coredns-d798c9dd-ljjnf                    1/1     Running   0          8d\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u4f60\u53ef\u901a\u8fc7\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," \u8bbf\u95ee\u96c6\u7fa4\uff0c\u5e76\u4e14 K3s \u96c6\u7fa4\u80fd\u6210\u529f\u8fd0\u884c\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher Management Server\u3002"))}k.isMDXComponent=!0}}]);