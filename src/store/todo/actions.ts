import { ITodoItem } from '@/interfaces/i-todo-item';

export default {
  completeTask: ({ commit }: { commit: Function }, { task }: { task: ITodoItem }) => {
    commit('completeTask', task);
  },
  addTask: ({ commit }: { commit: Function }, { text }: { text: string }) => {
    commit('addTask', text);
  }
}