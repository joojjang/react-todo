import React, { useState } from "react";
import DateSelector from "./DateSelector";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Filter from "./Filter";

import { filterTodos, TodoData } from "../utils/todo";
import { formatDate } from "../utils/date";
import "tailwindcss/tailwind.css";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    formatDate(new Date())
  );
  const [filter, setFilter] = useState<string>("all");

  const handleAddTodo = (text: string) => {
    const now = new Date();
    const newTodoItem: TodoData = {
      id: Date.now(),
      text,
      done: false,
      date: formatDate(now),
      time: now.toLocaleTimeString(),
    };
    setTodos([...todos, newTodoItem]);
  };

  const handleToggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = filterTodos(todos, selectedDate, filter);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <DateSelector
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
      />
      <Filter filter={filter} onChangeFilter={setFilter} />
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList
        todos={filteredTodos}
        onToggleDone={handleToggleDone}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Todo;
