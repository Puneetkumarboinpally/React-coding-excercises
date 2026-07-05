import { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white h-screen flex justify-center items-center"
          : "bg-gray-200 text-black h-screen flex justify-center items-center"
      }
    >
      <div className="bg-white/10 border border-white/20 p-8 rounded-xl text-center shadow-md">
        <h1 className="text-lg font-bold text-white capitalize mb-2">
          Dark mode with local Storage
        </h1>
        <button
          onClick={() => setDarkMode(false)}
          className="px-4 py-2 bg-white mx-4 rounded font-semibold cursor-pointer shadow-lg transition all duration-300 hover:translate-y-[-2px]"
        >
          Light Mode
        </button>
        <button
          onClick={() => setDarkMode(true)}
          className="px-4 py-2 bg-white rounded font-semibold cursor-pointer shadow-lg transition all duration-300 hover:translate-y-[-2px]"
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
};

export default App;
