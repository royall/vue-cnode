webpackJsonp([3],{EHkK:function(t,e,n){"use strict";function a(t){n("y6Rh")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("lC5x"),s=n.n(o),i=n("J0Oq"),c=n.n(i),r=n("w7XY"),l=n("EaCm"),p=n("ZuJt"),u={components:{VTitle:p.a},name:"topic-detail",data:function(){return{topic:{author:{},replies:[]}}},mounted:function(){this.fetch()},computed:{token:function(){return this.$store.state.accessToken},tabDesc:function(){return l.a.tabMap[this.topic.tab]},isCollect:function(){return this.topic.is_collect?"取消收藏":"收藏"}},methods:{fetch:function(){var t=this;return c()(s.a.mark(function e(){var n,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.prev=1,e.next=4,r.a.getTopic(n,t.token);case 4:a=e.sent,console.log("res",a.data),t.topic=a.data.data,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.$toasted.error(e.t0);case 12:case"end":return e.stop()}},e,t,[[1,9]])}))()},checkContent:function(t){return t.replace(/(\/user\/\S+">\S+<\/a>)/g,"#$1")},checkCollect:function(){this.topic.is_collect?this.unCollect():this.collect()},collect:function(){var t=this;return c()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.collect({accesstoken:t.token,topic_id:t.topic.id});case 3:n=e.sent,console.log("collect",n),t.topic.is_collect=!0,t.$toasted.success("收藏成功"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,t,[[0,9]])}))()},unCollect:function(){var t=this;return c()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.a.unCollect({accesstoken:t.token,topic_id:t.topic.id});case 3:n=e.sent,console.log("unCollect",n),t.topic.is_collect=!1,t.$toasted.success("取消收藏成功"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}},e,t,[[0,9]])}))()},agree:function(t){var e=this;return c()(s.a.mark(function n(){var a,o;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.$store.state.isLogin){n.next=3;break}return e.$toasted.show("请先登录，登录后即可点赞"),n.abrupt("return",setTimeout(function(){e.$store.commit(l.b.SHOWLOGINDIALOG)},3e3));case 3:return n.next=5,r.a.upReply(t,e.token);case 5:a=n.sent,console.log("upReply",a),o=a.data.action,e.topic.replies.forEach(function(e){e.id===t&&("up"===o?e.ups.push(!0):e.ups.shift())});case 9:case"end":return n.stop()}},n,e)}))()}},watch:{token:function(){this.fetch()}}},d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container detail"},[n("v-title",[t._v(t._s(t.topic.title))]),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-body"},[n("h3",{staticClass:"title"},[t._v(t._s(t.topic.title))]),t._v(" "),n("div",{staticClass:"meta"},[t._v("\n        发布于 "+t._s(t._f("toLocale")(t.topic.create_at))+" | 作者\n        "),n("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:t.topic.author.loginname}}}},[t._v(t._s(t.topic.author.loginname))]),t._v("\n        | "+t._s(t.topic.visit_count)+"次浏览 | 分类\n        "),n("router-link",{attrs:{to:{name:"Topics",params:{tab:t.topic.tab},query:{page:1}}}},[t._v(t._s(t.tabDesc))]),t._v(" "),t.topic.author_id&&t.token?n("input",{staticClass:"btn-collect btn btn-info pull-right",attrs:{type:"button",value:t.isCollect},on:{click:t.checkCollect}}):t._e()],1),t._v(" "),n("article",{staticClass:"content",domProps:{innerHTML:t._s(t.topic.content)}}),t._v(" "),n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading"},[t._v(t._s(t.topic.replies.length)+" 回复")]),t._v(" "),n("div",{staticClass:"panel-body"},[t.topic.replies.length?n("ul",{staticClass:"list-group"},t._l(t.topic.replies,function(e){return n("li",{staticClass:"list-group-item"},[n("div",[n("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[n("img",{staticClass:"avatar",attrs:{src:e.author.avatar_url}})]),t._v(" "),n("router-link",{attrs:{to:{name:"UserIndex",params:{loginname:e.author.loginname}}}},[n("strong",[t._v(t._s(e.author.loginname))])]),t._v("\n                "+t._s(t._f("toLocale")(e.create_at))+"\n                "),e.author.loginname===t.topic.author.loginname?n("span",{staticClass:"label label-success"},[t._v("作者")]):t._e()],1),t._v(" "),n("div",{staticClass:"reply-content",domProps:{innerHTML:t._s(t.checkContent(e.content))}}),t._v(" "),n("div",{staticClass:"agree",class:{"agree-none":!e.ups.length},on:{click:function(n){t.agree(e.id)}}},[n("span",{staticClass:"glyphicon glyphicon-thumbs-up"}),t._v(t._s(e.ups.length?e.ups.length:"")+"\n              ")])])})):n("span",[t._v("暂无回复")])])])])])],1)},h=[],v={render:d,staticRenderFns:h},m=v,_=n("/Xao"),g=a,f=_(u,m,!1,g,null,null);e.default=f.exports},mbRA:function(t,e,n){e=t.exports=n("BkJT")(!1),e.push([t.i,"\n.detail{\n}\n.detail img{\n  max-width:100%\n}\n.meta{\n  border-bottom:1px solid #ccc;\n  margin-bottom:20px;\n  padding-bottom:10px;\n  overflow:hidden;\n}\n.title{\n  margin-bottom:20px;\n  width:75%\n}\n.avatar{\n  width:30px;\n  height:30px\n}\n.reply-content{\n  margin-left:35px;\n  padding-top:10px;\n  padding-right:50px;\n}\n.content{\n  margin-bottom:30px;\n}\n.agree{\n  position:absolute;\n  right:20px;\n  top:50%;\n  font-size:12px;\n  line-height:14px;\n  cursor:pointer\n}\n.agree-none{\n  display:none\n}\n.list-group-item:hover .agree-none{\n  display:block\n}\n",""])},y6Rh:function(t,e,n){var a=n("mbRA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("8bSs")("212d87c9",a,!0)}});