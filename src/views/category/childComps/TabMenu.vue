<template>
    <div class="menu-list">
      <div class="menu-list-item"
      :class="{active: index === currentIndex}"
        v-for="(item,index) in categories"
        :key="index"
        @click="itemClick(index)">
        {{item.title}}
      </div>
    </div>
</template>

<script>



export default {
  name: 'TabMenu', 
  components: {
   
    },
  props:{
      categories:{
        type: Array,
        default(){
            return[]
        }
      }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    }

  },
}
</script>

<style scoped>
  .menu-list{
    height: 100%;
    width: 100%;
    background: #f6f6f6;
    box-sizing: border-box;

  }
  
  .menu-list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
 


</style>

