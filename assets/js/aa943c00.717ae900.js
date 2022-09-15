"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33296],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(67294),n=r(86010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(87462),n=r(67294),o=r(86010),i=r(72389),l=r(67392),s=r(7094),u=r(12466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,r,i=e.lazy,m=e.block,d=e.defaultValue,h=e.values,v=e.groupId,f=e.className,g=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(r=g.find((function(e){return e.props.default})))?void 0:r.props.value)?t:g[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,n.useState)(y),E=C[0],R=C[1],I=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=w[v];null!=O&&O!==E&&k.some((function(e){return e.value===O}))&&R(O)}var A=function(e){var t=e.currentTarget,r=I.indexOf(t),a=k[r].value;a!==E&&(T(t),R(a),null!=v&&x(v,String(a)))},L=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a,n=I.indexOf(e.currentTarget)+1;r=null!=(a=I[n])?a:I[0];break;case"ArrowLeft":var o,i=I.indexOf(e.currentTarget)-1;r=null!=(o=I[i])?o:I[I.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},f)},k.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:A,onClick:A},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),i?(0,n.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},22086:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(65488),l=r(85162),s=["components"],u={title:"2. Migrate Your Services",weight:100,aliases:["/rancher/v2.x/en/v1.6-migration/run-migration-tool/"]},p=void 0,c={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services",title:"2. Migrate Your Services",description:"Although your services from v1.6 won't work in Rancher v2.x by default, that doesn't mean you have to start again from square one, manually rebuilding your applications in v2.x. To help with migration from v1.6 to v2.x, Rancher has developed a migration tool. The migration-tools CLI is a utility that helps you recreate your applications in Rancher v2.x. This tool exports your Rancher v1.6 services as Compose files and converts them to a Kubernetes manifest that Rancher v2.x can consume.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/migrate-services.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"2. Migrate Your Services",weight:100,aliases:["/rancher/v2.x/en/v1.6-migration/run-migration-tool/"]},sidebar:"tutorialSidebar",previous:{title:"1. Get Started",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/install-and-configure-rancher"},next:{title:"3. Expose Your Services",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services"}},m={},d=[{value:"A. Download the migration-tools CLI",id:"a-download-the-migration-tools-cli",level:2},{value:"B. Configure the migration-tools CLI",id:"b-configure-the-migration-tools-cli",level:2},{value:"C. Run the migration-tools CLI",id:"c-run-the-migration-tools-cli",level:2},{value:"migration-tools CLI Output",id:"migration-tools-cli-output",level:3},{value:"Why are There Separate Deployment and Service Manifests?",id:"why-are-there-separate-deployment-and-service-manifests",level:4},{value:"Migration Example File Output",id:"migration-example-file-output",level:4},{value:"D. Re-Deploy Services as Kubernetes Manifests",id:"d-re-deploy-services-as-kubernetes-manifests",level:2},{value:"What Now?",id:"what-now",level:2},{value:"Next: Expose Your Services",id:"next-expose-your-services",level:3}],h={toc:d};function v(e){var t=e.components,u=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although your services from v1.6 won't work in Rancher v2.x by default, that doesn't mean you have to start again from square one, manually rebuilding your applications in v2.x. To help with migration from v1.6 to v2.x, Rancher has developed a migration tool. The migration-tools CLI is a utility that helps you recreate your applications in Rancher v2.x. This tool exports your Rancher v1.6 services as Compose files and converts them to a Kubernetes manifest that Rancher v2.x can consume."),(0,o.kt)("p",null,"Additionally, for each Rancher v1.6-specific Compose directive that cannot be consumed by Kubernetes, migration-tools CLI provides instructions on how to manually recreate them in Rancher v2.x."),(0,o.kt)("p",null,"This command line interface tool will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Export Compose files (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-compose.yml"),") for each stack in your v1.6 Cattle environment. For every stack, files are exported to a unique folder: ",(0,o.kt)("inlineCode",{parentName:"p"},"<EXPORT_DIR>/<ENV_NAME>/<STACK_NAME>"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parse Compose files that you\u2019ve exported from your Rancher v1.6 stacks and converts them to Kubernetes manifests that Rancher v2.x can consume. The tool also outputs a list of directives present in the Compose files that cannot be converted automatically to Rancher v2.x. These are directives that you\u2019ll have to manually configure using the Rancher v2.x UI."))),(0,o.kt)("h2",{id:"a-download-the-migration-tools-cli"},"A. Download the migration-tools CLI"),(0,o.kt)("p",null,"The migration-tools CLI for your platform can be downloaded from our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/migration-tools/releases"},"GitHub releases page"),". The tools are available for Linux, Mac, and Windows platforms."),(0,o.kt)("h2",{id:"b-configure-the-migration-tools-cli"},"B. Configure the migration-tools CLI"),(0,o.kt)("p",null,"After you download migration-tools CLI, rename it and make it executable."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a terminal window and change to the directory that contains the migration-tool file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rename the file to ",(0,o.kt)("inlineCode",{parentName:"p"},"migration-tools")," so that it no longer includes the platform name.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following command to make ",(0,o.kt)("inlineCode",{parentName:"p"},"migration-tools")," executable:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"chmod +x migration-tools\n")))),(0,o.kt)("h2",{id:"c-run-the-migration-tools-cli"},"C. Run the migration-tools CLI"),(0,o.kt)("p",null,"Next, use the migration-tools CLI to export all stacks in all of the Cattle environments into Compose files. Then, for stacks that you want to migrate to Rancher v2.x, convert the Compose files into Kubernetes manifest."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," Create an ",(0,o.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v1.6/en/api/v2-beta/api-keys/#account-api-keys"},"Account API Key")," to authenticate with Rancher v1.6 when using the migration-tools CLI.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Export the Docker Compose files for your Cattle environments and stacks from Rancher v1.6."),(0,o.kt)("p",{parentName:"li"},"In the terminal window, execute the following command, replacing each placeholder with your values."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"migration-tools export --url http://<RANCHER_URL:PORT> --access-key <RANCHER_ACCESS_KEY> --secret-key <RANCHER_SECRET_KEY> --export-dir <EXPORT_DIR> --all\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," migration-tools exports Compose files (",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-compose.yml"),") for each stack in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--export-dir")," directory. If you omitted this option, Compose files are output to your current directory."),(0,o.kt)("p",{parentName:"li"},"A unique directory is created for each environment and stack. For example, if we export each ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x#migration-example-files"},"environment/stack")," from Rancher v1.6, the following directory structure is created:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"export/                            # migration-tools --export-dir\n|--<ENVIRONMENT>/                  # Rancher v1.6 ENVIRONMENT\n    |--<STACK>/                    # Rancher v1.6 STACK\n         |--docker-compose.yml     # STANDARD DOCKER DIRECTIVES FOR ALL STACK SERVICES\n         |--rancher-compose.yml    # RANCHER-SPECIFIC DIRECTIVES FOR ALL STACK SERVICES\n         |--README.md              # README OF CHANGES FROM v1.6 to v2.x\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Convert the exported Compose files to Kubernetes manifest."),(0,o.kt)("p",{parentName:"li"},"Execute the following command, replacing each placeholder with the absolute path to your Stack's Compose files. If you want to migrate multiple stacks, you'll have to re-run the command for each pair of Compose files that you exported."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"migration-tools parse --docker-file <DOCKER_COMPOSE_ABSOLUTE_PATH> --rancher-file <RANCHER_COMPOSE_ABSOLUTE_PATH>\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"--docker-file")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--rancher-file")," options from your command, migration-tools uses the current working directory to find Compose files.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Want full usage and options for the migration-tools CLI?")," See the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/v1.6-migration/migration-tools-cli-reference"},"Migration Tools CLI Reference"),".")),(0,o.kt)("h3",{id:"migration-tools-cli-output"},"migration-tools CLI Output"),(0,o.kt)("p",null,"After you run the migration-tools parse command, the following files are output to your target directory."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Output"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"output.txt")),(0,o.kt)("td",{parentName:"tr",align:null},"This file lists how to recreate your Rancher v1.6-specific functionality in Kubernetes. Each listing links to the relevant blog articles on how to implement it in Rancher v2.x.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes manifest specs"),(0,o.kt)("td",{parentName:"tr",align:null},"Migration-tools internally invokes ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/kubernetes/kompose"},"Kompose")," to generate a Kubernetes manifest for each service you're migrating to v2.x. Each YAML spec file is named for the service you're migrating.")))),(0,o.kt)("h4",{id:"why-are-there-separate-deployment-and-service-manifests"},"Why are There Separate Deployment and Service Manifests?"),(0,o.kt)("p",null,"To make an application publicly accessible by URL, a Kubernetes service is required in support of the deployment. A Kubernetes service is a REST object that abstracts access to the pods in the workload. In other words, a service provides a static endpoint to the pods by mapping a URL to pod(s) Therefore, even if the pods change IP address, the public endpoint remains unchanged. A service object points to its corresponding deployment (workload) by using selector labels."),(0,o.kt)("p",null,"When a you export a service from Rancher v1.6 that exposes public ports, migration-tools CLI parses those ports to a Kubernetes service spec that links to a deployment YAML spec."),(0,o.kt)("h4",{id:"migration-example-file-output"},"Migration Example File Output"),(0,o.kt)("p",null,"If we parse the two example files\xa0from ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x#migration-example-files"},"Migration Example Files"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-compose.yml"),", the following files are output:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"File"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"web-deployment.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"A file containing Kubernetes container specs for a Let's Chat deployment.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"web-service.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"A file containing specs for the Let's Chat service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"database-deployment.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"A file containing container specs for the MongoDB deployment in support of Let's Chat.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"webLB-deployment.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"A file containing container specs for an HAProxy deployment that's serving as a load balancer.",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"webLB-service.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"A file containing specs for the HAProxy service.",(0,o.kt)("sup",null,"1"))))),(0,o.kt)("blockquote",null,(0,o.kt)("sup",null,"1")," Because Rancher v2.x uses Ingress for load balancing, we won't be migrating our Rancher v1.6 load balancer to v2.x."),(0,o.kt)("h2",{id:"d-re-deploy-services-as-kubernetes-manifests"},"D. Re-Deploy Services as Kubernetes Manifests"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Although these instructions deploy your v1.6 services in Rancher v2.x, they will not work correctly until you adjust their Kubernetes manifests.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher UI",mdxType:"TabItem"},(0,o.kt)("p",null,"You can deploy the Kubernetes manifests created by migration-tools by importing them into Rancher v2.x."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Receiving an ",(0,o.kt)("inlineCode",{parentName:"strong"},"ImportYaml Error"),"?")),(0,o.kt)("p",{parentName:"blockquote"},"Delete the YAML directive listed in the error message. These are YAML directives from your v1.6 services that Kubernetes can't read.")),(0,o.kt)("figcaption",null,"Deploy Services: Import Kubernetes Manifest"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy Services",src:r(94191).Z,width:"1920",height:"1080"}))),(0,o.kt)(l.Z,{value:"Rancher CLI",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cli-with-rancher"},"Install Rancher CLI")," for Rancher v2.x.")),(0,o.kt)("p",null,"Use the following Rancher CLI commands to deploy your application using Rancher v2.x. For each Kubernetes manifest output by migration-tools CLI, enter one of the commands below to import it into Rancher v2.x."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./rancher kubectl create -f <DEPLOYMENT_YAML_FILE> # DEPLOY THE DEPLOYMENT YAML\n\n./rancher kubectl create -f <SERVICE_YAML_FILE> # DEPLOY THE SERVICE YAML\n")))),(0,o.kt)("p",null,"Following importation, you can view your v1.6 services in the v2.x UI as Kubernetes manifests by using the context menu to select ",(0,o.kt)("inlineCode",{parentName:"p"},"<CLUSTER> > <PROJECT>")," that contains your services. The imported manifests will display on the ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads")," and on the tab at ",(0,o.kt)("strong",{parentName:"p"},"Resources > Workloads > Service Discovery.")," (In Rancher v2.x before v2.3.0, these are on the ",(0,o.kt)("strong",{parentName:"p"},"Workloads")," and ",(0,o.kt)("strong",{parentName:"p"},"Service Discovery")," tabs in the top navigation bar.)"),(0,o.kt)("figcaption",null,"Imported Services"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Imported Services",src:r(4244).Z,width:"1688",height:"792"})),(0,o.kt)("h2",{id:"what-now"},"What Now?"),(0,o.kt)("p",null,"Although the migration-tool CLI parses your Rancher v1.6 Compose files to Kubernetes manifests, there are discrepancies between v1.6 and v2.x that you must address by manually editing your parsed ",(0,o.kt)("a",{parentName:"p",href:"#output"},"Kubernetes manifests"),". In other words, you need to edit each workload and service imported into Rancher v2.x, as displayed below."),(0,o.kt)("figcaption",null,"Edit Migrated Services"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Migrated Workload",src:r(30759).Z,width:"1920",height:"1080"})),(0,o.kt)("p",null,"As mentioned in ",(0,o.kt)("a",{parentName:"p",href:"#migration-tools-cli-output"},"Migration Tools CLI Output"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," files generated during parsing lists the manual steps you must make for each deployment. Review the upcoming topics for more information on manually editing your Kubernetes specs."),(0,o.kt)("p",null,"Open your ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," file and take a look at its contents. When you parsed your Compose files into Kubernetes manifests, migration-tools CLI output a manifest for each workload that it creates for Kubernetes. For example, our when our ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/migrate-from-v1.6-v2.x#migration-example-files"},"Migration Example Files")," are parsed into Kubernetes manifests, ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt")," lists each resultant parsed ",(0,o.kt)("a",{parentName:"p",href:"#migration-example-file-output"},"Kubernetes manifest file")," (i.e., workloads). Each workload features a list of action items to restore operations for the workload in v2.x."),(0,o.kt)("figcaption",null,"Output.txt Example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"output.txt",src:r(32863).Z,width:"996",height:"411"})),(0,o.kt)("p",null,"The following table lists possible directives that may appear in ",(0,o.kt)("inlineCode",{parentName:"p"},"output.txt"),", what they mean, and links on how to resolve them."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Directive"),(0,o.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services"},"ports")),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher v1.6 ",(0,o.kt)("em",{parentName:"td"},"Port Mappings")," cannot be migrated to v2.x. Instead, you must manually declare either a HostPort or NodePort, which are similar to Port Mappings.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/monitor-apps#configuring-probes-in-rancher-v2-x"},"health_check")),(0,o.kt)("td",{parentName:"tr",align:null},"The Rancher v1.6 health check microservice has been replaced with native Kubernetes health checks, called ",(0,o.kt)("em",{parentName:"td"},"probes"),". Recreate your v1.6 health checks in v2.0 using probes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services#scheduling-using-labels"},"labels")),(0,o.kt)("td",{parentName:"tr",align:null},"Rancher v1.6 uses labels to implement a variety of features in v1.6. In v2.x, Kubernetes uses different mechanisms to implement these features. Click through on the links here for instructions on how to address each label.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services#scheduling-using-labels"},"io.rancher.container.pull_image"),": In v1.6, this label instructed deployed containers to pull a new version of the image upon restart. In v2.x, this functionality is replaced by the  ",(0,o.kt)("inlineCode",{parentName:"td"},"imagePullPolicy")," directive.",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services#scheduling-global-services"},"io.rancher.scheduler.global"),": In v1.6, this label scheduled a container replica on every cluster host. In v2.x, this functionality is replaced by ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"Daemon Sets"),".",(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services#label-affinity-antiaffinity"},"io.rancher.scheduler.affinity"),": In v2.x, affinity is applied in a different way.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"},"links")),(0,o.kt)("td",{parentName:"tr",align:null},"During migration, you must create links between your Kubernetes workloads and services for them to function properly in v2.x.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/schedule-services#scheduling-pods-to-a-specific-node"},"scale")),(0,o.kt)("td",{parentName:"tr",align:null},"In v1.6, scale refers to the number of container replicas running on a single node. In v2.x, this feature is replaced by replica sets.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start_on_create"),(0,o.kt)("td",{parentName:"tr",align:null},"No Kubernetes equivalent. No action is required from you.")))),(0,o.kt)("h3",{id:"next-expose-your-services"},(0,o.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/expose-services"},"Next: Expose Your Services")))}v.isMDXComponent=!0},94191:function(e,t,r){t.Z=r.p+"assets/images/deploy-service-b11452e9b2810fbe3205376f2956f24e.gif"},30759:function(e,t,r){t.Z=r.p+"assets/images/edit-migration-workload-08f9205acd01cd05496fe4c952c01453.gif"},4244:function(e,t,r){t.Z=r.p+"assets/images/imported-workloads-c4017880dad280661ea7a9e6ce6627f9.png"},32863:function(e,t,r){t.Z=r.p+"assets/images/output-dot-text-e0106ece19c59d930ec86a5739a88b16.png"}}]);