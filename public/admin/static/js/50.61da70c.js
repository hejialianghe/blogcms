webpackJsonp([50],{328:function(t,e,a){var r=a(6)(a(888),a(931),function(t){a(921)},null,null);t.exports=r.exports},888:function(t,e,a){Object.defineProperty(e,"__esModule",{value:!0});var r,l=a(127);(r=l)&&r.__esModule;e.default={props:{formState:Object},data:function(){return{linkTypeOpts:[{value:"0",label:"文章"},{value:"1",label:"链接"}],rules1:{title:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("ads.textContent")}),trigger:"blur"},{min:2,max:15,message:this.$t("validate.ranglengthandnormal",{min:2,max:15}),trigger:"blur"}],link:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("main.comments_label")}),trigger:"blur"}]},rules:{alt:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("ads.dis")}),trigger:"blur"},{min:2,max:30,message:this.$t("validate.ranglengthandnormal",{min:2,max:30}),trigger:"blur"}],link:[{required:!0,message:this.$t("validate.inputNull",{label:this.$t("main.comments_label")}),trigger:"blur"}]}}},computed:{adsType:function(){return this.$store.getters.adsInfoForm.formData.type}},methods:{handleAvatarSuccess:function(t,e){this.formState.formData.sImg=t.data.path},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a="image/png"===t.type,r="image/gif"===t.type,l=t.size/1024/1024<2;return e||a||r||this.$message.error(this.$t("validate.limitUploadImgType")),l||this.$message.error(this.$t("validate.limitUploadImgSize",{size:2})),(e||a||r)&&l},submitForm:function(t){var e=this;arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.$refs[t].validate(function(t){if(!t)return!1;var a=e.formState.formData,r=e.$store.getters.adsInfoForm,l=r.formData.items;if(e.formState.edit){for(var o=0;o<l.length;o++)l[o]._id==a._id&&(l[o]=a);e.$store.dispatch("adsInfoForm",r)}else l.push(a),e.$store.dispatch("adsInfoForm",r);e.$store.dispatch("hideAdsItemForm")})}}}},901:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.avatar-uploader .el-upload {\n  border: 1px dashed #d9d9d9;\n  border-radius: 6px;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n}\n.avatar-uploader .el-upload:hover {\n  border-color: #409eff;\n}\n.avatar-uploader-icon {\n  font-size: 28px;\n  color: #8c939d;\n  width: 200px;\n  height: 150px;\n  line-height: 150px;\n  text-align: center;\n}\n.avatar {\n  width: 200px;\n  height: 158px;\n  display: block;\n}\n",""])},921:function(t,e,a){var r=a(901);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(23)("23816b0a",r,!0,{})},931:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dr-adminGroupForm"},[a("el-dialog",{attrs:{xs:20,sm:20,md:6,lg:6,xl:6,title:(t.formState.edit?t.$t("main.modify"):t.$t("main.addNew"))+("1"==t.adsType?t.$t("ads.typePic"):t.$t("ads.textLink")),visible:t.formState.show,"close-on-click-modal":!1},on:{"update:visible":function(e){return t.$set(t.formState,"show",e)}}},["1"==t.adsType?a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.formState.formData,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.$t("ads.dis"),prop:"alt"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formState.formData.alt,callback:function(e){t.$set(t.formState.formData,"alt",e)},expression:"formState.formData.alt"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("ads.link"),prop:"link"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formState.formData.link,callback:function(e){t.$set(t.formState.formData,"link",e)},expression:"formState.formData.link"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("ads.appLink"),prop:"appLink"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formState.formData.appLink,callback:function(e){t.$set(t.formState.formData,"appLink",e)},expression:"formState.formData.appLink"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("ads.appLinkType"),prop:"appLinkType"}},[a("el-select",{attrs:{placeholder:"请选择app链接类型"},model:{value:t.formState.formData.appLinkType,callback:function(e){t.$set(t.formState.formData,"appLinkType",e)},expression:"formState.formData.appLinkType"}},t._l(t.linkTypeOpts,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("ads.upload"),prop:"sImg"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/api/v0/upload/files?type=images","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.formState.formData.sImg?a("img",{staticClass:"avatar",attrs:{src:t.formState.formData.sImg}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(e){return t.submitForm("ruleForm")}}},[t._v(t._s(t.formState.edit?t.$t("main.form_btnText_update"):t.$t("main.form_btnText_save")))])],1)],1):t._e(),t._v(" "),"0"==t.adsType?a("el-form",{ref:"ruleForm1",staticClass:"demo-ruleForm",attrs:{model:t.formState.formData,rules:t.rules1,"label-width":"80px"}},[a("el-form-item",{attrs:{label:t.$t("ads.textContent"),prop:"title"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formState.formData.title,callback:function(e){t.$set(t.formState.formData,"title",e)},expression:"formState.formData.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("ads.link"),prop:"link"}},[a("el-input",{attrs:{size:"small"},model:{value:t.formState.formData.link,callback:function(e){t.$set(t.formState.formData,"link",e)},expression:"formState.formData.link"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"smmediumall",type:"primary"},on:{click:function(e){return t.submitForm("ruleForm1")}}},[t._v(t._s(t.formState.edit?t.$t("main.form_btnText_update"):t.$t("main.form_btnText_save")))])],1)],1):t._e()],1)],1)},staticRenderFns:[]}}});