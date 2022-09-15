"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34751],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return u}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,d=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=c,m=k["".concat(a,".").concat(u)]||k[u]||s[u]||d;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function u(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var d=n.length,l=new Array(d);l[0]=k;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,l[1]=o;for(var p=2;p<d;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},51410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(87462),c=n(63366),d=(n(67294),n(3905)),l=["components"],o={title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",weight:1},a=void 0,p={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9\u5177\u6709 etcd \u89d2\u8272\u7684\u8282\u70b9\u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u547d\u4ee4\u548c\u63d0\u793a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes.md",tags:[],version:"current",lastUpdatedAt:1663282737,formattedLastUpdatedAt:"2022/9/15",frontMatter:{title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",weight:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u7ec4\u4ef6",permalink:"/zh/pages-for-subheaders/kubernetes-components"},next:{title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"}},i={},s=[{value:"\u68c0\u67e5 etcd \u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",id:"\u68c0\u67e5-etcd-\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c",level:2},{value:"etcd \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",id:"etcd-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55",level:2},{value:"etcd \u96c6\u7fa4\u548c\u8fde\u63a5\u68c0\u67e5",id:"etcd-\u96c6\u7fa4\u548c\u8fde\u63a5\u68c0\u67e5",level:2},{value:"\u68c0\u67e5\u6240\u6709\u8282\u70b9\u4e0a\u7684 etcd \u6210\u5458",id:"\u68c0\u67e5\u6240\u6709\u8282\u70b9\u4e0a\u7684-etcd-\u6210\u5458",level:3},{value:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001",id:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001",level:3},{value:"\u68c0\u67e5\u7aef\u70b9\u5065\u5eb7",id:"\u68c0\u67e5\u7aef\u70b9\u5065\u5eb7",level:3},{value:"\u68c0\u67e5\u7aef\u53e3 TCP/2379 \u4e0a\u7684\u8fde\u63a5",id:"\u68c0\u67e5\u7aef\u53e3-tcp2379-\u4e0a\u7684\u8fde\u63a5",level:3},{value:"\u68c0\u67e5\u7aef\u53e3 TCP/2380 \u4e0a\u7684\u8fde\u63a5",id:"\u68c0\u67e5\u7aef\u53e3-tcp2380-\u4e0a\u7684\u8fde\u63a5",level:3},{value:"etcd \u544a\u8b66",id:"etcd-\u544a\u8b66",level:2},{value:"etcd \u7a7a\u95f4\u9519\u8bef",id:"etcd-\u7a7a\u95f4\u9519\u8bef",level:2},{value:"\u538b\u7f29\u952e\u7a7a\u95f4",id:"\u538b\u7f29\u952e\u7a7a\u95f4",level:3},{value:"\u5bf9\u6240\u6709 etcd \u6210\u5458\u8fdb\u884c\u788e\u7247\u6574\u7406",id:"\u5bf9\u6240\u6709-etcd-\u6210\u5458\u8fdb\u884c\u788e\u7247\u6574\u7406",level:3},{value:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001",id:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001-1",level:3},{value:"\u89e3\u9664\u544a\u8b66",id:"\u89e3\u9664\u544a\u8b66",level:3},{value:"\u65e5\u5fd7\u7ea7\u522b",id:"\u65e5\u5fd7\u7ea7\u522b",level:2},{value:"etcd \u5185\u5bb9",id:"etcd-\u5185\u5bb9",level:2},{value:"\u67e5\u770b\u6d41\u4e8b\u4ef6",id:"\u67e5\u770b\u6d41\u4e8b\u4ef6",level:3},{value:"\u76f4\u63a5\u67e5\u8be2 etcd",id:"\u76f4\u63a5\u67e5\u8be2-etcd",level:3},{value:"\u66f4\u6362\u4e0d\u5065\u5eb7\u7684 etcd \u8282\u70b9",id:"\u66f4\u6362\u4e0d\u5065\u5eb7\u7684-etcd-\u8282\u70b9",level:2}],k={toc:s};function u(e){var t=e.components,n=(0,c.Z)(e,l);return(0,d.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5bf9\u5177\u6709 ",(0,d.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u8282\u70b9\u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u547d\u4ee4\u548c\u63d0\u793a\u3002"),(0,d.kt)("h2",{id:"\u68c0\u67e5-etcd-\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5 etcd \u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,d.kt)("p",null,"etcd \u5bb9\u5668\u7684\u72b6\u6001\u5e94\u8be5\u662f ",(0,d.kt)("strong",{parentName:"p"},"Up"),"\u3002",(0,d.kt)("strong",{parentName:"p"},"Up")," \u540e\u9762\u663e\u793a\u7684\u65f6\u95f4\u6307\u7684\u662f\u5bb9\u5668\u8fd0\u884c\u7684\u65f6\u95f4\u3002"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker ps -a -f=name=etcd$\n")),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                         COMMAND                  CREATED             STATUS              PORTS               NAMES\n605a124503b9        rancher/coreos-etcd:v3.2.18   "/usr/local/bin/et..."   2 hours ago         Up 2 hours                              etcd\n')),(0,d.kt)("h2",{id:"etcd-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"},"etcd \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"),(0,d.kt)("p",null,"\u5bb9\u5668\u7684\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u5305\u542b\u95ee\u9898\u7684\u4fe1\u606f\u3002"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker logs etcd\n")),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:null},"\u65e5\u5fd7"),(0,d.kt)("th",{parentName:"tr",align:null},"\u89e3\u91ca"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("inlineCode",{parentName:"td"},"health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused")),(0,d.kt)("td",{parentName:"tr",align:null},"\u65e0\u6cd5\u8fde\u63a5\u5230\u7aef\u53e3 2380 \u4e0a\u663e\u793a\u7684\u5730\u5740\u3002\u68c0\u67e5 etcd \u5bb9\u5668\u662f\u5426\u5728\u663e\u793a\u5730\u5740\u7684\u4e3b\u673a\u4e0a\u8fd0\u884c\u3002")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("inlineCode",{parentName:"td"},"xxx is starting a new election at term x")),(0,d.kt)("td",{parentName:"tr",align:null},"etcd \u96c6\u7fa4\u5931\u53bb\u4e86\u96c6\u7fa4\u4ef2\u88c1\u6570\u91cf\uff0c\u5e76\u6b63\u5728\u5c1d\u8bd5\u5efa\u7acb\u4e00\u4e2a\u65b0\u7684 leader\u3002\u8fd0\u884c etcd \u7684\u5927\u591a\u6570\u8282\u70b9\u5173\u95ed/\u65e0\u6cd5\u8bbf\u95ee\u65f6\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u3002")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("inlineCode",{parentName:"td"},'connection error: desc = "transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout"; Reconnecting to {0.0.0.0:2379 0  <nil>}')),(0,d.kt)("td",{parentName:"tr",align:null},"\u4e3b\u673a\u9632\u706b\u5899\u6b63\u5728\u963b\u6b62\u7f51\u7edc\u901a\u4fe1\u3002")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("inlineCode",{parentName:"td"},"rafthttp: request cluster ID mismatch")),(0,d.kt)("td",{parentName:"tr",align:null},"\u5177\u6709 etcd \u5b9e\u4f8b\u65e5\u5fd7 ",(0,d.kt)("inlineCode",{parentName:"td"},"rafthttp: request cluster ID mismatch")," \u7684\u8282\u70b9\u6b63\u5728\u5c1d\u8bd5\u52a0\u5165\u5df2\u7ecf\u6dfb\u52a0\u53e6\u4e00\u4e2a\u5bf9\u7b49\u8282\u70b9\uff08peer\uff09\u7684\u96c6\u7fa4\u3002\u4f60\u9700\u8981\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u8be5\u8282\u70b9\uff0c\u7136\u540e\u518d\u91cd\u65b0\u6dfb\u52a0\u3002")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:null},(0,d.kt)("inlineCode",{parentName:"td"},"rafthttp: failed to find member")),(0,d.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u72b6\u6001\uff08",(0,d.kt)("inlineCode",{parentName:"td"},"/var/lib/etcd"),"\uff09\u5305\u542b\u52a0\u5165\u96c6\u7fa4\u7684\u9519\u8bef\u4fe1\u606f\u3002\u4f60\u9700\u8981\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u8be5\u8282\u70b9\uff0c\u6e05\u7406\u72b6\u6001\u76ee\u5f55\uff0c\u7136\u540e\u518d\u91cd\u65b0\u6dfb\u52a0\u3002")))),(0,d.kt)("h2",{id:"etcd-\u96c6\u7fa4\u548c\u8fde\u63a5\u68c0\u67e5"},"etcd \u96c6\u7fa4\u548c\u8fde\u63a5\u68c0\u67e5"),(0,d.kt)("p",null,"\u8fd0\u884c etcd \u7684\u4e3b\u673a\u7684\u5730\u5740\u914d\u7f6e\u51b3\u5b9a\u4e86 etcd \u76d1\u542c\u7684\u5730\u5740\u3002\u5982\u679c\u4e3a\u8fd0\u884c etcd \u7684\u4e3b\u673a\u914d\u7f6e\u4e86\u5185\u90e8\u5730\u5740\uff0c\u5219\u9700\u8981\u663e\u5f0f\u6307\u5b9a ",(0,d.kt)("inlineCode",{parentName:"p"},"etcdctl")," \u7684\u7aef\u70b9\u3002\u5982\u679c\u4efb\u4f55\u547d\u4ee4\u7684\u54cd\u5e94\u662f ",(0,d.kt)("inlineCode",{parentName:"p"},"Error:  context deadline exceeded"),"\uff0c\u5219 etcd \u5b9e\u4f8b\u4e0d\u5065\u5eb7\uff08\u4ef2\u88c1\u4e22\u5931\u6216\u5b9e\u4f8b\u672a\u6b63\u786e\u52a0\u5165\u96c6\u7fa4\uff09\u3002"),(0,d.kt)("h3",{id:"\u68c0\u67e5\u6240\u6709\u8282\u70b9\u4e0a\u7684-etcd-\u6210\u5458"},"\u68c0\u67e5\u6240\u6709\u8282\u70b9\u4e0a\u7684 etcd \u6210\u5458"),(0,d.kt)("p",null,"\u8f93\u51fa\u5e94\u5305\u542b\u5177\u6709 ",(0,d.kt)("inlineCode",{parentName:"p"},"etcd")," \u89d2\u8272\u7684\u6240\u6709\u8282\u70b9\uff0c\u800c\u4e14\u6240\u6709\u8282\u70b9\u4e0a\u7684\u8f93\u51fa\u5e94\u8be5\u662f\u76f8\u540c\u7684\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl member list\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list"\n')),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"xxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\nxxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\nxxx, started, etcd-xxx, https://IP:2380, https://IP:2379,https://IP:4001\n")),(0,d.kt)("h3",{id:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001"},"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"RAFT TERM")," \u7684\u503c\u5e94\u8be5\u662f\u76f8\u7b49\u7684\uff0c\u800c\u4e14 ",(0,d.kt)("inlineCode",{parentName:"p"},"RAFT INDEX")," \u76f8\u5dee\u4e0d\u80fd\u592a\u5927\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint status --write-out table\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl endpoint status --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") --write-out table\n")),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | RAFT TERM | RAFT INDEX |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| https://IP:2379 | 333ef673fc4add56 |  3.2.18 |   24 MB |     false |        72 |      66887 |\n| https://IP:2379 | 5feed52d940ce4cf |  3.2.18 |   24 MB |      true |        72 |      66887 |\n| https://IP:2379 | db6b3bdb559a848d |  3.2.18 |   25 MB |     false |        72 |      66887 |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n")),(0,d.kt)("h3",{id:"\u68c0\u67e5\u7aef\u70b9\u5065\u5eb7"},"\u68c0\u67e5\u7aef\u70b9\u5065\u5eb7"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint health\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl endpoint health --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\")\n")),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"https://IP:2379 is healthy: successfully committed proposal: took = 2.113189ms\nhttps://IP:2379 is healthy: successfully committed proposal: took = 2.649963ms\nhttps://IP:2379 is healthy: successfully committed proposal: took = 2.451201ms\n")),(0,d.kt)("h3",{id:"\u68c0\u67e5\u7aef\u53e3-tcp2379-\u4e0a\u7684\u8fde\u63a5"},"\u68c0\u67e5\u7aef\u53e3 TCP/2379 \u4e0a\u7684\u8fde\u63a5"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl member list | cut -d, -f5"); do\n   echo "Validating connection to ${endpoint}/health"\n   docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/health"\ndone\n')),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5"); do\n  echo "Validating connection to ${endpoint}/health";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/health"\ndone\n')),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'Validating connection to https://IP:2379/health\n{"health": "true"}\nValidating connection to https://IP:2379/health\n{"health": "true"}\nValidating connection to https://IP:2379/health\n{"health": "true"}\n')),(0,d.kt)("h3",{id:"\u68c0\u67e5\u7aef\u53e3-tcp2380-\u4e0a\u7684\u8fde\u63a5"},"\u68c0\u67e5\u7aef\u53e3 TCP/2380 \u4e0a\u7684\u8fde\u63a5"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl member list | cut -d, -f4"); do\n  echo "Validating connection to ${endpoint}/version";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl --http1.1 -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/version"\ndone\n')),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'for endpoint in $(docker exec etcd /bin/sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f4"); do\n  echo "Validating connection to ${endpoint}/version";\n  docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl --http1.1 -s -w "\\n" --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) "${endpoint}/version"\ndone\n')),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'Validating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\nValidating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\nValidating connection to https://IP:2380/version\n{"etcdserver":"3.2.18","etcdcluster":"3.2.0"}\n')),(0,d.kt)("h2",{id:"etcd-\u544a\u8b66"},"etcd \u544a\u8b66"),(0,d.kt)("p",null,"etcd \u4f1a\u89e6\u53d1\u544a\u8b66\uff08\u4f8b\u5982\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff09\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\n')),(0,d.kt)("p",null,"\u89e6\u53d1 NOSPACE \u544a\u8b66\u7684\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"memberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\n")),(0,d.kt)("h2",{id:"etcd-\u7a7a\u95f4\u9519\u8bef"},"etcd \u7a7a\u95f4\u9519\u8bef"),(0,d.kt)("p",null,"\u76f8\u5173\u7684\u9519\u8bef\u6d88\u606f\u662f ",(0,d.kt)("inlineCode",{parentName:"p"},"etcdserver: mvcc: database space exceeded")," \u6216 ",(0,d.kt)("inlineCode",{parentName:"p"},"applying raft message exceeded backend quota"),"\u3002\u544a\u8b66 ",(0,d.kt)("inlineCode",{parentName:"p"},"NOSPACE")," \u4f1a\u88ab\u89e6\u53d1\u3002"),(0,d.kt)("p",null,"\u89e3\u51b3\uff1a"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"#%E5%8E%8B%E7%BC%A9%E9%94%AE%E7%A9%BA%E9%97%B4"},"\u538b\u7f29\u952e\u7a7a\u95f4")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"#%E5%AF%B9%E6%89%80%E6%9C%89-etcd-%E6%88%90%E5%91%98%E8%BF%9B%E8%A1%8C%E7%A2%8E%E7%89%87%E6%95%B4%E7%90%86"},"\u5bf9\u6240\u6709 etcd \u6210\u5458\u8fdb\u884c\u788e\u7247\u6574\u7406")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"#%E6%A3%80%E6%9F%A5%E7%AB%AF%E7%82%B9%E7%8A%B6%E6%80%81"},"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"#%E8%A7%A3%E9%99%A4%E5%91%8A%E8%AD%A6"},"\u89e3\u9664\u544a\u8b66"))),(0,d.kt)("h3",{id:"\u538b\u7f29\u952e\u7a7a\u95f4"},"\u538b\u7f29\u952e\u7a7a\u95f4"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"rev=$(docker exec etcd etcdctl endpoint status --write-out json | egrep -o '\"revision\":[0-9]*' | egrep -o '[0-9]*')\ndocker exec etcd etcdctl compact \"$rev\"\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'rev=$(docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT endpoint status --write-out json | egrep -o \'\\"revision\\":[0-9]*\' | egrep -o \'[0-9]*\'")\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT compact \\"$rev\\""\n')),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"compacted revision xxx\n")),(0,d.kt)("h3",{id:"\u5bf9\u6240\u6709-etcd-\u6210\u5458\u8fdb\u884c\u788e\u7247\u6574\u7406"},"\u5bf9\u6240\u6709 etcd \u6210\u5458\u8fdb\u884c\u788e\u7247\u6574\u7406"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl defrag\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd sh -c \"etcdctl defrag --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\")\"\n")),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"Finished defragmenting etcd member[https://IP:2379]\nFinished defragmenting etcd member[https://IP:2379]\nFinished defragmenting etcd member[https://IP:2379]\n")),(0,d.kt)("h3",{id:"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001-1"},"\u68c0\u67e5\u7aef\u70b9\u72b6\u6001"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec -e ETCDCTL_ENDPOINTS=$(docker exec etcd /bin/sh -c \"etcdctl member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") etcd etcdctl endpoint status --write-out table\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd sh -c \"etcdctl endpoint status --endpoints=$(docker exec etcd /bin/sh -c \"etcdctl --endpoints=\\$ETCDCTL_ENDPOINT member list | cut -d, -f5 | sed -e 's/ //g' | paste -sd ','\") --write-out table\"\n")),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| ENDPOINT        |        ID        | VERSION | DB SIZE | IS LEADER | RAFT TERM | RAFT INDEX |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n| https://IP:2379 |  e973e4419737125 |  3.2.18 |  553 kB |     false |        32 |    2449410 |\n| https://IP:2379 | 4a509c997b26c206 |  3.2.18 |  553 kB |     false |        32 |    2449410 |\n| https://IP:2379 | b217e736575e9dd3 |  3.2.18 |  553 kB |      true |        32 |    2449410 |\n+-----------------+------------------+---------+---------+-----------+-----------+------------+\n")),(0,d.kt)("h3",{id:"\u89e3\u9664\u544a\u8b66"},"\u89e3\u9664\u544a\u8b66"),(0,d.kt)("p",null,"\u5982\u679c\u538b\u7f29\u548c\u6574\u7406\u788e\u7247\u540e\u786e\u5b9a\u6570\u636e\u5e93\u5927\u5c0f\u4e0b\u964d\u4e86\uff0c\u5219\u9700\u8981\u89e3\u9664\u544a\u8b66\u6765\u5141\u8bb8 etcd \u518d\u6b21\u5199\u5165\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\ndocker exec etcd etcdctl alarm disarm\ndocker exec etcd etcdctl alarm list\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm disarm"\ndocker exec etcd sh -c "etcdctl --endpoints=\\$ETCDCTL_ENDPOINT alarm list"\n')),(0,d.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl alarm list\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\nmemberID:x alarm:NOSPACE\ndocker exec etcd etcdctl alarm disarm\ndocker exec etcd etcdctl alarm list\n")),(0,d.kt)("h2",{id:"\u65e5\u5fd7\u7ea7\u522b"},"\u65e5\u5fd7\u7ea7\u522b"),(0,d.kt)("p",null,"etcd \u7684\u65e5\u5fd7\u7ea7\u522b\u53ef\u4ee5\u901a\u8fc7 API \u6765\u52a8\u6001\u66f4\u6539\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u914d\u7f6e\u8c03\u8bd5\u65e5\u5fd7\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"DEBUG"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINTS)/config/local/log\n')),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"DEBUG"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINT)/config/local/log\n')),(0,d.kt)("p",null,"\u8981\u5c06\u65e5\u5fd7\u7ea7\u522b\u91cd\u7f6e\u56de\u9ed8\u8ba4\u503c (",(0,d.kt)("inlineCode",{parentName:"p"},"INFO"),")\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"INFO"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINTS)/config/local/log\n')),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},'docker run --net=host -v $(docker inspect kubelet --format \'{{ range .Mounts }}{{ if eq .Destination "/etc/kubernetes" }}{{ .Source }}{{ end }}{{ end }}\')/ssl:/etc/kubernetes/ssl:ro appropriate/curl -s -XPUT -d \'{"Level":"INFO"}\' --cacert $(docker exec etcd printenv ETCDCTL_CACERT) --cert $(docker exec etcd printenv ETCDCTL_CERT) --key $(docker exec etcd printenv ETCDCTL_KEY) $(docker exec etcd printenv ETCDCTL_ENDPOINT)/config/local/log\n')),(0,d.kt)("h2",{id:"etcd-\u5185\u5bb9"},"etcd \u5185\u5bb9"),(0,d.kt)("p",null,"\u5982\u679c\u8981\u67e5\u770b etcd \u7684\u5185\u5bb9\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u6d41\u4e8b\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2 etcd\u3002\u8be6\u60c5\u8bf7\u53c2\u9605\u4ee5\u4e0b\u793a\u4f8b\u3002"),(0,d.kt)("h3",{id:"\u67e5\u770b\u6d41\u4e8b\u4ef6"},"\u67e5\u770b\u6d41\u4e8b\u4ef6"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl watch --prefix /registry\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl --endpoints=\\$ETCDCTL_ENDPOINT watch --prefix /registry\n")),(0,d.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u67e5\u770b\u53d7\u5f71\u54cd\u7684\u952e\uff08\u800c\u4e0d\u662f\u4e8c\u8fdb\u5236\u6570\u636e\uff09\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,d.kt)("inlineCode",{parentName:"p"},"| grep -a ^/registry")," \u5c3e\u9644\u5230\u8be5\u547d\u4ee4\u6765\u8fc7\u6ee4\u952e\u3002"),(0,d.kt)("h3",{id:"\u76f4\u63a5\u67e5\u8be2-etcd"},"\u76f4\u63a5\u67e5\u8be2 etcd"),(0,d.kt)("p",null,"\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl get /registry --prefix=true --keys-only\n")),(0,d.kt)("p",null,"\u5982\u679c etcd \u7248\u672c\u4f4e\u4e8e 3.3.x\uff08Kubernetes 1.13.x \u53ca\u66f4\u4f4e\u7248\u672c\uff09\u4e14\u6dfb\u52a0\u8282\u70b9\u65f6\u6307\u5b9a\u4e86 ",(0,d.kt)("inlineCode",{parentName:"p"},"--internal-address"),"\uff0c\u5219\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl --endpoints=\\$ETCDCTL_ENDPOINT get /registry --prefix=true --keys-only\n")),(0,d.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5904\u7406\u6570\u636e\uff0c\u4ece\u800c\u83b7\u53d6\u6bcf\u4e2a\u952e\u7684\u8ba1\u6570\u6458\u8981\uff1a"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre"},"docker exec etcd etcdctl get /registry --prefix=true --keys-only | grep -v ^$ | awk -F'/' '{ if ($3 ~ /cattle.io/) {h[$3\"/\"$4]++} else { h[$3]++ }} END { for(k in h) print h[k], k }' | sort -nr\n")),(0,d.kt)("h2",{id:"\u66f4\u6362\u4e0d\u5065\u5eb7\u7684-etcd-\u8282\u70b9"},"\u66f4\u6362\u4e0d\u5065\u5eb7\u7684 etcd \u8282\u70b9"),(0,d.kt)("p",null,"\u5982\u679c\u4f60 etcd \u96c6\u7fa4\u4e2d\u7684\u67d0\u4e2a\u8282\u70b9\u53d8\u5f97\u4e0d\u5065\u5eb7\uff0c\u5728\u5c06\u65b0\u7684 etcd \u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e4b\u524d\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4fee\u590d\u6216\u5220\u9664\u6545\u969c/\u4e0d\u5065\u5eb7\u7684\u8282\u70b9\u3002"))}u.isMDXComponent=!0}}]);