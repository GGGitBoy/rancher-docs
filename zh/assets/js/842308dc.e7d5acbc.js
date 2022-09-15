"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9391],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32407:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",metaDescription:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-custom/","/rancher/v2.0-v2.4/en/cluster-provisioning/custom-clusters/"]},u=void 0,c={unversionedId:"pages-for-subheaders/use-existing-nodes",id:"version-2.0-2.4/pages-for-subheaders/use-existing-nodes",title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-existing-nodes.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-existing-nodes",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/use-existing-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/use-existing-nodes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Launching Kubernetes on Existing Custom Nodes",description:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",metaDescription:"To create a cluster with custom nodes, you\u2019ll need to access servers in your cluster and provision them according to Rancher requirements",weight:2225,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-custom/","/rancher/v2.0-v2.4/en/cluster-provisioning/custom-clusters/"]},sidebar:"tutorialSidebar",previous:{title:"RKE Cluster Configuration Reference",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},next:{title:"Rancher Agent Options",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/use-existing-nodes/rancher-agent-options"}},l={},p=[{value:"1. Provision a Linux Host",id:"1-provision-a-linux-host",level:3},{value:"2. Create the Custom Cluster",id:"2-create-the-custom-cluster",level:3},{value:"3. Amazon Only: Tag Resources",id:"3-amazon-only-tag-resources",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When you create a custom cluster, Rancher uses RKE (the Rancher Kubernetes Engine) to create a Kubernetes cluster in on-prem bare-metal servers, on-prem virtual machines, or in any node hosted by an infrastructure provider."),(0,a.kt)("p",null,"To use this option you'll need access to servers you intend to use in your Kubernetes cluster. Provision each server according to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"requirements"),", which includes some hardware specifications and Docker. After you install Docker on each server, you willl also run the command provided in the Rancher UI on each server to turn each one into a Kubernetes node."),(0,a.kt)("p",null,"This section describes how to set up a custom cluster."),(0,a.kt)("h1",{id:"creating-a-cluster-with-custom-nodes"},"Creating a Cluster with Custom Nodes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Want to use Windows hosts as Kubernetes workers?")),(0,a.kt)("p",{parentName:"blockquote"},"See ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"Configuring Custom Clusters for Windows")," before you start.")),(0,a.kt)("h3",{id:"1-provision-a-linux-host"},"1. Provision a Linux Host"),(0,a.kt)("p",null,"Begin creation of a custom cluster by provisioning a Linux host. Your host can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A cloud-host virtual machine (VM)"),(0,a.kt)("li",{parentName:"ul"},"An on-prem VM"),(0,a.kt)("li",{parentName:"ul"},"A bare-metal server")),(0,a.kt)("p",null,"If you want to reuse a node from a previous custom cluster, ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"clean the node")," before using it in a cluster again. If you reuse a node that hasn't been cleaned, cluster provisioning may fail."),(0,a.kt)("p",null,"Provision the host according to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"installation requirements")," and the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/checklist-for-production-ready-clusters"},"checklist for production-ready clusters.")),(0,a.kt)("h3",{id:"2-create-the-custom-cluster"},"2. Create the Custom Cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose ",(0,a.kt)("strong",{parentName:"p"},"Custom"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("strong",{parentName:"p"},"Cluster Options")," to choose the version of Kubernetes, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"p"},"Show advanced options.")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Using Windows nodes as Kubernetes workers?")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"Enable the Windows Support Option"),"."),(0,a.kt)("li",{parentName:"ul"},"The only Network Provider available for clusters with Windows support is Flannel.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{id:"step-6"}),"Click **Next**."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From ",(0,a.kt)("strong",{parentName:"p"},"Node Role"),", choose the roles that you want filled by a cluster node."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Using Windows nodes as Kubernetes workers? See ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"this section"),"."),(0,a.kt)("li",{parentName:"ul"},"Bare-Metal Server Reminder: If you plan on dedicating bare-metal servers to each role, you must provision a bare-metal server for each role (i.e. provision multiple bare-metal servers).")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{id:"step-8"}),"**Optional**: Click **[Show advanced options](admin-settings/agent-options/)** to specify IP address(es) to use when registering the node, override the hostname of the node, or to add [labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) or [taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/) to the node."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the command displayed on screen to your clipboard.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Linux host using your preferred shell, such as PuTTy or a remote Terminal connection. Run the command copied to your clipboard."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Repeat steps 7-10 if you want to dedicate specific hosts to specific node roles. Repeat the steps as many times as needed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you finish running the command(s) on your Linux host(s), click ",(0,a.kt)("strong",{parentName:"p"},"Done"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h3",{id:"3-amazon-only-tag-resources"},"3. Amazon Only: Tag Resources"),(0,a.kt)("p",null,"If you have configured your cluster to use Amazon as ",(0,a.kt)("strong",{parentName:"p"},"Cloud Provider"),", tag your AWS resources with a cluster ID."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html"},"Amazon Documentation: Tagging Your Amazon EC2 Resources")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," You can use Amazon EC2 instances without configuring a cloud provider in Kubernetes. You only have to configure the cloud provider if you want to use specific Kubernetes cloud provider functionality. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/cloud-providers/"},"Kubernetes Cloud Providers"))),(0,a.kt)("p",null,"The following resources need to tagged with a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterID"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Nodes"),": All hosts added in Rancher.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Subnet"),": The subnet used for your cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Security Group"),": The security group used for your cluster."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Do not tag multiple security groups. Tagging multiple groups generates an error when creating Elastic Load Balancer.")))),(0,a.kt)("p",null,"The tag that should be used is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Key=kubernetes.io/cluster/<CLUSTERID>, Value=owned\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<CLUSTERID>")," can be any string you choose. However, the same string must be used on every resource you tag. Setting the tag value to ",(0,a.kt)("inlineCode",{parentName:"p"},"owned")," informs the cluster that all resources tagged with the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CLUSTERID>")," are owned and managed by this cluster."),(0,a.kt)("p",null,"If you share resources between clusters, you can change the tag to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Key=kubernetes.io/cluster/CLUSTERID, Value=shared\n")),(0,a.kt)("h1",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")))}m.isMDXComponent=!0}}]);