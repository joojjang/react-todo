import React, { useState } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      setError("값을 입력해주세요.");
      return;
    }
    if (newTodo.trim().length < 6) {
      setError("6글자 이상 입력해주세요.");
      return;
    }

    onAddTodo(newTodo);
    setNewTodo("");
    setError("");
  };

  return (
    <div className="mb-4">
      <div className="flex">
        <input
          data-testid="new-todo-input"
          type="text"
          className={`border p-2 flex-grow mr-2 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
            if (error) setError("");
          }}
        />
        <button className="bg-blue-500 text-white p-2" onClick={handleAddTodo}>
          추가
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TodoInput;
