webpackJsonp([4,49],{3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var e=this,t=this._slotContents["default"].childNodes;t=Array.prototype.filter.call(t,function(e){return 1===e.nodeType}),this.code||(this.code=t.map(function(e){return e.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(e.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(e,t,o){var a=o(5);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},8:function(e,t,o){var a=o(6);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},9:function(e,t){e.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(e,t){e.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(e,t,o){var a,r,i={};o(7),a=o(4),r=o(9),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(i).forEach(function(e){var t=i[e];n.computed[e]=function(){return t}})},12:function(e,t,o){var a,r,i={};o(8),a=o(3),r=o(10),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(i).forEach(function(e){var t=i[e];n.computed[e]=function(){return t}})},281:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(20),i=o(15),n=a(i),l=o(12),s=a(l),d=o(11),p=a(d);t["default"]={data:function(){return{content:[["data","可嵌套的节点属性的数组，生成tree的数据","array","无"],["open","下拉选择框是否显示","bool","false"],["multiple","支持多选","bool","false"],["allowClear","显示清除按钮","bool","false"],["onSelect","被选中时调用，参数为选中项的 value 值","function(valueArray)","无"]],apiTreeNode:[{parameter:"disabled",explain:"禁掉响应",type:"bool","default":"false"},{parameter:"disableCheckbox",explain:"禁掉 checkbox",type:"bool","default":"false"},{parameter:"title",explain:"标题",type:"String/element string","default":"'---'"},{parameter:"expand",explain:"是否展开直子节点",type:"bool","default":"false"},{parameter:"checked",explain:"是否勾选(如果勾选，子节点也会全部勾选)",type:"bool","default":"false"}],treedata1:[{title:"parent 1",selected:!0,expand:!0,node:[{title:"parent 1-0",expand:!0,disabled:!0,node:[{title:"leaf",disableCheckbox:!0},{title:"leaf"}]},{title:"parent 1-1",node:[{title:"<span style='color:#08c'>sss</span>"}]}]}],treedata2:[{title:"parent 1",expand:!0,node:[{title:"parent 1-0",expand:!0,disabled:!0,node:[{title:"leaf",disableCheckbox:!0},{title:"leaf",checked:!0}]},{title:"parent 1-1",node:[{title:"<span style='color:#08c'>sss</span>"}]}]}]}},components:{vRow:r.vRow,vCol:r.vCol,vButton:n["default"],codeBox:s["default"],apiTable:p["default"]}}},363:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,"",""])},405:function(e,t,o){var a=o(363);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},549:function(e,t){e.exports=' <div> <section class=markdown> <h1>Tree 树形控件</h1> <h2>何时使用</h2> <ul> <p> 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。 </p> </ul> <h2>组件演示</h2> </section> <v-row :gutter=16> <v-col span=12> <code-box title=基本 describe=最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。> <v-tree-select :data=treedata1 allow-clear></v-tree-select> </code-box> <code-box title=基本 describe=最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。> <v-tree-select :data=treedata2 multiple=multiple allow-clear></v-tree-select> </code-box> </v-col> </v-row> <api-table :content=content> <h3>TreeSelect props</h3> </api-table> <api-table :content=content title=""> <h3>TreeNode props</h3> </api-table> </div> '},668:function(e,t,o){var a,r,i={};o(405),a=o(281),r=o(549),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(n.template=r),n.computed||(n.computed={}),Object.keys(i).forEach(function(e){var t=i[e];n.computed[e]=function(){return t}})}});