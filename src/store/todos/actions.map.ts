import { ITodoItem } from './state-interface';
export const addTask = (task: ITodoItem) => ({ type: 'todos/addTask', task });
export const completeTask = (task: ITodoItem) => ({ type: 'todos/completeTask', task });