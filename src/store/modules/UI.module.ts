import { Module } from 'vuex';

const uiModule: Module<any, any> = {
  state: {
    isMobile: false,
  },

  getters: {
    isMobile: (state) => state.isMobile || false,
  },

  mutations: {
    SET_DEVICE_TYPE: (state, payload) => {
      state.isMobile = payload;
    },
  },
  actions: {
    setDeviceType: ({ commit }, payload) => {
      commit('SET_DEVICE_TYPE', payload);
    },
  },

  namespaced: true,
};

export default uiModule;
