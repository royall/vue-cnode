webpackJsonp([1],{"/+Ba":function(t,e){},"8SOd":function(t,e){},AN4q:function(t,e){},CZ8Y:function(t,e){},Gj25:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("nyZj")}function s(t){a("8SOd")}function r(t){a("AN4q")}function o(t){a("vVZb")}function i(t){a("gfrd")}function c(t){a("SZvj")}function l(t){a("jDGj")}function u(t){a("CZ8Y")}function p(t){a("Gj25")}Object.defineProperty(e,"__esModule",{value:!0});var d=a("qRXP"),v=(a("/+Ba"),a("lC5x")),f=a.n(v),g=a("J0Oq"),m=a.n(g),_=a("rVsN"),h=a.n(_),b=a("2sCs"),C=a.n(b),k=void 0;C.a.interceptors.request.use(function(t){return k=d.a.toasted.global.loading(),t},function(t){return k.goAway(300),h.a.reject(t)}),C.a.interceptors.response.use(function(t){return k.goAway(300),t},function(t){return k.goAway(300),h.a.reject(t)});var T="https://cnodejs.org/api/v1",x={getTopics:function(t){return C.a.get(T+"/topics",{params:t})},getTopic:function(t,e){return C.a.get(T+"/topic/"+t,{params:{accesstoken:e}})},getUser:function(t){return C.a.get(T+"/user1/"+t)},postTopics:function(t){return C.a.post(T+"/topics/",{params:t})},updateTopics:function(t){return C.a.post(T+"/topics/update",{params:t})},validateAccesstoken:function(t){return C.a.post(T+"/accesstoken",{accesstoken:t})},collect:function(t){return C.a.post(T+"/topic_collect/collect",t)},unCollect:function(t){return C.a.post(T+"/topic_collect/de_collect",t)},getCollect:function(t){return C.a.get(T+"/topic_collect/"+t)},getMessageCount:function(t){return C.a.get(T+"/message/count",{params:{accesstoken:t}})},upReply:function(t,e){return C.a.post(T+"/reply/"+t+"/ups",{accesstoken:e})}},L={tabMap:{all:"全部",ask:"问答",good:"精华",job:"招聘",share:"分享",dev:"客户端测试"}},y={LOGIN:"LOGIN",LOGOUT:"LOGOUT",SHOWLOGINDIALOG:"SHOWLOGINDIALOG",CLOSELOGINDIALOG:"CLOSELOGINDIALOG"},I={name:"base-login",data:function(){return{}},methods:{submit:function(){var t=this;return m()(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$refs.accessToken.value,e.prev=1,e.next=4,t.$store.dispatch("login",a);case 4:if(e.t0=e.sent,!e.t0){e.next=7;break}t.close();case 7:e.next=12;break;case 9:e.prev=9,e.t1=e.catch(1),console.log("login fail");case 12:case"end":return e.stop()}},e,t,[[1,9]])}))()},close:function(){this.$refs.accessToken.value="",this.$store.commit(y.CLOSELOGINDIALOG)}}},O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.$store.state.showLoginDialog?a("div",{staticClass:"modal fade",staticStyle:{background:"rgba(0,0,0,0.5)",opacity:"1",display:"block"},attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",staticStyle:{top:"70px"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-hidden":"true"},on:{click:t.close}},[t._v("×\n        ")]),t._v(" "),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v("\n          请输入accessToken ")])]),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。")]),t._v(" "),a("input",{ref:"accessToken",staticClass:"form-control",attrs:{placeholder:"请输入accessToken"}})]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.close}},[t._v("\n          关闭\n        ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.submit}},[t._v("\n          确定\n        ")])])])])]):t._e()},$=[],w={render:O,staticRenderFns:$},G=w,N=a("/Xao"),S=N(I,G,!1,null,null,null),D=S.exports,j={name:"base-top",components:{BaseLogin:D},data:function(){return{showLogin:!1,msgCount:0}},computed:{isLogin:function(){return this.$store.state.isLogin},userInfo:function(){return this.$store.state.userInfo},accesstoken:function(){return this.$store.state.accesstoken}},methods:{showLoginDialog:function(){this.$store.commit(y.SHOWLOGINDIALOG)},logout:function(){this.$store.commit(y.LOGOUT)}},mounted:function(){var t=this;return m()(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.accesstoken&&(a=x.getMessageCount(t.accesstoken),t.msgCount=a.data.data);case 1:case"end":return e.stop()}},e,t)}))()}},A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"navbar header"},[a("div",{staticClass:"navbar-inner"},[a("div",{staticClass:"container"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"right-links"},[t.isLogin?t._e():a("a",{attrs:{href:"javascript:"},on:{click:t.showLoginDialog}},[t._v("登录")]),t._v(" "),t.isLogin?a("span",[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:t.userInfo.loginname}}}},[t._v(t._s(t.userInfo.loginname))]),t._v(" ( "+t._s(t.msgCount)+" )   |  \n          "),a("a",{attrs:{href:"javascript:"},on:{click:t.logout}},[t._v("退出")])],1):t._e()])])]),t._v(" "),a("base-login")],1)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand pull-left"},[a("a",{attrs:{href:"#/"}},[t._v("CNode")])])}],U={render:A,staticRenderFns:E},R=U,M=a("/Xao"),X=n,F=M(j,R,!1,X,null,null),q=F.exports,P=a("VoG5"),H=a.n(P);d.a.filter("toLocale",function(t){if(!t)return"";var e=new Date(t);return[[e.getFullYear(),e.getMonth()+1,e.getDate()].join("-"),[e.getHours(),e.getMinutes(),e.getSeconds()].join(":")].join(" ")});var V,Z=a("a3Yh"),B=a.n(Z),W=a("3cXf"),J=a.n(W),Y=a("9rMa"),z={getToken:function(){return localStorage.getItem("accessToken")||""},getUserInfo:function(){var t=localStorage.getItem("userInfo")||"";try{return JSON.parse(t)}catch(t){return{}}}};d.a.use(Y.a);var K=new Y.a.Store({state:{isLogin:!!z.getToken(),accessToken:z.getToken(),userInfo:z.getUserInfo(),showLoginDialog:!1},mutations:(V={},B()(V,y.LOGIN,function(t,e){t.isLogin=!0,t.accessToken=e.accessToken,t.userInfo=e.userInfo,localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("userInfo",J()(e.userInfo))}),B()(V,y.LOGOUT,function(t){t.isLogin=!1,t.accessToken="",t.userInfo=null,localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo")}),B()(V,y.SHOWLOGINDIALOG,function(t){t.showLoginDialog=!0}),B()(V,y.CLOSELOGINDIALOG,function(t){t.showLoginDialog=!1}),V),actions:{login:function(t,e){var a=this;return m()(f.a.mark(function n(){var s;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,x.validateAccesstoken(e);case 3:return s=a.sent,console.log("validateAccesstoken",s),t.commit(y.LOGIN,{accessToken:e,userInfo:s.data}),a.abrupt("return",s);case 9:a.prev=9,a.t0=a.catch(0),d.a.toasted.error("无效的accessToken");case 12:case"end":return a.stop()}},n,a,[[0,9]])}))()}}}),Q=K,tt={name:"base-bottom",data:function(){return{topic:{}}}},et=function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"footer"})},at=[],nt={render:et,staticRenderFns:at},st=nt,rt=a("/Xao"),ot=s,it=rt(tt,st,!1,ot,null,null),ct=it.exports;d.a.use(H.a,{singleton:!0,position:"top-center",duration:3e3,iconPack:"material"}),d.a.toasted.register("loading","Loading...",{icon:"hourglass_empty",duration:null});var lt={name:"app",components:{BaseBottom:ct,BaseTop:q},store:Q},ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("base-top"),t._v(" "),a("router-view"),t._v(" "),a("base-bottom")],1)},pt=[],dt={render:ut,staticRenderFns:pt},vt=dt,ft=a("/Xao"),gt=r,mt=ft(lt,vt,!1,gt,null,null),_t=mt.exports,ht=a("zO6J"),bt={name:"topic-list",props:{topics:Array},methods:{getTabDesc:function(t){return t.top?"置顶":t.good?"精华":L.tabMap[t.tab]},getClassName:function(t){return t.top||t.good?"label-success":"label-default"}}},Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"list-group"},t._l(t.topics,function(e){return a("li",{staticClass:"list-group-item",attrs:{"data-id":e.id}},[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})]),t._v(" "),a("span",{staticClass:"label",class:t.getClassName(e)},[t._v(t._s(t.getTabDesc(e)))]),t._v(" "),a("router-link",{attrs:{to:{name:"TopicDetail",params:{id:e.id}}}},[t._v(t._s(e.title))]),t._v(" "),e.visit_count?a("span",{staticClass:"badge"},[a("span",{attrs:{title:"回复数"}},[t._v(t._s(e.reply_count))]),t._v("/"),a("span",{attrs:{title:"点击数"}},[t._v(t._s(e.visit_count))])]):t._e()],1)}))},kt=[],Tt={render:Ct,staticRenderFns:kt},xt=Tt,Lt=a("/Xao"),yt=o,It=Lt(bt,xt,!1,yt,null,null),Ot=It.exports,$t={name:"base-pager",props:{page:Number,tab:String,name:String},computed:{pageObj:function(){for(var t=this.startPage,e=this.endPage,a=[],n=t;n<=e;n++)a.push({page:n});return a},startPage:function(){return this.page>3?this.page-2:1},endPage:function(){return this.page>3?this.page+2:5}}},wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination"},[a("li",[a("router-link",{attrs:{to:{name:t.name,params:{tab:t.tab},query:{page:t.page-1<=1?1:t.page-1}},"aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])],1),t._v(" "),t.startPage>1?a("li",[a("span",[t._v("...")])]):t._e(),t._v(" "),t._l(t.pageObj,function(e){return a("router-link",{key:e.page,attrs:{"exact-active-class":"active",tag:"li",to:{name:t.name,params:{tab:t.tab},query:{page:e.page}}}},[a("a",[t._v(t._s(e.page))])])}),t._v(" "),t._m(0,!1,!1),t._v(" "),a("li",[a("router-link",{attrs:{to:{name:t.name,params:{tab:t.tab},query:{page:t.page+1}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])],1)],2)])},Gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("span",[t._v("...")])])}],Nt={render:wt,staticRenderFns:Gt},St=Nt,Dt=a("/Xao"),jt=i,At=Dt($t,St,!1,jt,null,null),Et=At.exports,Ut={name:"tab-nav",data:function(){return{tabs:L.tabMap}}},Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-pills"},t._l(t.tabs,function(e,n){return a("router-link",{key:n,attrs:{role:"presentation",tag:"li",to:{name:"Topics",params:{tab:n},query:{page:1}},"active-class":"active"}},[a("a",[t._v(t._s(e))])])}))},Mt=[],Xt={render:Rt,staticRenderFns:Mt},Ft=Xt,qt=a("/Xao"),Pt=qt(Ut,Ft,!1,null,null,null),Ht=Pt.exports,Vt={name:"v-title",created:function(){this.updateTitle()},updated:function(){this.updateTitle()},methods:{updateTitle:function(){var t=this.$slots.default;if(!(void 0===t||t.length<1||"string"!=typeof t[0].text)){var e=t[0].text;e!==document.title&&(document.title=e)}}}},Zt=function(){var t=this,e=t.$createElement;t._self._c;return t._e()},Bt=[],Wt={render:Zt,staticRenderFns:Bt},Jt=Wt,Yt=a("/Xao"),zt=Yt(Vt,Jt,!1,null,null,null),Kt=zt.exports,Qt={name:"page-index",components:{VTitle:Kt,TabNav:Ht,TopicList:Ot,Pager:Et},data:function(){var t=this.$route,e=t.query,a=t.params.tab||"all";return{topics:[],page:Number(e.page)||1,tab:a}},computed:{title:function(){var t="all"===this.tab?"":L.tabMap[this.tab];return t?t+"板块 - vue-CNode":"vue-CNode"}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return m()(f.a.mark(function e(){var a,n,s,r,o,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route,n=a.query,s=a.params.tab||"all",r=Number(n.page)||1,o={tab:s,page:r},t.tab=s,t.page=r,e.prev=3,e.next=6,x.getTopics(o);case 6:i=e.sent,t.topics=i.data.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t.$toasted.error(e.t0);case 13:case"end":return e.stop()}},e,t,[[3,10]])}))()}},watch:{$route:"fetch"}},te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-title",[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[a("tab-nav")],1),t._v(" "),a("div",{staticClass:"panel-body"},[a("topic-list",{attrs:{topics:t.topics}}),t._v(" "),a("pager",{attrs:{page:t.page,tab:t.tab,name:"Topics"}})],1)])],1)},ee=[],ae={render:te,staticRenderFns:ee},ne=ae,se=a("/Xao"),re=c,oe=se(Qt,ne,!1,re,"data-v-ca83f67c",null),ie=oe.exports,ce={components:{VTitle:Kt},name:"topic-detail",data:function(){return{topic:{author:{},replies:[]}}},mounted:function(){this.fetch()},computed:{token:function(){return this.$store.state.accessToken},tabDesc:function(){return L.tabMap[this.topic.tab]},isCollect:function(){return this.topic.is_collect?"取消收藏":"收藏"}},methods:{fetch:function(){var t=this;return m()(f.a.mark(function e(){var a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route.params.id,e.prev=1,e.next=4,x.getTopic(a,t.token);case 4:n=e.sent,console.log("res",n.data),t.topic=n.data.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.$toasted.error(e.t0);case 12:case"end":return e.stop()}},e,t,[[1,9]])}))()},checkContent:function(t){return t.replace(/(\/user\/\S+">\S+<\/a>)/g,"#$1")},checkCollect:function(){this.topic.is_collect?this.unCollect():this.collect()},collect:function(){var t=this;return m()(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.collect({accesstoken:t.token,topic_id:t.topic.id});case 3:a=e.sent,console.log("collect",a),t.topic.is_collect=!0,t.$toasted.success("收藏成功"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,t,[[0,9]])}))()},unCollect:function(){var t=this;return m()(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.unCollect({accesstoken:t.token,topic_id:t.topic.id});case 3:a=e.sent,console.log("unCollect",a),t.topic.is_collect=!1,t.$toasted.success("取消收藏成功"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,t,[[0,9]])}))()},agree:function(t){var e=this;return m()(f.a.mark(function a(){var n,s;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.$store.state.isLogin){a.next=3;break}return e.$toasted.show("请先登录，登录后即可点赞"),a.abrupt("return",setTimeout(function(){e.$store.commit(y.SHOWLOGINDIALOG)},3e3));case 3:return a.next=5,x.upReply(t,e.token);case 5:n=a.sent,console.log("upReply",n),s=n.data.action,e.topic.replies.forEach(function(e){e.id===t&&("up"===s?e.ups.push(!0):e.ups.shift())});case 9:case"end":return a.stop()}},a,e)}))()}},watch:{token:function(){this.fetch()}}},le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container detail"},[a("v-title",[t._v(t._s(t.topic.title))]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-body"},[a("h3",{staticClass:"title"},[t._v(t._s(t.topic.title))]),t._v(" "),a("div",{staticClass:"meta"},[t._v("\n        发布于 "+t._s(t._f("toLocale")(t.topic.create_at))+" | 作者\n        "),a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:t.topic.author.loginname}}}},[t._v(t._s(t.topic.author.loginname))]),t._v("\n        | "+t._s(t.topic.visit_count)+"次浏览 | 分类\n        "),a("router-link",{attrs:{to:{name:"Topics",params:{tab:t.topic.tab},query:{page:1}}}},[t._v(t._s(t.tabDesc))]),t._v(" "),t.topic.author_id&&t.token?a("input",{staticClass:"btn-collect btn btn-info pull-right",attrs:{type:"button",value:t.isCollect},on:{click:t.checkCollect}}):t._e()],1),t._v(" "),a("article",{staticClass:"content",domProps:{innerHTML:t._s(t.topic.content)}}),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v(t._s(t.topic.replies.length)+" 回复")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.topic.replies.length?a("ul",{staticClass:"list-group"},t._l(t.topic.replies,function(e){return a("li",{staticClass:"list-group-item"},[a("div",[a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})]),t._v(" "),a("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[a("strong",[t._v(t._s(e.author.loginname))])]),t._v("\n                "+t._s(t._f("toLocale")(e.create_at))+"\n                "),e.author.loginname===t.topic.author.loginname?a("span",{staticClass:"label label-success"},[t._v("作者")]):t._e()],1),t._v(" "),a("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(t.checkContent(e.content))}}),t._v(" "),a("div",{staticClass:"agree",class:{"agree-none":!e.ups.length},on:{click:function(a){t.agree(e.id)}}},[a("span",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(e.ups.length?e.ups.length:"")+"\n              ")])])})):a("span",[t._v("暂无回复")])])])])])],1)},ue=[],pe={render:le,staticRenderFns:ue},de=pe,ve=a("/Xao"),fe=l,ge=ve(ce,de,!1,fe,null,null),me=ge.exports,_e={name:"page-user"},he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("router-view")],1)},be=[],Ce={render:he,staticRenderFns:be},ke=Ce,Te=a("/Xao"),xe=Te(_e,ke,!1,null,null,null),Le=xe.exports,ye={name:"user-index",components:{VTitle:Kt,TopicList:Ot},data:function(){return{user:{loginname:"-",recent_topics:[],recent_replies:[],create_at:"",githubUsername:""},collectTopics:[]}},computed:{githubUrl:function(){return"https://github.com/"+this.user.githubUsername}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return m()(f.a.mark(function e(){var a,n,s;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.$route.params.loginname,e.prev=1,e.next=4,x.getUser(a);case 4:n=e.sent,t.user=n.data.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toasted.error(e.t0);case 11:return e.prev=11,e.next=14,x.getCollect(a);case 14:s=e.sent,t.collectTopics=s.data.data,e.next=21;break;case 18:e.prev=18,e.t1=e.catch(11),t.$toasted.error(e.t1);case 21:case"end":return e.stop()}},e,t,[[1,8],[11,18]])}))()}},watch:{$route:"fetch"}},Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-title",[t._v("@"+t._s(t.user.loginname)+"的个人主页")]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("用户信息")]),t._v(" "),a("div",{staticClass:"panel-body"},[a("img",{staticClass:"header-img",attrs:{src:t.user.avatar_url}}),t._v(" "),a("div",{staticClass:"user-info-right"},[a("strong",[t._v(t._s(t.user.loginname))]),t._v(" "),a("br"),t._v(" github:"),a("a",{staticClass:"dark",attrs:{href:t.githubUrl,target:"_blank"}},[t._v("@"+t._s(t.user.githubUsername))]),a("br"),t._v(" "+t._s(t.user.score)+"积分"),a("br"),t._v(" "),a("router-link",{attrs:{to:{name:"Collections"}}},[t._v("收藏的主题\n          "),t.collectTopics.length?a("span",[t._v("("+t._s(t.collectTopics.length)+")")]):t._e()]),t._v(" "),a("br"),t._v(" 注册时间："+t._s(t._f("toLocale")(t.user.create_at))+"\n      ")],1)])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("最近创建的话题")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.user.recent_topics.length?a("topic-list",{attrs:{topics:t.user.recent_topics}}):a("span",[t._v("暂无最近创建的话题")])],1)]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("最近参与的话题")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.user.recent_replies.length?a("topic-list",{attrs:{topics:t.user.recent_replies}}):a("span",[t._v("暂无最近参与的话题")])],1)])],1)},Oe=[],$e={render:Ie,staticRenderFns:Oe},we=$e,Ge=a("/Xao"),Ne=u,Se=Ge(ye,we,!1,Ne,null,null),De=Se.exports,je={name:"page-collections",components:{VTitle:Kt,TopicList:Ot},data:function(){return{topics:[],loginname:this.$route.params.loginname}},mounted:function(){var t=this;return m()(f.a.mark(function e(){var a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getCollect(t.loginname);case 3:a=e.sent,t.topics=a.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.$toasted.error(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},Ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("v-title",[t._v("@"+t._s(t.loginname)+" 的收藏")]),t._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[t._v("\n      "+t._s(t.loginname)+" 的收藏 ("+t._s(t.topics.length)+")\n    ")]),t._v(" "),a("div",{staticClass:"panel-body"},[t.topics.length?a("topic-list",{attrs:{topics:t.topics}}):a("span",[t._v("暂无收藏的主题")])],1)])],1)},Ee=[],Ue={render:Ae,staticRenderFns:Ee},Re=Ue,Me=a("/Xao"),Xe=p,Fe=Me(je,Re,!1,Xe,"data-v-0a21bc5a",null),qe=Fe.exports;d.a.use(ht.a);var Pe=new ht.a({routes:[{path:"/",redirect:{path:"/topics"}},{path:"/topics",redirect:{path:"/topics/all",query:{page:1}}},{path:"/topics/:tab",name:"Topics",component:ie},{path:"/topic/:id",name:"TopicDetail",component:me},{path:"/user/:loginname",component:Le,children:[{path:"",name:"UserIndex",component:De},{path:"collections",name:"Collections",component:qe}]}]});d.a.config.productionTip=!1,new d.a({el:"#app",router:Pe,template:"<App/>",components:{App:_t}})},SZvj:function(t,e){},gfrd:function(t,e){},jDGj:function(t,e){},nyZj:function(t,e){},vVZb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4e8375d9bf5cc7178af2.js.map