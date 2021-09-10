<template>
  <div class="header">
    <div class="header_title">
      <span>征征酱</span>
    </div>
    <div class="header_container">
      <Top-bar />
      <div class="user">头像</div>
    </div>
  </div>
</template>

<script>
import TopBar from './TopBar.vue';

export default {
  data() {
    return {};
  },
  components: {
    TopBar,
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  .header_title {
    display: flex;
    width: 200px;
    height: 100%;
    align-items: center;
    justify-content: center;
    > span {
      color: #fff;
    }
  }
  .header_container {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .user {
    margin-right: 20px;
  }
}
</style>
