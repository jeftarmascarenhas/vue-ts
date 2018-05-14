import { ITodoItem, ITodoItemState } from '@/interfaces/i-todo-item';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
  state,
  getters,
  actions,
  mutations,
  namespeced: true
}