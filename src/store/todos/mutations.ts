import { ITodoItem, ITodoItemState } from './state-interface';

export default {
  completeTask: (state: ITodoItemState , task: ITodoItem) => {
    //@ts-ignore
    const stateIndex = state.todosList.findIndex(todo => todo.id === 0);
    if(stateIndex > -1) {
      state.todosList[stateIndex].done = !state.todosList[stateIndex].done;
    }
  },
  addTask: (state: ITodoItemState, task: ITodoItem) => {
    state.todosList.push(task);
  }
}