<template>
  <div class="page" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt=""> 
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  components: {},
  props:{
    isChecked:{
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped>
.page{  
    border-radius: 50%;
    border: 2px solid rgb(8, 7, 7);
}
.check{
  /* border-color: seagreen; */
  border-color: #fb7299;
  background-color:  #fb7299;
}
</style>
