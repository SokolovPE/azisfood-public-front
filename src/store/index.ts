import Vue from 'vue';
import Vuex from 'vuex';

import ui from '@/store/modules/UI.module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui,
  },
});
