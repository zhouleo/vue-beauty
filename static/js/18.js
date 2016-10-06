webpackJsonp([18,49],{3:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var t=this,e=this._slotContents["default"].childNodes;e=Array.prototype.filter.call(e,function(t){return 1===t.nodeType}),this.code||(this.code=e.map(function(t){return t.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(t.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},8:function(t,e,o){var n=o(6);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},9:function(t,e){t.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(t,e){t.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(t,e,o){var n,a,s={};o(7),n=o(4),a=o(9),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},12:function(t,e,o){var n,a,s={};o(8),n=o(3),a=o(10),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})},259:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(12),s=n(a),i=o(11),r=n(i),c=o(33),p=n(c);e["default"]={data:function(){return{apis:[{parameter:"content",explain:"提示内容",type:"Sring","default":"无"},{parameter:"duration",explain:"默认 1.5 秒后自动关闭，配置为 0 则不自动关闭",type:"Number","default":"1.5"}],config:[{parameter:"top",explain:"消息距离顶部的位置",type:"Number","default":"24"},{parameter:"duration",explain:"默认自动关闭延时，单位秒",type:"Number","default":"1.5"}]}},methods:{openMessage:function(){p["default"].info("这是一条普通的提醒")},success:function(){p["default"].success("这是一条成功提示")},error:function(){p["default"].error("这是一条失败提示")},warning:function(){p["default"].warning("这是一条警告提示")},time:function(){p["default"].success("这是一条成功的提示,并将于10秒后消失",10)},loading:function(){var t=p["default"].loading("正在执行中...",0);setTimeout(t.remove,2500)},openNotificationWithIcon:function(t){notification[t]({message:"这是标题",description:"这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"})}},components:{codeBox:s["default"],apiTable:r["default"]}}},350:function(t,e,o){e=t.exports=o(1)(),e.push([t.id,"",""])},392:function(t,e,o){var n=o(350);"string"==typeof n&&(n=[[t.id,n,""]]);o(2)(n,{});n.locals&&(t.exports=n.locals)},527:function(t,e){t.exports=' <div> <section class=markdown> <h1>Message 全局提示</h1> <p> 全局展示操作反馈信息。 </p> <h2>何时使用</h2> <ul> <li>可提供成功、警告和错误等反馈信息。</li> <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li> </ul> <h2>组件演示</h2> </section> <div class=ant-row style="margin-left: -8px; margin-right: -8px"> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=普通提示 describe=信息提醒反馈。 code=\'openMessage() {\n  message.info("这是一条普通的提醒");\n},\n\n<button type="button" class="ant-btn ant-btn-primary" @click="openMessage"><span>显示普通提醒</span></button>\'> <button type=button class="ant-btn ant-btn-primary" @click=openMessage><span>显示普通提醒</span></button> </code-box> <code-box title=修改延时 describe="自定义时长 10s，默认时长为 1.5s" code=\'time(){\n  message.success("这是一条成功的提示,并将于10秒后消失", 10);\n},\n\n<button type="button" class="ant-btn" @click="time"><span>自定义时长提示</span></button>\'> <button type=button class=ant-btn @click=time><span>自定义时长提示</span></button> </code-box> </div> <div class="ant-col-lg-12 code-boxes-col-2-1"> <code-box title=其他提示类型 describe=包括成功、失败、警告。 code=\'success() {\n  message.success("这是一条成功提示");\n},\nerror() {\n  message.error("这是一条失败提示");\n},\nwarning() {\n  message.warning("这是一条警告提示");\n},\n\n<button type="button" class="ant-btn" @click="success("success")"><span>显示成功信息</span></button>\n<button type="button" class="ant-btn" @click="error("error")"><span>显示失败信息</span></button>\n<button type="button" class="ant-btn" @click="warning("warning")"><span>显示警告信息</span></button>\'> <button type=button class=ant-btn @click="success(\'success\')"><span>显示成功信息</span></button> <button type=button class=ant-btn @click="error(\'error\')"><span>显示失败信息</span></button> <button type=button class=ant-btn @click="warning(\'warning\')"><span>显示警告信息</span></button> </code-box> <code-box title=加载中 describe="进行全局 loading，异步自行移除。" code=\'loading() {\n  const instance = message.loading("正在执行中...", 0);\n  setTimeout(instance.remove, 2500);\n},\n\n<button type="button" class="ant-btn" @click="loading"><span>显示加载中...</span></button>\'> <button type=button class=ant-btn @click=loading><span>显示加载中...</span></button> </code-box> </div> </div> <api-table :apis=apis> <ul> <li><button type=button class=ant-btn>message.success(content, duration)</button></li> <li><button type=button class=ant-btn>message.error(content, duration)</button></li> <li><button type=button class=ant-btn>message.warning(content, duration)</button></li> <li><button type=button class=ant-btn>message.loading(content, duration)</button></li> </ul> <p> 参数如下： </p> </api-table> <api-table :apis=config> <p> 还提供了一个全局配置方法，在调用前提前配置，全局一次生效。 </p> <p> <button type=button class=ant-btn>message.config({ top: 100, duration: 3, })</button> </p> </api-table> </div> '},645:function(t,e,o){var n,a,s={};o(392),n=o(259),a=o(527),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var i="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;a&&(i.template=a),i.computed||(i.computed={}),Object.keys(s).forEach(function(t){var e=s[t];i.computed[t]=function(){return e}})}});