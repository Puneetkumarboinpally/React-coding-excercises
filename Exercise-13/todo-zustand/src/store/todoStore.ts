import { create } from "zustand";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [
    {
      id: crypto.randomUUID(),
      title: "html",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "css",
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Javascript",
      completed: false,
    },
  ],
  addTodo: (title) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: crypto.randomUUID(), title, completed: false },
      ],
    })),
  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  updateTodo: (id, title) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo,
      ),
    })),
}));
