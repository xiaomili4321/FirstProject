<template>
  <div>
    <el-table
      :data="tableData"
      width="100%"
      :stripe="true"
      :border="true"
      :row-class-name="tableRowClassName"
      height="280px"
      ref="singleTable"
      highlight-current-row
      @current-change="handleCurrentChange"
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column sortable prop="date" label="日期" width="180px" :fixed="true"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="地址" prop="address">
          <el-table-column label="省份" prop="province"></el-table-column>
          <el-table-column label="市区" prop="city"></el-table-column>
          <el-table-column label="地址" prop="address" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="邮编" sortable prop="email"></el-table-column>
        </el-table-column>
      </el-table-column>
      <!-- <el-table-column prop="name" label="姓名" width="120px"></el-table-column>
      <el-table-column prop="address" label="地址" width="120px"></el-table-column>
      <el-table-column prop="date" label="日期" width="120px" :fixed="true"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120px"></el-table-column>
      <el-table-column prop="address" label="地址" width="300"></el-table-column>-->
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">           
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Table",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "123456@qq.com",
          city: "咸阳",
          province: "山西",
          tag: "家"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "123456@qq.com",
          city: "咸阳",
          province: "山西",
          tag: "家"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "123456@qq.com",
          city: "咸阳",
          province: "山西",
          tag: "家"
        },
         {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "123456@qq.com",
          city: "咸阳",
          province: "山西",
          tag: "公司"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "123456@qq.com",
          city: "咸阳",
          province: "山西",
          tag: "公司"
        }
      ],
      currentRow: null
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      console.log(val);
      this.currentRow = val;
    },
    filterTag(value, row) {
      console.log(value, row.tag);
      return row.tag === value;
    }
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
