import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-black" : "bg-gray-200 text-black"
      } h-screen flex justify-center items-center`}
    >
      <div
        className={`${
          darkMode
            ? "bg-white/10 border border-white/20 shadow-md"
            : "bg-black/10 border border-black/20 shadow-md"
        } 
          p-8 rounded-xl text-center`}
      >
        <h1 className="text-lg font-bold text-blue-500 capitalize">
          Dark mode with local Storage
        </h1>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="py-2 px-5 bg-red-400 rounded-full font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default App;
