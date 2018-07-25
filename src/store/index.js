import Vue from 'vue';
import Vuex from 'vuex';

import modules from '@/store/modules'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  strict: true,
});

export default store;
