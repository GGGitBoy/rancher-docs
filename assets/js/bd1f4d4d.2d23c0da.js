"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81206],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Setting up a MySQL Database in Amazon RDS",weight:4},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds",id:"how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds",title:"Setting up a MySQL Database in Amazon RDS",description:"This tutorial describes how to set up a MySQL database in Amazon's RDS.",source:"@site/docs/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"9/15/2022",frontMatter:{title:"Setting up a MySQL Database in Amazon RDS",weight:4},sidebar:"tutorialSidebar",previous:{title:"Setting up Nodes in Amazon EC2",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},next:{title:"Setting up an NGINX Load Balancer",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial describes how to set up a MySQL database in Amazon's RDS."),(0,o.kt)("p",null,"This database can later be used as an external datastore for a high-availability K3s Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/rds/"},"Amazon AWS RDS Console")," to get started. Make sure to select the ",(0,o.kt)("strong",{parentName:"li"},"Region")," where your EC2 instances (Linux nodes) are created."),(0,o.kt)("li",{parentName:"ol"},"In the left panel, click ",(0,o.kt)("strong",{parentName:"li"},"Databases"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create database"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Engine type")," section, click ",(0,o.kt)("strong",{parentName:"li"},"MySQL"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Version")," section, choose ",(0,o.kt)("strong",{parentName:"li"},"MySQL 5.7.22"),"."),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Settings")," section, under ",(0,o.kt)("strong",{parentName:"li"},"Credentials Settings,")," enter a master password for the ",(0,o.kt)("strong",{parentName:"li"},"admin")," master username. Confirm the password."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("strong",{parentName:"li"},"Additional configuration")," section. In the ",(0,o.kt)("strong",{parentName:"li"},"Initial database name")," field, enter a name. The name can have only letters, numbers, and underscores. This name will be used to connect to the database."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create database"),".")),(0,o.kt)("p",null,"You'll need to capture the following information about the new database so that the K3s Kubernetes cluster can connect to it."),(0,o.kt)("p",null,"To see this information in the Amazon RDS console, click ",(0,o.kt)("strong",{parentName:"p"},"Databases,")," and click the name of the database that you created."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Username:")," Use the admin username."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Password:")," Use the admin password."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hostname:")," Use the ",(0,o.kt)("strong",{parentName:"li"},"Endpoint")," as the hostname. The endpoint is available in the ",(0,o.kt)("strong",{parentName:"li"},"Connectivity & security")," section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Port:")," The port should be 3306 by default. You can confirm it in the ",(0,o.kt)("strong",{parentName:"li"},"Connectivity & security")," section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Database name:")," Confirm the name by going to the ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," tab. The name is listed under ",(0,o.kt)("strong",{parentName:"li"},"DB name"),".")),(0,o.kt)("p",null,"This information will be used to connect to the database in the following format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql://username:password@tcp(hostname:3306)/database-name\n")),(0,o.kt)("p",null,"For more information on configuring the datastore for K3s, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s documentation.")))}d.isMDXComponent=!0}}]);