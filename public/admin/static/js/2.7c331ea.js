webpackJsonp([2],{1206:function(t,n,a){Object.defineProperty(n,"__esModule",{value:!0});var e,r=a(1536),i=(e=r)&&e.__esModule?e:{default:e};n.default={name:"Page401",data:function(){return{errGif:i.default+"?"+ +new Date,ewizardClap:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",dialogVisible:!1}},methods:{back:function(){this.$route.query.noGoBack?this.$router.push({path:"/dashboard"}):this.$router.go(-1)}}}},1239:function(t,n,a){(t.exports=a(10)(!1)).push([t.i,"\n.errPage-container[data-v-2eb71b38] {\n  width: 800px;\n  max-width: 100%;\n  margin: 100px auto;\n}\n.errPage-container .pan-back-btn[data-v-2eb71b38] {\n    background: #008489;\n    color: #fff;\n    border: none !important;\n}\n.errPage-container .pan-gif[data-v-2eb71b38] {\n    margin: 0 auto;\n    display: block;\n}\n.errPage-container .pan-img[data-v-2eb71b38] {\n    display: block;\n    margin: 0 auto;\n    width: 100%;\n}\n.errPage-container .text-jumbo[data-v-2eb71b38] {\n    font-size: 60px;\n    font-weight: 700;\n    color: #484848;\n}\n.errPage-container .list-unstyled[data-v-2eb71b38] {\n    font-size: 14px;\n}\n.errPage-container .list-unstyled li[data-v-2eb71b38] {\n      padding-bottom: 5px;\n}\n.errPage-container .list-unstyled a[data-v-2eb71b38] {\n      color: #008489;\n      text-decoration: none;\n}\n.errPage-container .list-unstyled a[data-v-2eb71b38]:hover {\n        text-decoration: underline;\n}\n",""])},129:function(t,n,a){var e=a(6)(a(1206),a(1544),function(t){a(1527)},"data-v-2eb71b38",null);t.exports=e.exports},1527:function(t,n,a){var e=a(1239);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(23)("06d74322",e,!0,{})},1536:function(t,n,a){t.exports=a.p+"/static/img/401.089007e.gif"},1544:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"errPage-container"},[a("el-button",{staticClass:"pan-back-btn",attrs:{icon:"arrow-left"},on:{click:t.back}},[t._v("返回")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("h1",{staticClass:"text-jumbo text-ginormous"},[t._v("Oops!")]),t._v("\n      gif来源"),a("a",{attrs:{href:"https://zh.airbnb.com/",target:"_blank"}},[t._v("airbnb")]),t._v(" 页面\n      "),a("h2",[t._v("你没有权限去该页面")]),t._v(" "),a("h6",[t._v("如有不满请联系你领导")]),t._v(" "),a("ul",{staticClass:"list-unstyled"},[a("li",[t._v("或者你可以去:")]),t._v(" "),a("li",{staticClass:"link-type"},[a("router-link",{attrs:{to:"/dashboard"}},[t._v("回首页")])],1),t._v(" "),a("li",{staticClass:"link-type"},[a("a",{attrs:{href:"https://www.html-js.cn/"}},[t._v("随便看看")])])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("img",{attrs:{src:t.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."}})])],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible,title:"随便看"},on:{"update:visible":function(n){t.dialogVisible=n}}},[a("img",{staticClass:"pan-img",attrs:{src:t.ewizardClap}})])],1)},staticRenderFns:[]}}});