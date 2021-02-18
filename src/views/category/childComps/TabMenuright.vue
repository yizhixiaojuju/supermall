<template>
  <div class="item">
          <div>{{categoryData}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabMenuright',
  components: {},
  props: {
      subcategories: {
        type: Object, 
        default() {
          return []
        }
      }
    }
}
</script>

<style scoped>
.item{
   /* width: 100%; */
   background-color: red;
}
</style>
