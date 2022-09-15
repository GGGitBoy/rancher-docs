"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37200],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69243:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"2. Install Kubernetes with RKE",weight:190,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/kubernetes-rke","/rancher/v2.x/en/installation/resources/advanced/helm2/kubernetes-rke/"]},s=void 0,u={unversionedId:"pages-for-subheaders/helm2-kubernetes-rke",id:"version-2.0-2.4/pages-for-subheaders/helm2-kubernetes-rke",title:"2. Install Kubernetes with RKE",description:"Use RKE to install Kubernetes with a high availability etcd configuration.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-kubernetes-rke.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/helm2-kubernetes-rke",permalink:"/v2.0-v2.4/pages-for-subheaders/helm2-kubernetes-rke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/helm2-kubernetes-rke.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"2. Install Kubernetes with RKE",weight:190,aliases:["/rancher/v2.0-v2.4/en/installation/options/helm2/kubernetes-rke","/rancher/v2.x/en/installation/resources/advanced/helm2/kubernetes-rke/"]},sidebar:"tutorialSidebar",previous:{title:"Amazon NLB",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/create-nodes-lb/nlb"},next:{title:"Troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting"}},d={},c=[{value:"Create the <code>rancher-cluster.yml</code> File",id:"create-the-rancher-clusteryml-file",level:3},{value:"Common RKE Nodes Options",id:"common-rke-nodes-options",level:4},{value:"Advanced Configurations",id:"advanced-configurations",level:4},{value:"Run RKE",id:"run-rke",level:3},{value:"Testing Your Cluster",id:"testing-your-cluster",level:3},{value:"Check the Health of Your Cluster Pods",id:"check-the-health-of-your-cluster-pods",level:3},{value:"Save Your Files",id:"save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Initialize Helm (Install tiller)",id:"next-initialize-helm-install-tiller",level:3}],p={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Use RKE to install Kubernetes with a high availability etcd configuration."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," For systems without direct internet access see ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/air-gap-helm2"},"Air Gap: Kubernetes install")," for install details.")),(0,l.kt)("h3",{id:"create-the-rancher-clusteryml-file"},"Create the ",(0,l.kt)("inlineCode",{parentName:"h3"},"rancher-cluster.yml")," File"),(0,l.kt)("p",null,"Using the sample below create the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file. Replace the IP Addresses in the ",(0,l.kt)("inlineCode",{parentName:"p"},"nodes")," list with the IP address or DNS names of the 3 nodes you created."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),"  If your node has public and internal addresses, it is recommended to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_address:")," so Kubernetes will use it for intra-cluster communication.  Some services like AWS EC2 require setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"internal_address:")," if you want to use self-referencing security groups or firewalls.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n  - address: 165.227.114.63\n    internal_address: 172.16.22.12\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 165.227.116.167\n    internal_address: 172.16.32.37\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 165.227.127.226\n    internal_address: 172.16.42.73\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n")),(0,l.kt)("h4",{id:"common-rke-nodes-options"},"Common RKE Nodes Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"The public DNS or IP address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"user")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"A user that can run docker commands")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"role")),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"The private DNS or IP address for internal cluster traffic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to SSH private key used to authenticate to the node (defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),")")))),(0,l.kt)("h4",{id:"advanced-configurations"},"Advanced Configurations"),(0,l.kt)("p",null,"RKE has many configuration options for customizing the install to suit your specific environment."),(0,l.kt)("p",null,"Please see the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE Documentation")," for the full list of options and capabilities."),(0,l.kt)("p",null,"For tuning your etcd cluster for larger Rancher installations see the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},"etcd settings guide"),"."),(0,l.kt)("h3",{id:"run-rke"},"Run RKE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,l.kt)("p",null,"When finished, it should end with the line: ",(0,l.kt)("inlineCode",{parentName:"p"},"Finished building Kubernetes cluster successfully"),"."),(0,l.kt)("h3",{id:"testing-your-cluster"},"Testing Your Cluster"),(0,l.kt)("p",null,"RKE should have created a file ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),". This file has the credentials for ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," If you have used a different file name from ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", then the kube config file will be named ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_<FILE_NAME>.yml"),".")),(0,l.kt)("p",null,"You can copy this file to ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," or if you are working with multiple Kubernetes clusters, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to the path of ",(0,l.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_rancher-cluster.yml\n")),(0,l.kt)("p",null,"Test your connectivity with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and see if all your nodes are in ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get nodes\n\nNAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.13.5\n")),(0,l.kt)("h3",{id:"check-the-health-of-your-cluster-pods"},"Check the Health of Your Cluster Pods"),(0,l.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pods are in ",(0,l.kt)("inlineCode",{parentName:"li"},"Running")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Completed")," state."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"READY")," column shows all the containers are running (i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"3/3"),") for pods with ",(0,l.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Running")),(0,l.kt)("li",{parentName:"ul"},"Pods with ",(0,l.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Completed")," are run-once Jobs. For these pods ",(0,l.kt)("inlineCode",{parentName:"li"},"READY")," should be ",(0,l.kt)("inlineCode",{parentName:"li"},"0/1"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n\nNAMESPACE       NAME                                      READY     STATUS      RESTARTS   AGE\ningress-nginx   nginx-ingress-controller-tnsn4            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-tw2ht            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-v874b            1/1       Running     0          30s\nkube-system     canal-jp4hz                               3/3       Running     0          30s\nkube-system     canal-z2hg8                               3/3       Running     0          30s\nkube-system     canal-z6kpw                               3/3       Running     0          30s\nkube-system     kube-dns-7588d5b5f5-sf4vh                 3/3       Running     0          30s\nkube-system     kube-dns-autoscaler-5db9bbb766-jz2k6      1/1       Running     0          30s\nkube-system     metrics-server-97bc649d5-4rl2q            1/1       Running     0          30s\nkube-system     rke-ingress-controller-deploy-job-bhzgm   0/1       Completed   0          30s\nkube-system     rke-kubedns-addon-deploy-job-gl7t4        0/1       Completed   0          30s\nkube-system     rke-metrics-addon-deploy-job-7ljkc        0/1       Completed   0          30s\nkube-system     rke-network-plugin-deploy-job-6pbgj       0/1       Completed   0          30s\n")),(0,l.kt)("h3",{id:"save-your-files"},"Save Your Files"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Important"),"\nThe files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,l.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains credentials for full access to the cluster.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,l.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/kubernetes-rke/troubleshooting"},"Troubleshooting")," page."),(0,l.kt)("h3",{id:"next-initialize-helm-install-tiller"},(0,l.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"Next: Initialize Helm (Install tiller)")))}k.isMDXComponent=!0}}]);