<template>
  <div class="cart-bottom">
      <div class="check-div">
          <check-button  :is-checked = 'isSelectAll'
           class="check-button"
           @click.native="checkClick"></check-button>
          <span class="check-span">全选</span>
      </div>   
      <div class="price">
          总计:￥{{totalPrice}}
      </div>
      <div class="calculate" @click="calcClick">
          去结算:{{checkLength}}
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'

import {mapGetters} from 'vuex'
export default {
  name: 'CartBottomBar',
  components: {
      CheckButton
      },
  computed:{
    ...mapGetters(['cartList']),
      totalPrice(){
          return this.cartList.filter(item => {
              return item.checked
          }).reduce((preValue,item) =>{
            return preValue + item.price * item.count
          },0).toFixed(2)
      },
    //  totalPrice() {
    //     return this.cartList.filter(item => {
    //       return item.checked
    //     }).reduce((preValue, item) => {
    //       return preValue + item.count * item.newPrice
    //     }, 0).toFixed(2)
    //   },
      checkLength(){
          return this.cartList.filter(item => item.checked).length
          
      },
      isSelectAll(){
        if (this.cartList.length ===0) return false

        for (let item of this.cartList) {
         if (!item.checked) {
           return false
         }
          
        }
        return true
      }
  },
  methods: {
    checkClick(){
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      }else{
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if (!this.isSelectAll) {
        this.$toast.show('请选择要购买的商品','500')
      }
    }
  },
}
</script>

<style scoped>
.cart-bottom{
    position:absolute;
    width:100%;
    bottom: 49px;
    height: 40px;
    /* background: red; */
    background: #eee;
    display: flex;
   
}   
.check-div{
    display: flex;
    align-items: center;
    height: 40px;
    margin-left: 10px;
    width: 80px;
}
.check-button{
   height: 20px;
   width: 20px;
   margin-right: 5px;
   
  
}
.check-span{
    /* background: royalblue; */
    font-size: 20px;  
}
.price{
    margin-left: 20px;
    line-height: 40px;
    flex: 1;
    
}
.calculate{
    line-height: 40px;
    width: 80px;
    background: red;
    color: #fff;
    text-align: center;
}


</style>
