import { ITodoItem, ITodoItemState } from '@/interfaces/i-todo-item';

export default {
  completeTask: (state: ITodoItemState , task: ITodoItem) => {
    task.done = !task.done;
  },
  addTask: (state: ITodoItemState, task: ITodoItem) => {
    state.todosList.push(task);
  }
}