import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseBtn = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseBtn = () => {
    setCount((prev) => Math.max(prev - 1, 0));
  };
  const resetBtn = () => {
    setCount(0);
  };

  return (
    <div className="h-screen bg-blue-950 flex flex-col justify-center items-center">
      <div className="p-6 bg-gray-200 text-center rounded-xl">
        <h1 className="text-3xl font-bold">Basic Counter App</h1>
        <h1
          className="text-5xl font-bold my-4 p-4 
                    bg-blue-950 text-center text-white"
        >
          {count}
        </h1>
        <button
          onClick={increaseBtn}
          className="py-2 px-4 bg-blue-950 text-white rounded font-bold mx-2"
        >
          +
        </button>
        <button
          onClick={decreaseBtn}
          className="py-2 px-4 bg-blue-950 text-white rounded font-bold mx-4"
        >
          -
        </button>
        <button
          onClick={resetBtn}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default App;
