<template>
  <div>
    <el-checkbox-button v-model="checked1" border  text-color='red'>上海</el-checkbox-button>
    <el-checkbox-button v-model="checked2" border>北京</el-checkbox-button>
    <el-checkbox-button border>天津</el-checkbox-button>
    <el-checkbox-button border>广州</el-checkbox-button>
    <br>
    <el-checkbox-group v-model="checkedCities1" :min="1" :max="4"	>
      <el-checkbox
        @change.native="handleChange"
        border
        v-for="city in cities"
        :label="city"
        :key="city"
      >{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Checkbox",
  data() {
    return {
      checkedCities1: ["上海", "北京"],
      cities: cityOptions,
      checked1: true,
      checked2: false
    };
  },
  methods: {
    handleChange: (e) => {
        console.log(e)
       console.log(e.target.value)
    }
  }
};
</script>

