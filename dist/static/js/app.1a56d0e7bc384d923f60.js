webpackJsonp([1],{"/Lzt":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container"},[a("transition",[a("router-view")],1),t._v(" "),a("md-button",{directives:[{name:"show",rawName:"v-show",value:t.toTop,expression:"toTop"}],staticClass:"md-fab md-mini go-top",on:{click:function(e){t.goTop()}}},[a("md-icon",[t._v("publish")])],1)],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},"/vmS":function(t,e){},"2GyR":function(t,e){},"5JK3":function(t,e){},"5kqm":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"top"},[a("div",{staticClass:"top-container"},[a("div",{staticClass:"icons-func"},[t.showSearchFrame?a("md-input-container",{attrs:{"md-theme":"white"}},[a("label",[t._v("Search Keyword")]),t._v(" "),a("md-input",{model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1):t._e()],1),t._v(" "),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.doSearch()}}},[a("md-icon",[t._v("search")])],1)],1)]),t._v(" "),a("div",{staticClass:"bottom-container"},[a("div",{staticClass:"logo-title-container"},[a("div",{staticClass:"logo",on:{click:function(e){t.location_home()}}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"menu-container"},[a("div",{staticClass:"menu"},[a("ul",[t._l(t.categoryLists,function(e,n){return a("li",{key:n,class:n==t.nowCategory?"selected":"",domProps:{textContent:t._s(e.cn)},on:{click:function(a){t.location_category(e.id,n)}}})}),t._v(" "),t._l(t.channel,function(e,n){return a("li",{key:n,class:n==t.nowCategory?"selected":"",domProps:{textContent:t._s(e.cn)},on:{click:function(e){t.location_channel(n)}}})})],2)]),t._v(" "),a("div",{staticClass:"page-info"})])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-main-container"},[a("div",{staticClass:"bottom-top"},[a("h4",[t._v("放松心态，迎接未来")]),t._v(" "),a("p",[t._v("生而为人，我很抱歉")])])])}],i={render:n,staticRenderFns:o};e.a=i},"7Gyp":function(t,e,a){"use strict";function n(t){a("5JK3")}var o=a("NxDS"),i=a("YlLl"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,"data-v-16ccd134",null);e.a=r.exports},"9DA6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p")])}],i={render:n,staticRenderFns:o};e.a=i},A67b:function(t,e,a){"use strict";function n(t){a("/vmS")}var o=a("h5t2"),i=a("anzQ"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,"data-v-e97bf97a",null);e.a=r.exports},BMYd:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO");e.a={data:function(){return{keyword:""}},computed:o()({},Object(i.b)(["categoryLists","nowCategory","showSearchFrame","searchWord","channel"])),methods:o()({},Object(i.c)(["NOWCOLUMN","COLUMNID","NOWCATEGORY","SHOWSEARCHFRAME","SEARCHWORD"]),{location_home:function(){this.$router.push({path:"/"}),this.NOWCOLUMN("home"),this.COLUMNID({key:"page",value:1})},location_category:function(t,e){if(this.NOWCATEGORY(e),0==t)return this.location_home();this.$router.push({path:"/category_"+t}),this.NOWCOLUMN("category"),this.COLUMNID({key:"id",value:t}),this.COLUMNID({key:"page",value:1})},location_channel:function(t){this.NOWCATEGORY(t),this.$router.push({path:"/chat"}),this.NOWCOLUMN("channel")},doSearch:function(){this.SEARCHWORD(this.keyword),this.SHOWSEARCHFRAME(""),this.showSearchFrame&&""!=this.keyword&&(this.$router.push({path:"/search?keyword="+this.keyword}),this.NOWCOLUMN("search"),this.COLUMNID({key:"page",value:1}))}})}},CWjf:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO"),s=a("/j7X"),c=a.n(s);e.a={props:{articleLists:Array,showNextPage:Boolean,articleLoading:Boolean},data:function(){return{primaryColor:"#bdc3c7",loading_dom:[1,2,3,4,5,6,7,8,9,10,11,12]}},components:{VueContentLoading:c.a},methods:o()({},Object(i.c)(["NOWCOLUMN","COLUMNID"]),{location_article:function(t){this.$router.push({path:"/detail_"+t}),this.NOWCOLUMN("article"),this.COLUMNID({key:"id",value:t}),this.COLUMNID({key:"page",value:1})},location_tag:function(t){this.$router.push({path:"/tag_"+t}),this.NOWCOLUMN("tag"),this.COLUMNID({key:"id",value:t}),this.COLUMNID({key:"page",value:1})},nextPage:function(){var t=this.$store.state.blog.nowColumn;this.NOWCOLUMN(t),this.COLUMNID({key:"page",value:++this.$store.state.blog.columnId[t].page}),"tag"==t?this.$store.dispatch("showTagArticle"):"category"==t?this.$store.dispatch("showCategoryArticle"):"search"==t?this.$store.dispatch("showSearchArticle"):this.$store.dispatch("showIndexArticle")}})}},IcnI:function(t,e,a){"use strict";var n=a("7+uW"),o=a("NYxO"),i=a("M1mT");n.default.use(o.a),e.a=new o.a.Store({modules:{blog:i.a}})},JEiG:function(t,e){},LoF8:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO"),s=a("sh6w"),c=a("vVOv"),r=a("A67b"),u=a("7Gyp");e.a={computed:o()({},Object(i.b)(["articleLists","nowColumn","showNextPage","articleLoading"])),methods:o()({},Object(i.c)(["NOWCOLUMN","COLUMNID","SHOWNEXTPAGE"])),components:{ListArticle:c.a,HomeHeader:s.a,HomeFooter:r.a,Chat:u.a}}},M1mT:function(t,e,a){"use strict";var n=a("NPpE"),o=a("b82A"),i=a("U3HY"),s={title:"starzmisgod",showSearchFrame:!1,description:"",nowCategory:"0",channel:{chat:{cn:"聊天室"}},categoryLists:{0:{cn:"全部文章",id:0},3:{cn:"技术分享",id:3},1:{cn:"不可描述",id:1},2:{cn:"心情感悟",id:2}},pageSize:12,showNextPage:!1,articleObject:{},articleLists:[],leftBar:0,nowColumn:"home",searchWord:"",articleLoading:!1,columnId:{home:{page:1},article:{id:0},category:{page:1,id:0},tag:{page:1,id:0},search:{page:1},comment:{page:1}}};e.a={state:s,getters:n.a,actions:o.a,mutations:i.a}},M93x:function(t,e,a){"use strict";function n(t){a("JEiG")}var o=a("xJD8"),i=a("/Lzt"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o=a("M93x"),i=a("YaEn"),s=a("IcnI"),c=a("Lgyv"),r=a.n(c),u=a("mtWM"),l=a.n(u),h=a("tzNG"),d=(a.n(h),a("oPmM")),m=(a.n(d),a("Y81h")),p=a.n(m),f=a("UVIz");a.n(f);p.a.inc(.2),p.a.configure({easing:"ease",speed:500,showSpinner:!0}),n.default.config.productionTip=!1,n.default.use(r.a),window.axios=l.a,n.default.material.registerTheme("white",{primary:"white",accent:"white",warn:"white",background:"white"}),i.a.beforeEach(function(t,e,a){p.a.start(),a()}),i.a.afterEach(function(){p.a.done()}),new n.default({el:"#app",router:i.a,store:s.a,template:"<App/>",components:{App:o.a}})},NNZH:function(t,e,a){"use strict";function n(t){a("OT5X"),a("URCL")}var o=a("iaWR"),i=a("mpM+"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,"data-v-97224286",null);e.a=r.exports},NPpE:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={title:function(t){return t.title},description:function(t){return t.description},articleLists:function(t){return t.articleLists},leftBar:function(t){return t.leftBar},columnId:function(t){return t.columnId},nowColumn:function(t){return t.nowColumn},articleObject:function(t){return t.articleObject},showNextPage:function(t){return t.showNextPage},pageSize:function(t){return t.pageSize},nowCategory:function(t){return t.nowCategory},categoryLists:function(t){return t.categoryLists},showSearchFrame:function(t){return t.showSearchFrame},searchWord:function(t){return t.searchWord},channel:function(t){return t.channel},articleLoading:function(t){return t.articleLoading}}},Nfoa:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{staticClass:"top"},[a("div",{staticClass:"top-container"},[a("div",{staticClass:"icons-func"},[t.showSearchFrame?a("md-input-container",{attrs:{"md-theme":"white"}},[a("label",[t._v("Search Keyword")]),t._v(" "),a("md-input",{model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1):t._e()],1),t._v(" "),a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.doSearch()}}},[a("md-icon",[t._v("search")])],1)],1)]),t._v(" "),a("div",{staticClass:"bottom-container"},[a("div",{staticClass:"logo-title-container"},[a("div",{staticClass:"logo",on:{click:function(e){t.location_home()}}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"menu-container"})])]),t._v(" "),t._m(1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-main-container"},[a("div",{staticClass:"bottom-top"},[a("h4",[t._v("zmisgod")]),t._v(" "),a("p",[t._v("生而为人，我很抱歉")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-container"},[a("p",[t._v("to be loaded")])])}],i={render:n,staticRenderFns:o};e.a=i},NxDS:function(t,e,a){"use strict";e.a={}},OT5X:function(t,e){},PNf1:function(t,e){},"PS+4":function(t,e){},Q0Hw:function(t,e,a){"use strict";function n(t){a("PS+4")}var o=a("u4Se"),i=a("9DA6"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports},QEtz:function(t,e){},U3HY:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={TITLE:function(t,e){t.title=e},DESCRIPTION:function(t,e){t.description=e},ARTICLEPAGEINDEX:function(t,e){t.articlePageIndex=e},ARTICLELISTS:function(t,e){t.articleLists=e},LEFTBAR:function(t,e){t.leftBar=e},COLUMNID:function(t,e){t.columnId[t.nowColumn][e.key]=e.value},NOWCOLUMN:function(t,e){t.nowColumn=e},ARTICLEOBJECT:function(t,e){t.articleObject=e},SHOWNEXTPAGE:function(t,e){t.showNextPage=e},PAGESIZE:function(t,e){t.pageSize=e},NOWCATEGORY:function(t,e){t.nowCategory=e},CATEGORYLISTS:function(t,e){t.categoryLists=e},SHOWSEARCHFRAME:function(t,e){t.showSearchFrame&&""==t.searchWord?t.showSearchFrame=!1:t.showSearchFrame=!0},SEARCHWORD:function(t,e){t.searchWord=e},CHANNEL:function(t,e){t.channel=e},ARTICLELOADING:function(t,e){t.articleLoading=e}}},URCL:function(t,e){},UVIz:function(t,e){},VRWM:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO");e.a={data:function(){return{keyword:""}},computed:o()({},Object(i.b)(["categoryLists","nowCategory","showSearchFrame","searchWord","channel"])),methods:o()({},Object(i.c)(["NOWCOLUMN","COLUMNID","NOWCATEGORY","SHOWSEARCHFRAME","SEARCHWORD"]),{location_home:function(){this.$router.push({path:"/"}),this.NOWCOLUMN("home"),this.COLUMNID({key:"page",value:1})},location_category:function(t,e){if(this.NOWCATEGORY(e),0==t)return this.location_home();this.$router.push({path:"/category_"+t}),this.NOWCOLUMN("category"),this.COLUMNID({key:"id",value:t}),this.COLUMNID({key:"page",value:1})},location_channel:function(t){this.NOWCATEGORY(t),this.$router.push({path:"/chat"}),this.NOWCOLUMN("channel")},doSearch:function(){this.SEARCHWORD(this.keyword),this.SHOWSEARCHFRAME(""),this.showSearchFrame&&""!=this.keyword&&(this.$router.push({path:"/search?keyword="+this.keyword}),this.NOWCOLUMN("search"),this.COLUMNID({key:"page",value:1}))}})}},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),o=a("/ocq"),i=a("yAAw"),s=a("NNZH"),c=a("Q0Hw"),r=a("hkRC");n.default.use(o.a),e.a=new o.a({mode:"history",scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:[{path:"/",name:"home",component:i.a},{path:"/detail_:id",name:"article",component:s.a},{path:"/single",name:"single",component:c.a},{path:"/tag_:id",name:"tag",component:i.a},{path:"/category_:id",name:"category",component:i.a},{path:"/search",name:"search",component:i.a},{path:"/chat",name:"chat",component:i.a},{path:"/author/:author_name",name:"author_info",component:r.a}]})},YlLl:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",[t._v("coming soon...")])])}],i={render:n,staticRenderFns:o};e.a=i},anzQ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"showfooter"},[a("div",{staticClass:"zangmiao-loves-you"},[a("a",[t._v("zangmiao loves you")])])])])}],i={render:n,staticRenderFns:o};e.a=i},av5Z:function(t,e){},b82A:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={showIndexArticle:function(t){var e=t.commit,a=t.state;e("ARTICLELOADING",!1),axios.get("//api.zmis.me/v1/home?page="+a.columnId[a.nowColumn].page).then(function(t){200===t.data.code&&""!==t.data.data&&(e("ARTICLELOADING",!0),t.data.data.length===a.pageSize?e("SHOWNEXTPAGE",!0):e("SHOWNEXTPAGE",!1),e("ARTICLELISTS",t.data.data))})},showTagArticle:function(t){var e=t.commit,a=t.state;e("ARTICLELOADING",!1),axios.get("//api.zmis.me/v1/tag/"+a.columnId[a.nowColumn].id+"?page="+a.columnId[a.nowColumn].page).then(function(t){200===t.data.code&&""!==t.data.data&&(e("ARTICLELOADING",!0),t.data.data.length===a.pageSize?e("SHOWNEXTPAGE",!0):e("SHOWNEXTPAGE",!1),e("ARTICLELISTS",t.data.data))})},showCategoryArticle:function(t){var e=t.commit,a=t.state;e("ARTICLELOADING",!1),axios.get("//api.zmis.me/v1/category/"+a.columnId[a.nowColumn].id+"?page="+a.columnId[a.nowColumn].page).then(function(t){200===t.data.code&&""!==t.data.data&&(e("ARTICLELOADING",!0),t.data.data.length===a.pageSize?e("SHOWNEXTPAGE",!0):e("SHOWNEXTPAGE",!1),e("ARTICLELISTS",t.data.data))})},showArticle:function(t){var e=t.commit,a=t.state;axios.get("//api.zmis.me/v1/home/"+a.columnId[a.nowColumn].id).then(function(t){200===t.data.code&&""!==t.data.data&&e("ARTICLEOBJECT",t.data.data)})},showSearchArticle:function(t){var e=t.commit,a=t.state;e("ARTICLELOADING",!1),axios.get("//api.zmis.me/v1/search?keyword="+a.searchWord+"&page="+a.columnId[a.nowColumn].page).then(function(t){200===t.data.code&&""!==t.data.data&&(e("ARTICLELOADING",!0),t.data.data.length===a.pageSize?e("SHOWNEXTPAGE",!0):e("SHOWNEXTPAGE",!1),e("ARTICLELISTS",t.data.data))})},showUserInfo:function(t){t.commit,t.state}}},bAv7:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-conatiner"},[a("HomeHeader"),t._v(" "),"chat"!==t.nowColumn?a("ListArticle",{staticClass:"list-article",attrs:{articleLoading:t.articleLoading,articleLists:t.articleLists,showNextPage:t.showNextPage}}):t._e(),t._v(" "),"chat"===t.nowColumn?a("Chat"):t._e(),t._v(" "),a("HomeFooter")],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},h5t2:function(t,e,a){"use strict";e.a={}},hkRC:function(t,e,a){"use strict";function n(t){a("av5Z")}var o=a("VRWM"),i=a("Nfoa"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports},iaWR:function(t,e,a){"use strict";var n=a("Dd8w"),o=a.n(n),i=a("NYxO");e.a={mounted:function(){this.$store.dispatch("showArticle")},computed:o()({},Object(i.b)(["articleObject"])),methods:o()({},Object(i.c)(["NOWCOLUMN","COLUMNID","NOWCATEGORY"]),{seeAuthor:function(t){this.$router.push({path:"/author/"+t})},seeTag:function(t){this.$router.push({path:"/tag_"+t}),this.NOWCOLUMN("tag"),this.COLUMNID({key:"id",value:t})},seeCategory:function(t){this.NOWCATEGORY(t),this.$router.push({path:"/category_"+t}),this.NOWCOLUMN("category"),this.COLUMNID({key:"id",value:t})}})}},"mpM+":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[a("div",{staticClass:"irbbon"}),t._v(" "),a("div",{staticClass:"main"},[a("div",{staticClass:"main-container"},[a("div",{staticClass:"detail_header"},[a("div",{staticClass:"header_container"},[a("p",{staticClass:"p_title",domProps:{textContent:t._s(t.articleObject.post_title)}}),t._v(" "),a("p",{staticClass:"p_author",domProps:{textContent:t._s(t.articleObject.author)},on:{click:function(e){t.seeAuthor(t.articleObject.author)}}}),t._v(" "),a("div",{staticClass:"p_tag"},[a("md-button",{domProps:{textContent:t._s(t.articleObject.category_name)},on:{click:function(e){t.seeCategory(t.articleObject.category_id)}}}),t._v(" "),t._l(t.articleObject.tag,function(e,n){return a("md-button",{key:n,domProps:{textContent:t._s(e.category_name)},on:{click:function(a){t.seeTag(e.category_id)}}})})],2)])]),t._v(" "),a("div",{staticClass:"p_content main-content",domProps:{innerHTML:t._s(t.articleObject.post_content)}}),t._v(" "),a("p",{staticClass:"p_date",domProps:{textContent:t._s("Posted at "+t.articleObject.post_date)}})])])])},o=[],i={render:n,staticRenderFns:o};e.a=i},oPmM:function(t,e){},sh6w:function(t,e,a){"use strict";function n(t){a("PNf1")}var o=a("BMYd"),i=a("5kqm"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports},tzNG:function(t,e){},u4Se:function(t,e,a){"use strict";e.a={name:"articlesingle"}},vVOv:function(t,e,a){"use strict";function n(t){a("QEtz")}var o=a("CWjf"),i=a("wOFx"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports},wOFx:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main-frame-container"},[t.articleLoading?a("div",{staticClass:"article-container"},[t._l(t.articleLists,function(e,n){return a("div",{key:e.id,staticClass:"home-lists showan"},[a("p",{staticClass:"a-title",domProps:{innerHTML:t._s(e.post_title)},on:{click:function(a){t.location_article(e.id)}}}),t._v(" "),a("p",{staticClass:"a-info"},[a("img",{staticClass:"user-img",attrs:{src:"/static/logo.png",alt:""}}),a("span",{staticClass:"a-author",domProps:{textContent:t._s(e.author)}}),t._v(" "),a("span",{staticClass:"a-post-at"},[t._v("发布于:")]),t._v(" "),a("span",{staticClass:"a-date",domProps:{textContent:t._s(e.post_date)}})]),t._v(" "),a("p",{staticClass:"a-content",domProps:{innerHTML:t._s(e.post_intro)}}),t._v(" "),e.tag?a("div",{staticClass:"a-tag"},t._l(e.tag,function(e,n){return a("a",{key:n,domProps:{textContent:t._s(e.category_name)},on:{click:function(a){t.location_tag(e.category_id)}}})})):t._e()])}),t._v(" "),t.showNextPage?a("md-button",{staticClass:"md-raised md-primary md-icon-button show-next",on:{click:function(e){t.nextPage()}}},[a("md-icon",[t._v("keyboard_arrow_right")])],1):t._e()],2):a("div",{staticClass:"article-container"},t._l(t.loading_dom,function(e,n){return a("VueContentLoading",{key:n,staticClass:"home-lists",attrs:{binds:e,rows:8,width:800,height:100,primary:t.primaryColor,speed:2}},[a("rect",{attrs:{y:"0",rx:"4",ry:"4",width:"200",height:"12"}}),t._v(" "),a("circle",{attrs:{cx:"10",cy:"26",r:"10"}}),t._v(" "),a("rect",{attrs:{x:"24",y:"20",rx:"4",ry:"4",width:"30",height:"12"}}),t._v(" "),a("rect",{attrs:{x:"60",y:"20",rx:"4",ry:"4",width:"70",height:"12"}}),t._v(" "),a("rect",{attrs:{y:"43",rx:"4",ry:"4",width:"100%",height:"12"}}),t._v(" "),a("rect",{attrs:{y:"63",rx:"4",ry:"4",width:"50%",height:"12"}}),t._v(" "),a("rect",{attrs:{x:"760",y:"88",rx:"4",ry:"4",width:"40",height:"12"}})])})),t._v(" "),a("div",{staticClass:"weather-container"})])])},o=[],i={render:n,staticRenderFns:o};e.a=i},xJD8:function(t,e,a){"use strict";var n,o=a("bOdI"),i=a.n(o),s=a("Dd8w"),c=a.n(s),r=a("NYxO"),u=!1;e.a=(n={name:"app",data:function(){return{toTop:!1,transitionName:"animated zoomInDown",swipeable:!0}},created:function(){this.NOWCOLUMN(this.$route.name),"tag"==this.nowColumn?(this.COLUMNID({key:"id",value:this.$route.params.id}),this.$store.dispatch("showTagArticle")):"category"==this.nowColumn?(this.NOWCATEGORY(this.$route.params.id),this.COLUMNID({key:"id",value:this.$route.params.id}),this.$store.dispatch("showCategoryArticle")):"home"==this.nowColumn?this.$store.dispatch("showIndexArticle"):"search"==this.nowColumn&&""!=this.$route.query.keyword?(this.SEARCHWORD(this.$route.query.keyword),this.$store.dispatch("showSearchArticle")):"article"==this.nowColumn&&this.COLUMNID({key:"id",value:this.$route.params.id})},mounted:function(){},computed:c()({},Object(r.b)(["title","nowColumn"])),watch:{$route:function(t,e){this.NOWCOLUMN(t.name),"tag"==t.name?this.$store.dispatch("showTagArticle"):"category"==t.name?this.$store.dispatch("showCategoryArticle"):"home"==t.name?this.$store.dispatch("showIndexArticle"):"search"==t.name?this.$store.dispatch("showSearchArticle"):"author_info"==t.name&&this.$store.dispatch("showUserInfo")}}},i()(n,"mounted",function(){this.$nextTick(function(){window.addEventListener("scroll",this.needToTop)})}),i()(n,"methods",c()({},Object(r.c)(["NOWCOLUMN","COLUMNID","SEARCHWORD","NOWCATEGORY"]),{goTop:function(){clearInterval(u),u=setInterval(function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=t,a=(0-e)/7;a=a>0?Math.ceil(a):Math.floor(a),0===t&&clearInterval(u),document.documentElement.scrollTop=t+a,document.body.scrollTop=t+a,stop=!1},30)},needToTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight;this.toTop=t>e+100,stop&&clearInterval(u),stop=!0}})),n)},yAAw:function(t,e,a){"use strict";function n(t){a("2GyR")}var o=a("LoF8"),i=a("bAv7"),s=a("VU/8"),c=n,r=s(o.a,i.a,!1,c,null,null);e.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.1a56d0e7bc384d923f60.js.map