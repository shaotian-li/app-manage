<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
@import './style/common.less';
#app {
  height: 100%;
  width: 100%;
}
</style>
