<template>
  <div>
    <div class="side_header"></div>
    <div class="container">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.side_header {
  width: 100%;
  height: 50px;
  background-color: red;
}
</style>
