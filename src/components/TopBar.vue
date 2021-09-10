<template>
  <div class="top_bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
};
</script>

<style lang="less" scoped>
.top_bar {
  .el-menu-demo {
    background-color: #4760f3;
    height: 50px;
    border-bottom: none;
    .el-menu-item {
      height: 50px;
      line-height: 46px;
      color: #fff;
      padding: 0;
      font-weight: 500;
      margin: 0 15px;
    }
    .el-menu-item:hover {
      background-color: #4760f3;
    }
    .el-menu-item.is-active {
      background-color: #4760f3;
    }
    .el-menu-item.is-active {
      border-bottom: 1px solid #fff;
    }
  }
}
</style>
