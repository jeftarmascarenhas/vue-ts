import { ITodoItem } from '@/interfaces/i-todo-item';
export const addTask = (task: ITodoItem) => ({ type: 'addTask', task });