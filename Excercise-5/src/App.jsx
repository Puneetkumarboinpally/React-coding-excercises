import React from "react";

const App = () => {
  const themes = {
    dark: {
      bg: "bg-[#0F172A]",
      card: "bg-[#1E293B]",
      text: "text-[#E2E8F0]",
    },
    light: {
      bg: "bg-[#F8FAFC]",
      card: "bg-[#E2E8F0]",
      text: "text-[#0F172A]",
    },
  };
  
  return (
    <div className="h-screen flex justify-center items-center transition-all duration:300">
      <div className="bg-[#0F172A] text-[#38BDF8] text-center p-6 rounded-lg ">
        <h1 className="text-2xl font-bold">
          Character Count using useStates
          <span className=" mx-2 rounded-md border cursor-pointer">☀️</span>
        </h1>
        <input
          className="p-2 w-full my-6 border rounded"
          type="text"
          placeholder="Enter you characters here..."
        />
        <p className="text-xl font-bold mb-4">Character count:{}</p>
        <button
          className="border-1 py-1 px-2 rounded transition all 
        duration:300 hover:translate-y-[-2px]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
