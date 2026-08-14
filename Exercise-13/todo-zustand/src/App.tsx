import { useEffect, useState } from "react";
import { useThemeStore } from "./store/themeStore";
import { Moon, Sun } from "lucide-react";
import { useTodoStore } from "./store/todoStore";

const App = () => {
  const [text, setText] = useState("");

  const theme = useThemeStore((state) => state.theme);
  const toggle = useThemeStore((state) => state.toggleTheme);

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="h-screen flex justify-center items-center p-4">
      {/* card container */}
      <div className="flex flex-col gap-4 bg-green-200 rounded-lg p-4">
        {/* heading container */}
        <div className="flex justify-center items-center gap-2">
          <h1 className="text-2xl font-bold ">Crud Todo App with zustand</h1>
          <div onClick={toggle}>{theme === "dark" ? <Sun /> : <Moon />}</div>
        </div>
        {/* input container */}
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="enter the todos here..."
            className="border w-full p-2 rounded font-semibold outline-none focus:ring-2"
          />
          <button className="btn bg-primary">submit</button>
        </div>
      </div>
    </div>
  );
};

export default App;
