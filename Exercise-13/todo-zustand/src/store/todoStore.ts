import { create } from "zustand";

type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
};

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: state.todos, todo })),
}));
