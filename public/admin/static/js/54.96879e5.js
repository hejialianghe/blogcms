webpackJsonp([54],{1092:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dr-SiteMessageForm"},[a("el-dialog",{attrs:{xs:20,sm:20,md:6,lg:6,xl:6,title:"修改类别",visible:e.dialogState.show,"close-on-click-modal":!1},on:{"update:visible":function(t){return e.$set(e.dialogState,"show",t)}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.dialogState.formData,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:e.$t("siteMessage.name"),prop:"name"}},[a("el-input",{attrs:{size:"small"},model:{value:e.dialogState.formData.name,callback:function(t){e.$set(e.dialogState.formData,"name",t)},expression:"dialogState.formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.$t("siteMessage.comments"),prop:"comments"}},[a("el-input",{attrs:{size:"small",type:"textarea"},model:{value:e.dialogState.formData.comments,callback:function(t){e.$set(e.dialogState.formData,"comments",t)},expression:"dialogState.formData.comments"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.dialogState.edit?e.$t("main.form_btnText_update"):e.$t("main.form_btnText_save")))])],1)],1)],1)],1)},staticRenderFns:[]}},361:function(e,t,a){var s=a(6)(a(990),a(1092),null,null,null);e.exports=s.exports},990:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0});var s,i=a(127),r=(s=i)&&s.__esModule?s:{default:s};t.default={props:{dialogState:Object,groups:Array},data:function(){return{rules:{name:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("SiteMessage.name")}),trigger:"blur"},{min:1,max:12,message:this.$t("validate.rangelength",{min:1,max:12}),trigger:"blur"}],comments:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("main.comments_label")}),trigger:"blur"},{min:2,max:30,message:this.$t("validate.ranglengthandnormal",{min:2,max:30}),trigger:"blur"}]}}},methods:{confirm:function(){this.$store.dispatch("hideSiteMessageForm")},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a=t.dialogState.formData;t.dialogState.edit?r.default.updateSiteMessage(a).then(function(e){200===e.data.status?(t.$store.dispatch("hideSiteMessageForm"),t.$store.dispatch("getSiteMessageList"),t.$message({message:t.$t("main.updateSuccess"),type:"success"})):t.$message.error(e.data.message)}):r.default.addSiteMessage(a).then(function(e){200===e.data.status?(t.$store.dispatch("hideSiteMessageForm"),t.$store.dispatch("getSiteMessageList"),t.$message({message:t.$t("main.addSuccess"),type:"success"})):t.$message.error(e.data.message)})})}}}}});