import Vue from 'vue';
import Vuex from 'vuex';
import cycles from './cycles';

Vue.use(Vuex);

export default new Vuex.Store({
   strict: true,
   modules: {
      cycles
   }
});
