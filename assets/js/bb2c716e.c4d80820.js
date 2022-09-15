"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76964],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=s,v=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},30221:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={title:"Provisioning Kubernetes Clusters in vSphere",weight:1,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/"]},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",title:"Provisioning Kubernetes Clusters in vSphere",description:"In this section, you'll learn how to use Rancher to install an RKE  Kubernetes cluster in vSphere.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",tags:[],version:"2.5",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Provisioning Kubernetes Clusters in vSphere",weight:1,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/vsphere/provisioning-vsphere-clusters/"]},sidebar:"tutorialSidebar",previous:{title:"Creating a vSphere Cluster",permalink:"/v2.5/pages-for-subheaders/vsphere"},next:{title:"Creating Credentials in the vSphere Console",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"}},c={},p=[{value:"Preparation in vSphere",id:"preparation-in-vsphere",level:2},{value:"Create Credentials in vSphere",id:"create-credentials-in-vsphere",level:3},{value:"Network Permissions",id:"network-permissions",level:3},{value:"Valid ESXi License for vSphere API Access",id:"valid-esxi-license-for-vsphere-api-access",level:3},{value:"VM-VM Affinity Rules for Clusters with DRS",id:"vm-vm-affinity-rules-for-clusters-with-drs",level:3},{value:"Creating a vSphere Cluster",id:"creating-a-vsphere-cluster",level:2},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:3},{value:"2. Create a node template with your cloud credentials",id:"2-create-a-node-template-with-your-cloud-credentials",level:3},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:2}],h={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you'll learn how to use Rancher to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE"),"  Kubernetes cluster in vSphere."),(0,a.kt)("p",null,"First, you will set up your vSphere cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision nodes in vSphere."),(0,a.kt)("p",null,"Then you will create a vSphere cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,a.kt)("p",null,"For details on configuring the vSphere node template, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"vSphere node template configuration reference.")),(0,a.kt)("p",null,"For details on configuring RKE Kubernetes clusters in Rancher, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster configuration reference.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparation-in-vsphere"},"Preparation in vSphere")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-vsphere-cluster"},"Creating a vSphere Cluster"))),(0,a.kt)("h2",{id:"preparation-in-vsphere"},"Preparation in vSphere"),(0,a.kt)("p",null,"This section describes the requirements for setting up vSphere so that Rancher can provision VMs and clusters."),(0,a.kt)("p",null,"The node templates are documented and tested with the vSphere Web Services API version 6.5."),(0,a.kt)("h3",{id:"create-credentials-in-vsphere"},"Create Credentials in vSphere"),(0,a.kt)("p",null,"Before proceeding to create a cluster, you must ensure that you have a vSphere user with sufficient permissions. When you set up a node template, the template will need to use these vSphere credentials."),(0,a.kt)("p",null,"Refer to this ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},"how-to guide")," for instructions on how to create a user in vSphere with the required permissions. These steps result in a username and password that you will need to provide to Rancher, which allows Rancher to provision resources in vSphere."),(0,a.kt)("h3",{id:"network-permissions"},"Network Permissions"),(0,a.kt)("p",null,"It must be ensured that the hosts running the Rancher server are able to establish the following network connections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To the vSphere API on the vCenter server (usually port 443/TCP)."),(0,a.kt)("li",{parentName:"ul"},"To the Host API (port 443/TCP) on all ESXi hosts used to instantiate virtual machines for the clusters (",(0,a.kt)("em",{parentName:"li"},"only required when using the ISO creation method"),")."),(0,a.kt)("li",{parentName:"ul"},"To port 22/TCP and 2376/TCP on the created VMs")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"Node Networking Requirements")," for a detailed list of port requirements applicable for creating nodes on an infrastructure provider."),(0,a.kt)("h3",{id:"valid-esxi-license-for-vsphere-api-access"},"Valid ESXi License for vSphere API Access"),(0,a.kt)("p",null,"The free ESXi license does not support API access. The vSphere servers must have a valid or evaluation ESXi license."),(0,a.kt)("h3",{id:"vm-vm-affinity-rules-for-clusters-with-drs"},"VM-VM Affinity Rules for Clusters with DRS"),(0,a.kt)("p",null,"If you have a cluster with DRS enabled, setting up ",(0,a.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-7297C302-378F-4AF2-9BD6-6EDB1E0A850A.html"},"VM-VM Affinity Rules")," is recommended. These rules allow VMs assigned the etcd and control-plane roles to operate on separate ESXi hosts when they are assigned to different node pools. This practice ensures that the failure of a single physical machine does not affect the availability of those planes."),(0,a.kt)("h2",{id:"creating-a-vsphere-cluster"},"Creating a vSphere Cluster"),(0,a.kt)("p",null,"The a vSphere cluster is created in Rancher depends on the Rancher version."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials"},"Create a node template with your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,a.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,a.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,a.kt)("strong",{parentName:"li"},"VMware vSphere"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your vSphere credentials. For help, refer to ",(0,a.kt)("strong",{parentName:"li"},"Account Access")," in the ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"node template configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,a.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials"},"2. Create a node template with your cloud credentials"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for vSphere will allow Rancher to provision new nodes in vSphere. Node templates can be reused for other clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Node Templates.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Template.")),(0,a.kt)("li",{parentName:"ol"},"Fill out a node template for vSphere. For help filling out the form, refer to the vSphere node template ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere"},"configuration reference."),".")),(0,a.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,a.kt)("p",null,"Use Rancher to create a Kubernetes cluster in vSphere."),(0,a.kt)("p",null,"Clusters won't begin provisioning until all three node roles (worker, etcd and controlplane) are present."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," in the ",(0,a.kt)("strong",{parentName:"li"},"Global")," view."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster")," and select the ",(0,a.kt)("strong",{parentName:"li"},"vSphere")," infrastructure provider."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name.")),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"cluster-provisioning/rke-clusters/options"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"If you want to dynamically provision persistent storage or other infrastructure later, you will need to enable the vSphere cloud provider by modifying the cluster YAML file. For details, refer to ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/vsphere-cloud-provider"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices for assigning Kubernetes roles to the nodes, see ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")),(0,a.kt)("h2",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Provision Storage:")," For an example of how to provision storage in vSphere using Rancher, refer to ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"this section.")," In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/pages-for-subheaders/vsphere-cloud-provider"},"enabled."))))}d.isMDXComponent=!0}}]);