(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip"],{"304e":function(t,n,e){"use strict";var u=e("6b4e"),r=e.n(u);r.a},"6b4e":function(t,n,e){},"77ff":function(t,n,e){"use strict";e.r(n);var u=e("9b3d"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=r.a},"9b3d":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e="SHOW_TIP",u={data:function(){return{showTip:!1}},mounted:function(){this.showTip=!t.getStorageInfoSync().keys.includes(e)},props:{tip:{type:String,default:"点击「添加小程序」，下次访问更便捷",required:!0},duration:{type:Number,default:5,required:!1}},methods:{hideTip:function(){t.setStorageSync(e,!0),this.showTip=!1}}};n.default=u}).call(this,e("543d")["default"])},a4b4:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var r=function(){var t=this,n=t.$createElement;t._self._c},i=[]},eed8:function(t,n,e){"use strict";e.r(n);var u=e("a4b4"),r=e("77ff");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("304e");var a,o=e("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"3c41912e",null,!1,u["a"],a);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component',
    {
        'components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eed8"))
        })
    },
    [['components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip-create-component']]
]);
