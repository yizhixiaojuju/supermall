(function(t){function e(e){for(var r,c,o=e[0],s=e[1],u=e[2],l=0,f=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},c={app:0},a={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-13e02eb3":"5d4b9220","chunk-90972480":"3dfb16ce","chunk-7c214634":"3f8e36e1","chunk-d4ba5bfa":"85571416","chunk-5658efc6":"f698652a","chunk-6f3dd69c":"9f913b48","chunk-63ec4210":"952e26c0","chunk-88e56aec":"e53f493c"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-13e02eb3":1,"chunk-90972480":1,"chunk-7c214634":1,"chunk-5658efc6":1,"chunk-6f3dd69c":1,"chunk-63ec4210":1,"chunk-88e56aec":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-13e02eb3":"8d4ba186","chunk-90972480":"5a7401fa","chunk-7c214634":"3c0c31ee","chunk-d4ba5bfa":"31d6cfe0","chunk-5658efc6":"ee5b8ce1","chunk-6f3dd69c":"c8e3b076","chunk-63ec4210":"32a5209b","chunk-88e56aec":"243a5d31"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete c[t],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1a09":function(t,e,n){},"1a94":function(t,e,n){"use strict";n("874a")},"1bdc":function(t,e,n){},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.3f0a2016.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("MainTabBar")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TabBar",[r("TabBarItem",{attrs:{path:"/home"}},[r("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("TabBarItem",{attrs:{path:"/category"}},[r("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("TabBarItem",{attrs:{path:"cart"}},[r("img",{attrs:{slot:"item-icon",src:n("d1c9"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("1f92"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("TabBarItem",{attrs:{path:"profile"}},[r("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,d=(n("f207"),n("2877")),h=Object(d["a"])(f,s,u,!1,null,"20645792",null),m=h.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeClass:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeClass}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),g=b,k=(n("5a05"),Object(d["a"])(g,p,v,!1,null,"bd07507a",null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:m,TabBarItem:y}},x=_,w=Object(d["a"])(x,i,o,!1,null,null,null),T=w.exports,O={name:"app",components:{MainTabBar:T}},S=O,j=(n("034f"),Object(d["a"])(S,c,a,!1,null,null,null)),B=j.exports,C=(n("d3b7"),n("8c4f")),E=function(){return Promise.all([n.e("chunk-90972480"),n.e("chunk-d4ba5bfa"),n.e("chunk-6f3dd69c"),n.e("chunk-88e56aec")]).then(n.bind(null,"b3d78"))},P=function(){return Promise.all([n.e("chunk-90972480"),n.e("chunk-d4ba5bfa"),n.e("chunk-5658efc6")]).then(n.bind(null,"bb51"))},L=function(){return Promise.all([n.e("chunk-90972480"),n.e("chunk-7c214634")]).then(n.bind(null,"c228"))},$=function(){return n.e("chunk-13e02eb3").then(n.bind(null,"3b42"))},A=function(){return Promise.all([n.e("chunk-90972480"),n.e("chunk-d4ba5bfa"),n.e("chunk-6f3dd69c"),n.e("chunk-63ec4210")]).then(n.bind(null,"6ab7"))};r["a"].use(C["a"]);var I,M=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:P},{path:"/cart",component:L},{path:"/profile",component:$},{path:"/detail",component:A}],N=new C["a"]({routes:M,mode:"history"}),D=N,q=n("2f62"),J=n("ade3"),F="add_counter",H="add_to_cart",K=(I={},Object(J["a"])(I,F,(function(t){t.count++})),Object(J["a"])(I,H,(function(t,e){e.checked=!0,t.cartList.push(e)})),I),U=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,r){var c=t.state.cartList.find((function(t){return t.iid===e.iid}));c?(t.commit(F,c),n("加了一件商品")):(e.count=1,t.commit(H,e),n("加了一件新商品"))}))}}),z={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(q["a"]);var G={cartList:[]},Q=new q["a"].Store({state:G,mutations:K,actions:U,getters:z}),R=Q,V=n("fe3c"),W=n.n(V),X=n("caf9"),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},Z=[],tt={name:"Toast",props:{},components:{},data:function(){return{message:"",isShow:!1}},methods:{show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"默认文字",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1500";this.isShow=!0,this.message=e,setTimeout((function(){t.isShow=!1,t.message=""}),n)}}},et=tt,nt=(n("1a94"),Object(d["a"])(et,Y,Z,!1,null,"7733660f",null)),rt=nt.exports,ct={install:function(t){var e=t.extend(rt),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},at=ct;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(at),W.a.attach(document.body),r["a"].use(X["a"]),new r["a"]({render:function(t){return t(B)},router:D,store:R}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"5a05":function(t,e,n){"use strict";n("1bdc")},"85ec":function(t,e,n){},"874a":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.c68224ce.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"},f207:function(t,e,n){"use strict";n("1a09")}});
//# sourceMappingURL=app.a1203368.js.map