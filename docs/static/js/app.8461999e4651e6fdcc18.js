webpackJsonp([1],{"/+Ba":function(t,e){},"/hLF":function(t,e){},"8SOd":function(t,e){},"8en8":function(t,e){},"9xXf":function(t,e){},AN4q:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("9xXf")}function s(t){a("8SOd")}function o(t){a("AN4q")}function i(t){a("vVZb")}function c(t){a("gfrd")}function r(t){a("u3Ps")}function l(t){a("8en8")}function u(t){a("/hLF")}function p(t){a("c7a5")}Object.defineProperty(e,"__esModule",{value:!0});var d=a("qRXP"),g=(a("/+Ba"),a("rVsN")),v=a.n(g),f=a("2sCs"),h=a.n(f),_=void 0;h.a.interceptors.request.use(function(t){return _=d.a.toasted.global.loading(),t},function(t){return _.goAway(300),v.a.reject(t)}),h.a.interceptors.response.use(function(t){return _.goAway(300),t},function(t){return _.goAway(300),v.a.reject(t)});var m="https://cnodejs.org/api/v1",b={getTopics:function(t){return h.a.get(m+"/topics",{params:t})},getTopic:function(t,e){return h.a.get(m+"/topic/"+t,{params:{accesstoken:e}})},getUser:function(t){return h.a.get(m+"/user/"+t)},postTopics:function(t){return h.a.post(m+"/topics/",{params:t})},updateTopics:function(t){return h.a.post(m+"/topics/update",{params:t})},validateAccesstoken:function(t){return h.a.post(m+"/accesstoken",{accesstoken:t})},collect:function(t){return h.a.post(m+"/topic_collect/collect",t)},unCollect:function(t){return h.a.post(m+"/topic_collect/de_collect",t)},getCollect:function(t){return h.a.get(m+"/topic_collect/"+t)},getMessageCount:function(t){return h.a.get(m+"/message/count",{params:{accesstoken:t}})},upReply:function(t,e){return h.a.post(m+"/reply/"+t+"/ups",{accesstoken:e})}},C={LOGIN:"LOGIN",LOGOUT:"LOGOUT",SHOWLOGINDIALOG:"SHOWLOGINDIALOG",CLOSELOGINDIALOG:"CLOSELOGINDIALOG"},k={name:"base-login",data:function(){return{}},methods:{submit:function(){var t=this,e=this.$refs.accessToken.value;this.$store.dispatch("login",e).then(function(){t.close()}).catch(function(){console.log("login fail")})},close:function(){this.$refs.accessToken.value="",this.$store.commit(C.CLOSELOGINDIALOG)}}},L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.showLoginDialog?a("div",{staticClass:"modal fade",staticStyle:{background:"rgba(0,0,0,0.5)",opacity:"1",display:"block"},attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",staticStyle:{top:"70px"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"},on:{click:t.close}},[t._v("×\n        ")]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("\n          请输入accessToken ")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。")]),t._v(" "),a("input",{ref:"accessToken",staticClass:"form-control",attrs:{placeholder:"请输入accessToken"}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.close}},[t._v("\n          关闭\n        ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submit}},[t._v("\n          确定\n        ")])])])])]):t._e()},T=[],I={render:L,staticRenderFns:T},y=I,O=a("/Xao"),$=O(k,y,!1,null,null,null),x=$.exports,N={name:"base-top",components:{BaseLogin:x},data:function(){return{showLogin:!1,msgCount:0}},computed:{isLogin:function(){return this.$store.state.isLogin},userInfo:function(){return this.$store.state.userInfo},accesstoken:function(){return this.$store.state.accesstoken}},methods:{showLoginDialog:function(){this.$store.commit(C.SHOWLOGINDIALOG)},logout:function(){this.$store.commit(C.LOGOUT)}},mounted:function(){var t=this;this.accesstoken&&b.getMessageCount(this.accesstoken).then(function(e){t.msgCount=e.data.data})}},G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar header"},[a("div",{staticClass:"navbar-inner"},[a("div",{staticClass:"container"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"right-links"},[t.isLogin?t._e():a("a",{attrs:{href:"javascript:"},on:{click:t.showLoginDialog}},[t._v("登录")]),t._v(" "),t.isLogin?a("span",[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:t.userInfo.loginname}}}},[t._v(t._s(t.userInfo.loginname))]),t._v(" ( "+t._s(t.msgCount)+" )   |  \n          "),a("a",{attrs:{href:"javascript:"},on:{click:t.logout}},[t._v("退出")])],1):t._e()])])]),t._v(" "),a("base-login")],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand pull-left"},[a("a",{attrs:{href:"#/"}},[t._v("CNode")])])}],w={render:G,staticRenderFns:S},D=w,A=a("/Xao"),E=n,U=A(N,D,!1,E,null,null),R=U.exports,X=a("VoG5"),F=a.n(X);d.a.filter("toLocale",function(t){if(!t)return"";var e=new Date(t);return[[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),[e.getHours(),e.getMinutes(),e.getSeconds()].join(":")].join(" ")});var M,P=a("a3Yh"),j=a.n(P),q=a("3cXf"),H=a.n(q),V=a("9rMa"),B={getToken:function(){return localStorage.getItem("accessToken")||""},getUserInfo:function(){var t=localStorage.getItem("userInfo")||"";try{return JSON.parse(t)}catch(t){return{}}}};d.a.use(V.a);var W=new V.a.Store({state:{isLogin:!!B.getToken(),accessToken:B.getToken(),userInfo:B.getUserInfo(),showLoginDialog:!1},mutations:(M={},j()(M,C.LOGIN,function(t,e){t.isLogin=!0,t.accessToken=e.accessToken,t.userInfo=e.userInfo,localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("userInfo",H()(e.userInfo))}),j()(M,C.LOGOUT,function(t){t.isLogin=!1,t.accessToken="",t.userInfo=null,localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo")}),j()(M,C.SHOWLOGINDIALOG,function(t){t.showLoginDialog=!0}),j()(M,C.CLOSELOGINDIALOG,function(t){t.showLoginDialog=!1}),M),actions:{login:function(t,e){return new v.a(function(a,n){b.validateAccesstoken(e).then(function(n){console.log("validateAccesstoken",n),t.commit(C.LOGIN,{accessToken:e,userInfo:n.data}),a()}).catch(function(){d.a.toasted.error("无效的accessToken"),n()})})}}}),J=W,Y={name:"base-bottom",data:function(){return{topic:{}}}},Z=function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"footer"})},z=[],K={render:Z,staticRenderFns:z},Q=K,tt=a("/Xao"),et=s,at=tt(Y,Q,!1,et,null,null),nt=at.exports;d.a.use(F.a,{singleton:!0,position:"top-center",duration:3e3,iconPack:"material"}),d.a.toasted.register("loading","Loading...",{icon:"hourglass_empty",duration:null});var st={name:"app",components:{BaseBottom:nt,BaseTop:R},store:J},ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("base-top"),t._v(" "),a("router-view"),t._v(" "),a("base-bottom")],1)},it=[],ct={render:ot,staticRenderFns:it},rt=ct,lt=a("/Xao"),ut=o,pt=lt(st,rt,!1,ut,null,null),dt=pt.exports,gt=a("zO6J"),vt={tabMap:{all:"全部",ask:"问答",good:"精华",job:"招聘",share:"分享",dev:"客户端测试"}},ft={name:"topic-list",props:{topics:Array},methods:{getTabDesc:function(t){return t.top?"置顶":t.good?"精华":vt.tabMap[t.tab]},getClassName:function(t){return t.top||t.good?"label-success":"label-default"}}},ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group"},t._l(t.topics,function(e){return a("li",{staticClass:"list-group-item",attrs:{"data-id":e.id}},[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})]),t._v(" "),a("span",{staticClass:"label",class:t.getClassName(e)},[t._v(t._s(t.getTabDesc(e)))]),t._v(" "),a("router-link",{attrs:{to:{name:"TopicDetail",params:{id:e.id}}}},[t._v(t._s(e.title))]),t._v(" "),e.visit_count?a("span",{staticClass:"badge"},[a("span",{attrs:{title:"回复数"}},[t._v(t._s(e.reply_count))]),t._v("/"),a("span",{attrs:{title:"点击数"}},[t._v(t._s(e.visit_count))])]):t._e()],1)}))},_t=[],mt={render:ht,staticRenderFns:_t},bt=mt,Ct=a("/Xao"),kt=i,Lt=Ct(ft,bt,!1,kt,null,null),Tt=Lt.exports,It={name:"base-pager",props:{page:Number,tab:String,name:String},computed:{pageObj:function(){for(var t=this.startPage,e=this.endPage,a=[],n=t;n<=e;n++)a.push({page:n});return a},startPage:function(){return this.page>3?this.page-2:1},endPage:function(){return this.page>3?this.page+2:5}}},yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",[a("router-link",{attrs:{to:{name:t.name,params:{tab:t.tab},query:{page:t.page-1<=1?1:t.page-1}},"aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])],1),t._v(" "),t.startPage>1?a("li",[a("span",[t._v("...")])]):t._e(),t._v(" "),t._l(t.pageObj,function(e){return a("router-link",{key:e.page,attrs:{"exact-active-class":"active",tag:"li",to:{name:t.name,params:{tab:t.tab},query:{page:e.page}}}},[a("a",[t._v(t._s(e.page))])])}),t._v(" "),t._m(0,!1,!1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:t.name,params:{tab:t.tab},query:{page:t.page+1}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])],1)],2)])},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",[t._v("...")])])}],$t={render:yt,staticRenderFns:Ot},xt=$t,Nt=a("/Xao"),Gt=c,St=Nt(It,xt,!1,Gt,null,null),wt=St.exports,Dt={name:"tab-nav",data:function(){return{tabs:vt.tabMap}}},At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-pills"},t._l(t.tabs,function(e,n){return a("router-link",{key:n,attrs:{role:"presentation",tag:"li",to:{name:"Topics",params:{tab:n},query:{page:1}},"active-class":"active"}},[a("a",[t._v(t._s(e))])])}))},Et=[],Ut={render:At,staticRenderFns:Et},Rt=Ut,Xt=a("/Xao"),Ft=Xt(Dt,Rt,!1,null,null,null),Mt=Ft.exports,Pt={name:"v-title",created:function(){this.updateTitle()},updated:function(){this.updateTitle()},methods:{updateTitle:function(){var t=this.$slots.default;if(!(void 0===t||t.length<1||"string"!=typeof t[0].text)){var e=t[0].text;e!==document.title&&(document.title=e)}}}},jt=function(){var t=this,e=t.$createElement;t._self._c;return t._e()},qt=[],Ht={render:jt,staticRenderFns:qt},Vt=Ht,Bt=a("/Xao"),Wt=Bt(Pt,Vt,!1,null,null,null),Jt=Wt.exports,Yt={name:"page-index",components:{VTitle:Jt,TabNav:Mt,TopicList:Tt,Pager:wt},data:function(){var t=this.$route,e=t.query,a=t.params.tab||"all";return{topics:[],page:Number(e.page)||1,tab:a}},computed:{title:function(){var t="all"===this.tab?"":vt.tabMap[this.tab];return t?t+"板块 - vue-CNode":"vue-CNode"}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this,e=this.$route,a=e.query,n=e.params.tab||"all",s=Number(a.page)||1,o={tab:n,page:s};this.tab=n,this.page=s,b.getTopics(o).then(function(e){t.topics=e.data.data}).catch(function(e){t.$toasted.error(e)})}},watch:{$route:"fetch"}},Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-title",[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("tab-nav")],1),t._v(" "),a("div",{staticClass:"panel-body"},[a("topic-list",{attrs:{topics:t.topics}}),t._v(" "),a("pager",{attrs:{page:t.page,tab:t.tab,name:"Topics"}})],1)])],1)},zt=[],Kt={render:Zt,staticRenderFns:zt},Qt=Kt,te=a("/Xao"),ee=r,ae=te(Yt,Qt,!1,ee,"data-v-5503f9ff",null),ne=ae.exports,se={components:{VTitle:Jt},name:"topic-detail",data:function(){return{topic:{author:{},replies:[]}}},mounted:function(){this.fetch()},computed:{token:function(){return this.$store.state.accessToken},tabDesc:function(){return vt.tabMap[this.topic.tab]},isCollect:function(){return this.topic.is_collect?"取消收藏":"收藏"}},methods:{fetch:function(){var t=this,e=this.$route.params.id;b.getTopic(e,this.token).then(function(e){console.log("res",e.data),t.topic=e.data.data}).catch(function(e){t.$toasted.error(e)})},checkContent:function(t){return t.replace(/(\/user\/\S+">\S+<\/a>)/g,"#$1")},checkCollect:function(){this.topic.is_collect?this.unCollect():this.collect()},collect:function(){var t=this;b.collect({accesstoken:this.token,topic_id:this.topic.id}).then(function(e){console.log("collect",e),t.topic.is_collect=!0,t.$toasted.success("收藏成功")})},unCollect:function(){var t=this;b.unCollect({accesstoken:this.token,topic_id:this.topic.id}).then(function(e){console.log("unCollect",e),t.topic.is_collect=!1,t.$toasted.success("取消收藏成功")})},agree:function(t){var e=this;if(!this.$store.state.isLogin)return this.$toasted.show("请先登录，登录后即可点赞"),setTimeout(function(){e.$store.commit(C.SHOWLOGINDIALOG)},3e3);b.upReply(t,this.token).then(function(a){console.log("upReply",a);var n=a.data.action;e.topic.replies.forEach(function(e){e.id===t&&("up"===n?e.ups.push(!0):e.ups.shift())})})}},watch:{token:function(){this.fetch()}}},oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container detail"},[a("v-title",[t._v(t._s(t.topic.title))]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-body"},[a("h3",{staticClass:"title"},[t._v(t._s(t.topic.title))]),t._v(" "),a("div",{staticClass:"meta"},[t._v("\n        发布于 "+t._s(t._f("toLocale")(t.topic.create_at))+" | 作者\n        "),a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:t.topic.author.loginname}}}},[t._v(t._s(t.topic.author.loginname))]),t._v("\n        | "+t._s(t.topic.visit_count)+"次浏览 | 分类\n        "),a("router-link",{attrs:{to:{name:"Topics",params:{tab:t.topic.tab},query:{page:1}}}},[t._v(t._s(t.tabDesc))]),t._v(" "),t.topic.author_id&&t.token?a("input",{staticClass:"btn-collect btn btn-info pull-right",attrs:{type:"button",value:t.isCollect},on:{click:t.checkCollect}}):t._e()],1),t._v(" "),a("article",{staticClass:"content",domProps:{innerHTML:t._s(t.topic.content)}}),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v(t._s(t.topic.replies.length)+" 回复")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.topic.replies.length?a("ul",{staticClass:"list-group"},t._l(t.topic.replies,function(e){return a("li",{staticClass:"list-group-item"},[a("div",[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})]),t._v(" "),a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("strong",[t._v(t._s(e.author.loginname))])]),t._v("\n                "+t._s(t._f("toLocale")(e.create_at))+"\n                "),e.author.loginname===t.topic.author.loginname?a("span",{staticClass:"label label-success"},[t._v("作者")]):t._e()],1),t._v(" "),a("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(t.checkContent(e.content))}}),t._v(" "),a("div",{staticClass:"agree",class:{"agree-none":!e.ups.length},on:{click:function(a){t.agree(e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(e.ups.length?e.ups.length:"")+"\n              ")])])})):a("span",[t._v("暂无回复")])])])])])],1)},ie=[],ce={render:oe,staticRenderFns:ie},re=ce,le=a("/Xao"),ue=l,pe=le(se,re,!1,ue,null,null),de=pe.exports,ge={name:"page-user"},ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("router-view")],1)},fe=[],he={render:ve,staticRenderFns:fe},_e=he,me=a("/Xao"),be=me(ge,_e,!1,null,null,null),Ce=be.exports,ke={name:"user-index",components:{VTitle:Jt,TopicList:Tt},data:function(){return{user:{loginname:"-",recent_topics:[],recent_replies:[],create_at:""},collectTopics:[]}},computed:{githubUrl:function(){return"https://github.com/"+this.user.githubUsername}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this,e=this.$route.params.loginname;b.getUser(e).then(function(e){t.user=e.data.data}),b.getCollect(e).then(function(e){t.collectTopics=e.data.data}).catch(function(e){t.$toasted.error(e)})}},watch:{$route:"fetch"}},Le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-title",[t._v("@"+t._s(t.user.loginname)+"的个人主页")]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("用户信息")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("img",{staticClass:"header-img",attrs:{src:t.user.avatar_url}}),t._v(" "),a("div",{staticClass:"user-info-right"},[a("strong",[t._v(t._s(t.user.loginname))]),t._v(" "),a("br"),t._v("\n        github:"),a("a",{staticClass:"dark",attrs:{href:t.githubUrl,target:"_blank"}},[t._v("@"+t._s(t.user.githubUsername))]),a("br"),t._v("\n        "+t._s(t.user.score)+"积分"),a("br"),t._v(" "),a("router-link",{attrs:{to:{name:"Collections"}}},[t._v("收藏的主题 "),t.collectTopics.length?a("span",[t._v("("+t._s(t.collectTopics.length)+")")]):t._e()]),a("br"),t._v("\n        注册时间："+t._s(t._f("toLocale")(t.user.create_at))+"\n      ")],1)])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("最近创建的话题")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.user.recent_topics.length?a("topic-list",{attrs:{topics:t.user.recent_topics}}):a("span",[t._v("暂无最近创建的话题")])],1)]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("最近参与的话题")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.user.recent_replies.length?a("topic-list",{attrs:{topics:t.user.recent_replies}}):a("span",[t._v("暂无最近参与的话题")])],1)])],1)},Te=[],Ie={render:Le,staticRenderFns:Te},ye=Ie,Oe=a("/Xao"),$e=u,xe=Oe(ke,ye,!1,$e,null,null),Ne=xe.exports,Ge={name:"page-collections",components:{VTitle:Jt,TopicList:Tt},data:function(){return{topics:[],loginname:this.$route.params.loginname}},mounted:function(){var t=this;b.getCollect(this.loginname).then(function(e){t.topics=e.data.data}).catch(function(e){t.$toasted.error(e)})}},Se=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-title",[t._v("@"+t._s(t.loginname)+" 的收藏")]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("\n      "+t._s(t.loginname)+" 的收藏 ("+t._s(t.topics.length)+")\n    ")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.topics.length?a("topic-list",{attrs:{topics:t.topics}}):a("span",[t._v("暂无收藏的主题")])],1)])],1)},we=[],De={render:Se,staticRenderFns:we},Ae=De,Ee=a("/Xao"),Ue=p,Re=Ee(Ge,Ae,!1,Ue,"data-v-fd62dfd6",null),Xe=Re.exports;d.a.use(gt.a);var Fe=new gt.a({routes:[{path:"/",redirect:{path:"/topics"}},{path:"/topics",redirect:{path:"/topics/all",query:{page:1}}},{path:"/topics/:tab",name:"Topics",component:ne},{path:"/topic/:id",name:"TopicDetail",component:de},{path:"/user/:loginname",component:Ce,children:[{path:"",name:"UserIndex",component:Ne},{path:"collections",name:"Collections",component:Xe}]}]});d.a.config.productionTip=!1,new d.a({el:"#app",router:Fe,template:"<App/>",components:{App:dt}})},c7a5:function(t,e){},gfrd:function(t,e){},u3Ps:function(t,e){},vVZb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8461999e4651e6fdcc18.js.map