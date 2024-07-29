import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleDone: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleDone,
  onDeleteTodo,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
