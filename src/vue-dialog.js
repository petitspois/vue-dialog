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

            config.methods = extend(config.methods, {
                close:function(){
                    this.$remove()
                },
                handle:function(fn){
                    this[fn]();
                }
            })

            var tpl = [
                '<div class="layui-layer-shade" id="layui-layer-shade2" times="2" style="z-index:19891015; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>',
                '<div class="layui-layer layui-anim layui-layer-dialog " id="layui-layer2" type="dialog" times="2" showtime="0" contype="string" style="z-index: 19891016; top: 132.5px; left: 582px;">',
                    '<div class="layui-layer-title">信息</div>',
                    '<div class="layui-layer-content">'+config.data.content+'</div>',
                    '<span class="layui-layer-setwin">',
                        '<a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="close"></a>',
                    '</span>',
                    '<div class="layui-layer-btn">',
                        '<a v-for="(index, item) in btn" class="layui-layer-btn{{index}}" v-text="item.msg" @click="handle(item.bind)"></a>',
                    '</div>',
                '</div>'
            ].join('');

            vm = new Vue({
                replace: false,
                template: tpl,
                data: config.data,
                methods: config.methods,
                ready:function(){

                }
            })
            var divEl = document.createElement('div');
            divEl.innerHTML = tpl;
            vm.$mount(divEl);
            vm.$appendTo(config.target);

        }




        function extend(target, source) {
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    target[p] = source[p];
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
