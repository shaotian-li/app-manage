<template>
  <div class="main">
    <div class="main_header"></div>
    <div class="side">
      <div class="side_left"></div>
      <div class="side_right">
        <div class="side_header"></div>
        <div class="container">
          <transition>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '222',
    };
  },
  created() {
    console.log('进来');
  },

  methods: {},
};
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
}
.main_header {
  width: 100%;
  height: 50px;
  background-color: yellow;
}
.side {
  width: 100%;
  height: calc(100% -50px);
  background-color: tomato;
  display: flex;
}
.side_left {
  width: 200px;
  height: 100%;
  background-color: yellowgreen;
}
.side_right {
  flex: 1;
  height: 100%;
  background-color: blue;
}
.side_header {
  width: 100%;
  height: 50px;
  background-color: red;
}
</style>
