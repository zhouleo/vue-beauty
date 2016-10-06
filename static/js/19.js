webpackJsonp([19,49],{3:function(o,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l["default"]={props:{title:String,describe:String,code:String},data:function(){return{open:!1}},ready:function(){var o=this,l=this._slotContents["default"].childNodes;l=Array.prototype.filter.call(l,function(o){return 1===o.nodeType}),this.code||(this.code=l.map(function(o){return o.outerHTML.replace(/\t| {4}/g,"")}).join("\n")),this.$nextTick(function(){hljs.highlightBlock(o.$el.querySelector("pre code"))})},methods:{handleOpen:function(){this.open=!this.open}}}},4:function(o,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l["default"]={props:{head:{type:Array,required:!1,"default":function(){return["参数","说明","类型","默认值"]}},content:Array,apis:Array,title:{type:String,required:!1,"default":"API"}}}},5:function(o,l,n){l=o.exports=n(1)(),l.push([o.id,".markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:100%;margin-bottom:24px}.markdown>table th{white-space:nowrap;color:#5c6b77;font-weight:600;background:#f7f7f7}.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}.markdown.api-container table{font-family:Consolas,Menlo,Courier,monospace;font-size:13px}",""])},6:function(o,l,n){l=o.exports=n(1)(),l.push([o.id,'.code-box{border:1px solid #e9e9e9;border-radius:6px;display:inline-block;width:100%;position:relative;margin:0 0 16px;-webkit-transition:all .2s ease;transition:all .2s ease}.code-box .collapse{position:absolute;right:16px;bottom:16px;cursor:pointer;width:18px;height:18px;font-size:18px;line-height:18px;opacity:.5;text-align:center;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:all .3s ease;transition:all .3s ease;color:#999;background:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:100%}.code-box .collapse:hover{opacity:1}.code-box:hover{box-shadow:0 0 6px rgba(0,0,0,.15);position:relative;z-index:10;background:#fff}.code-box:hover .code-box-title{background:#fbfbfb;box-shadow:0 -1.2px 0 #e9e9e9}.code-box:hover .code-box-meta{background:#fbfbfb}.code-box .code-box-demo{border-bottom:1px solid #e9e9e9;padding:42px 20px 50px}.code-box .highlight-wrapper{max-height:0;opacity:0;overflow:auto;-webkit-transition:all .4s ease;transition:all .4s ease;border-radius:0 0 6px 6px}.code-box .highlight-wrapper-expand{max-height:500px;opacity:1}.code-box.expand .collapse{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.code-box.expand .code-box-meta{border-radius:0;border-bottom:1px dashed #e9e9e9}.code-box-meta{position:relative;padding:16px;border-radius:0 0 6px 6px;-webkit-transition:background-color .4s ease;transition:background-color .4s ease;width:100%;font-size:12px}.code-box-meta p{margin:0}.code-box-title{position:absolute;top:-14px;padding:1px 1.1em;color:#777;border-radius:6px;background:#fff;-webkit-transition:all .4s ease;transition:all .4s ease}.code-box-title:before{font-family:anticon;content:"\\E658";font-size:16px;vertical-align:middle;line-height:22px;position:relative;margin-right:8px;top:-2px;color:#ccc;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);display:inline-block}.code-box .code-box-title a,.code-box .code-box-title a:hover{color:#666;font-size:14px}.highlight{line-height:1.5}.highlight pre{margin:0;padding:0;background:#fff;width:auto}.highlight pre code{display:block;color:#666;line-height:1.7;border:1px solid #e9e9e9;padding:10px 15px;border-radius:6px;font-size:13px;border:none;background:#fff}.hljs{background:none}',""])},7:function(o,l,n){var a=n(5);"string"==typeof a&&(a=[[o.id,a,""]]);n(2)(a,{});a.locals&&(o.exports=a.locals)},8:function(o,l,n){var a=n(6);"string"==typeof a&&(a=[[o.id,a,""]]);n(2)(a,{});a.locals&&(o.exports=a.locals)},9:function(o,l){o.exports=' <section class="markdown api-container"> <h2>{{ title }}</h2> <slot></slot> <table> <thead> <tr> <th v-for="text in head" v-html=text></th> </tr> </thead> <tbody> <tr v-for="item in content"> <td v-for="text in item" v-html=text></td> </tr> <tr v-for="api in apis"> <td v-for="text in api" v-html=text></td> </tr> </tbody> </table> </section> '},10:function(o,l){o.exports=' <section class=code-box :class="{\'expand\': open}"> <section class=code-box-demo> <slot></slot> </section> <section class="code-box-meta markdown"> <div class=code-box-title><a>{{ title }}</a></div> <div><p>{{ describe }}</p></div> <span class="collapse anticon anticon-circle-o-right" @click=handleOpen></span> </section> <section class=highlight-wrapper :class="{\'highlight-wrapper-expand\': open}"> <div class=highlight> <pre><code class=html>{{ code }}</code></pre> </div> </section> </section> '},11:function(o,l,n){var a,t,e={};n(7),a=n(4),t=n(9),o.exports=a||{},o.exports.__esModule&&(o.exports=o.exports["default"]);var c="function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports;t&&(c.template=t),c.computed||(c.computed={}),Object.keys(e).forEach(function(o){var l=e[o];c.computed[o]=function(){return l}})},12:function(o,l,n){var a,t,e={};n(8),a=n(3),t=n(10),o.exports=a||{},o.exports.__esModule&&(o.exports=o.exports["default"]);var c="function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports;t&&(c.template=t),c.computed||(c.computed={}),Object.keys(e).forEach(function(o){var l=e[o];c.computed[o]=function(){return l}})},257:function(o,l,n){"use strict";function a(o){return o&&o.__esModule?o:{"default":o}}Object.defineProperty(l,"__esModule",{value:!0});var t=n(20),e=n(12),c=a(e),r=n(11),s=a(r);l["default"]={data:function(){return{apis:[{parameter:"span",explain:"栅格系统（列）元素，row的直接元素，其值1到24来表示其跨越row的范围。例如，三个等宽d的列可以使用.col-8来创建，将一行整分割成3份同样大小的区域",type:"String,Number","default":"无"},{parameter:"push",explain:"栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离",type:"String,Number","default":"无"},{parameter:"pull",explain:"栅格系统内子元素默认是左浮动，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离",type:"String,Number","default":"无"},{parameter:"offset",explain:"栅格系统内子元素默认是左浮动，offset的作用设置子元素的margin-left的值",type:"String,Number","default":"无"},{parameter:"display",explain:'栅格系统（行）区域，规定外层元素应该生成的框的类型，可用值 "flex"',type:"String","default":"block"},{parameter:"pack",explain:'栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的排列模式，可选值["start","center","end","space-between","space-around"]，声明该值的时候display="flex"是必须的',type:"String","default":"start"},{parameter:"align",explain:'栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的对齐模式，可选值["top","middle","bottom"]，声明该值的时候display="flex"是必须的',type:"Array","default":"无"},{parameter:"order",explain:"栅格化系统支持 Flex 布局，支持使用 order 来定义子元素的排列顺序。",type:"String,Number","default":"无"}]}},components:{vRow:t.vRow,vCol:t.vCol,codeBox:c["default"],apiTable:s["default"]}}},349:function(o,l,n){l=o.exports=n(1)(),l.push([o.id,".global .code-box:hover{box-shadow:none}.global .highlight pre code{background:#f7f7f7}.global .ant-row .paragraph-14px{font-size:14px}.global .ant-row .paragraph-12px{font-size:12px}.global .demo-row{margin-bottom:20px}.global .demo-ant-row-col .ant-row,.global .demo-row{background-image:-webkit-linear-gradient(left,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);background-image:linear-gradient(90deg,#f5f5f5 4.16666667%,transparent 0,transparent 8.33333333%,#f5f5f5 0,#f5f5f5 12.5%,transparent 0,transparent 16.66666667%,#f5f5f5 0,#f5f5f5 20.83333333%,transparent 0,transparent 25%,#f5f5f5 0,#f5f5f5 29.16666667%,transparent 0,transparent 33.33333333%,#f5f5f5 0,#f5f5f5 37.5%,transparent 0,transparent 41.66666667%,#f5f5f5 0,#f5f5f5 45.83333333%,transparent 0,transparent 50%,#f5f5f5 0,#f5f5f5 54.16666667%,transparent 0,transparent 58.33333333%,#f5f5f5 0,#f5f5f5 62.5%,transparent 0,transparent 66.66666667%,#f5f5f5 0,#f5f5f5 70.83333333%,transparent 0,transparent 75%,#f5f5f5 0,#f5f5f5 79.16666667%,transparent 0,transparent 83.33333333%,#f5f5f5 0,#f5f5f5 87.5%,transparent 0,transparent 91.66666667%,#f5f5f5 0,#f5f5f5 95.83333333%,transparent 0);overflow:hidden}.global .row-flex{background:#f5f5f5}.global .demo-ant-row-col .ant-row div,.global .demo-row div,.global .row-flex div{padding:5px 0;background:rgba(24,115,216,.7);text-align:center;min-height:28px;border:1px solid rgba(0,0,0,.1);margin-top:10px;margin-bottom:10px;color:#fff}.global .demo-row .demo-col{text-align:center;padding:40px 0;color:#fff;font-size:18px;border:none;margin-top:0;margin-bottom:0}.global .demo-row .demo-col-1{background:rgba(24,115,216,.7)}.global .demo-row .demo-col-2{background:rgba(24,115,216,.5)}.global .demo-row .demo-col-3{background:hsla(0,0%,100%,.2);color:#999}.global .demo-row .demo-col-4{background:rgba(24,115,216,.6)}.global .demo-row .demo-col-5{background:hsla(0,0%,100%,.5);color:#999}.global .hight-100{height:100px}.global .hight-50{height:50px}.global .hight-120{height:120px}.global .hight-80{height:80px}.global .testRowClassName{background:#f0f0f0}.global div.testColClassName{background:rgba(24,115,216,.9)}",""])},391:function(o,l,n){var a=n(349);"string"==typeof a&&(a=[[o.id,a,""]]);n(2)(a,{});a.locals&&(o.exports=a.locals)},525:function(o,l){o.exports=' <div class="markdown global"> <h2>栅格设计理念</h2> <p>在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，因此在12栅格系统的基础上，我们将整个设计建议区域按照24等分的原则进行划分。 划分之后的信息区块我们称之为“盒子”。 建议横向排列的盒子数量最多四个，最少一个。“盒子”在整个屏幕上占比见下图。 设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。 </p> <v-row class=demo-row> <v-col class="demo-col demo-col-1" span=24> 100% </v-col> </v-row> <v-row class=demo-row> <v-col class="demo-col demo-col-2" span=6>25%</v-col> <v-col class="demo-col demo-col-3" span=6>25%</v-col> <v-col class="demo-col demo-col-2" span=6>25%</v-col> <v-col class="demo-col demo-col-3" span=6>25%</v-col> </v-row> <v-row class=demo-row> <v-col class="demo-col demo-col-4" span=8>33.33%</v-col> <v-col class="demo-col demo-col-5" span=8>33.33%</v-col> <v-col class="demo-col demo-col-4" span=8>33.33%</v-col> </v-row> <v-row class=demo-row> <v-col class="demo-col demo-col-1" span=12>50%</v-col> <v-col class="demo-col demo-col-3" span=12>50%</v-col> </v-row> <v-row class=demo-row> <v-col class="demo-col demo-col-4" span=16>66.66%</v-col> <v-col class="demo-col demo-col-5" span=8>33.33%</v-col> </v-row> <h2>概述</h2> <p> 布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p> <ul> <li>通过row在水平方向建立一组column（简写col）</li> <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li> <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽d的列可以使用.ant-col-8来创建</li> <li>如果一个row中的col总和超过24，那么多余的col会作为一个整体另起一行排列</li> </ul> <h2>组件演示</h2> <div class=ant-row> <div class=ant-col-11> <code-box title=基本布局演示 describe=点击戳开代码 code=\'\n          <v-row><v-col span="24">100%</v-col></v-row>\n          <v-row>\n            <v-col span="6">25%</v-col>\n            <v-col span="6">25%</v-col>\n            <v-col span="6">25%</v-col>\n            <v-col span="6">25%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="8">33.33%</v-col>\n            <v-col span="8">33.33%</v-col>\n            <v-col span="8">33.33%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="12">50%</v-col>\n            <v-col span="12">50%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="16">66.66%</v-col>\n            <v-col span="8">33.33%</v-col>\n          </v-row>\'> <div class=demo-ant-row-col> <v-row><v-col span=24>100%</v-col></v-row> <v-row> <v-col span=6>25%</v-col> <v-col span=6>25%</v-col> <v-col span=6>25%</v-col> <v-col span=6>25%</v-col> </v-row> <v-row> <v-col span=8>33.33%</v-col> <v-col span=8>33.33%</v-col> <v-col span=8>33.33%</v-col> </v-row> <v-row> <v-col span=12>50%</v-col> <v-col span=12>50%</v-col> </v-row> <v-row> <v-col span=16>66.66%</v-col> <v-col span=8>33.33%</v-col> </v-row> </div> </code-box> </div> <div class=ant-col-2> </div> <div class=ant-col-11> <code-box title=可以左右偏移的布局 describe="ant-col-offset-n n为想要margin-left多少个栅格的距离" code=\'\n          <v-row>\n            <v-col span="8">.ant-col-8</v-col>\n            <v-col span="8" offset="8">.ant-col-8 ant-col-offset-8</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</v-col>\n            <v-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</v-col>\n          </v-row>\'> <div class=demo-ant-row-col> <v-row> <v-col span=8>.ant-col-8</v-col> <v-col span=8 offset=8>.ant-col-8 ant-col-offset-8</v-col> </v-row> <v-row> <v-col span=6 offset=6>.ant-col-6 .ant-col-offset-6</v-col> <v-col span=6 offset=6>.ant-col-6 .ant-col-offset-6</v-col> </v-row> <v-row> <v-col span=12 offset=6>.ant-col-12 .ant-col-offset-6</v-col> </v-row> </div> </code-box> </div> </div> <br/> <div class=ant-row> <div class=ant-col-11> <code-box title=布局排序 describe=栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离 code=\'\n          <v-row>\n            <v-col span="18" push="6">.ant-col-18 .ant-col-push-6</v-col>\n            <v-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="12" push="12">.ant-col-push-12 .ant-col-12</v-col>\n            <v-col span="12" pull="12">.ant-col-pull-12 .ant-col-12</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span="6" push="12">.ant-col-push-12 .ant-col-6 1</v-col>\n            <v-col span="6" push="12">.ant-col-push-6 .ant-col-6 2</v-col>\n            <v-col span="12" pull="12">.ant-col-pull-6 .ant-col-12</v-col>\n          </v-row>\n        \'> <div class=demo-ant-row-col> <v-row> <v-col span=18 push=6>.ant-col-18 .ant-col-push-6</v-col> <v-col span=6 pull=18>.ant-col-6 .ant-col-pull-18</v-col> </v-row> <v-row> <v-col span=12 push=12>.ant-col-push-12 .ant-col-12</v-col> <v-col span=12 pull=12>.ant-col-pull-12 .ant-col-12</v-col> </v-row> <v-row> <v-col span=6 push=12>.ant-col-push-12 .ant-col-6 1</v-col> <v-col span=6 push=12>.ant-col-push-6 .ant-col-6 2</v-col> <v-col span=12 pull=12>.ant-col-pull-6 .ant-col-12</v-col> </v-row> </div> </code-box> </div> </div> <h2>Flex 布局</h2> <p> 我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。 Flex 布局是基于 24 栅格来定义每一个“盒子”的宽度，但排版则不拘泥于栅格。 </p> <div class=ant-row> <div class=ant-col-11> <h3>Flex布局</h3> <code-box title=Flex布局：排列 describe="点击戳开代码 关键词：start, center, end, space-between, space-around" code=\'\n        <p>子元素居左排列（默认）.ant-row-flex-start .ant-row-flex .ant-row</p>\n          <v-row display="flex" pack="start">\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居中排列 .ant-row-flex-center .ant-row-flex .ant-row</p>\n          <v-row display="flex" pack="center">\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居右排列 .ant-row-flex-end .ant-row-flex .ant-row</p>\n          <v-row display="flex" pack="end">\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素等宽排列 .ant-row-flex-space-between .ant-row-flex .ant-row</p>\n          <v-row display="flex" pack="space-between">\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素分散对齐 .ant-row-flex-space-around .ant-row-flex .ant-row</p>\n          <v-row display="flex" pack="space-around">\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n            <v-col span="4">.ant-col-4</v-col>\n          </v-row>\'> <div class=demo-ant-row-col> <p>子元素居左排列（默认）.ant-row-flex-start .ant-row-flex .ant-row</p> <v-row display=flex pack=start> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> </v-row> <p>子元素居中排列 .ant-row-flex-center .ant-row-flex .ant-row</p> <v-row display=flex pack=center> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> </v-row> <p>子元素居右排列 .ant-row-flex-end .ant-row-flex .ant-row</p> <v-row display=flex pack=end> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> </v-row> <p>子元素等宽排列 .ant-row-flex-space-between .ant-row-flex .ant-row</p> <v-row display=flex pack=space-between> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> </v-row> <p>子元素分散对齐 .ant-row-flex-space-around .ant-row-flex .ant-row</p> <v-row display=flex pack=space-around> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> <v-col span=4>.ant-col-4</v-col> </v-row> </div> </code-box> <h3>Flex排序</h3> <code-box title=Flex排序 describe="点击戳开代码 关键词：ant-col-order-n n为想要的顺序" code=\'\n          <v-row display="flex">\n            <v-col order="4" span="6">1 ant-col-order-4</v-col>\n            <v-col order="3" span="6">2 ant-col-order-3</v-col>\n            <v-col order="2" span="6">3 ant-col-order-2</v-col>\n            <v-col order="1" span="6">4 ant-col-order-1</v-col>\n          </v-row>\'> <div class=demo-ant-row-col> <v-row display=flex> <v-col order=4 span=6>1 ant-col-order-4</v-col> <v-col order=3 span=6>2 ant-col-order-3</v-col> <v-col order=2 span=6>3 ant-col-order-2</v-col> <v-col order=1 span=6>4 ant-col-order-1</v-col> </v-row> </div> </code-box> </div> <div class=ant-col-2></div> <div class=ant-col-11> <h3>Flex对齐</h3> <code-box title=Flex对齐：配合排列方式的对齐方式 describe="点击戳开代码 关键词：flex-top, flex-middle, flex-bottom" code=\'<p>顶部对齐</p>\n        <div class="ant-row-flex-center ant-row-flex-top ant-row-flex ant-row">\n          <div class="ant-col-4"><p style="height: 100px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 50px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 120px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 80px">.ant-col-4</p></div>\n        </div>\n        <p>居中对齐</p>\n        <div class="ant-row-flex-space-around ant-row-flex-middle ant-row-flex ant-row">\n          <div class="ant-col-4"><p style="height: 100px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 50px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 120px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 80px">.ant-col-4</p></div>\n        </div>\n        <p>底部对齐</p>\n        <div class="ant-row-flex-space-between ant-row-flex-bottom ant-row-flex ant-row">\n          <div class="ant-col-4"><p style="height: 100px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 50px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 120px">.ant-col-4</p></div>\n          <div class="ant-col-4"><p style="height: 80px">.ant-col-4</p></div>\n        </div>\n        \'> <div class=demo-ant-row-col> <p>顶部对齐 .ant-row-flex-center .ant-row-flex-top .ant-row-flex .ant-row</p> <v-row pack=center display=flex align=top> <v-col span=4><p style="height: 100px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 50px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 120px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 80px">.ant-col-4</p></v-col> </v-row> <p>居中对齐 .ant-row-flex-space-around .ant-row-flex-middle .ant-row-flex .ant-row</p> <v-row pack=space-around display=flex align=middle> <v-col span=4><p style="height: 100px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 50px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 120px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 80px">.ant-col-4</p></v-col> </v-row> <p>底部对齐 .ant-row-flex-space-between .ant-row-flex-bottom .ant-row-flex .ant-row</p> <v-row pack=space-between display=flex align=bottom> <v-col span=4><p style="height: 100px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 50px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 120px">.ant-col-4</p></v-col> <v-col span=4><p style="height: 80px">.ant-col-4</p></v-col> </v-row> </div> </code-box> </div> </div> <api-table :apis=apis></api-table> </div> '},643:function(o,l,n){var a,t,e={};n(391),a=n(257),t=n(525),o.exports=a||{},o.exports.__esModule&&(o.exports=o.exports["default"]);var c="function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports;t&&(c.template=t),c.computed||(c.computed={}),Object.keys(e).forEach(function(o){var l=e[o];c.computed[o]=function(){return l}})}});