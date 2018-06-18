import { ITodoItemState } from './state-interface';

export default {
  getTodos: (state: ITodoItemState) => state.todosList
};