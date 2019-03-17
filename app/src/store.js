import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    times: 0,
  },
  mutations: {
    chTimes(state) {
      state.times += 1;
    },
  },
});
