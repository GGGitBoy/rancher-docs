"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10025],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(86010),i=n(72389),s=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.U)(),N=b.tabGroupChoices,A=b.setTabGroupChoices,C=(0,a.useState)(w),I=C[0],z=C[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=N[f];null!=P&&P!==I&&k.some((function(e){return e.value===P}))&&z(P)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==I&&(S(t),z(r),null!=f&&A(f,String(r)))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;n=null!=(o=E[i])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},71653:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(65488),s=n(85162),l=["components"],u={title:"EC2 Node Template Configuration",weight:1},c=void 0,p={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",title:"EC2 Node Template Configuration",description:"For more details about EC2, nodes, refer to the official documentation for the EC2 Management Console.",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"EC2 Node Template Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"Node Template Configuration",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/node-template-configuration"},next:{title:"DigitalOcean Node Template Configuration",permalink:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"}},d={},m=[{value:"Region",id:"region",level:3},{value:"Cloud Credentials",id:"cloud-credentials",level:3},{value:"Authenticate &amp; Configure Nodes",id:"authenticate--configure-nodes",level:3},{value:"Security Group",id:"security-group",level:3},{value:"Instance Options",id:"instance-options",level:3},{value:"Engine Options",id:"engine-options",level:3},{value:"Account Access",id:"account-access",level:3},{value:"Zone and Network",id:"zone-and-network",level:3},{value:"Security Groups",id:"security-groups",level:3},{value:"Instance",id:"instance",level:3},{value:"SSH User",id:"ssh-user",level:3},{value:"IAM Instance Profile Name",id:"iam-instance-profile-name",level:3},{value:"Docker Daemon",id:"docker-daemon",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For more details about EC2, nodes, refer to the official documentation for the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 Management Console"),"."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,o.kt)("h3",{id:"region"},"Region"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Region")," field, select the same region that you used when creating your cloud credentials."),(0,o.kt)("h3",{id:"cloud-credentials"},"Cloud Credentials"),(0,o.kt)("p",null,"Your AWS account access information, stored in a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"cloud credential.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach an IAM"),(0,o.kt)("p",null,"See our three example JSON policies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy"},"Example IAM Policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")," policy to an user.")),(0,o.kt)("h3",{id:"authenticate--configure-nodes"},"Authenticate & Configure Nodes"),(0,o.kt)("p",null,"Choose an availability zone and network settings for your cluster."),(0,o.kt)("h3",{id:"security-group"},"Security Group"),(0,o.kt)("p",null,"Choose the default security group or configure a security group."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,o.kt)("h3",{id:"instance-options"},"Instance Options"),(0,o.kt)("p",null,"Configure the instances that will be created. Make sure you configure the correct ",(0,o.kt)("strong",{parentName:"p"},"SSH User")," for the configured AMI."),(0,o.kt)("p",null,"If you need to pass an ",(0,o.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN), for example, when you want to use a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider"),", you will need an additional permission in your policy. See ",(0,o.kt)("a",{parentName:"p",href:"#example-iam-policy-with-passrole"},"Example IAM policy with PassRole")," for an example policy."),(0,o.kt)("h3",{id:"engine-options"},"Engine Options"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Engine Options")," section of the node template, you can configure the Docker daemon. You may want to specify the docker version or a Docker registry mirror.")),(0,o.kt)(s.Z,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,o.kt)("h3",{id:"account-access"},"Account Access"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account Access")," is where you configure the region of the nodes, and the credentials (Access Key and Secret Key) used to create the machine."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach an IAM"),(0,o.kt)("p",null,"See our three example JSON policies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy"},"Example IAM Policy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")," policy to an user.")),(0,o.kt)("h3",{id:"zone-and-network"},"Zone and Network"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Zone and Network")," configures the availability zone and network settings for your cluster."),(0,o.kt)("h3",{id:"security-groups"},"Security Groups"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Security Groups")," creates or configures the Security Groups applied to your nodes. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,o.kt)("h3",{id:"instance"},"Instance"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Instance")," configures the instances that will be created."),(0,o.kt)("h3",{id:"ssh-user"},"SSH User"),(0,o.kt)("p",null,"Make sure you configure the correct ",(0,o.kt)("strong",{parentName:"p"},"SSH User")," for the configured AMI."),(0,o.kt)("h3",{id:"iam-instance-profile-name"},"IAM Instance Profile Name"),(0,o.kt)("p",null,"If you need to pass an ",(0,o.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN), for example, when you want to use a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider"),", you will need an additional permission in your policy. See ",(0,o.kt)("a",{parentName:"p",href:"#example-iam-policy-with-passrole"},"Example IAM policy with PassRole")," for an example policy."),(0,o.kt)("h3",{id:"docker-daemon"},"Docker Daemon"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/docker-overview/#the-docker-daemon"},"Docker daemon")," configuration options include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Labels:")," For information on labels, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/config/labels-custom-metadata/"},"Docker object label documentation.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Engine Install URL:")," Determines what Docker version will be installed on the instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registry mirrors:")," Docker Registry mirror to be used by the Docker daemon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other advanced options:")," Refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/dockerd/"},"Docker daemon option reference"))))))}f.isMDXComponent=!0}}]);