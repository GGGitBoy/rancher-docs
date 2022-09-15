"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52188],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),k=n,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return a?r.createElement(m,c(c({ref:t},s),{},{components:a})):r.createElement(m,c({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15548:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),c=["components"],i={title:"Backing up Rancher Installed with Docker",shortTitle:"Backups",weight:3,aliases:["/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/backups/backups/single-node-backups/","/rancher/v2.5/en/backups/legacy/backup/single-node-backups/","/rancher/v2.5/en/backups/v2.5/docker-installs/docker-backups/","/rancher/v2.x/en/backups/v2.5/docker-installs/docker-backups/"]},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",id:"version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",title:"Backing up Rancher Installed with Docker",description:"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"Backing up Rancher Installed with Docker",shortTitle:"Backups",weight:3,aliases:["/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/installation/after-installation/single-node-backup-and-restoration/","/rancher/v2.5/en/backups/backups/single-node-backups/","/rancher/v2.5/en/backups/legacy/backup/single-node-backups/","/rancher/v2.5/en/backups/v2.5/docker-installs/docker-backups/","/rancher/v2.x/en/backups/v2.5/docker-installs/docker-backups/"]},sidebar:"tutorialSidebar",previous:{title:"Migrating Rancher to a New Cluster",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},next:{title:"Restoring Backups\u2014Docker Installs",permalink:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"}},s={},u=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Creating a Backup",id:"creating-a-backup",level:2}],d={toc:u};function k(e){var t=e.components,i=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"After completing your Docker installation of Rancher, we recommend creating backups of it on a regular basis. Having a recent backup will let you recover quickly from an unexpected disaster."),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"During the creation of your backup, you'll enter a series of commands, replacing placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-<DATE> -v $PWD:/backup busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"<DATE>")," is a placeholder for the date that the data container and backup were created. ",(0,o.kt)("inlineCode",{parentName:"p"},"9-27-18")," for example."),(0,o.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the ",(0,o.kt)("a",{parentName:"p",href:"#creating-a-backup"},"procedure below"),"."),(0,o.kt)("sup",null,"Terminal ",(0,o.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Placeholder Reference",src:a(50953).Z,width:"1275",height:"258"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_TAG>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you pulled for initial install.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Rancher that you're creating a backup for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_TAG>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime while creating backups."),(0,o.kt)("h2",{id:"creating-a-backup"},"Creating a Backup"),(0,o.kt)("p",null,"This procedure creates a backup that you can restore if Rancher encounters a disaster scenario."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{id:"backup"}),"Use the command below, replacing each placeholder, to create a data container from the Rancher container that you just stopped.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker create --volumes-from <RANCHER_CONTAINER_NAME> --name rancher-data-<DATE> rancher/rancher:<RANCHER_CONTAINER_TAG>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{id:"tarball"}),"From the data container that you just created (",(0,o.kt)("code",null,"rancher-data-<DATE>"),"), create a backup tarball (",(0,o.kt)("code",null,"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),"). Use the following command, replacing each placeholder:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run  --volumes-from rancher-data-<DATE> -v $PWD:/backup:z busybox tar pzcvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz /var/lib/rancher\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step Result:")," A stream of commands runs on the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to confirm that the backup tarball was created. It will have a name similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move your backup tarball to a safe location external to your Rancher Server. Then delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-<DATE>")," container from your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker start <RANCHER_CONTAINER_NAME>\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A backup tarball of your Rancher Server data is created. See ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"Restoring Backups: Docker Installs")," if you need to restore backup data."))}k.isMDXComponent=!0},50953:function(e,t,a){t.Z=a.p+"assets/images/placeholder-ref-70c9571e1a85164291c80a55c7c614b5.png"}}]);