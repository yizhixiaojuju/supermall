<template>
  <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 2px;
    bottom: 45px;
  }
  .back-top img{
    width: 40px;
    height: 40px;
  }

</style>