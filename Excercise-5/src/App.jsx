import React, { useState } from "react";

const App = () => {
  const themes = {
    ocean: {
      bg: "bg-[#0B1320]",
      card: "bg-[#111C2E]",
      text: "text-[#CDE7FF]",
    },
    aqua: {
      bg: "bg-[#E6FFFB]",
      card: "bg-[#B2F5EA]",
      text: "text-[#134E4A]",
    },
  };

  const [theme, setTheme] = useState("ocean");
  const [text, setText] = useState("");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "ocean" ? "aqua" : "ocean"));
  };

  const inputCount = (e) => {
    setText(e.target.value);
  };

  const reset = () => {
    setText("");
  };

  return (
    <div
      className={`h-screen flex justify-center items-center transition-all duration-300 ${themes[theme].bg}`}
    >
      <div
        className={`text-center p-8 rounded-lg transition-all duration-300 ${themes[theme].card} ${themes[theme].text}`}
      >
        <h1 className="text-2xl font-bold">
          Character Count using useStates
          <span
            onClick={toggleTheme}
            className=" mx-2 rounded-md border cursor-pointer"
          >
            ☀️
          </span>
        </h1>
        <input
          value={text}
          onChange={inputCount}
          className="p-2 w-full my-6 border-2 rounded"
          type="text"
          placeholder="Enter you characters here..."
        />
        <p className="text-xl font-bold mb-4">Character count: {text.length}</p>
        <button
          onClick={reset}
          className="border py-1 px-2 rounded transition-all 
        duration:300 hover:translate-y-[-2px]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
