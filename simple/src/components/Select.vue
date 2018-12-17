<template>
  <div>
    <el-select v-model="value5" multiple  placeholder="请选择" @change="handleSelect" :clearable="true">
      <el-option
        v-for="item in options"
        :label="item.label"
        :key="item.vaule"
        :disabled="item.disabled"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: "Select",
  data() {
    return {
      options: [
        {
          value: "选项一",
          label: "apple",
          disabled: true
        },
        {
          value: "选项二",
          label: "bread"
        },
        {
          value: "选项三",
          label: "banana"
        }
      ],
       value5: [],
    };
  },
  methods: {
    handleSelect: function(value) {
      console.log(value);
    }
  }
};
</script>
