(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13737b28"],{"2f7e":function(e,t,i){},"618a":function(e,t,i){},c1eb:function(e,t,i){"use strict";var a=i("618a"),n=i.n(a);n.a},d7a2:function(e,t,i){"use strict";var a=i("2f7e"),n=i.n(a);n.a},eab3:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{staticClass:"editor"},[i("el-header",[i("div",{staticClass:"editor-header"},[i("span",{staticStyle:{float:"left","font-size":"30px"}},[i("i",{staticClass:"el-icon-edit"}),e._v(" Neuron 数据采集平台 ")]),i("span",{staticStyle:{float:"right","font-size":"30px",cursor:"pointer"},on:{click:function(t){return e.logout()}}},[e._v("登出")])])]),i("el-container",[i("el-aside",{attrs:{width:"300px"}},[i("el-menu",{attrs:{"default-active":"overview"},on:{select:e.handleMenuSelect}},[i("el-menu-item",{attrs:{index:"overview"}},[i("i",{staticClass:"el-icon-coin"}),i("span",[e._v("采集表总览")])]),i("el-menu-item",{attrs:{index:"create"}},[i("i",{staticClass:"el-icon-plus"}),i("span",[e._v("新建采集表")])])],1)],1),i("el-main",[i("router-view"),i("CreatePaper")],1)],1)],1)},n=[],s=i("5530"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"新增采集表",visible:e.createPaperVisible,width:"30%"},on:{close:function(t){return e.close()}}},[i("div",{staticClass:"questionnaire-name"},[e._v(" 采集表名称： "),i("el-input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticStyle:{float:"left"},attrs:{type:"primary"},on:{click:function(t){return e.reset()}}},[e._v("重 置")]),i("el-button",{on:{click:function(t){return e.set_createPaperVisible(!1)}}},[e._v("取 消")]),i("el-button",{attrs:{type:"success"},on:{click:function(t){return e.createPaper()}}},[e._v("确 定")])],1)])},c=[],o=(i("a4d3"),i("e01a"),i("2f62")),l={name:"CreatePaper",computed:Object(s["a"])({},Object(o["c"])(["createPaperVisible"])),data:function(){return{title:"",description:"",dialogVisible:!1}},methods:Object(s["a"])({},Object(o["d"])(["set_createPaperVisible"]),{},Object(o["b"])(["createNewTable","editTable"]),{createPaper:function(){var e=this;if(""!==this.title){var t={title:this.title};this.createNewTable(t).then((function(t){t?(console.log("tableId: ".concat(t)),e.$router.push("/editor/create/".concat(t)),e.editTable(t),e.set_createPaperVisible(!1)):e.$message.error("创建失败，请重新整理")}))}else this.$message.error("请填上标题")},handleClose:function(e){this.$confirm("确认关闭?").then((function(t){e()})).catch((function(e){}))},close:function(){this.set_createPaperVisible(!1)},reset:function(){this.title="",this.description=""}})},u=l,f=(i("c1eb"),i("2877")),p=Object(f["a"])(u,r,c,!1,null,null,null),d=p.exports,b={name:"Manage",components:{CreatePaper:d},computed:Object(s["a"])({},Object(o["c"])(["userDetails"])),methods:Object(s["a"])({},Object(o["d"])(["set_createPaperVisible","set_loginState","set_userDetails"]),{},Object(o["b"])(["logoutAct"]),{handleMenuSelect:function(e){if("overview"===e){var t=this.$route.path;"/editor/overview"!==t&&this.$router.push({name:e})}else"create"===e&&this.set_createPaperVisible(!0)},logout:function(){var e=this;console.log("logout"),this.logoutAct().then((function(t){t&&e.$router.go({name:"login"})}))}})},h=b,v=(i("d7a2"),Object(f["a"])(h,a,n,!1,null,null,null));t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-13737b28.761949f6.js.map