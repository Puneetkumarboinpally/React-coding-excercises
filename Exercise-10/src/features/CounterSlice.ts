import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByPayload: (state, action) => {
      state.value += action.payload;
    },
    incrementByInput: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const {
  increment,
  reset,
  decrement,
  incrementByPayload,
  incrementByInput,
} = CounterSlice.actions;
export default CounterSlice.reducer;
