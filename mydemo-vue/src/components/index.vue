
<template>
  <div class="my">
    <el-container>
      <el-aside width="200px">
        <el-button>element-ui组件</el-button>
        <el-button type="primary" @click="hanshu2">路由跳转</el-button>
        <br>
        <el-button type="info" @click="hanshu0">vuex组件</el-button>
        <el-button type="warning" @click="hanshu1">api请求</el-button>
      </el-aside>
      <el-container>
        <el-header>
          <myHeader></myHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <myFooter></myFooter>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'My'
}
</script>
