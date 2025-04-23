import { Todo } from "@/types/todo";

export const loadTodos = (): Todo[] => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
