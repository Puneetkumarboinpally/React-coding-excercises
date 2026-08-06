import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByInput,
  incrementByPayload,
  reset,
} from "./features/CounterSlice";
import type { RootState } from "./app/Store";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState("");
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="border border-white p-16 text-center">
        <p className="text-white text-4xl mb-8 font-bold">
          Counter app with redux
        </p>
        <h1 className="text-6xl mb-6 font-bold text-white rounded border p-4">
          {count}
        </h1>
        <div>
          <button onClick={() => dispatch(decrement())} className="button">
            Decrement
          </button>
          <button onClick={() => dispatch(reset())} className="button">
            Reset
          </button>
          <button onClick={() => dispatch(increment())} className="button">
            Increment
          </button>
          <br />
          <button
            onClick={() => dispatch(incrementByPayload(10))}
            className="button"
          >
            increment by Payload action
          </button>
          <div className="flex justify-center items-center">
            <input
              type="number"
              value={num}
              onChange={(e): void => {
                setNum(e.target.value);
              }}
              className="inline-block border border-white p-2 m-2 text-white text-3xl text-center"
            />
            <button
              onClick={() => {
                dispatch(incrementByInput(Number(num)));
                setNum("");
              }}
              className="button"
            >
              increase by input
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
