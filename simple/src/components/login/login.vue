<template>
  <el-row type="flex" justify="space-around">
    <el-col span="6">
      <el-form :model="loginForm" :rules="longinRule" ref="longinRule" label-width="100px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import router from "../../router/index.js";
export default {
  name: "Login",
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
  },
  methods: {
    submit(ruleForm2) {
      this.$refs.longinRule.validate(valid => {
        if (valid) {
          alert("登录成功");
          router.push({ path: "/main" });
          //   console.log(Config,'configFile')
        } else {
          alert("登陆失败！");
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style>
/* .container {
  type: "flex";
} */
</style>
