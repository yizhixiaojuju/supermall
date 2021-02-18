<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll, { PullUpLoad } from 'better-scroll'

export default {
  name: 'Scroll',
  props:{
    probeType:{
      type: Number,
      default:0,
    },
    pullUpLoad:{
    type: Boolean,
    default:false
    },
  
  },
  
  components: {},
  data() {
    return {
        scroll: null
    }
  },
  mounted() {
    //1.创建bscroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        observeDOM:true,
        probeType: this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      //2.监听滚动的位置
     
        this.scroll.on('scroll',(position) =>{
        this.$emit('scroll',position)
        }) 
        // console.log("00000");
     
      
    // 3监听scroll滚动到底部
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp',() =>{
          console.log("上拉加载");
          this.$emit('pullingUp')
        })
      }
  },
  methods: {
    scrollTo(x, y, time=300){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    getScrollY(){
      return this.scroll.y ? this.scroll.y : 0     
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
		    this.scroll && this.scroll.finishPullUp()
    },
  },
}
</script>

<style scoped >
</style>
