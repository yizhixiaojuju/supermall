(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63ec4210"],{1148:function(t,e,s){"use strict";var i=s("a691"),n=s("1d80");t.exports="".repeat||function(t){var e=String(n(this)),s="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(s+=e);return s}},"159b":function(t,e,s){var i=s("da84"),n=s("fdbc"),a=s("17c2"),o=s("9112");for(var r in n){var c=i[r],l=c&&c.prototype;if(l&&l.forEach!==a)try{o(l,"forEach",a)}catch(f){l.forEach=a}}},"17c2":function(t,e,s){"use strict";var i=s("b727").forEach,n=s("a640"),a=s("ae40"),o=n("forEach"),r=a("forEach");t.exports=o&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1f90":function(t,e,s){"use strict";s("8ed7")},3177:function(t,e,s){},"35d9":function(t,e,s){},"408a":function(t,e,s){var i=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},4160:function(t,e,s){"use strict";var i=s("23e7"),n=s("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4de4":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").filter,a=s("1dde"),o=s("ae40"),r=a("filter"),c=o("filter");i({target:"Array",proto:!0,forced:!r||!c},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b");var i=s("ade3");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}},"582f":function(t,e,s){"use strict";s("fbb4")},6023:function(t,e,s){"use strict";s("dd24")},"67cf":function(t,e,s){},"6ab7":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"nav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{"detail-info":t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"params",attrs:{"param-info":t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{"comment-info":t.commentInfo}}),s("goods-list",{ref:"recommend",attrs:{goods:t.recommends}})],1),s("detail-bottom-bar",{on:{addCart:t.addToCart}}),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backClick(e)}}})],1)},n=[],a=(s("a9e3"),s("5530")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s("7a74"),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{key:s,staticClass:"title-item",class:{active:s===t.currentIndex},on:{click:function(e){return t.titleClick(s)}}},[t._v(t._s(e))])})),0)])],1)},r=[],c=s("a7ac"),l={name:"DetailNavBar",components:{NavBar:c["a"]},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},f=l,d=(s("d688"),s("2877")),u=Object(d["a"])(f,o,r,!1,null,"1f387cd4",null),m=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{staticClass:"detail-swiper"},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e},[s("img",{attrs:{src:t,alt:""}})])})),1)},p=[],v=s("dc2c"),b={name:"DetailSwiper",components:{Swiper:v["a"],SwiperItem:v["b"]},props:{topImages:{type:Array,default:function(){return[]}}}},g=b,_=(s("582f"),Object(d["a"])(g,h,p,!1,null,"1e578213",null)),C=_.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))])]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},y=[],w={name:"DetailBaseInfo",props:{goods:{type:Object}}},O=w,k=(s("f3c8"),Object(d["a"])(O,I,y,!1,null,"1b47a26e",null)),j=k.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],$=(s("b680"),{name:"DetailShopInfo",props:{shop:{type:Object}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),E=$,D=(s("bb02"),Object(d["a"])(E,x,T,!1,null,"d096b626",null)),P=D.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imageLoad}})})),0)]):t._e()},Y=[],B={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imageLoad:function(){this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},L=B,F=(s("7cfb"),Object(d["a"])(L,S,Y,!1,null,"a333c720",null)),N=F.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",{key:i},[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},G=[],M={name:"DetailParamInfo",props:{paramInfo:{type:Object}}},z=M,R=(s("bb46"),Object(d["a"])(z,A,G,!1,null,"9cd2fe8a",null)),J=R.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{key:e,attrs:{src:t}})})),0)])]):t._e()])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"})])])}],V=s("90b9"),W={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var e=new Date(1e3*t);return Object(V["b"])(e,"yyyy-MM-dd")}}},X=W,H=(s("1f90"),Object(d["a"])(X,q,U,!1,null,"60d08caa",null)),K=H.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],tt={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addCart")}}},et=tt,st=(s("6023"),Object(d["a"])(et,Q,Z,!1,null,"4104bc28",null)),it=st.exports,nt=s("6d71"),at=s("5d17");s("b0c0");function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var rt=s("1bab");function ct(t){return Object(rt["a"])({url:"/detail",params:{iid:t}})}function lt(){return Object(rt["a"])({url:"/recommend"})}var ft=function t(e,s,i){ot(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.nowPrice=e.highNowPrice,this.realPrice=e.lowNowPrice},dt=function t(e){ot(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods},ut=function t(e,s){ot(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables},mt=s("eecb"),ht=s("2f62"),pt={name:"Detail",components:{DetailNavBar:m,DetailSwiper:C,DetailBaseInfo:j,DetailShopInfo:P,DetailGoodsInfo:N,DetailParamInfo:J,DetailCommentInfo:K,GoodsList:nt["a"],Scroll:at["a"],DetailBottomBar:it},mixins:[mt["b"],mt["a"]],data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[],getThemeTopY:null,currentIndex:0}},created:function(){var t=this,e=this.$route.query.iid;this.iid=e,ct(this.iid).then((function(e){var s=e.result;t.topImages=s.itemInfo.topImages,t.goods=new ft(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new dt(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new ut(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0])})),lt().then((function(e){t.recommends=e.data.list})),this.getThemeTopY=Object(V["a"])((function(){t.themeTopYs=[],t.themeTopYs.push(0),t.themeTopYs.push(t.$refs.params.$el.offsetTop),t.themeTopYs.push(t.$refs.comment.$el.offsetTop),t.themeTopYs.push(t.$refs.recommend.$el.offsetTop),t.themeTopYs.push(Number.MAX_VALUE),console.log(t.themeTopYs)}),200)},mounted:function(){},updated:function(){},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:Object(a["a"])(Object(a["a"])({},Object(ht["b"])(["addCart"])),{},{imageLoad:function(){this.getThemeTopY()},titleClick:function(t){console.log(this.themeTopYs[t]),this.$refs.scroll.scrollTo(0,-this.themeTopYs[t],300)},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isTabFixed=-t.y>this.tabOffsetTop;for(var e=-t.y,s=this.themeTopYs.length,i=0;i<s-1;i++)this.currentIndex!==i&&e>=this.themeTopYs[i]&&e<this.themeTopYs[i+1]&&(this.currentIndex=i,console.log(this.currentIndex),this.$refs.nav.currentIndex=this.currentIndex)},addToCart:function(){var t=this,e={};e.image=this.topImages[0],e.title=this.goods.title,e.desc=this.goods.desc,e.price=this.goods.realPrice,e.iid=this.iid,this.addCart(e).then((function(e){t.$toast.show(e,2e3),console.log(t.$toast)}))}})},vt=pt,bt=(s("d02e"),Object(d["a"])(vt,i,n,!1,null,"1aa58ed5",null));e["default"]=bt.exports},"7a74":function(t,e,s){t.exports=s.p+"img/back.26df9036.svg"},"7cfb":function(t,e,s){"use strict";s("7e5c")},"7e5c":function(t,e,s){},"8ed7":function(t,e,s){},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),a=s("df75"),o=s("d039"),r=o((function(){a(1)}));i({target:"Object",stat:!0,forced:r},{keys:function(t){return a(n(t))}})},b680:function(t,e,s){"use strict";var i=s("23e7"),n=s("a691"),a=s("408a"),o=s("1148"),r=s("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,s){return 0===e?s:e%2===1?f(t,e-1,s*t):f(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){c.call({})}));i({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,s,i,r,c=a(this),u=n(t),m=[0,0,0,0,0,0],h="",p="0",v=function(t,e){var s=-1,i=e;while(++s<6)i+=t*m[s],m[s]=i%1e7,i=l(i/1e7)},b=function(t){var e=6,s=0;while(--e>=0)s+=m[e],m[e]=l(s/t),s=s%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var s=String(m[t]);e=""===e?s:e+o.call("0",7-s.length)+s}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(e=d(c*f(2,69,1))-69,s=e<0?c*f(2,-e,1):c/f(2,e,1),s*=4503599627370496,e=52-e,e>0){v(0,s),i=u;while(i>=7)v(1e7,0),i-=7;v(f(10,i,1),0),i=e-1;while(i>=23)b(1<<23),i-=23;b(1<<i),v(1,1),b(2),p=g()}else v(0,s),v(1<<-e,0),p=g()+o.call("0",u);return u>0?(r=p.length,p=h+(r<=u?"0."+o.call("0",u-r)+p:p.slice(0,r-u)+"."+p.slice(r-u))):p=h+p,p}})},bb02:function(t,e,s){"use strict";s("67cf")},bb46:function(t,e,s){"use strict";s("35d9")},c622:function(t,e,s){},d02e:function(t,e,s){"use strict";s("c622")},d688:function(t,e,s){"use strict";s("d9de")},d9de:function(t,e,s){},dbb4:function(t,e,s){var i=s("23e7"),n=s("83ab"),a=s("56ef"),o=s("fc6a"),r=s("06cf"),c=s("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,s,i=o(t),n=r.f,l=a(i),f={},d=0;while(l.length>d)s=n(i,e=l[d++]),void 0!==s&&c(f,e,s);return f}})},dd24:function(t,e,s){},e439:function(t,e,s){var i=s("23e7"),n=s("d039"),a=s("fc6a"),o=s("06cf").f,r=s("83ab"),c=n((function(){o(1)})),l=!r||c;i({target:"Object",stat:!0,forced:l,sham:!r},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},f3c8:function(t,e,s){"use strict";s("3177")},fbb4:function(t,e,s){}}]);
//# sourceMappingURL=chunk-63ec4210.952e26c0.js.map