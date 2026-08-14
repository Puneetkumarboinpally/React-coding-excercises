import { useEffect, useState } from "react";
import { useThemeStore } from "./store/themeStore";
import { Moon, Pencil, Sun, Trash2 } from "lucide-react";
import { useTodoStore } from "./store/todoStore";

const App = () => {
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editInput, setEditInput] = useState("");

  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggleTheme);

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const handleAddTodo = () => {
    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    addTodo(trimmedInput);
    setInput("");
  };

  const handleEdit = (id: string, title: string) => {
    setEditingId(id);
    setEditInput(title);
  };

  const handleUpdate = (id: string) => {
    const trimmedInput = editInput.trim();

    if (!trimmedInput) return;

    updateTodo(id, trimmedInput);
    setEditingId(null);
    setEditInput("");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="h-full flex flex-col gap-2 justify-center items-center p-4">
      {/* card container */}
      <div className="flex flex-col gap-4 bg-green-200 rounded-lg p-4 w-full max-w-md">
        {/* heading container */}
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-2xl font-bold ">Crud To-do App with zustand</h1>
          <button
            aria-label={
              theme === "dark" ? "switch to light mode" : "switch to dark mode"
            }
            onClick={toggle}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
        {/* input container */}
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
            placeholder="enter the todos here..."
            className="border w-full p-2 rounded font-semibold outline-none focus:ring-2"
          />
          <button
            aria-label="Add task button"
            onClick={() => handleAddTodo()}
            className="btn bg-primary"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-green-200 rounded-lg p-4 w-full max-w-md">
        {todos.map((todo) => (
          <div
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`${todo.completed ? "bg-gray-300" : "bg-primary"} flex justify-between items-center
               border p-4 rounded shadow-md cursor-pointer transition-all duration-300 hover:translate-y-[-3px]`}
          >
            <div className="flex flex-col gap-2">
              <h2
                className={`text-2xl font-bold uppercase  ${
                  todo.completed ? "line-through opacity-50" : ""
                }`}
              >
                {todo.title}
              </h2>
              <div className="flex items-center gap-2">
                <label
                  htmlFor={`completed-${todo.id}`}
                  className="font-semibold text-base-content"
                >
                  Completed
                </label>
                <input
                  type="checkbox"
                  id={`completed-${todo.id}`}
                  checked={todo.completed}
                  onClick={(e) => e.stopPropagation()}
                  onChange={() => toggleTodo(todo.id)}
                />
              </div>
            </div>
            {/* card buttons */}
            <div className="flex gap-4">
              <button
                aria-label={`remove ${todo.title} button`}
                onClick={(e) => {
                  e.stopPropagation();
                  removeTodo(todo.id);
                }}
                className="border p-2 rounded cursor-pointer"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
        {todos.length === 0 && (
          <p className="text-center opacity-60 py-4">
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
