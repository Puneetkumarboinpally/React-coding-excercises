import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/CounterSlice";
import type { RootState } from "./app/Store";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <div className="border p-8 text-center">
        <h1 className="text-4xl mb-6 font-bold text-white">{count}</h1>
        <div>
          <button onClick={() => dispatch(increment())} className="button">
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className="button">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
