(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f3dd69c"],{"1e09":function(t,e,n){"use strict";n("2ac2")},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),s=n("d039"),o=n("ad6d"),c="toString",a=RegExp.prototype,u=a[c],l=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&i(RegExp.prototype,c,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in a)?o.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"2ac2":function(t,e,n){},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("94ca"),o=n("7156"),c=n("9bf2").f,a=n("241c").f,u=n("44e7"),l=n("ad6d"),d=n("9f7f"),f=n("6eeb"),A=n("d039"),h=n("69f3").set,v=n("2626"),m=n("b622"),p=m("match"),g=r.RegExp,b=g.prototype,D=/a/g,x=/a/g,I=new g(D)!==D,C=d.UNSUPPORTED_Y,P=i&&s("RegExp",!I||C||A((function(){return x[p]=!1,g(D)!=D||g(x)==x||"/a/i"!=g(D,"i")})));if(P){var y=function(t,e){var n,i=this instanceof y,r=u(t),s=void 0===e;if(!i&&r&&t.constructor===y&&s)return t;I?r&&!s&&(t=t.source):t instanceof y&&(s&&(e=l.call(t)),t=t.source),C&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var c=o(I?new g(t,e):g(t,e),i?this:b,y);return C&&n&&h(c,{sticky:n}),c},w=function(t){t in y||c(y,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},E=a(g),T=0;while(E.length>T)w(E[T++]);b.constructor=y,y.prototype=b,f(r,"RegExp",y)}v("RegExp")},"684a":function(t,e){t.exports="data:image/png;base64,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"},"6d71":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods"},t._l(t.goods,(function(t,e){return n("goods-list-item",{key:e,attrs:{"goods-item":t}})})),1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item",on:{click:t.itemClick}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.getImg,expression:"getImg"}],attrs:{alt:""},on:{load:t.imageLoad}}),n("div",{staticClass:"goods-info"},[n("p",[t._v(t._s(t.goodsItem.title))]),n("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),n("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])},o=[],c={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},computed:{getImg:function(){return this.goodsItem.img||this.goodsItem.image||this.goodsItem.show.img}},components:{},data:function(){return{}},methods:{imageLoad:function(){this.$bus.$emit("itemImgLoad")},itemClick:function(){this.$router.push({path:"/detail",query:{iid:this.goodsItem.iid}})}}},a=c,u=(n("bf49"),n("2877")),l=Object(u["a"])(a,s,o,!1,null,"4d246cea",null),d=l.exports,f={name:"GoodsList",components:{GoodsListItem:d},props:{goods:{type:Array,default:function(){return[]}}}},A=f,h=(n("8aaf"),Object(u["a"])(A,i,r,!1,null,"763c3240",null));e["a"]=h.exports},"8aaf":function(t,e,n){"use strict";n("d0d0")},"8d76":function(t,e,n){},"90b9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));n("4d63"),n("ac1f"),n("25f0"),n("5319");function i(t,e){var n=null;return function(){for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];n&&clearTimeout(n),n=setTimeout((function(){t.apply(void 0,r)}),e)}}function r(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in n)if(new RegExp("(".concat(i,")")).test(e)){var r=n[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:s(r))}return e}function s(t){return("00"+t).substr(t.length)}},a2e2:function(t,e,n){"use strict";n("8d76")},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,s=Function.prototype,o=s.toString,c=/^\s*function ([^ (]*)/,a="name";i&&!(a in s)&&r(s,a,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b14c:function(t,e,n){"use strict";n("c3d7")},bf49:function(t,e,n){"use strict";n("e29d")},c3d7:function(t,e,n){},d0d0:function(t,e,n){},dc2c:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return v}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"hy-swiper"}},[n("div",{staticClass:"swiper",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[t._t("default")],2),t._t("indicator"),n("div",{staticClass:"indicator"},[t.showIndicator&&t.slideCount>1?t._t("indicator",t._l(t.slideCount,(function(e,i){return n("div",{key:i,staticClass:"indi-item",class:{active:i===t.currentIndex-1}})}))):t._e()],2)],2)},r=[],s=(n("a9e3"),{name:"Swiper",props:{interval:{type:Number,default:1e3},animDuration:{type:Number,default:100},moveRatio:{type:Number,default:.25},showIndicator:{type:Boolean,default:!0}},data:function(){return{slideCount:0,totalWidth:0,swiperStyle:{},currentIndex:1,scrolling:!1}},mounted:function(){var t=this;setTimeout((function(){t.handleDom(),t.startTimer()}),2e3)},methods:{startTimer:function(){var t=this;this.playTimer=window.setInterval((function(){t.currentIndex++,t.scrollContent(-t.currentIndex*t.totalWidth)}),this.interval)},stopTimer:function(){window.clearInterval(this.playTimer)},scrollContent:function(t){this.scrolling=!0,this.swiperStyle.transition="transform "+this.animDuration+"ms",this.setTransform(t),this.checkPosition(),this.scrolling=!1},checkPosition:function(){var t=this;window.setTimeout((function(){t.swiperStyle.transition="0ms",t.currentIndex>=t.slideCount+1?(t.currentIndex=1,t.setTransform(-t.currentIndex*t.totalWidth)):t.currentIndex<=0&&(t.currentIndex=t.slideCount,t.setTransform(-t.currentIndex*t.totalWidth)),t.$emit("transitionEnd",t.currentIndex-1)}),this.animDuration)},setTransform:function(t){this.swiperStyle.transform="translate3d(".concat(t,"px, 0, 0)"),this.swiperStyle["-webkit-transform"]="translate3d(".concat(t,"px), 0, 0"),this.swiperStyle["-ms-transform"]="translate3d(".concat(t,"px), 0, 0")},handleDom:function(){var t=document.querySelector(".swiper"),e=t.getElementsByClassName("slide");if(this.slideCount=e.length,this.slideCount>1){var n=e[0].cloneNode(!0),i=e[this.slideCount-1].cloneNode(!0);t.insertBefore(i,e[0]),t.appendChild(n),this.totalWidth=t.offsetWidth,this.swiperStyle=t.style}this.setTransform(-this.totalWidth)},touchStart:function(t){this.scrolling||(this.stopTimer(),this.startX=t.touches[0].pageX)},touchMove:function(t){this.currentX=t.touches[0].pageX,this.distance=this.currentX-this.startX;var e=-this.currentIndex*this.totalWidth,n=this.distance+e;this.setTransform(n)},touchEnd:function(t){var e=Math.abs(this.distance);0!==this.distance&&(this.distance>0&&e>this.totalWidth*this.moveRatio?this.currentIndex--:this.distance<0&&e>this.totalWidth*this.moveRatio&&this.currentIndex++,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer())},previous:function(){this.changeItem(-1)},next:function(){this.changeItem(1)},changeItem:function(t){this.stopTimer(),this.currentIndex+=t,this.scrollContent(-this.currentIndex*this.totalWidth),this.startTimer()}}}),o=s,c=(n("1e09"),n("2877")),a=Object(c["a"])(o,i,r,!1,null,"77bbcb7c",null),u=a.exports,l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide"},[t._t("default")],2)},d=[],f={name:"Slide"},A=f,h=(n("b14c"),Object(c["a"])(A,l,d,!1,null,"4935a4a7",null)),v=h.exports},e29d:function(t,e,n){},eecb:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var i=n("90b9"),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"back-top"},[i("img",{attrs:{src:n("684a"),alt:""}})])}],o={name:"BackTop",components:{},data:function(){return{}}},c=o,a=(n("a2e2"),n("2877")),u=Object(a["a"])(c,r,s,!1,null,"f428b258",null),l=u.exports,d={data:function(){return{itemImgListener:null}},mounted:function(){var t=Object(i["a"])(this.$refs.scroll.refresh,100);this.itemImgListener=function(){t()},this.$bus.$on("itemImgLoad",this.itemImgListener),console.log("我是混入的内容")}},f={components:{BackTop:l},data:function(){return{isShowBackTop:!1}},methods:{backClick:function(){this.$refs.scroll.scrollTo(0,0,300)}}}}}]);
//# sourceMappingURL=chunk-6f3dd69c.9f913b48.js.map