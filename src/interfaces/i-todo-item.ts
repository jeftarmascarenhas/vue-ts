export interface ITodoItem {
  text: string;
  done: boolean;
}
export interface ITodoItemState {
  todos: ITodoItem[]
}