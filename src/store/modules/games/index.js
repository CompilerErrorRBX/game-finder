import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const user = {
  namespaced: true,
  getters,
  state,
  mutations,
  actions,
};

export default user;
