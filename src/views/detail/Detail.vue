<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"/>
        <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll">
         
          <detail-swiper :top-images = 'topImages'></detail-swiper>
           <!-- <ul>
            <li v-for="(item,index) in $store.state.cartList" :key="index">
              {{item}}
            </li>
          </ul> -->
          <detail-base-info :goods = 'goods'/>
          <detail-shop-info :shop= "shop"/>
          <detail-goods-info :detail-info = 'detailInfo' @imageLoad = 'imageLoad'/>
          <detail-param-info ref="params" :param-info = 'paramInfo'/>
          <detail-comment-info ref="comment" :comment-info = 'commentInfo'/>
          <goods-list ref="recommend" :goods='recommends'/>

         
        </scroll>
        <detail-bottom-bar @addCart= 'addToCart'/>
        <back-top @click.native="backClick"  v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll.vue'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {itemListenerMixin,backTopMixin} from 'common/mixin';
import { debounce } from 'common/utils'
import { mapActions} from 'vuex'





export default { 
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    DetailBottomBar,
  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
      return {
        iid: null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemeTopY: null,
        currentIndex: 0,
      }
  },
  created() {
    //  this.iid = this.$route.params.iid,
      const iid = this.$route.query.iid
        this.iid = iid

      //请求详情数据

     getDetail(this.iid).then(res => {

        //获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages;

        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
         
         //店铺你信息
         this.shop = new Shop(data.shopInfo);

         //保存商品的数据
         this.detailInfo = data.detailInfo;

         //获取参数
         this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        
         //评论信息
         if (data.rate.cRate !== 0) {
           this.commentInfo = data.rate.list[0]
         } 
    })
      //请求推荐数据
      
    getRecommend().then(res =>{
       this.recommends = res.data.list
    })

    //给getThemeTopY赋值
    this.getThemeTopY = debounce(() =>{

       this.themeTopYs = []
       this.themeTopYs.push(0);
       this.themeTopYs.push(this.$refs.params.$el.offsetTop); 
       this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
       this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
       this.themeTopYs.push(Number.MAX_VALUE)

       console.log(this.themeTopYs);
       
    },200)            
  },
  mounted() {

     
      
  },

  updated() {
    
  },
  destroyed() {
    this.$bus.$off('itemImageLoad', this.itemImgListener) 
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      // this.$refs.scroll.refresh();
      this.getThemeTopY();
    },

    titleClick(index){
      console.log(this.themeTopYs[index]);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    contentScroll(position){
        
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000
        // 2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop

        const positoinY =  -position.y 
        

        let length = this.themeTopYs.length  
        for (let i = 0; i < length-1;i++) {
          if(this.currentIndex !== i && (positoinY >= this.themeTopYs[i] 
          && positoinY < this.themeTopYs[i+1])) {
            this.currentIndex = i;
            console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }    
        }
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      
      // 2.将商品添加到购物车里
      // this.$store.commit('addCart',product)
        this.addCart(product).then( res =>{

          this.$toast.show(res,2000)
          console.log(this.$toast);  
        })  
    }


    
  },
 
 
  
  
}
</script>

<style scoped>
 #detail {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #fff;
  }

  .detail-nav{
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .content {
    position: absolute;
    top: 44px;  
    bottom: 60px;
    overflow: hidden;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }

 
</style>
