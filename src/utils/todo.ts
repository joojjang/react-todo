export interface TodoData {
  id: number;
  text: string;
  done: boolean;
  date: string;
  time: string;
}

export const filterTodos = (
  todos: TodoData[],
  selectedDate: string,
  filter: string
): TodoData[] => {
  return todos.filter((todo) => {
    if (todo.date !== selectedDate) return false;
    if (filter === "completed") return todo.done;
    if (filter === "incomplete") return !todo.done;
    return true;
  });
};
