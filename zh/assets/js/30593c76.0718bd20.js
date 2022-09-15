"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=d(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(67294),o=n(86010),i=n(72389),l=n(67392),s=n(7094),d=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,n,i=e.lazy,h=e.block,c=e.defaultValue,m=e.values,g=e.groupId,k=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,I=y.setTabGroupChoices,T=(0,r.useState)(N),C=T[0],R=T[1],S=[],O=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=w[g];null!=E&&E!==C&&b.some((function(e){return e.value===E}))&&R(E)}var D=function(e){var t=e.currentTarget,n=S.indexOf(t),a=b[n].value;a!==C&&(O(t),R(a),null!=g&&I(g,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=S.indexOf(e.currentTarget)+1;n=null!=(a=S[r])?a:S[0];break;case"ArrowLeft":var o,i=S.indexOf(e.currentTarget)-1;n=null!=(o=S[i])?o:S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},k)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:D,onClick:D},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,i.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},32345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(65488),l=n(85162),s=["components"],d={title:"Nodes and Node Pools",weight:2030},u=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",title:"Nodes and Node Pools",description:"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's Node tab. Depending on the option used to provision the cluster, there are different node options available.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Nodes and Node Pools",weight:2030},sidebar:"tutorialSidebar",previous:{title:"Certificate Rotation",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},next:{title:"Removing Kubernetes Components from Nodes",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"}},h={},c=[{value:"Nodes Hosted by an Infrastructure Provider",id:"nodes-hosted-by-an-infrastructure-provider",level:3},{value:"Nodes Provisioned by Hosted Kubernetes Providers",id:"nodes-provisioned-by-hosted-kubernetes-providers",level:3},{value:"Imported Nodes",id:"imported-nodes",level:3},{value:"Aggressive and Safe Draining Options",id:"aggressive-and-safe-draining-options",level:3},{value:"Grace Period",id:"grace-period",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Drained and Cordoned State",id:"drained-and-cordoned-state",level:3},{value:"Labeling Nodes to be Ignored with the Rancher UI",id:"labeling-nodes-to-be-ignored-with-the-rancher-ui",level:3},{value:"Labeling Nodes to be Ignored with kubectl",id:"labeling-nodes-to-be-ignored-with-kubectl",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After you launch a Kubernetes cluster in Rancher, you can manage individual nodes from the cluster's ",(0,o.kt)("strong",{parentName:"p"},"Node")," tab. Depending on the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"option used")," to provision the cluster, there are different node options available."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to manage the ",(0,o.kt)("em",{parentName:"p"},"cluster")," and not individual nodes, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-configuration#editing-clusters-with-yaml"},"Editing Clusters"),".")),(0,o.kt)("h1",{id:"node-options-available-for-each-cluster-creation-option"},"Node Options Available for Each Cluster Creation Option"),(0,o.kt)("p",null,"The following table lists which node options are available for each type of cluster in Rancher. Click the links in the ",(0,o.kt)("strong",{parentName:"p"},"Option")," column for more detailed information about each feature."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"Nodes Hosted by an Infrastructure Provider")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"Custom Node")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Cluster")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"th",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Nodes")),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#cordoning-a-node"},"Cordon")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#draining-a-node"},"Drain")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Marks the node as unschedulable ",(0,o.kt)("em",{parentName:"td"},"and")," evicts all pods.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#managing-and-editing-individual-nodes"},"Edit")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Enter a custom name, description, label, or taints for a node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#viewing-a-node-in-the-rancher-api"},"View API")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"View API data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#deleting-a-node"},"Delete")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Deletes defective nodes from the cluster.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#ssh-into-a-node-hosted-by-an-infrastructure-provider"},"Download Keys")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Download SSH key for in order to SSH into the node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#scaling-nodes"},"Node Scaling")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Scale the number of nodes in the node pool up or down.")))),(0,o.kt)("h3",{id:"nodes-hosted-by-an-infrastructure-provider"},"Nodes Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"Node pools are available when you provision Rancher-launched Kubernetes clusters on nodes that are ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"hosted in an infrastructure provider.")),(0,o.kt)("p",null,"Clusters provisioned using ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"one of the node pool options")," can be scaled up or down if the node pool is edited."),(0,o.kt)("p",null,"A node pool can also automatically maintain the node scale that's set during the initial cluster provisioning if ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")," This scale determines the number of active nodes that Rancher maintains for the cluster."),(0,o.kt)("p",null,"Rancher uses ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node templates")," to replace nodes in the node pool. Each node template uses cloud provider credentials to allow Rancher to set up the node in the infrastructure provider."),(0,o.kt)("h3",{id:"nodes-provisioned-by-hosted-kubernetes-providers"},"Nodes Provisioned by Hosted Kubernetes Providers"),(0,o.kt)("p",null,"Options for managing nodes ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted by a Kubernetes provider")," are somewhat limited in Rancher. Rather than using the Rancher UI to make edits such as scaling the number of nodes up or down, edit the cluster directly."),(0,o.kt)("h3",{id:"imported-nodes"},"Imported Nodes"),(0,o.kt)("p",null,"Although you can deploy workloads to an ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"imported cluster")," using Rancher, you cannot manage individual cluster nodes. All management of imported cluster nodes must take place outside of Rancher."),(0,o.kt)("h1",{id:"managing-and-editing-individual-nodes"},"Managing and Editing Individual Nodes"),(0,o.kt)("p",null,"Editing a node lets you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change its name"),(0,o.kt)("li",{parentName:"ul"},"Change its description"),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"labels")),(0,o.kt)("li",{parentName:"ul"},"Add/Remove ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"taints"))),(0,o.kt)("p",null,"To manage individual nodes, browse to the cluster that you want to manage and then select ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," from the main menu. You can open the options menu for a node by clicking its ",(0,o.kt)("strong",{parentName:"p"},"\u22ee")," icon (",(0,o.kt)("strong",{parentName:"p"},"..."),")."),(0,o.kt)("h1",{id:"viewing-a-node-in-the-rancher-api"},"Viewing a Node in the Rancher API"),(0,o.kt)("p",null,"Select this option to view the node's ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/about-the-api"},"API endpoints"),"."),(0,o.kt)("h1",{id:"deleting-a-node"},"Deleting a Node"),(0,o.kt)("p",null,"Use ",(0,o.kt)("strong",{parentName:"p"},"Delete")," to remove defective nodes from the cloud provider."),(0,o.kt)("p",null,"When you the delete a defective node, Rancher can automatically replace it with an identically provisioned node if the node is in a node pool and ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#about-node-auto-replace"},"node auto-replace is enabled.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip:")," If your cluster is hosted by an infrastructure provider, and you want to scale your cluster down instead of deleting a defective node, ",(0,o.kt)("a",{parentName:"p",href:"#scaling-nodes"},"scale down")," rather than delete.")),(0,o.kt)("h1",{id:"scaling-nodes"},"Scaling Nodes"),(0,o.kt)("p",null,"For nodes hosted by an infrastructure provider, you can scale the number of nodes in each ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"node pool")," by using the scale controls. This option isn't available for other cluster types."),(0,o.kt)("h1",{id:"ssh-into-a-node-hosted-by-an-infrastructure-provider"},"SSH into a Node Hosted by an Infrastructure Provider"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes hosted by an infrastructure provider"),", you have the option of downloading its SSH key so that you can connect to it remotely from your desktop."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the cluster hosted by an infrastructure provider, select ",(0,o.kt)("strong",{parentName:"p"},"Nodes")," from the main menu.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the node that you want to remote into. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"," > Download Keys"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," A ZIP file containing files used for SSH is downloaded.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extract the ZIP file to any location.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open Terminal. Change your location to the extracted ZIP file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"ssh -i id_rsa root@<IP_OF_HOST>\n")))),(0,o.kt)("h1",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Cordoning")," a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions.  When you're done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("h1",{id:"draining-a-node"},"Draining a Node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Draining")," is the process of first cordoning the node, and then evicting all its pods. This feature is useful for performing node maintenance (like kernel upgrades or hardware maintenance). It prevents new pods from deploying to the node while redistributing existing pods so that users don't experience service interruption."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with a replica set, the pod is replaced by a new pod that will be scheduled to a new node. Additionally, if the pod is part of a service, then clients will automatically be redirected to the new pod.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For pods with no replica set, you need to bring up a new copy of the pod, and assuming it is not part of a service, redirect clients to it."))),(0,o.kt)("p",null,"You can drain nodes that are in either a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"active")," state. When you drain a node, the node is cordoned, the nodes are evaluated for conditions they must meet to be drained, and then (if it meets the conditions) the node evicts its pods."),(0,o.kt)("p",null,"However, you can override the conditions draining when you initiate the drain. You're also given an opportunity to set a grace period and timeout value."),(0,o.kt)("h3",{id:"aggressive-and-safe-draining-options"},"Aggressive and Safe Draining Options"),(0,o.kt)("p",null,"The node draining options are different based on your version of Rancher."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.2.x+",mdxType:"TabItem"},(0,o.kt)("p",null,"There are two drain modes: aggressive and safe."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Aggressive Mode")),(0,o.kt)("p",{parentName:"li"},"  In this mode, pods won't get rescheduled to a new node, even if they do not have a controller. Kubernetes expects you to have your own logic that handles the deletion of these pods."),(0,o.kt)("p",{parentName:"li"},"  Kubernetes also expects the implementation to decide what to do with pods using emptyDir. If a pod uses emptyDir to store local data, you might not be able to safely delete it, since the data in the emptyDir will be deleted once the pod is removed from the node. Choosing aggressive mode will delete these pods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Safe Mode")),(0,o.kt)("p",{parentName:"li"},"  If a node has standalone pods or ephemeral data it will be cordoned but not drained.")))),(0,o.kt)(l.Z,{value:"Rancher before v2.2.x",mdxType:"TabItem"},(0,o.kt)("p",null,"The following list describes each drain option:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Even if there are pods not managed by a ReplicationController, ReplicaSet, Job, DaemonSet or StatefulSet")),(0,o.kt)("p",{parentName:"li"},"  These types of pods won't get rescheduled to a new node, since they do not have a controller. Kubernetes expects you to have your own logic that handles the deletion of these pods. Kubernetes forces you to choose this option (which will delete/evict these pods) or drain won't proceed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Even if there are DaemonSet-managed pods")),(0,o.kt)("p",{parentName:"li"},"  Similar to above, if you have any daemonsets, drain would proceed only if this option is selected. Even when this option is on, pods won't be deleted since they'll immediately be replaced. On startup, Rancher currently has a few daemonsets running by default in the system, so this option is turned on by default.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Even if there are pods using emptyDir")),(0,o.kt)("p",{parentName:"li"},"  If a pod uses emptyDir to store local data, you might not be able to safely delete it, since the data in the emptyDir will be deleted once the pod is removed from the node. Similar to the first option, Kubernetes expects the implementation to decide what to do with these pods. Choosing this option will delete these pods."))))),(0,o.kt)("h3",{id:"grace-period"},"Grace Period"),(0,o.kt)("p",null,"The timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. For example, when pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If negative, the default value specified in the pod will be used."),(0,o.kt)("h3",{id:"timeout"},"Timeout"),(0,o.kt)("p",null,"The amount of time drain should continue to wait before giving up."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Kubernetes Known Issue:")," The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/pull/64378"},"timeout setting")," was not enforced while draining a node before Kubernetes 1.12.")),(0,o.kt)("h3",{id:"drained-and-cordoned-state"},"Drained and Cordoned State"),(0,o.kt)("p",null,"If there's any error related to user input, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned")," state because the drain failed. You can either correct the input and attempt to drain the node again, or you can abort by uncordoning the node."),(0,o.kt)("p",null,"If the drain continues without error, the node enters a ",(0,o.kt)("inlineCode",{parentName:"p"},"draining")," state. You'll have the option to stop the drain when the node is in this state, which will stop the drain process and change the node's state to ",(0,o.kt)("inlineCode",{parentName:"p"},"cordoned"),"."),(0,o.kt)("p",null,"Once drain successfully completes, the node will be in a state of ",(0,o.kt)("inlineCode",{parentName:"p"},"drained"),". You can then power off or delete the node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Want to know more about cordon and drain?")," See the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/cluster-management/#maintenance-on-a-node"},"Kubernetes documentation"),".")),(0,o.kt)("h1",{id:"labeling-a-node-to-be-ignored-by-rancher"},"Labeling a Node to be Ignored by Rancher"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of 2.3.3")),(0,o.kt)("p",null,"Some solutions, such as F5's BIG-IP integration, may require creating a node that is never registered to a cluster."),(0,o.kt)("p",null,"Since the node will never finish registering, it will always be shown as unhealthy in the Rancher UI."),(0,o.kt)("p",null,"In that case, you may want to label the node to be ignored by Rancher so that Rancher only shows nodes as unhealthy when they are actually failing."),(0,o.kt)("p",null,"You can label nodes to be ignored by using a setting in the Rancher UI, or by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," There is an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/24172"},"open issue")," in which nodes labeled to be ignored can get stuck in an updating state.")),(0,o.kt)("h3",{id:"labeling-nodes-to-be-ignored-with-the-rancher-ui"},"Labeling Nodes to be Ignored with the Rancher UI"),(0,o.kt)("p",null,"To add a node that is ignored by Rancher,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, click the ",(0,o.kt)("strong",{parentName:"li"},"Settings")," tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"ignore-node-name")," setting and click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,o.kt)("li",{parentName:"ol"},"Enter a name that Rancher will use to ignore nodes. All nodes with this name will be ignored."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher will not wait to register nodes with this name. In the UI, the node will displayed with a grayed-out status. The node is still part of the cluster and can be listed with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("p",null,"If the setting is changed afterward, the ignored nodes will continue to be hidden."),(0,o.kt)("h3",{id:"labeling-nodes-to-be-ignored-with-kubectl"},"Labeling Nodes to be Ignored with kubectl"),(0,o.kt)("p",null,"To add a node that will be ignored by Rancher, use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to create a node that has the following label:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cattle.rancher.io/node-status: ignore\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," If you add the node to a cluster, Rancher will not attempt to sync with this node. The node can still be part of the cluster and can be listed with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,o.kt)("p",null,"If the label is added before the node is added to the cluster, the node will not be shown in the Rancher UI."),(0,o.kt)("p",null,"If the label is added after the node is added to a Rancher cluster, the node will not be removed from the UI."),(0,o.kt)("p",null,"If you delete the node from the Rancher server using the Rancher UI or API, the node will not be removed from the cluster if the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," is listed in the Rancher settings under ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore-node-name"),"."))}g.isMDXComponent=!0}}]);