import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types';
import todos from './todos/index';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    todos
  },
  strict: debug
}

export default new Vuex.Store<RootState>(store);