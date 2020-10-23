<template>
  <div class="edit">
    <el-form :model="product" label-width="100px" label-position="left">
      <el-form-item label="灯具类型 :">
        <el-select v-model="product.type" placeholder="请选择灯具类型">
          <el-option label="华为NB灯控器-1" value="1"></el-option>
          <el-option label="方大NB灯控器" value="2"></el-option>
          <el-option label="顺舟zigbee灯控器" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="灯具名称">
        <div>{{ product.name }}</div>
      </el-form-item>
      <el-form-item label="在线状态:">
        <el-switch
          v-model="product.online"
          active-text="在线"
          inactive-text="下线"
        ></el-switch>
      </el-form-item>
      <el-form-item label="开关状态 :">
        <el-switch
          v-model="product.status"
          active-text="ON"
          inactive-text="OFF"
        ></el-switch>
      </el-form-item>
      <el-form-item label="亮度:">
        <div>{{ product.brightness }}</div>
      </el-form-item>
      <el-form-item label="电压 (V)">
        <div>{{ product.voltage }}</div>
      </el-form-item>
      <el-form-item label="电流 (A) ">
        <div>{{ product.electric }}</div>
      </el-form-item>
      <el-form-item label="运行时间 (h)">
        <div>{{ product.workTime }}</div>
      </el-form-item>
      <el-form-item label="频率(Hz)">
        <div>{{ product.hz }}</div>
      </el-form-item>
      <el-form-item label="有功功率 (W)">
        <div>{{ product.activePower }}</div>
      </el-form-item>
      <el-form-item label="功率因数 ">
        <div>{{ product.powerFactor }}</div>
      </el-form-item>
      <el-form-item label="灯控器地址：">
        <div>{{ product.address }}</div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "edit",
  data() {
    return {
      product: {},
    };
  },
  computed: {
    ...mapState(["productList"]),
  },
  methods: {
    // ...mapMutations(['changeProduct'])
    init() {
      let products = this.productList.filter((item) => {
        return item.id == this.$route.params.id;
      });
      let {
        id,
        type,
        name,
        address,
        online,
        status,
        brightness,
        voltage,
        electric,
        activePower,
        powerFactor,
        workTime,
        hz,
      } = products[0];
      this.product = {
        id,
        type,
        name,
        address,
        online,
        status,
        brightness,
        voltage,
        electric,
        activePower,
        powerFactor,
        workTime,
        hz,
      };
    },
    changeSuccess() {
      this.$message("修改成功");
    },
    submit() {
      let { id, type, online, status } = this.product;
      this.$store.commit("changeProduct", { id, type, online, status });
      this.$message("修改成功！");
    },
    back() {
      this.$router.back();
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
.edit {
  width: 600px;
  margin: 0 auto;
  font-weight: 500;
}
el-form-item {
  margin-bottom: 10px;
}
.el-form-item:hover {
  box-shadow: 0 2px 12px 0 rgba(56, 52, 52, 0.1);
}
</style>