<template>
  <div id="category">
      <nav-bar class="cate-nav">
        <div slot="center">商品分类</div>
      </nav-bar>
      <div class="content-nav">
        <scroll class="content-left" ref="scroll">
          <tab-menu :categories = 'categories'
          @selectItem="selectItem"></tab-menu>
        </scroll>   
        <scroll class="content-right" ref="scroll"> 
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>   
          <!-- <tab-menuright :subcategories="showSubcategory"></tab-menuright> -->
        </scroll>
      </div> 
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from 'components/common/scroll/Scroll'

import TabMenu from './childComps/TabMenu.vue'
// import TabMenuright from './childComps/TabMenuright.vue'
import  TabContentCategory from './childComps/TabContentCategory'

import {getCategory,getSubcategory} from 'network/category'




export default {
  name: "Category",
  components: { 
    NavBar,
    TabMenu,
    // TabMenuright,
    Scroll,
    TabContentCategory,
   
  },
   data() {
		  return {
		    categories: [],
        categoryData: {},
        currentIndex: -1
      }
    },
    created() {
		  // 1.请求分类数据
      this._getCategory()
    },
    computed: {
		  showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
    
    },
    methods: {
		  _getCategory() {
		    getCategory().then(res => {
		      // 1.获取分类数据
		      this.categories = res.data.category.list
          // 2.初始化每个类别的子数据
          for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
            
            }
          }
          // 3.请求第一个分类的数据
          this._getSubcategories(0)
        })
      },
      _getSubcategories(index) {
        this.currentIndex = index;
		    const mailKey = this.categories[index].maitKey;
        getSubcategory(mailKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
        
        })
      },
     
      selectItem(index) {
        this._getSubcategories(index)
      }
    }



  

  

}
</script>

<style scoped>
  .cate-nav{
    background:var(--color-tint);
     color: seashell;
  }
  .content-nav{
    display: flex;
  }
  .content-left{
     overflow: hidden;

      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 0;
      right: 0;

      width: 30%;
      
  }
  .content-right{
    overflow: hidden;

      position: absolute;
      top: 44px;
      bottom: 49px;
      left: 30%;
      right: 0;
      
      flex: 1;
      
  }

</style>