<template>
  <div>
    <!-- <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
    <div class="demo-input-suffix">属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
    </div>
    <div class="demo-input-suffix">slot 方式：
      <el-input placeholder="请选择日期" v-model="input22">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-input type="textarea" v-model='input'  :disabled="true" ></el-input>-->
    <el-input placeholder="请输入内容" v-model="input01">
      <template slot="prepend">Http://</template>
    </el-input>
    <el-input placeholder="请输入内容" v-model="input02" size>
      <template slot="append">.com</template>
    </el-input>

    <el-input-number    
         v-model="number"
         :step="3"
         :min="1"
         :max="10"
         @change="handleClick"        
         :controls="false"></el-input-number>
         <Radio disabled="false"/>
  </div>
</template>
<script>
import Radio from './Radio'
export default {
  name: "Input",
  components:{
    Radio
  },
  data() {
    return {
      input1: "",
      input2: "",
      input21: "",
      input22: "",
      input23: "",
      input01: "",
      input02: "",
      number: 1
    };
  },
  methods: {
    handleClick: function(value) {
      console.log(value);
    }
  }
};
</script>
