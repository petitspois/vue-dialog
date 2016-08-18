(function(){

    function install(Vue){


        Vue.dialog = function(config){
            var vm = null;
        Vue.config.delimiters = ['{{', '}}']
            var defaultConfig = {
                target: document.body,
                data: {
                    show: false,
                }
            };

            config = extend(defaultConfig, config);

            config.methods = extend(config.methods || {}, {
                close:function(){
                    this.$remove()
                },
                handle:function(fn){
                    this[fn]();
                }
            })

            var tpl = [
                '<div class="layui-layer-shade" id="layui-layer-shade2" times="2" style="z-index:19870123; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>',
                '<div class="layui-layer layui-anim layui-layer-dialog" >',
                    '<div class="layui-layer-title" v-text="title"></div>',
                    '<div class="layui-layer-content">'+config.data.content+'</div>',
                    '<span class="layui-layer-setwin">',
                        '<a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="close"></a>',
                    '</span>',
                    '<div class="layui-layer-btn">',
                        '<a v-for="(index, item) in btn" style="{{item.style}}" class="layui-layer-btn{{index}}" v-text="item.text" @click="handle(item.bind)"></a>',
                    '</div>',
                '</div>'
            ].join('');
            
            vm = new Vue({
                replace: false,
                template: tpl,
                data: config.data,
                methods: config.methods,
                ready:function(){
                    if(typeof this.ready == 'function')this.ready();
                    var layDOM = divEl.querySelector('.layui-layer');
                    var layWidth = layDOM.offsetWidth;
                    var layHeight = layDOM.offsetHeight;
                    layDOM.style.cssText = 'z-index: 19870124;top:50%;left:50%;margin-top:'+(-(layHeight/2))+'px;margin-left:'+(-(layWidth/2))+'px;';
                }
            })
            var divEl = document.createElement('div');
            divEl.innerHTML = tpl;
            vm.$mount(divEl);
            vm.$appendTo(config.target);

        }


        function extend(target, source) {
            for (var property in source) {
                if (source[property] && source[property].constructor &&
                    source[property].constructor === Object) {
                    target[property] = target[property] || {};
                    extend(target[property], source[property]);
                } else {
                    target[property] = source[property];
                }
            }
            return target;
        }

    }




    if(typeof exports == 'Object'){
        module.exports == install;
    }else if(typeof define == 'function' && define.amd){
        define([], function(){
            return install;
        })
    }else if(window.Vue){
        Vue.use(install)
    }
})();
