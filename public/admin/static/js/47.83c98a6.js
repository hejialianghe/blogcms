webpackJsonp([47],{1196:function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"staticPannel",props:["num","type","text","icon"],methods:{renderColor:function(){var n="409eff";switch(this.type){case"primary":n="409eff";break;case"success":n="67C23A";break;case"info":n="878D99";break;case"warning":n="EB9E05";break;case"danger":n="FA5555";break;default:n="409eff"}return n}}}},1243:function(n,e,t){(n.exports=t(10)(!1)).push([n.i,"\n.static-pannel {\n  border: 1px solid #e6ebf5;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  color: #2d2f33;\n  height: 4.5rem;\n  text-align: center;\n  vertical-align: middle;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.static-pannel .color-pannel {\n    width: 30%;\n    height: 100%;\n    float: left;\n    color: #ffffff;\n}\n.static-pannel .number-pannel {\n    width: 70%;\n    float: right;\n}\n.static-pannel .number-pannel .number {\n      font-size: 27px;\n      margin-top: 0.8rem;\n      margin-bottom: 0;\n      font-weight: 700;\n}\n.static-pannel .number-pannel .text {\n      font-size: 12px;\n      color: #c8c8c8;\n      font-weight: 500;\n}\n.static-pannel i {\n    font-size: 1.8rem;\n    margin-top: 1.3rem;\n}\n",""])},1531:function(n,e,t){var a=t(1243);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(23)("1f733c6e",a,!0,{})},1561:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"static-pannel"},[t("div",{staticClass:"color-pannel",style:{backgroundColor:"#"+n.renderColor(this.type)}},[t("i",{class:"fa fa-fw "+this.icon})]),n._v(" "),t("div",{staticClass:"number-pannel"},[t("h3",{staticClass:"number",style:{color:"#"+n.renderColor(this.type)}},[n._v(n._s(this.num))]),n._v(" "),t("span",{staticClass:"text"},[n._v(n._s(this.text))])])])},staticRenderFns:[]}},376:function(n,e,t){var a=t(6)(t(1196),t(1561),function(n){t(1531)},null,null);n.exports=a.exports}});