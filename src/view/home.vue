<template>
  <div>
      <h1>产品列表</h1>
      <ul  class="list">
          <li v-for="(item,index) in productList" :key="index">
           <product-item :productItem="item"></product-item>
          </li>
      </ul>
     
  </div>
</template>

<script>
import productItem from "../components/ProductItem"
import { mapState,mapMutations } from 'vuex'
export default {
name:"home",
components:{
 productItem
},
data(){
    return {
  
    }
},
computed:{
     ...mapState(['productList'])
     
},

methods:{
    ...mapMutations(['creatProduct'])
   
},
created(){
  this.creatProduct()
}
}
</script>

<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
.list li{
    list-style: none;
}

</style>