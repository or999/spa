<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ type }}</span>
      <el-button style="float: right; margin-left: 10px" type="text">
        <router-link
          class="product-d"
          :to="{ name: 'detail', params: { id: productItem.id } }"
          >详情</router-link
        >
      </el-button>
      <el-button
        style="float: right"
        type="text"
        @click="changeSomething(productItem.id)"
        >编辑</el-button
      >
    </div>

    <div class="text">名称 : {{ productItem.name }}</div>
    <div class="text">
      在线状态 :
      <el-switch v-model="productItem.online" disabled></el-switch>
    </div>
    <div class="text">
      开关状态 :
      <el-switch v-model="productItem.status" disabled> </el-switch>
    </div>
    <div class="text">
      灯控器地址 ：
      {{ productItem.address }}
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeSomething(id) {
      this.$router.push("edit/" + id);
    },
  },
  computed: {
    type() {
      let str;
      switch (this.productItem.type) {
        case "1":
          str = "华为NB灯控器-1";
          break;
        case "2":
          str = "方大NB灯控器";
          break;
        default:
          str = "顺舟zigbee灯控器";
          break;
      }
      return str;
    },
  },
};
</script>

<style scoped>
.box-card {
  width: 480px;
  margin: 30px;
  font-weight: 600;
}

.text {
  font-size: 14px;
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix > span {
  margin-top: 10px;
  float: left;
  font-weight: 800;
}
.clearfix:after {
  clear: both;
}

.product-d {
  text-decoration: none;
  color: #66b1ff;
}
</style>