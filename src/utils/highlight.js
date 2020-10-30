import hljs from 'highlight.js'
import 'highlight.js/styles/solarized-light.css'// 高亮风格，选择更多风格需导入node_modules/hightlight.js/styles/目录下其它css文件
let Highlight = {};
Highlight.install = function (Vue) {
    // 自定义指令 v-highlight
    Vue.directive('highlight', {
        // 被绑定元素插入父节点时调用
        inserted: function(el) {
            console.log(0)
            console.log(el)
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                console.log(hljs.highlightBlock)
                hljs.highlightBlock(blocks[i]);
            }
        },
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated: function(el) {
            setTimeout(()=>{
                let blocks = el.querySelectorAll('pre code')
                console.log(blocks)
                blocks.forEach((block) => {
                    console.log(block)
                    hljs.highlightBlock(block);
                })
            }, 0)
        }
    })
};

export default Highlight;