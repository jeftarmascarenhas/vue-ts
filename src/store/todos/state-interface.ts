export interface ITodoItem {
  id: number;
  text: string;
  done: boolean;
}
export interface ITodoItemState {
  todosList: ITodoItem[]
}