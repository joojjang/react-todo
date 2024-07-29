import Todo from "./Todo";
import Weather from "./Weather";

export const TodoApp = () => {
  return (
    <main className="container mx-auto w-[32rem] p-4">
      <Weather />
      <Todo />
    </main>
  );
};
