import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("darkMode"));
    return stored ? stored : false;
  });
  useEffect(() => {
    localStorage.setItem(darkMode, JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="flex p-4 bg-white/10 border-2 border-white/20 shadow-lg rounded-xl">
        <div className="flex justify-between items-center w-64">
          <h1 className="text-white font-semibold text-lg">
            Background changer
          </h1>
          <div
            onClick={() => setDarkMode((prev) => !prev)}
            className="w-14 h-8 flex items-center bg-white/10 border-2 border-white/20 p-1 rounded-full "
          >
            <button
              className={`w-6 h-6 flex items-center bg-blue-300 p-1 rounded-full transition-all duration-500 transform ${darkMode ? "translate-x-5 rotate-90 bg-yellow-300" : "translate-x-0 rotate-0"}`}
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
