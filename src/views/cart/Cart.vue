<template>
  <div class="cart">
    <nav-bar class="nav-bar"> 
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    
     <scroll class="content" ref="scroll">
        <cart-list></cart-list>
     </scroll>

     <cart-bottom-bar/>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

import CartList from './childComps/CartList'

import { mapGetters } from 'vuex'




  

export default {
  name: "Cart",
  components: { 
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
   
    },
  computed:{
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      length:'cartLength'
    })
    },

  activated() {
      this.$refs.scroll.refresh() 
    },
    
  
}
</script>

<style scoped>
  .cart{
    height: 100vh;
    overflow: hidden;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: seashell;
  }
  .content{
     overflow: hidden;

      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;
  }

</style>