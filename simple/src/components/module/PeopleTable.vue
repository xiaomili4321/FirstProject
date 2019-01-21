<template>
  <el-table style="width:100%" :data="this.$route.query.data" :border="true">
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Age" prop="age"></el-table-column>
    <el-table-column label="sex" prop="sex"></el-table-column>
    <el-table-column  align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">        
        <el-button
          size="mini"
          type="danger"
          @click="deletePerson(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
// import router from "../../router/index.js";
export default {
  name: "Table",
  props: [], // 接受父组件传过来的值
  data() {
    return {  
      serach:''  
    };
  },
  mounted: function() {
    console.log("mounted 钩子执行...");
    console.log(this.$route.query.data);
  },
  methods: {
    deletePerson: function(index) {
      // 删一个数组元素
      this.$route.query.data.splice(index, 1);
    }
  }
};
</script>
