import { ITodoItem } from './state-interface';

export default {
  completeTask: ({ commit }: { commit: Function }, { task }: { task: ITodoItem }) => {
    commit('completeTask', task);
  },
  addTask: ({ commit }: { commit: Function }, { task }: { task: ITodoItem }) => {
    commit('addTask', task);
  }
}