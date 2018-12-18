<template>
  <el-form :model="loginForm" :rules="rules2" ref="longinRule" label-width="100px">
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="loginForm.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit()">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        userName: "",
        password: ""
      },
      longinRule: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>
