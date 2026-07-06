import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div
      className={`flex justify-center items-center h-screen transition-all duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
    >
      <div
        className={`flex p-4 ${darkMode ? "bg-white/10 border-2 border-white/20 text-white " : "bg-black/30 border-2 border-black/20"} shadow-lg rounded-xl`}
      >
        <div className="flex justify-between items-center w-64">
          <h1 className="font-semibold text-lg">Background changer</h1>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-12 h-8 text-black flex items-center bg-white/10 border-2 border-white/20 p-1 rounded-full cursor-pointer "
          >
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out ${
                darkMode
                  ? "translate-x-4 rotate-90 bg-yellow-300"
                  : "translate-x-0 rotate-0 bg-blue-900"
              }`}
            >
              {darkMode ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} className="text-white" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
