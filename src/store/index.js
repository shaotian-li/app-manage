'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建实例

const store = new Vuex.Store({
  state: {
    count: 1,
  },
});

export default store;
