<template>
  <div class="main">
    <div class="main_header">
      <Header />
    </div>
    <div class="side">
      <div class="side_left">
        <side-bar />
      </div>
      <div class="side_right">
        <Main />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@com/Header.vue'; // header
import SideBar from '@com/SideBar.vue'; // 侧边栏
import Main from '@com/Main.vue'; // 主题内容

export default {
  data() {
    return {
      name: '222',
    };
  },
  components: {
    Header,
    SideBar,
    Main,
  },
  created() {
    console.log('进来');
  },

  methods: {},
};
</script>

<style lang="less">
.main {
  min-width: 1380px;
  height: 100%;
  overflow: auto;
}
.main_header {
  width: 100%;
  height: 50px;
  background-color: #4760f3;
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
  background-color: #4760f3;
}
</style>
