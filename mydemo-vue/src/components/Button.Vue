<template>
  <div>
    <el-button type="primary" circle>主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">警告按钮</el-button>

    <el-button type="primary" icon="el-icon-edit" size='medium'></el-button>
    <el-button type="text" icon="el-icon-share" size='small'>文字按钮</el-button>
    <el-button type="primary" icon="el-icon-delete" size='mini'></el-button>
    <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
    <el-button-group>
        <el-button type="primary" disabled round>上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button type="primary" :loading="true" round>加载中</el-button>
    </el-button-group>
    </div>
</template>
<script>
export default {
  name: 'Button'
}
</script>
