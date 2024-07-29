import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggleDone: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleDone,
  onDeleteTodo,
}) => {
  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.done}
        onChange={() => onToggleDone(todo.id)}
      />
      <span className={`flex-grow ${todo.done ? "line-through" : ""}`}>
        {todo.text}
      </span>
      <button className="text-red-500" onClick={() => onDeleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
