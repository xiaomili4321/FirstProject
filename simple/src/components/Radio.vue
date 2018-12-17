<template>
  <div>
    <el-radio v-model="radio" label="1" disabled="true" border>备选项</el-radio>
    <el-radio v-model="radio" label="2" @change.native="handleChange">备选项</el-radio>
    <!-- <br>
    <el-radio-group v-model="radio2">
      <el-radio :label="3" border>备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <br>

    <el-radio-group v-model="radio3">
      <el-radio-button :label="7">北京</el-radio-button>
      <el-radio-button :label="8">上海</el-radio-button>
      <el-radio-button :label="9">广州</el-radio-button>
      <el-radio-button :label="10">天津</el-radio-button>
    </el-radio-group>
    <br>
    <el-radio-group v-model="radio4" size="small">
      <el-radio-button label="北京">北京</el-radio-button>
      <el-radio-button label="上海">上海</el-radio-button>
      <el-radio-button label="广州">广州</el-radio-button>
      <el-radio-button label="天津">天津</el-radio-button>
    </el-radio-group>-->
  </div>
</template>
<script>
export default {
  name: "Radio",
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleChange: function() {
      console.log(1213);
    }
  }
  // return(){
  //     data : {

  //     }
  // },
  // methods:{
  //     handleChange: function () {

  //     }
  // }
  // }
};
</script>


