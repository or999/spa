<template>
  <div class="detail">
    <h3>{{ type }}</h3>
    <div class="product">名称 :{{ product.name }}</div>
    <div class="product">
      在线状态 :
      <el-switch v-model="product.online" disabled></el-switch>
    </div>
    <div class="product">
      开关状态 : <el-switch v-model="product.status" disabled> </el-switch>
    </div>

    <div class="product">
      亮度 :
      <el-progress
        :percentage="product.brightness"
        :stroke-width="10"
      ></el-progress>
    </div>
    <div class="attr product">
      <div class="text">
        {{ product.voltage }}
        <div>电压 (V)</div>
      </div>
      <div class="text">
        {{ product.electric }}
        <div>电流(A)</div>
      </div>
      <div class="text">
        {{ product.powerFactor }}
        <div>功率因子</div>
      </div>
      <div class="text">
        {{ product.activePower }}
        <div>有功功率 (W)</div>
      </div>
      <div class="text">
        {{ product.hz }}
        <div>赫兹(Hz)</div>
      </div>
      <div class="text">
        {{ product.workTime }}
        <div>工作时间(h)</div>
      </div>
    </div>
    <div class="product address">
      灯控器地址：
      {{ product.address }}
    </div>
    <el-button @click="back" type="primary" size="medium">返回</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "detail",
  data() {
    return {
      product: {},
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },

  computed: {
    ...mapState(["productList"]),
    type() {
      let str;
      switch (this.product.type) {
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
  created() {
    let products = this.productList.filter((item) => {
      return item.id == this.$route.params.id;
    });
    this.product = products[0];
  },
};
</script>

<style scoped>
.detail {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.text {
  padding: 10px;
  margin: 20px;
  color: #303133;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.text:hover {
  box-shadow: 0 2px 12px 0 rgba(99, 89, 89, 0.1);
}
.text > div {
  margin: 20px;
  color: #909399;
  font-size: 14px;
  font-weight: 400;
}
.attr {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.el-progress {
  width: 350px;
  float: right;
}
.product {
  margin: 20px;
}
.address {
  color: #909399;
  font-size: 15px;
}
.el-button {
  width: 100px;
  margin: 50px auto;
}
</style>